package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
import thx.error.NullArgument;
using Arrays;

class QueryValuesCount extends QueryProperty<Array<{ label : String, value : Float }>, Array<{ label : String, value : Float }>>
{
	public var top : Bool;
	public var limit : Int;
	public var others : Bool;
	public var othersLabel : String;
	public var values : Array<String>;
	
	public dynamic function filter(value : Dynamic, count : Int)
	{
		return true;
	}
	
	override public dynamic function order(values : Array<{ label : String, value : Float }>)
	{
		if (top)
		{
			values.order(function(a, b) return Floats.compare(b.value, a.value));
		} else {
			values.order(function(a, b) return Floats.compare(a.value, b.value));
		}
		return values;
	}

	public function new(executor : IExecutor, path : String, event : String, property : String, ?values : Array<String>, top = true, limit = 10, others = true, othersLabel = "others")
	{
		super(executor, path, event, property);
		this.top = top;
		this.limit = limit;
		this.others = others;
		this.othersLabel = othersLabel;
		this.values = values;
	}
	
	override function load()
	{
		if (null == values || 0 == values.length)
		{
			var loader = new QueryPropertyValues(executor, path, event, property, top ? QueryLimit.Top(limit) : QueryLimit.Bottom(limit)),
				me = this;
			loader.onData.add(function(d) {
				me.values = d;
				loader.close();
				me.load();
			});
			loader.load();
		} else {
			super.load();
		}
	}
	
	/*
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
	*/
	override function executeLoad(success : Array<{ label : String, value : Float }> -> Void, error : String -> Void)
	{
		var count = 0,
			total = values.length,
			result = [],
			totalcount = 0,
			others = this.others,
			label = othersLabel,
			filter = this.filter;
		function _end()
		{
			if (others)
			{
				result.push( { label : label, value : (totalcount > 0 ? totalcount : 0.0) } );
			}
			success(result);
		}
		
		function _success(label : String, v : Int)
		{
			if (filter(label, v))
			{
				result.push( { label : label, value : 0.0 + v } );
				totalcount -= v;
			}
			if (++count == total)
				_end();
		}
		
		if (others)
		{
			total++;
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
		
		for (value in values)
		{
			executor.propertyValueCount(path, { property : event + "." + property, value : value }, callback(_success, value), error);
		}
	}
}