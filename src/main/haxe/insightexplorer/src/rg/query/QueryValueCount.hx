package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;

class QueryValueCount<T> extends QueryValue<Int>
{
	override function executeLoad(success : T -> Void, error : String -> Void)
	{
		var query = queryObject();
		query.property = event + "." + property;
		query.value = value;
		executor.propertyValueCount(path, query, success, error);
	}
}