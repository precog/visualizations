/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

import rg.data.Stats;

class Variable<T, TAxis : IAxis<T>>
{
	public var type : String;
	public var min : Null<T>;
	public var max : Null<T>;
	public var scaleDistribution : Null<ScaleDistribution>;
	public var axis(default, null) : TAxis;
	public var stats(default, null) : Stats<T>;
	
	public function new(type : String, axis : TAxis, scaleDistribution : Null<ScaleDistribution>, ?min : T, ?max : T) 
	{
		this.type = type;
		this.scaleDistribution = scaleDistribution;
		this.min = min;
		this.max = max;
		setAxis(axis);
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
}