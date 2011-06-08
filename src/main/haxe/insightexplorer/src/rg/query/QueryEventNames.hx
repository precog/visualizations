package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
 
class QueryEventNames extends QueryPath<Array<String>>
{
	override function executeLoad(success : Array<String> -> Void, error : String -> Void)
	{
		executor.children(path, { type : "property" }, success, error);
	}
}