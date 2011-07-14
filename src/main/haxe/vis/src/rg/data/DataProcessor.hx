/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import hxevents.Notifier;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;
import thx.collections.HashList;

using Arrays;

class DataProcessor
{
	var sources : Sources<Dynamic>;
	
	public var onData(default, null) : Notifier;
	public var independentVariables : Array<VariableIndependent<Dynamic>>;
	public var dependentVariable : Array<VariableDependent<Dynamic>>;
	public var defaultAxis : String;
	public var defaultSegment : String;
	
	public function new(sources : Sources<Dynamic>) 
	{
		this.sources = sources;
		sources.onLoad.add(process);
		onData = new Notifier();
	}
	
	public dynamic function transform(s : Array<Array<DataPoint<Dynamic>>>) : Array<TransformItem>
	{
		return cast [{
			value : s[0][0].value
		}];
	}

	function filterSubset(subset : Array<DataPoint<Dynamic>>, variables : Array<Dynamic>)
	{
		return subset.filter(callback(filterDatapoint, variables));
	}
	
	function filterDatapoint(variables : Array<Dynamic>, dp : DataPoint<Dynamic>)
	{
		for (i in 0...independentVariables.length)
		{
			if (Reflect.field(dp.properties, independentVariables[i].type) != variables[i])
				return false;
		}
		return true;
	}
	
	function process(data : Array<Array<DataPoint<Dynamic>>>)
	{
//		if(null == independentVariables)
//			buildIndependentVariables(data);

		var variablesset = getVariableValues(),
			axisData : Hash<HashList<Array<DataPoint<Dynamic>>>> = new Hash();
		
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
					o, segment, axis, segments;
				for (d in ds)
				{
					o = {
						properties : first.properties,
						unit : first.unit,
						value : d.value,
						event : first.event
					};
					segment = null == d.segment ? defaultSegment : d.segment;
					axis = null == d.axis ? defaultAxis : d.axis;
					segments = axisData.get(axis);
					if (null == segments)
					{
						segments = new HashList();
						axisData.set(axis, segments);
					}
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
			
//		buildDependentVariable(axisData);
		
		associateData(axisData);
		
		onData.dispatch();
	}
	
	function associateData(data : Hash<HashList<Array<DataPoint<Dynamic>>>>)
	{
		// DO SOMETHING WITH THE FINAL DATA
		trace(data);
	}
/*
	function buildIndependentVariables(data : Array<Array<DataPoint<Dynamic>>>)
	{
		// TODO: build values if not available from the config
		// TODO: guess limits if not availavle from the config
		// instantiate variable classes
	}
	
	function buildDependentVariable(data : Hash<HashList<Array<DataPoint<Dynamic>>>>)
	{
		// instantiate variable class
	}
*/
	function getVariableValues()
	{
		return independentVariables.map(function(d,i) return d.range()).product();
	}
}

typedef TransformItem = { 
	value : Dynamic,
	segment : String,
	axis : String
}