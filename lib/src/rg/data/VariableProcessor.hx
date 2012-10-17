/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import hxevents.Dispatcher;
import rg.factory.FactoryAxis;
import rg.util.DataPoints;
import rg.axis.Stats;
using Arrays;

class VariableProcessor
{
	public var source(default, null) : IDataSource;

	public var onData(default, null) : Dispatcher<Array<Dynamic>>;
	public var independentVariables : Array<VariableIndependent<Dynamic>>;
	public var dependentVariables : Array<VariableDependent<Dynamic>>;

	public function new(source : IDataSource)
	{
		this.source = source;
//		source.onLoading.add(preprocess);
		source.onLoad.add(process);
		onData = new Dispatcher();
	}

	public function load()
	{
		source.load();
	}

	function process(data : Array<Dynamic>)
	{
		trace(data);
		fillIndependentVariables(data);
		fillDependentVariables(data);
		onData.dispatch(data);
	}

	function fillDependentVariables(data : Array<Dynamic>)
	{
		for (variable in dependentVariables)
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

	function fillIndependentVariables(flatten : Array<Dynamic>)
	{
		for (variable in independentVariables)
		{
			variable.stats.addMany(DataPoints.values(flatten, variable.type));
			var discrete;
			if (null != variable.scaleDistribution && null != (discrete = Types.as(variable.axis, IAxisDiscrete)))
			{
				discrete.scaleDistribution = variable.scaleDistribution;
				variable.scaleDistribution = null; // reset to avoid multiple assign
			}
		}
	}
}