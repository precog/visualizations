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
		executor.propertyValueCount(path, { property : event + "." + property, value : value }, success, error);
	}
}