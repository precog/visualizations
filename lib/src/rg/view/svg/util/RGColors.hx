/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.util;
import thx.color.Colors;

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
}