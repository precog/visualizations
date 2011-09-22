/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

import rg.data.Stats;
import thx.error.Error;

class Variable<T, TAxis : IAxis<T>>
{
	public var type : String;
	public var scaleDistribution : Null<ScaleDistribution>;
	public var axis(default, null) : TAxis;
	public var stats(default, null) : Stats<T>;
	
	public var minf(getMinF, setMinF) : Stats<T> -> T;
	public var maxf(getMaxF, setMaxF) : Stats<T> -> T;
	
	public function new(type : String, scaleDistribution : Null<ScaleDistribution>) 
	{
		this.type = type;
		this.scaleDistribution = scaleDistribution;
	}
	
	public function setAxis(axis : TAxis)
	{
		this.axis = axis;
		if (Std.is(axis, AxisNumeric))
		{
			stats = cast new StatsNumeric();
		} else {
			stats = new Stats<T>();
		}
	}
	
	public function minValue() return minf(stats)
	public function maxValue() return maxf(stats)
	
	function setMinF(f : Stats<T> -> T) return minf = f
	function setMaxF(f : Stats<T> -> T) return maxf = f
	
	function getMinF()
	{
		if (null == minf)
		{
			if (null == axis)
				throw new Error("axis is null in '{0}' variable (required by min)", [type]);
			minf = axis.min;
		}
		return minf;
	}
	
	function getMaxF()
	{
		if (null == maxf)
		{
			if (null == axis)
				throw new Error("axis is null in '{0}' variable (required by max)", [type]);
			maxf = axis.max;
		}
		return maxf;
	}
}