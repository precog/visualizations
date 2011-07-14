/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import hxevents.Dispatcher;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;
import thx.collections.HashList;

using Arrays;

class DataProcessor
{
	var sources : Sources<Dynamic>;
	
	public var onData(default, null) : Dispatcher<HashList<Array<DataPoint>>>;
	public var variablesToFill : Array<Bool>;
	public var independentVariables : Array<VariableIndependent<Dynamic>>;
	public var dependentVariable : Array<VariableDependent<Dynamic>>;
	public var defaultSegment : String;
	
	public function new(sources : Sources<Dynamic>) 
	{
		this.sources = sources;
		sources.onLoad.add(process);
		onData = new Dispatcher();
		variablesToFill = [];
	}
	
	public dynamic function transform(s : Array<Array<DataPoint>>) : Array<TransformItem>
	{
		return cast s[0];
	}

	function filterSubset(subset : Array<DataPoint>, variables : Array<Dynamic>)
	{
		return subset.filter(callback(filterDatapoint, variables));
	}
	
	function filterDatapoint(variables : Array<Dynamic>, dp : DataPoint)
	{
		for (i in 0...independentVariables.length)
		{
			if (Reflect.field(dp.properties, independentVariables[i].type) != variables[i])
				return false;
		}
		return true;
	}
	
	function process(data : Array<Array<DataPoint>>)
	{
		fillIndependentVariables(data);

		var variablesset = getVariableValues(),
			segments : HashList<Array<DataPoint>> = new HashList();
		
		for (variables in variablesset)
		{
			var subsets = [];
			for (d in data)
			{
				// generalize this and possibly integrate with rescale()
				subsets.push(filterSubset(d, variables));
			}

			if (subsets.length > 0 && subsets[0].length > 0)
			{
				var ds : Array<TransformItem> = transform(subsets),
					first = subsets[0][0],
					p, o, segment;
				for (o in ds)
				{
					segment = null == o.segment ? defaultSegment : o.segment;
					var segmentData = segments.get(segment);
					if (null == segmentData)
					{
						segmentData = [];
						segments.set(segment, segmentData);
					}
					segmentData.push(o);
				}
			}
		}
			
//		buildDependentVariable(segments);
		
//		associateData(segments);
		
		onData.dispatch(segments);
	}
	/*
	function associateData(data : HashList<Array<DataPoint>>)
	{
		onData.dispatch(data);
	}
	*/
	function fillIndependentVariables(data : Array<Array<DataPoint>>)
	{
		var toprocess = [];
		for (i in 0...independentVariables.length)
			if (variablesToFill[i] == true && Std.is(independentVariables[i].axis, AxisOrdinal))
				toprocess.push(i);
		if (toprocess.length > 0)
		{
			var flatten = data.flatten();
			for(pos in toprocess)
				fillIndependentVariable(independentVariables[pos], flatten);
		}
	}
	
	function fillIndependentVariable(variable : VariableIndependent<Dynamic>, data : Array<DataPoint>)
	{
		var axis : AxisOrdinal<Dynamic> = cast variable.axis,
			property = variable.type,
			values = axis.values,
			value;
		for (dp in data)
		{
			if (Reflect.hasField(dp.properties, property))
			{
				value = Reflect.field(dp.properties, property);
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

	function getVariableValues()
	{
		return independentVariables.map(function(d,i) return d.range()).product();
	}
}

typedef TransformItem = { > DataPoint,
	segment : String
}