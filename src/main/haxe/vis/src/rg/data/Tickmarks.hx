/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
using Arrays;

class Tickmarks 
{
	public static function bound<T>(tickmarks : Array<ITickmark<T>>, ?max : Int) : Array<ITickmark<T>>
	{
		if (null == max || tickmarks.length <= Ints.max(2, max))
			return tickmarks;
			
		if (max <= 2)
		{
			var first = tickmarks.firstf(function(tick) return tick.major);
			if (null == first)
				first = tickmarks[0];
			if (max == 2)
			{
				var last = tickmarks.lastf(function(tick) return tick.major);
				if (null == last)
					last = tickmarks[tickmarks.length - 1];
				return [first, last];
			}
			return [first];
		}
		
		var keep = Math.ceil(tickmarks.length / max),
			result = [],
			i = 0;

		do
		{
			result.push(tickmarks[keep * i++]);
		} while (max > result.length);
		return result;
	}
	
	public static function string<T>(tick : ITickmark<T>)
	{
		return Dynamics.string(tick.value) + " (" + (tick.major ? "Major" : "minor") + ", " + Floats.format(tick.delta) + ")";
	}
	
	inline public static function forFloat(start : Float, end : Float, value : Float, major : Bool)
	{
		return new Tickmark(value, major, (value - start) / (end - start));
	}
}