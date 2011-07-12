package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;

class QueryPropertyCount extends QueryProperty<Int>
{
	override function executeLoad(success : Array<String> -> Void, error : String -> Void)
	{
		var query = queryObject();
		query.property = event + "." + property;
		executor.propertyCount(path, query, success, error);
	}
}