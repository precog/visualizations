package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
import thx.error.NullArgument;

class QueryValueSeries<TValue, TOut> extends QueryValuePeridocity<TValue, TOut>
{
	override function executeLoad(success : TOut -> Void, error : String -> Void)
	{
		var query = queryObject();
		query.property = event + "." + property;
		query.value = value;
		executor.propertyValueSeries(path, query, success, error);
	}
}