/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import thx.benchmark.SpeedTest;
import thx.error.Error;
import thx.collection.Set;
import rg.data.ScaleDistribution;
using Arrays;
using thx.collection.Sets;

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