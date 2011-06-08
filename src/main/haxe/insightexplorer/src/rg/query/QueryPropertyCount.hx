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
		executor.propertyCount(path, { property : event + "." + property }, success, error);
	}
}