package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

class QuerySearchSeries<TValue, TOut> extends QuerySearchPeriodicity<TValue, TOut>
{
	override function executeLoad(success : T -> Void, error : String -> Void)
	{
		var query = queryObject();
		query.where = { };
		for (item in where)
		{
			var field = event + "." + item.property;
			Reflect.setField(query.where, field, item.value);
		}
		ReportGrid.searchSeries(path, query, success, error);
	}
}