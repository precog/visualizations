/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;
import thx.error.Error;

class Properties
{
	public inline static var TIME_TOKEN = "time:";

	inline public static function isTime(s : String)
	{
		return s.indexOf(TIME_TOKEN) >= 0;
	}

	inline public static function periodicity(s : String)
	{
		return s.substr(s.indexOf(TIME_TOKEN) + TIME_TOKEN.length);
	}

	inline public static function timeProperty(periodicity : String)
	{
		return "." + TIME_TOKEN + periodicity;
	}

	inline public static function humanize(s : String)
	{
		return RGStrings.humanize(s);
	}

	public static function formatValue(type : String, dp : Dynamic)
	{
		var value : Dynamic = DataPoints.value(dp, type);
		if(null == value)
			return value;
		if(Properties.isTime(type))
			return Periodicity.format(Properties.periodicity(type), value);
		return RGStrings.humanize(value);
	}
}