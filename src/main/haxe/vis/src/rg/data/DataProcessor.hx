/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import hxevents.Dispatcher;
import rg.controller.factory.FactoryAxis;
import rg.data.VariableIndependentContext;
import rg.data.VariableDependentContext;
import rg.data.source.DataSourceReportGrid;
import rg.util.DataPoints;
import rg.data.Stats;
import thx.collection.Set;
using Arrays;

class DataProcessor
{
	public var sources(default, null) : Sources<Dynamic>;
	
	public var onData(default, null) : Dispatcher<Array<DataPoint>>;
	public var independentVariables : Array<VariableIndependentContext<Dynamic>>;
	public var dependentVariables : Array<VariableDependentContext<Dynamic>>;
	
	public function new(sources : Sources<Dynamic>) 
	{
		this.sources = sources;
		sources.onLoading.add(preprocess);
		sources.onLoad.add(process);
		onData = new Dispatcher();
	}
	
	public dynamic function transform(s : Array<Array<DataPoint>>) : Array<DataPoint>
	{
		return s.flatten();
	}
	
	public dynamic function scale(s : Array<Array<DataPoint>>) : Array<Array<DataPoint>>
	{
		return s;
	}
	
	public function load()
	{
		sources.load();
	}

	function filterSubset(subset : Array<DataPoint>, variables : Array<Dynamic>)
	{
		return subset.filter(callback(filterDatapoint, variables));
	}
	
	function filterDatapoint(variables : Array<Dynamic>, dp : DataPoint)
	{
		var name;
		for (i in 0...independentVariables.length)
		{
			name = independentVariables[i].variable.type;
			if (Reflect.field(dp, name) != variables[i])
				return false;
		}
		return true;
	}
	
	function preprocess()
	{
		// reset stats
		for (ctx in independentVariables)
			ctx.variable.stats.reset();
		
		for (ctx in dependentVariables)
			ctx.variable.stats.reset();
	}
	
	function process(data : Array<Array<DataPoint>>)
	{
		if (null == data || data.length == 0 || data[0].length == 0)
		{
			onData.dispatch([]);
			return;
		}
		
		data = scale(data);
		fillIndependentVariables(data);

		var dataPoints : Array<DataPoint> = [];
		var variablesset = getVariableIndependentValues();
		for (values in variablesset)
		{
			var subsets = [];
			for (d in data)
			{
				// generalize this and possibly integrate with rescale()
				var subset = filterSubset(d, values);
				if(subset.length > 0)
					subsets.push(subset);
			}
			if (subsets.length == 0 || subsets[0].length == 0)
				continue;
			var transformed = transform(subsets);
			dataPoints = dataPoints.concat(transformed);
		}
		fillDependentVariables(dataPoints);
		onData.dispatch(dataPoints);
	}

	function fillDependentVariables(data : Array<DataPoint>)
	{
		for (ctx in dependentVariables)
		{
			if (ctx.partial)
			{
				var variable = ctx.variable,
					values = DataPoints.values(data, variable.type);
				if (values.length == 0)
					continue;

				if (null == variable.axis)
				{
					variable.setAxis(new FactoryAxis().create(
						variable.type,
						Std.is(values[0], Float)
					));
				}
				variable.stats.addMany(values);
				
				if (null == variable.min)
					variable.min = variable.stats.isNumeric ? 0 : variable.stats.min;
				if (null == variable.max)
					variable.max = variable.stats.max;
			} else {
				ctx.variable.stats.addMany(DataPoints.values(data, ctx.variable.type));
			}
			var discrete;
			if (null != ctx.variable.scaleDistribution && null != (discrete = Types.as(ctx.variable.axis, IAxisDiscrete)))
			{
				discrete.scaleDistribution = ctx.variable.scaleDistribution;
				ctx.variable.scaleDistribution = null; // reset to avoid multiple assign
			}
		}
	}
	
	function fillIndependentVariables(data : Array<Array<DataPoint>>)
	{
		var toprocess = false,
			flatten = data.flatten();
		for (ctx in independentVariables)
		{
			if (ctx.partial)
				toprocess = true;
			var discrete;
			if (null != ctx.variable.scaleDistribution && null != (discrete = Types.as(ctx.variable.axis, IAxisDiscrete)))
			{
				discrete.scaleDistribution = ctx.variable.scaleDistribution;
				ctx.variable.scaleDistribution = null; // reset to avoid multiple assign
			}
		}
		if (toprocess)
		{
			for (ctx in independentVariables)
			{
				if (ctx.partial)
					fillIndependentVariable(ctx.variable, flatten);
			}
		}
	}
	
	function fillIndependentVariable(variable : VariableIndependent<Dynamic>, data : Array<DataPoint>)
	{
		variable.stats.addMany(DataPoints.values(data, variable.type));
		var ordinal = Types.as(variable.axis, AxisOrdinal);
		if (null != ordinal)
		{
			if (null == ordinal.values || ordinal.values.length == 0)
				ordinal.values = Set.ofArray(variable.stats.values);
		}
		
		if (null == variable.min)
			variable.min = variable.stats.min;
			
		if (null == variable.max)
			variable.max = variable.stats.max;
	}
	
	function getVariableIndependentValues()
	{
		return independentVariables.map(function(d, i) return d.variable.axis.range(d.variable.min, d.variable.max)).product();
	}
}