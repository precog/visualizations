/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import thx.error.NotImplemented;

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
		return throw new NotImplemented();
	}
}