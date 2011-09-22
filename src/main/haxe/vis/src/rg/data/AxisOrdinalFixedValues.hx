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

class AxisOrdinalFixedValues<T> extends AxisOrdinal<T>
{
	public function new(arr : Array<T>)
	{
		super();
		values = arr;
	}
	
	override function getValues() return values
}