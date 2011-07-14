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
	public function sample(start: Float, end: Float, ?upperBound: Int) : Array<ITickmark<Float>>
	{
		var span = end - start,
			range = range(start, end).map(function(value, i) : ITickmark<Float> {
			return new Tickmark(value, true, (value - start) / span);
		});
		return Tickmarks.bound(range, upperBound);
	}
	
	public function range(start: Float, end: Float)
	{
		return Periodicity.range(start, end, periodicity);
	}
	
	public function scale(start : Float, end : Float, v : Float)
	{
		return Floats.interpolate(v, start, end);
	}
}