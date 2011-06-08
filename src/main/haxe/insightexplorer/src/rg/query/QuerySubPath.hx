package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
 
class QuerySubPath extends QueryPath<Array<String>>
{
	override function executeLoad(success : T -> Void, error : String -> Void)
	{
		executor.children(path, { type : "path" }, success, error);
	}
}