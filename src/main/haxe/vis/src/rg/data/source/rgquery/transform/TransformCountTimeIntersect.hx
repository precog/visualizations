/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
import rg.data.DataPoint;
using Arrays;

class TransformCountTimeIntersect implements ITransform<Dynamic>
{
	var properties : Dynamic;
	var unit : String;
	var periodicity : String;
	var fields : Array<String>;
	var event : String;
	public function new(properties : Dynamic, fields : Array<String>, event : String, periodicity : String, unit : String) 
	{
		this.properties = properties;
		this.unit = unit;
		this.periodicity = periodicity;
		this.fields = fields;
		this.event = event;
	}
	
	public function transform(data : Dynamic) : Array<DataPoint>
	{
		var values = Objects.flatten(data),
			properties = this.properties,
			unit = this.unit;
		if (null == values || 0 == values.length)
			return [];
		
			var result = [];
		
		for (item in values)
		{
			var arr : Array<Array<Float>> = item.value,
				values = item.fields.copy(),
				timestamp = values.pop();

			for (i in 0...arr.length)
			{
				/*
				var p = Objects.addFields(Dynamics.clone(properties), 
					[".#timestamp"],
					[arr[i][0]]
				);
				*/
				var p = Objects.addField(Dynamics.clone(properties), 
					".#time:" + periodicity,
					arr[i][0]
				);
					
				Objects.addFields(p,
					fields,
					values.map(typedValue)
				);
				result.push({
					properties : p,
					value : arr[i][1],
					unit : unit,
					event : event
				});
			}
		}
		return result;
	}
	
	static function typedValue(s : String, ?_) : Dynamic
	{
		if (s.substr(0, 1) == '"')
			return StringTools.replace(s.substr(1, s.length - 2), '\\"', '"');
		else if ((s = s.toLowerCase()) == "true")
			return true;
		else if (s == "false")
			return false;
		else
			return Std.parseFloat(s);
	}
}