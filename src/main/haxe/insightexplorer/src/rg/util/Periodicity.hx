/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;
using Arrays;

class Periodicity 
{
	static var validPeriods = ["minute", "hour", "day", "week", "month", "year", "eternity"];
	public static function isValid(v : String) 
	{
		return Arrays.exists(validPeriods, v);
	}
	
	public static function calculateBetween(a : Null<Date>, b : Null<Date>, disc = 2)
	{
		if (null == a || null == b)
			return "eternity";
		var delta = Math.abs(b.getTime() - a.getTime());
		if (delta >= DateTools.days(365 * disc))
			return "year";
		else if (delta >= DateTools.days(30 * disc))
			return "month";
		else if (delta >= DateTools.days(7 * disc))
			return "week";
		else if (delta >= DateTools.days(disc))
			return "day";
		else if (delta >= DateTools.hours(disc))
			return "hour";
		else
			return "minute";
	}
	
	public static function range(start : Float, end : Float, periodicity : String) : Array<Float>
	{
		var step = 1000;
		start = Dates.snap(start, periodicity);
		end = Dates.snap(end, periodicity);
		switch(periodicity)
		{
			case "eternity": 
				return [0.0];
			case "minute":
				step = 60000;
			case "hour":
				step = 60 * 60000;
			case "day":
				step = 24 * 60 * 60000;
			case "week":
				step = 7 * 24 * 60 * 60000;
			case "month":
				var s = Date.fromTime(start),
					e = Date.fromTime(end),
					sy = s.getFullYear(),
					ey = e.getFullYear(),
					sm = s.getMonth();
				var result = [];
				for (y in sy...ey)
				{
					var sr = 0,
						er = 12;
					if (y == sy && y == ey)
					{
						sr = sy;
						er = ey;
					} else if (y == sy)
						sr = sy;
					else if (y == ey)
						er = ey;
					for (m in sr...er)
						result.push(new Date(y, m, 1, 0, 0, 0).getTime());
				}
				return result;
			case "year":
				return Ints.range(Date.fromTime(start).getFullYear(), Date.fromTime(end).getFullYear(), 1).map(function(d, i) {
					return new Date(d, 0, 1, 0, 0, 0).getTime();
				});
		}
		return Floats.range(start, end + step, step); 
	}
	
	public static function minForPeriodicityInSeries(arr : Array<Dynamic<Dynamic<Int>>>, periodicity : String)
	{
		return Arrays.floatMin(arr, function(d) {
			var o = Reflect.field(d, periodicity);
			return Arrays.floatMin(Reflect.fields(o), function(d) return Std.parseFloat(d));
		});
	}
	
	public static function maxForPeriodicityInSeries(arr : Array<Dynamic<Dynamic<Int>>>, periodicity : String)
	{
		return Arrays.floatMax(arr, function(d) {
			var o = Reflect.field(d, periodicity);
			return Arrays.floatMax(Reflect.fields(o), function(d) return Std.parseFloat(d));
		});
	}
}