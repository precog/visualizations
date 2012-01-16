/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;
import thx.color.Colors;
import thx.color.Hsl;

class RGColors
{
	public static function parse(s : String, alt : String)
	{
		try {
			var c = Colors.parse(s);
			if (null != c)
				return c;
		} catch (_:Dynamic) { };
		return Colors.parse(alt);
	}

	public static function applyLightness(color : Hsl, lightness : Float, ?t : Float)
	{
		if (null == t)
		{
			t = 1 / Math.abs(lightness);
		}
		return lightness >= 0
			? Hsl.lighter(color, (1 - t) * (1 + lightness))
			: Hsl.darker(color, (1 - t) * (1 - lightness));
	}
}