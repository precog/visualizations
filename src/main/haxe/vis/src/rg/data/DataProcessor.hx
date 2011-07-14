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
	public var defaultSegment : String;
	
	public function new(sources : Sources<Dynamic>) 
	{
		this.sources = sources;
		sources.onLoad.add(process);
		onData = new Notifier();
	}
	
	public dynamic function transform(s : Array<Array<DataPoint>>) : Array<TransformItem>
	{
		return cast [s[0][0]];
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
//		if(null == independentVariables)
//			buildIndependentVariables(data);

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
		
		associateData(segments);
		
		onData.dispatch();
	}
	
	function associateData(data : HashList<Array<DataPoint>>)
	{
		// DO SOMETHING WITH THE FINAL DATA
		trace(data);
	}
/*
	function buildIndependentVariables(data : Array<Array<DataPoint>>)
	{
		// TODO: build values if not available from the config
		// TODO: guess limits if not availavle from the config
		// instantiate variable classes
	}
	
	function buildDependentVariable(data : Hash<HashList<Array<DataPoint>>>)
	{
		// instantiate variable class
	}
*/
	function getVariableValues()
	{
		return independentVariables.map(function(d,i) return d.range()).product();
	}
}

typedef TransformItem = { > DataPoint,
	segment : String
}