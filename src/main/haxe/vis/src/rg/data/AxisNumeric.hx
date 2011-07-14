/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

class AxisNumeric implements IAxis<Float>
{
	public function new() { }
	public function scale(start : Float, end : Float, v : Float)
	{
		return Floats.interpolate(v, start, end);
	}
}