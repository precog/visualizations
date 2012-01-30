/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import rg.util.DataPoints;
import rg.axis.Stats;
import rg.axis.IAxisDiscrete;

class IndependentVariableProcessor
{
	public function new() { }
	public function process(data : Array<DataPoint>, variables : Array<VariableIndependent<Dynamic>>)
	{
		for (variable in variables)
		{
			variable.stats.addMany(DataPoints.values(data, variable.type));
			var discrete;
			if (null != variable.scaleDistribution && null != (discrete = Types.as(variable.axis, IAxisDiscrete)))
			{
				discrete.scaleDistribution = variable.scaleDistribution;
				variable.scaleDistribution = null; // reset to avoid multiple assign
			}
		}
	}
}