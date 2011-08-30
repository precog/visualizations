/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import thx.color.Rgb;
import thx.color.NamedColors;
import thx.color.Colors;
using rg.controller.info.Info;

class InfoHeatGrid extends InfoCartesianChart
{
	public var contour : Bool;
	public var startColor : Rgb;
	public var endColor : Rgb;
	public function new()
	{
		super();
		startColor = NamedColors.white;
		endColor = NamedColors.blue;
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
				value : Colors.parse(v)
			}]
		}, {
			field : "endcolor",
			validator : function(v) return Std.is(v, String),
			filter : function(v) return [{
				field : "endColor",
				value : Colors.parse(v)
			}]
		}].concat(cast InfoCartesianChart.filters());
	}
}