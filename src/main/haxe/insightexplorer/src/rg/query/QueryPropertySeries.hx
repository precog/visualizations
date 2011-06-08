package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
import thx.error.NullArgument;

class QueryPropertySeries<T> extends QueryPropertyPeridocity<T>
{
	override function executeLoad(success : T -> Void, error : String -> Void)
	{
		executor.propertyValueSeries(path, {
			start : start,
			end : end,
			periodicity : periodicity,
			property : event + "." + property
		}, success, error);
	}
}