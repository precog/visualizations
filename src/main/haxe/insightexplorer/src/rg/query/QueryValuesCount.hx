package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
import thx.error.NullArgument;
using Arrays;

class QueryValuesCount extends QueryProperty<Dynamic<Array<Array<Float>>>, Array<{ label : String, value : Float }>>
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
	
	override function transform(v : Dynamic<Array<Array<Float>>>) : Array<{ label : String, value : Float }>
	{
		return Reflect.fields(v).map(function(label, i) { 
			var value = 0.0;
			var periods : Array<Array<Float>> = Reflect.field(v, label);
			if (null == periods)
					periods = [];
			for (item in periods)
				value += item[1];
			return {
				label : Strings.trim(label, '"'),
				value : value
			};
		} );
	}
	
	override function executeLoad(success : Dynamic<Array<Array<Float>>> -> Void, error : String -> Void)
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
				Reflect.setField(result, '"' + label + '"', [[0.0, totalcount]] );
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