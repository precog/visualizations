/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import thx.error.AbstractMethod;
import thx.error.Error;
import rg.data.ScaleDistribution;
using Arrays;

class AxisOrdinal<T> implements IAxisOrdinal<T>
{
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
		var values = values(),
			s = values.indexOf(start),
			e = values.indexOf(end);
		if (s < 0)
			throw new Error("the start bound '{0}' is not part of the acceptable values {1}", [start, values]);
		if (e < 0)
			throw new Error("the end bound '{0}' is not part of the acceptable values {1}", [end, values]);
		return values.slice(s, e + 1);
	}

	public function scale(start : T, end : T, v : T)
	{
		var values = values(),
			s = values.indexOf(start),
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

	public function first() return values().first()
	public function last() return values().last()
	public function values() : Array<T> return throw new AbstractMethod()
	public function allTicks()
	{
		var f = first(),
			l = last();
		return range(f, l).map(function(d, i) return toTickmark(f, l, d));
	}
	function setScaleDistribution(v : ScaleDistribution)
	{
		return this.scaleDistribution = v;
	}

	public function min(stats : Stats<T>, meta : Dynamic) : T return values().first()
	public function max(stats : Stats<T>, meta : Dynamic) : T return values().last()

	public function createStats() : Stats<T> return new Stats<T>()
}