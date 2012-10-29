/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

import rg.axis.IAxis;
import rg.axis.Stats;
import rg.axis.ScaleDistribution;
import thx.error.Error;

class Variable<T, TAxis : IAxis<T>>
{
	public var type : String;
	public var scaleDistribution : Null<ScaleDistribution>;
	public var axis(default, null) : TAxis;
	public var stats(default, null) : Stats<T>;
	public var meta(default, null) : Dynamic;
	@:isVar public var minf(get, set) : Stats<T> -> Dynamic -> T;
	@:isVar public var maxf(get, set) : Stats<T> -> Dynamic -> T;

	public function new(type : String, scaleDistribution : Null<ScaleDistribution>)
	{
		this.type = type;
		this.scaleDistribution = scaleDistribution;
		this.meta = { };
	}

	public function setAxis(axis : TAxis)
	{
		this.axis = axis;
		if (null != axis)
			this.stats = axis.createStats(type);
		else
			this.stats = null;
	}

	public function min() return minf(stats, meta)
	public function max() return maxf(stats, meta)

	function set_minf(f : Stats<T> -> Dynamic -> T) return minf = f
	function set_maxf(f : Stats<T> -> Dynamic -> T) return maxf = f

	function get_minf()
	{
		if (null == minf)
		{
			if (null == axis)
				throw new Error("axis is null in '{0}' variable (required by min)", [type]);
			minf = axis.min;
		}
		return minf;
	}

	function get_maxf()
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