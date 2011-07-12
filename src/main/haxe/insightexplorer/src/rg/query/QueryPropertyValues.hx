package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
import rg.query.QueryLimit;
import thx.error.NullArgument;

class QueryPropertyValues<TData> extends QueryProperty<Array<Dynamic>, Array<TData>>
{
	public var limit(default, setLimit) : QueryLimit;
	
	public function new(executor : IExecutor, path : String, event : String, property : String, ?limit : QueryLimit) 
	{
		super(executor, path, event, property);
		this.limit = null == limit ? NoLimit : limit;
	}
	
	override function executeLoad(success : Array<Dynamic> -> Void, error : String -> Void)
	{
		var query = queryObject();
		query.property = event + "." + property;
		switch(limit)
		{
			case Top(v):
				Reflect.setField(query, "top", v);
			case Bottom(v):
				Reflect.setField(query, "bottom", v);
			default:
				//
		}
		
		executor.propertyValues(path, query, cast success, error);
	}
	
	function setLimit(v : QueryLimit)
	{
		NullArgument.throwIfNull(v);
		return this.limit = v;
	}
}