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
		sources.onLoad.add(process);
		onData = new Dispatcher();
	}
	
	public dynamic function transform(s : Array<Array<DataPoint>>) : Array<DataPoint>
	{
		return s[0];
	}
	
	public function load()
	{
		var tmin = null, tmax = null;
		for (variable in independentVariables)
		{
			if(!Std.is(variable.variable.axis, AxisTime) && !Std.is(variable.variable.axis, AxisGroupByTime))
				continue;
			tmin = variable.variable.min;
			tmax = variable.variable.max;
			break;
		}
		if (null != tmin || null != tmax)
		{
			for (ds in sources)
			{
				var query = Types.as(ds, DataSourceReportGrid);
				if (null == query)
					continue;
				query.start = tmin;
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
	
	function process(data : Array<Array<DataPoint>>)
	{
		if (null == data || data.length == 0 || data[0].length == 0)
		{
			onData.dispatch([]);
			return;
		}
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
			dataPoints = pushDataPoints(subsets, dataPoints);
		}
			
		fillDependentVariables(dataPoints);		
		onData.dispatch(dataPoints);
	}
	
	function pushDataPoints(subsets : Array<Array<DataPoint>>, dataPoints : Array<DataPoint>)
	{
		if (subsets.length == 0 || subsets[0].length == 0)
			return dataPoints;
		var transformed = transform(subsets);
		return dataPoints.concat(transformed);
	}

	function fillDependentVariables(data : Array<DataPoint>)
	{
		for (ctx in dependentVariables)
		{
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
					variable = ctx.variable = new VariableDependent(
						variable.type,
						new FactoryAxis().create(
							variable.type,
							Std.is(value, Float)
						),
						variable.min,
						variable.max);
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
		}
	}
	
	function fillIndependentVariables(data : Array<Array<DataPoint>>)
	{
		var toprocess = false;
		for (ctx in independentVariables)
			if (ctx.partial)
			{
				toprocess = true;
				break;
			}
		if (toprocess)
		{
			var flatten = data.flatten();
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