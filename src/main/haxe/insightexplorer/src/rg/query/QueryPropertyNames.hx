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
		executor.children(path, { property : event }, success, error);
	}
}