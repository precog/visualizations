/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import thx.color.Rgb;
import thx.color.NamedColors;
import rg.view.svg.util.RGColors;
using rg.controller.info.Info;

class InfoHeatGrid extends InfoCartesianChart
{
	static var defaultStartColor = NamedColors.white;
	static var defaultEndColor = NamedColors.blue;
	
	public var contour : Bool;
	public var startColor : Rgb;
	public var endColor : Rgb;
	public function new()
	{
		super();
		startColor = defaultStartColor;
		endColor = defaultEndColor;
	}
	
	public static function filters()
	{
		return [{
			field : "contour",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}, {
			field : "startcolor",
			validator : function(v) return Std.is(v, String),
			filter : function(v) return [{
				field : "startColor",
				value : RGColors.parse(v, defaultStartColor.toCss())
			}]
		}, {
			field : "endcolor",
			validator : function(v) return Std.is(v, String),
			filter : function(v) return [{
				field : "endColor",
				value : RGColors.parse(v, defaultEndColor.toCss())
			}]
		}].concat(cast InfoCartesianChart.filters());
	}
}