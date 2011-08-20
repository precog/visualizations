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
		
		var majors = tickmarks.filter(function(d) return d.major);
		if (majors.length > max)
			return reduce(majors, max);
		var result = reduce(tickmarks.filter(function(d) return !d.major), max - majors.length).concat(majors);
		result.sort(function(a, b) return Floats.compare(a.delta, b.delta));
		return result;
	}
	
	static function reduce<T>(arr : Array<T>, max : Int)
	{
		if (max == 1)
			return [arr[0]];
		if (max == 2)
			return [arr[arr.length - 1]];
		var keep = arr.length / max,
			result = [],
			i = 0;
		do
		{
			result.push(arr[Math.round(keep * i++)]);
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