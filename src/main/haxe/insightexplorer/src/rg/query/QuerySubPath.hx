package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
 
class QuerySubPath<TData> extends QueryPath<Array<String>, TData>
{
	override function executeLoad(success : Array<String> -> Void, error : String -> Void)
	{
		executor.children(path, { type : "path" }, success, error);
	}
}