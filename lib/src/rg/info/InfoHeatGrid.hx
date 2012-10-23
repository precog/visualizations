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
using rg.info.filter.FilterDescription;
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

	public static function filters() : Array<FilterDescription>
	{
		return [
			"contour".toBool(),
			"color".simplified(["colorScaleMode"],
				ColorScaleModes.createFromDynamic,
				function(v : Dynamic) return (ColorScaleModes.canParse(v) ? null : "value must be a a string or a function returning a string expressing a valid color scale mode")
			)
		].concat(cast InfoCartesianChart.filters());
	}
}