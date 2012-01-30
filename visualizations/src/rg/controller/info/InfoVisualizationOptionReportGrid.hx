/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.factory.FactoryAxis;
import rg.factory.FactoryDataContext;
using rg.info.Info;
using Arrays;

class InfoVisualizationOptionReportGrid extends InfoVisualizationOption
{
	public static function filters() : Array<FieldFilter>
	{
		var filters = InfoVisualizationOption.filters();
		filters.removef(function(item) {
			return item.field == "data";
		});

		return filters.concat([{
			field : "data",
			validator : function(v) return Std.is(v, Array) || Reflect.isObject(v),
			filter : function(v) 
			{
				return [{
					field : "data",
					value : Std.is(v, Array)
						? Arrays.map(v, function(v, i) return new InfoDataContextReportGrid().feed(v))
						: [new InfoDataContextReportGrid().feed(v)]
				}];
			}
		}]);
	}
}