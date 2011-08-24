/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import rg.util.Periodicity;
using Arrays;

class AxisTime implements IAxisDiscrete<Float>
{
	public var periodicity(default, null) : String;
	public function new(periodicity)
	{
		this.periodicity = periodicity;
	}
	
	public function toTickmark(start: Float, end : Float, value: Float): ITickmark<Float>
	{
		var span = end - start,
			major = isMajor(start, end, value);
		return new TickmarkTime(value, major, (value - start) / span, periodicity);
//		return Tickmarks.forFloat(start, end, value, true);
	}
	
	static var snapping = {
		minute : [ { to : 10, s : 1 }, { to : 20, s : 2 }, { to : 30, s : 5 }, { to : 60, s : 10 }, { to : 120, s : 30 }, { to : 240, s : 60 }, { to : 960, s : 240 } ],
		minutetop : 480,
		hour : [ { to : 12, s : 1 }, { to : 24, s : 6 }, { to : 60, s : 12 }, { to :240, s : 24 }, { to : 480, s : 48 }, { to : 960, s : 120 } ],
		hourtop : 240,
		month : [ { to : 13, s : 1 }, { to : 25, s : 2 }, { to : 49, s : 4 }, { to : 73, s : 6 } ] ,
		monthtop : 12,
		year : [ { to : 10, s : 1 }, { to : 20, s : 2 }, { to : 50, s : 5 } ],
		yeartop : 10
	};
	function isMajor(start : Float, end : Float, value : Float)
	{
		var units = Periodicity.unitsBetween(start, end, periodicity);
		
		switch(periodicity)
		{
			case "day":
				if (units < 28)
					return true;
				if (units < 121)
				{
					var d = Date.fromTime(value).getDate(),
						delta = 4;
					return Periodicity.firstInSeries("month", value) || (d > delta && d < (31-delta) && Periodicity.firstInSeries("week", value));
				}
				return Periodicity.firstInSeries("month", value);
			case "week":
				if (units < 28)
					return true;
				else
					return Date.fromTime(value).getDate() <= 7;
			default:
				var series : Array<{ to : Int, s : Int }> = Reflect.field(snapping, periodicity),
					unit = Periodicity.units(value, periodicity);
				if (null == series)
					return true;
				for (item in series)
				{
					if (units > item.to)
						continue;
					return 0 == unit % item.s;
				}
				var top = Reflect.field(snapping, periodicity + "top");
				if (null == top)
					top = 1;
				return 0 == unit % top;
		}
	}
	
	public function ticks(start: Float, end: Float, ?upperBound: Int) : Array<ITickmark<Float>>
	{
		var range = range(start, end).map(function(value, i) : ITickmark<Float> {
			return toTickmark(start, end, value);
		});
		
		return Tickmarks.bound(range, upperBound);
	}
	
	public function range(start: Float, end: Float)
	{
		return Periodicity.range(start, end, periodicity);
	}
	
	public function scale(start : Float, end : Float, v : Float)
	{
		return Floats.uninterpolatef(start, end)(v);
	}
}