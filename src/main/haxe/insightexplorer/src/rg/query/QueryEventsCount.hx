package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
import thx.error.NullArgument;
using Arrays;

class QueryEventsCount extends QueryPath<Array<{ label : String, value : Float }>, Array<{ label : String, value : Float }>>
{
	public var events : Array<String>;
	
	public dynamic function filter(value : Dynamic, count : Int)
	{
		return true;
	}
	
	override public dynamic function order(values : Array<{ label : String, value : Float }>)
	{
		values.order(function(a, b) return Floats.compare(b.value, a.value));
		return values;
	}

	public function new(executor : IExecutor, path : String, ?events : Array<String>)
	{
		super(executor, path);
		this.events = events;
	}
	
	override function load()
	{
		if (null == events)
		{
			var loader = new QueryEventNames(executor, path),
				me = this;
			loader.onData.add(function(d : Array<String>) {
				if (null == d)
					d = [];
				me.events = d.map(function(d,i) return Strings.ltrim(d, "."));
				loader.close();
				me.load();
			});
			loader.load();
		} else {
			super.load();
		}
	}

	override function executeLoad(success : Array<{ label : String, value : Float }> -> Void, error : String -> Void)
	{
		var count = 0,
			total = events.length,
			result = [],
			totalcount = 0;

		function _success(pos : Int, p : String, v : Float)
		{
			result[pos] = {
				label : p,
				value : v
			};
			if (++count == total)
			{
				success(result);
			}

		}
		var query = queryObject();
		for (i in 0...events.length)
		{
			var event = events[i];
			query.property = event;
			executor.propertyCount(path, query, callback(_success, i, event), error);
		}
	}
}