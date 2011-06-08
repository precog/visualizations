package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
import thx.error.NullArgument;
using Arrays;

class QueryValuesCount extends QueryPropertyPeridocity<Dynamic<Dynamic<Dynamic<Int>>>, Array<{ label : String, value : Float }>>
{
	public var top : Bool;
	public var limit : Int;
	public var others : Bool;
	public var othersLabel : String;
	
	public dynamic function filter(value : Dynamic, count : Int)
	{
		return true;
	}

	public function new(executor : IExecutor, path : String, event : String, property : String, top = true, limit = 10, others = true, othersLabel = "others")
	{
		super(executor, path, event, property);
		this.top = top;
		this.limit = limit;
		this.others = others;
		this.othersLabel = othersLabel;
	}
	
	override function transform(v : Dynamic<Dynamic<Dynamic<Int>>>) : Array<{ label : String, value : Float }>
	{
		var labels = Reflect.fields(v);
		var result = [];
		for (label in labels)
		{
			var value = Reflect.field(Reflect.field(Reflect.field(v, label), "eternity"), "0");
			result.push( {
				label : Strings.trim(label, '"'),
				value : value
			} );
		}
		return result;
	}
	
	override function executeLoad(success : Dynamic<Dynamic<Dynamic<Int>>> -> Void, error : String -> Void)
	{
		var count = 0,
			total = 1,
			result = null,
			totalcount = 0,
			others = this.others,
			label = othersLabel,
			filter = this.filter;
		function _end()
		{
			if (others)
			{
				var v = { };
				Reflect.setField(v, "0", totalcount);
				Reflect.setField(result, label, { eternity : v } );
			}
			success(result);
		}
		
		function _success(v)
		{
			result = v;
			var labels = Reflect.fields(result);
			for (label in labels)
			{
				var value = Reflect.field(Reflect.field(Reflect.field(result, label), "eternity"), "0");
				if (filter(label, value))
					totalcount -= value;
				else
					Reflect.deleteField(result, label);
			}
			if (++count == total)
				_end();
		}
		
		if (others)
		{
			total = 2;
			function _successtotal(v)
			{
				totalcount += v;
				if (++count == total)
					_end();
			}
			executor.propertyCount(path, { property : event + "." + property }, _successtotal, error);
		}
		var p = [{
			property : event + "." + property,
			limit : limit,
			order : top ? "descending" : "ascending"
		}];
		
		time.autosetPeriodicity = false;
		time.periodicity = "eternity";
		executor.intersect(path, {
			start : time.start,
			end : time.end,
			periodicity : time.periodicity,
			properties : p
		}, _success, error);
	}
}