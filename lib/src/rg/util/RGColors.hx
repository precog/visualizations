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

	public static function extractColor(n : js.Dom.HtmlDom) : String
	{
		return untyped n.__rgcolor__;
	}

	public static function storeColor(n : js.Dom.HtmlDom, color)
	{
		untyped n.__rgcolor__ = color;
	}

	public static function storeColorForSelection(n : dhx.Selection, style = "fill", ?color : String)
	{
		n.eachNode(function(n, _) {
			var c = (null == color) ? dhx.Selection.current.style(style).get() : color;
			RGColors.storeColor(n, c);
		});
	}
}