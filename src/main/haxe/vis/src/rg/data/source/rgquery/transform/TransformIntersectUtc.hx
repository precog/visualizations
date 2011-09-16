/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
import rg.data.DataPoint;
import rg.util.Properties;
using Arrays;

class TransformIntersectUtc implements ITransform<Dynamic>
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
					item.fields.map(Transforms.typedValue)
				);
				Objects.addFields(p, 
					[Properties.timeProperty(periodicity), unit],
					[Date.fromString(arr[i][0].datetime), arr[i][1]]
				);
				p.event = event;
				result.push(p);
			}
		}
		trace(result);
		return result;
	}
}