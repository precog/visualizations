package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;

class QueryIntersect<TData> extends QueryPropertiesPeriodicity<Dynamic<Dynamic>, TData> 
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
/*
	public static function createValuesCount(path : String, event : String, property : String, top = true, limit = 10)
	{
		var query = new QueryIntersect(path, event, [{ name : property, top : top, limit : limit }]);
		query.time.autosetPeriodicity = false;
		query.time.periodicity = "eternity";
		query.transform = function(v : Dynamic) {
			var labels = Reflect.fields(v);
			var result = [];
			for (label in labels)
			{
				var value = Reflect.field(Reflect.field(Reflect.field(v, label), "eternity"), "0");
				result.push( {
					label : Strings.trim(label, '"'),
					value : value
				} );
			}
			return result;
		};
		return query;
	}
*/
}
// {"iphone":{"hour":{"1239232323":293}},"android":{"hour":{"1239232323":155}},"blackberry":{"hour":{"1239232323":65}}}
   