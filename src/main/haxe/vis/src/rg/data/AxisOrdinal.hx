/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import thx.benchmark.SpeedTest;
import thx.error.AbstractMethod;
import thx.error.Error;
import rg.data.ScaleDistribution;
using Arrays;
using thx.collection.Sets;

class AxisOrdinal<T> implements IAxisOrdinal<T>
{
	public var first(getFirst, null) : T;
	public var last(getLast, null) : T;
	public var values(getValues, null): Array<T>;
	public var allTicks (getAllTicks, null): Array<ITickmark<T>>;
	public var scaleDistribution(default, setScaleDistribution) : ScaleDistribution;

	private function new()
	{
		this.scaleDistribution = ScaleFit;
	}
	
	function toTickmark(start: T, end : T, value: T): ITickmark<T>
	{
		var r = range(start, end);
		return new TickmarkOrdinal(r.indexOf(value), r, scaleDistribution);
	}

	public function ticks(start: T, end: T, ?upperBound: Int) : Array<ITickmark<T>>
	{
		if (0 == upperBound)
			return [];	
		var ticks : Array<ITickmark<T>> = cast TickmarkOrdinal.fromArray(range(start, end), scaleDistribution);
		return Tickmarks.bound(ticks, upperBound);
	}
	
	public function range(start: T, end: T)
	{
		var s = values.indexOf(start),
			e = values.indexOf(end);
		if (s < 0)
		{
			trace(start);
			trace(values);
			throw new Error("the start bound '{0}' is not part of the acceptable values {1}", [start, values]);
		}
		if (e < 0)
			throw new Error("the end bound '{0}' is not part of the acceptable values {1}", [end, values]);
		return values.slice(s, e + 1);
	}
	
	public function scale(start : T, end : T, v : T)
	{
		var s = values.indexOf(start),
			e = values.indexOf(end),
			p = values.indexOf(v);
		if (s < 0)
			throw new Error("the start bound '{0}' is not part of the values {1}", [start, values]);
		if (e < 0)
			throw new Error("the end bound '{0}' is not part of the values {1}", [end, values]);
		if (p < 0)
			throw new Error("the value '{0}' is not part of the values {1}", [v, values]);
		return ScaleDistributions.distribute(scaleDistribution, p - s, e - s + 1); // (p - s) / (e - s);
	}
	
	function getFirst() return values.first()
	function getLast() return values.last()
	function getValues() : Array<T> return throw new AbstractMethod()
	function getAllTicks()
	{
		var t = toTickmark,
			f = first,
			l = last;
		return range(f, l).map(function(d, i) return t(f, l, d));
	}
	function setScaleDistribution(v : ScaleDistribution)
	{
		return this.scaleDistribution = v;
	}
	
	public function min(stats : Stats<T>) : T return stats.min
	public function max(stats : Stats<T>) : T return stats.max
}