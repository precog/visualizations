/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
import rg.data.DataPoint;
import rg.util.Properties;
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
		var items = Objects.flatten(data, fields.length),
			properties = this.properties,
			unit = this.unit;
		if (null == items || 0 == items.length)
			return [];
		
		var result = [];
		for (item in items)
		{
			var arr : Array<Array<Dynamic>> = item.value;
			for (i in 0...arr.length)
			{
				var p : Dynamic = Dynamics.clone(properties);
				Objects.addFields(p,
					fields,
					item.fields.map(typedValue)
				);
				Objects.addFields(p, 
					[Properties.timeProperty(periodicity), unit],
					[arr[i][0].timestamp, arr[i][1]]
				);
				p.event = event;
				result.push(p);
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