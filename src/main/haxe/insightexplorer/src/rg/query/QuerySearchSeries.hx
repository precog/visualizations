package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

class QuerySearchSeries<TValue, TOut> extends QuerySearchPeriodicity<TValue, TOut>
{
	override function executeLoad(success : T -> Void, error : String -> Void)
	{
		var w = { };
		for (item in where)
		{
			var field = event + "." + item.property;
			Reflect.setField(field, item.value);
		}
		
		ReportGrid.searchSeries(path, {
			where : w
		}, success, error);
	}
}