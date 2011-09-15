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
		var tmin = null, tmax = null;
		for (variable in independentVariables)
		{
			var v = variable.variable;
			if(!Std.is(v.axis, AxisTime) && !Std.is(v.axis, AxisGroupByTime))
				continue;
			tmin = v.min != 0 ? v.min : null;
			tmax = v.max != 0 ? v.max : null;
			break;
		}
		if (null != tmin || null != tmax)
		{
			for (ds in sources)
			{
				var query = Types.as(ds, DataSourceReportGrid);
				if (null == query)
					continue;
				if(null != tmin && null == query.start)
					query.start = tmin;
				if(null != tmax && null == query.end)
					query.end = tmax;
			}
		}
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
	
	static function emptyStats() return { min : Math.POSITIVE_INFINITY, max : Math.NEGATIVE_INFINITY, tot : 0.0 }
	static function updateStats(variable : rg.data.Variable<Dynamic, IAxis<Dynamic>>, dps : Array<DataPoint>)
	{
		var stats = DataPoints.stats(dps, variable.type);
		if (stats.min < variable.stats.min)
			variable.stats.min = stats.min;
		if (stats.max > variable.stats.max)
			variable.stats.max = stats.max;
		variable.stats.tot += stats.tot;
	}
	
	function preprocess()
	{
		// reset stats
		for (ctx in independentVariables)
			ctx.variable.stats = emptyStats();
		
		for (ctx in dependentVariables)
			ctx.variable.stats = emptyStats();
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
			updateStats(ctx.variable, data);
			if (ctx.partial)
			{
				var variable = ctx.variable,
					values = data.map(function(dp, _) return Reflect.field(dp, variable.type)).filter(function(v) return null != v);
				if (values.length == 0)
					continue;
				var value,
					compare = Dynamics.comparef(value = values[0]);
				if (null == variable.axis)
				{
					variable.setAxis(new FactoryAxis().create(
						variable.type,
						Std.is(value, Float)
					));
				}
				if (null == variable.min)
				{
					variable.min = value;
					for (j in 1...values.length)
					{
						value = values[j];
						if (compare(variable.min, value) > 0)
							variable.min = value;
					}
				}
				if (null == variable.max)
				{
					variable.max = value;
					for (j in 1...values.length)
					{
						value = values[j];
						if (compare(variable.max, value) < 0)
							variable.max = value;
					}
				}
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
			{
				toprocess = true;
			}
			var discrete;
			if (null != ctx.variable.scaleDistribution && null != (discrete = Types.as(ctx.variable.axis, IAxisDiscrete)))
			{
				discrete.scaleDistribution = ctx.variable.scaleDistribution;
				ctx.variable.scaleDistribution = null; // reset to avoid multiple assign
			}
			updateStats(cast ctx.variable, flatten);
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
		// AxisTime should never be in a context with partial = true that why we cast to AxisOrdinal
		var axis : AxisOrdinal<Dynamic> = cast variable.axis,
			property = variable.type,
			values = axis.values,
			value;
		for (dp in data)
		{
			if (Reflect.hasField(dp, property))
			{
				value = Reflect.field(dp, property);
				if (!values.exists(value))
				{
					if (values.length == 0)
						variable.min = value;
					values.add(value);
					variable.max = value;
				}
			}
		}
	}
	
	function getVariableIndependentValues()
	{
		return independentVariables.map(function(d, i) return d.variable.range()).product();
	}
}