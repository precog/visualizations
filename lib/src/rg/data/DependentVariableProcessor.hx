/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import rg.factory.FactoryAxis;
import rg.util.DataPoints;
import rg.axis.Stats;
import rg.axis.IAxisDiscrete;

class DependentVariableProcessor
{
	public function new() { }

	public function process(data : Array<Dynamic>, variables : Array<VariableDependent<Dynamic>>)
	{
		for (variable in variables)
		{
			var values = DataPoints.values(data, variable.type);
			if (values.length == 0)
				continue;
			if (null == variable.axis)
			{
				variable.setAxis(new FactoryAxis().create(
					variable.type,
					Std.is(values[0], Float),
					variable,
					null
				));
			}
			variable.stats.addMany(values);

			var discrete;
			if (null != variable.scaleDistribution && null != (discrete = Types.as(variable.axis, IAxisDiscrete)))
			{
				discrete.scaleDistribution = variable.scaleDistribution;
				variable.scaleDistribution = null; // reset to avoid multiple assign
			}
		}
	}
}