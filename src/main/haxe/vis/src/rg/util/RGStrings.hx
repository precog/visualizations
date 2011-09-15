/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;

class RGStrings 
{
	static var range = ~/(\d+(?:\.\d+)?|\.\d+)?-(\d+(?:\.\d+|\.\d+)?)?/;
	public static function humanize(d : Dynamic) 
	{
		if (Std.is(d, Int))
			return Ints.format(d);
		if (Std.is(d, Float))
			return Floats.format(d);
		var s = Std.string(d);
		if (range.match(s))
		{
			var v1 = range.matched(1),
				v2 = range.matched(2);
			if (null != v1)
				v1 = Ints.canParse(v1) ? Ints.format(Ints.parse(v1)) : Floats.format(Floats.parse(v1));
			else
				v1 = '';
			if (null != v2)
				v2 = Ints.canParse(v2) ? Ints.format(Ints.parse(v2)) : Floats.format(Floats.parse(v2));
			else
				v2 = '';
			return hstring(range.matchedLeft()) + v1 + "-" + v2 + hstring(range.matchedRight());
		} else {
			return hstring(s);
		}
	}
	
	static function hstring(s : String)
	{
		return Strings.capitalize(Strings.humanize(s));
	}
}