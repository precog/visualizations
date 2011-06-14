package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
import thx.error.NullArgument;
using Arrays;

class QueryPropertiesCount extends QueryEvent<Array<{ label : String, value : Float }>, Array<{ label : String, value : Float }>>
{
	public var properties : Array<String>;
	
	public dynamic function filter(value : Dynamic, count : Int)
	{
		return true;
	}

	public function new(executor : IExecutor, path : String, event : String, ?properties : Array<String>)
	{
		super(executor, path, event);
		this.properties = properties;
	}
	
	override function load()
	{
		if (null == properties)
		{
			var loader = new QueryPropertyNames(executor, path, event),
				me = this;
			loader.onData.add(function(d : Array<String>) {
				me.properties = d.map(function(d, i) return Strings.ltrim(d, "."));
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
			total = properties.length,
			result = [],
			totalcount = 0;

		function _success(p : String, v : Float)
		{
			result.push({
				label : p,
				value : v
			});
			if (++count == total)
				success(result);
		}
		for (property in properties)
		{
			executor.propertyCount(path, { property : event + "." + property }, callback(_success, property), error);
		}
	}
}