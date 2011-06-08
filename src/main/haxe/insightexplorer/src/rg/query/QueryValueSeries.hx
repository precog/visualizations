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
		executor.propertyValueSeries(path, {
			start : start,
			end : end,
			periodicity : periodicity,
			property : event + "." + property,
			value : value
		}, success, error);
	}
}