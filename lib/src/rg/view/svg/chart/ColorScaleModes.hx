/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;

import thx.error.Error;
import thx.color.Colors;
using Arrays;

class ColorScaleModes 
{
	public static function createFromDynamic(v : Dynamic) : ColorScaleMode
	{
		if (Reflect.isFunction(v))
			return ColorScaleMode.Fun(v);
		if (!Std.is(v, String))
			return throw new Error("invalid color mode '{0}'", [v]);
		var s = cast(v, String).split("-");
		switch(s[0].toLowerCase())
		{
			case "css":
				return ColorScaleMode.FromCss(null == s[1] ? null : Std.parseInt(s[1]));
			
			case "i", "interpolated":
				return ColorScaleMode.Interpolation(s[1].split(",").map(function(d, i) {
					return Colors.parse(d);
				}));
			case "s", "sequence":
				return ColorScaleMode.Sequence(s[1].split(",").map(function(d, i) {
					return Colors.parse(d);
				}));
			case "f", "fixed":
				return ColorScaleMode.Fixed(Colors.parse(s[1]));
			default:
				if (s[0].indexOf(",") >= 0)
					return ColorScaleMode.Sequence(s[0].split(",").map(function(d, i) {
						return Colors.parse(d);
					}));
				else
					return ColorScaleMode.Fixed(Colors.parse(s[0]));
		}
	}
}