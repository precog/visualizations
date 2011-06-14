package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;

class QueryIntersect<TData> extends QueryProperties<Dynamic<Dynamic>, TData> 
{
	override function executeLoad(success : Dynamic<Dynamic> -> Void, error : String -> Void)
	{
		var p = [];
		for (prop in properties)
		{
			p.push({
				property : event + "." + prop.name,
				limit : prop.limit,
				order : prop.top ? "descending" : "ascending"
			});
		}
		executor.intersect(path, {
			start : time.start,
			end : time.end,
			periodicity : time.periodicity,
			properties : p
		}, success, error);
	}
}
// {"iphone":{"hour":{"1239232323":293}},"android":{"hour":{"1239232323":155}},"blackberry":{"hour":{"1239232323":65}}}
   