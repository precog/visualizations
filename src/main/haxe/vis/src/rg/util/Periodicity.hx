/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;
import thx.culture.FormatDate;
import thx.date.DateParser;
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
	
	public static function next(periodicity : String, ?date : Float, ?step = 1) : Float
	{
		if (null == date)
			date = Date.now().getTime();
		if (0 == step)
			return date;
		return switch(periodicity)
		{
			case "eternity": 0.0;
			case "minute": date + 60000 * step;
			case "hour": date + 60 * 60000 * step;
			case "day": date + 24 * 60 * 60000 * step;
			case "week": date + 7 * 24 * 60 * 60000 * step;
			case "month":
				var d = Date.fromTime(date),
					y = d.getFullYear(),
					m = d.getMonth() + step;
				new Date(y, m, d.getDay(), d.getHours(), d.getMinutes(), d.getSeconds()).getTime();
			case "year":
				var d = Date.fromTime(date);
				new Date(d.getFullYear() + step, d.getMonth(), d.getDay(), d.getHours(), d.getMinutes(), d.getSeconds()).getTime();
		}
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
	
	public static function formatf(periodicity : String) : Float -> String
	{
		return switch(periodicity)
		{
			case "eternity": function(_ : Float) return "all time";
			case "minute", "hour": function(v : Float) return FormatDate.timeShort(Date.fromTime(v));
			case "day", "week": function(v : Float) return FormatDate.dateShort(Date.fromTime(v));
			case "month": function(v : Float) return FormatDate.yearMonth(Date.fromTime(v));
			case "year": function(v : Float) return FormatDate.year(Date.fromTime(v));
		}
	}
	
	public static function format(periodicity : String, v : Float) : String
	{
		switch(periodicity)
		{
			case "eternity": return "all time";
			case "minute", "hour": return FormatDate.timeShort(Date.fromTime(v));
			case "day", "week": return FormatDate.dateShort(Date.fromTime(v));
			case "month": return FormatDate.yearMonth(Date.fromTime(v));
			case "year": return FormatDate.year(Date.fromTime(v));
			default: return periodicity + ": " + v;
		}
	}
	
	public static function defaultRange(periodicity : String) : Array<Float>
	{
		return switch(periodicity)
		{
			case "eternity":
				[0.0, 0.0];
			case "minute":
				parsePair("6 hours ago", "now");
			case "hour":
				parsePair("2 days ago", "now");
			case "day":
				parsePair("14 days ago", "today");
			case "week":
				parsePair("6 weeks ago", "today");
			case "month":
				parsePair("6 months ago", "today");
			case "year":
				parsePair("6 years ago", "today");
		}
	}
	
	static function parsePair(start : String, end : String) : Array<Float>
	{
		return [
			DateParser.parse(start).getTime(),
			DateParser.parse(end).getTime()
		];
	}
}