package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

class QuerySearchCount<TValue, TOut> extends QuerySearch<TValue, TOut>
{
	override function executeLoad(success : T -> Void, error : String -> Void)
	{
		var w = { };
		for (item in where)
		{
			var field = event + "." + item.property;
			Reflect.setField(field, item.value);
		}
		ReportGrid.propertyValueCount(path, {
			where : w
		}, success, error);
	}
}