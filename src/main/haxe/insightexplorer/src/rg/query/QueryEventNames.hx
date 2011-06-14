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
		executor.children(path, { type : "property" }, success, error);
	}
}