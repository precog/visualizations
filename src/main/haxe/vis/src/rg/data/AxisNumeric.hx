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
		if (start == end)
			return start;
		return Floats.uninterpolatef(start, end)(v);
	}

	public function ticks(start : Float, end : Float, ?maxTicks : Int) : Array<ITickmark<Float>>
	{
		var span, step = 1.0, minors, majors;
		if ((start % step == 0) && (end % step == 0) && (span = end - start) < 10 && span >= step)
		{
			majors = Floats.range(start, end + step, step);
			minors = null;
		} else {
			minors = Floats.range(start, end + (step = _step(span, 10)), step);
			majors = Floats.range(start, end + (step = _step(span, 5)), step);
		}
		return Tickmarks.bound(null == minors 
			? majors.map(function(d : Float, i : Int) return Tickmarks.forFloat(start, end, d, true))
			: minors.map(function(d : Float, i : Int) return Tickmarks.forFloat(start, end, d, majors.remove(d))
		), maxTicks);
	}
	
	static function _step(span : Float, m : Int)
	{
		var step = Math.pow(m, Math.floor(Math.log(span / m) / Math.log(m))),
			err = m / (span / step);
		if (err <= .05)
			step *= 10;
		else if (err <= .2)
			step *= 5;
		else if (err <= .4)
			step *= 4;
		else if (err <= .6)
			step *= 2; 
		return step;
	}
}