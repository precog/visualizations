/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.svg.chart.ColorScaleMode;
import rg.svg.chart.ColorScaleModes;
import thx.color.Rgb;
import thx.color.NamedColors;
import rg.util.RGColors;
using rg.info.Info;

@:keep class InfoHeatGrid extends InfoCartesianChart
{
	public var contour : Bool;
	public var colorScaleMode : ColorScaleMode;
	public function new()
	{
		super();
		colorScaleMode = ColorScaleMode.FromCssInterpolation();
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