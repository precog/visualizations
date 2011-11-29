/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;

class Transforms 
{
	public static function typedValue(s : String, ?_) : Dynamic
	{
		if (s.substr(0, 1) == '"')
			return StringTools.replace(s.substr(1, s.length - 2), '\\"', '"');
		else if ((s = s.toLowerCase()) == "true")
			return true;
		else if (s == "false")
			return false;
		else
			return Std.parseFloat(s);
	}
}