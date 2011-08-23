/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import thx.error.NotImplemented;
import thx.math.Const;
using Arrays;

class AxisNumeric implements IAxis<Float>
{
	public function new() { }
	public function scale(start : Float, end : Float, v : Float)
	{
		return Floats.uninterpolatef(start, end)(v);
	}
	
	public function toTickmark(start: Float, end : Float, value: Float): ITickmark<Float>
	{
		return Tickmarks.forFloat(start, end, value, true);
	}

	public function ticks(start : Float, end : Float, ?maxTicks : Int) : Array<ITickmark<Float>>
	{
		var minors = _ticks(start, end, 10),
			majors = _ticks(start, end, 5);
		return Tickmarks.bound(minors.map(function(d : Float, i : Int) return Tickmarks.forFloat(start, end, d, majors.remove(d))), maxTicks);
	}
	
	static function _ticks(start : Float, end : Float, m : Int)
	{
		var span = end - start,
			step = Math.pow(m, Math.floor(Math.log(span / m) / Math.log(m))),
			err = m / (span / step);
/*			trace(err);
			if (err <= .15)
				step *= 10;
			else if (err <= .35)
				step *= 5;
			else if (err <= .75)
				step *= 2; */
		return Floats.range(start, end, step);
	}
}