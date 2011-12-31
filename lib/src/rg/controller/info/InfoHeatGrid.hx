/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.view.svg.chart.ColorScaleMode;
import rg.view.svg.chart.ColorScaleModes;
import thx.color.Rgb;
import thx.color.NamedColors;
import rg.view.svg.util.RGColors;
using rg.controller.info.Info;

class InfoHeatGrid extends InfoCartesianChart
{
	public var contour : Bool;
	public var colorScaleMode : ColorScaleMode;
	public function new()
	{
		super();
		colorScaleMode = ColorScaleMode.FromCss();
	}

	public static function filters()
	{
		return [{
			field : "contour",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}, {
			field : "color",
			validator : function(v) return Std.is(v, String) || Reflect.isFunction(v),
			filter : function(v) {
				return [{
					field : "colorScaleMode",
					value : ColorScaleModes.createFromDynamic(v)
				}];
			}
		}].concat(cast InfoCartesianChart.filters());
	}
}