/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
using rg.controller.info.Info;
using Arrays;

class InfoDataContextReportGrid extends InfoDataContext
{
	public static function filters() : Array<FieldFilter>
	{
		var filters = InfoDataContext.filters();
		filters.removef(function(item) return item.field == "src");
		return filters.concat([{
			field : "src",
			validator : function(v) return (Std.is(v, Array) && Arrays.all(v, function(v) return Types.isAnonymous(v))) || Types.isAnonymous(v),
			filter : function(v)
			{
				var result = Std.is(v, Array)
						? Arrays.map(v, function(v, i) return new InfoDataSourceReportGrid().feed(v))
						: [new InfoDataSourceReportGrid().feed(v)];
				return [{
					field : "sources",
					value : result
				}];
			}
		}]);
	}
}