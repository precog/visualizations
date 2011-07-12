package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

class QuerySearchCount<TValue, TOut> extends QuerySearch<TValue, TOut>
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
		ReportGrid.propertyValueCount(path, query, success, error);
	}
}