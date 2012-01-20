/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import hxevents.Dispatcher;
import rg.controller.factory.FactoryAxis;
import rg.util.DataPoints;
import rg.data.Stats;
using Arrays;

class VariableProcessor
{
	public var source(default, null) : IDataSource;

	public var onData(default, null) : Dispatcher<Array<DataPoint>>;
	public var independentVariables : Array<VariableIndependent<Dynamic>>;
	public var dependentVariables : Array<VariableDependent<Dynamic>>;

	public function new(source : IDataSource)
	{
		this.source = source;
//		source.onLoading.add(preprocess);
		source.onLoad.add(process);
		onData = new Dispatcher();
	}
/*
	public dynamic function transform(s : Array<Array<DataPoint>>) : Array<DataPoint>
	{
		return s.flatten();
	}

	public dynamic function scale(s : Array<Array<DataPoint>>) : Array<Array<DataPoint>>
	{
		return s;
	}
*/
	public function load()
	{
		source.load();
	}
/*
	function filterSubset(subset : Array<DataPoint>, variables : Array<Dynamic>)
	{
		return subset.filter(callback(filterDatapoint, variables));
	}

	function filterDatapoint(variables : Array<Dynamic>, dp : DataPoint)
	{
		for (i in 0...independentVariables.length)
		{
			if (Reflect.field(dp, independentVariables[i].type) != variables[i])
				return false;
		}
		return true;
	}
*/
	function process(data : Array<DataPoint>)
	{
		trace(data);
		fillIndependentVariables(data);
		fillDependentVariables(data);
		onData.dispatch(data);
	}
/*
	function preprocess()
	{

	}
*/
/*
	function process(data : Array<Array<DataPoint>>)
	{
		if (null == data || data.length == 0 || data[0].length == 0)
		{
			onData.dispatch([]);
			return;
		}
		data = scale(data);

		var dataPoints = transform(data);
		fillIndependentVariables(dataPoints);

//		var dataPoints : Array<DataPoint> = [];
//		var variablesset = getVariableIndependentValues();
//		for (values in variablesset)
//		{
//			var subsets = [];
//			for (d in data)
//			{
//				// generalize this and possibly integrate with rescale()
//				var subset = filterSubset(d, values);
//				if(subset.length > 0)
//					subsets.push(subset);
//			}
//			if (subsets.length == 0 || subsets[0].length == 0)
//				continue;
//			var transformed = transform(subsets);
//			dataPoints = dataPoints.concat(transformed);
//		}
//		fillDependentVariables(dataPoints);


		fillDependentVariables(dataPoints);

		onData.dispatch(dataPoints);
	}
*/
	function fillDependentVariables(data : Array<DataPoint>)
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

	function fillIndependentVariables(flatten : Array<DataPoint>)
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

//	function getVariableIndependentValues()
//	{
//		return independentVariables.map(function(variable, i) return variable.axis.range(variable.min(), //variable.max())).product();
//	}
}