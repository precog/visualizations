/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.Variable;
import rg.data.DataPoint;
import rg.data.Stats;

class InfoLabelPivotTable extends InfoLabelAxis
{
	public var total : Float -> Stats<Dynamic> -> String;
	public var totalover : Float -> Stats<Dynamic> -> String;
	public var axisvalue : Dynamic -> String -> String;

	public static function filters()
	{
		return [{
			field : "total",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}, {
			field : "totalover",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}, {
			field : "axisvalue",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}].concat(InfoLabelAxis.filters());
	}
}