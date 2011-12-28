/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;
import thx.error.Error;

class Properties
{
	public static var EVENT_PATTERN = ~/^(\.?[^.]+)/;
	public inline static var TIME_TOKEN = "#time:";
	/*
	public static function event(s : String)
	{
		if (!EVENT_PATTERN.match(s))
			throw new Error("cannot extract the event name from '{0}'", s);
		return EVENT_PATTERN.matched(1);
	}
	*/

	public static function isTime(s : String)
	{
		return s.indexOf(TIME_TOKEN) >= 0;
	}

	public static function periodicity(s : String)
	{
		return s.substr(s.indexOf(TIME_TOKEN) + TIME_TOKEN.length);
	}

	public static function timeProperty(periodicity : String)
	{
		return "." + TIME_TOKEN + periodicity;
	}

	public static function humanize(s : String)
	{
		return RGStrings.humanize(Strings.trim(s, "."));
	}
}