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
		var m = 10,
			span = end - start,
			step = Math.pow(10, Math.floor(Math.log(span / m) / Const.LN10)),
			err = m / (span / step);
		if (err <= .15)
			step *= 10;
		else if (err <= .35)
			step *= 5;
		else if (err <= .75)
			step *= 2;
		
		if (null != maxTicks)
		{
			while (span / step > maxTicks)
				step *= 2;
		}
		return cast Floats.range(start, end, step).map(function(d, i) return Tickmarks.forFloat(start, end, d, true));
	}
}