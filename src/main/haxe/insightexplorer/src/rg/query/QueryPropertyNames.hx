package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;

class QueryPropertyNames extends QueryEvent<Array<String>, Array<String>>
{
	override function executeLoad(success : Array<String> -> Void, error : String -> Void)
	{
		var query = queryObject();
		query.property = event;
		executor.children(path, query, success, error);
	}
}