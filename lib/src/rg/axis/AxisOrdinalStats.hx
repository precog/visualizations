/**
 * ...
 * @author Franco Ponticelli
 */

package rg.axis;

import rg.data.Variable;
import rg.axis.ScaleDistribution;

class AxisOrdinalStats<T> extends AxisOrdinal<T>
{
	var variable : Variable<T, IAxis<T>>;

	public function new(variable : Variable<T, IAxis<T>>)
	{
		super();
		this.variable = variable;
	}

	override function values() return variable.stats.values
}