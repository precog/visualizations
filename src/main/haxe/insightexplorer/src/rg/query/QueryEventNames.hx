package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
 
class QueryEventNames<TData> extends QueryPath<Array<String>, TData>
{
	override function executeLoad(success : Array<String> -> Void, error : String -> Void)
	{
		var query = queryObject();
		query.type = "property";
		executor.children(path, query, success, error);
	}
}