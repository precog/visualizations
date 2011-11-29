/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
import rg.data.DataPoint;
import rg.util.Properties;
import thx.date.DateParser;
using Arrays;

class TransformIntersectGroupUtc implements ITransform<Dynamic>
{
	var properties : Dynamic;
	var unit : String;
	var periodicity : String;
	var groupby : String;
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
//		trace(data);
		var items = Objects.flatten(data, fields.length),
			properties = this.properties,
			unit = this.unit;
		if (null == items || 0 == items.length)
			return [];

		var result = [],
			// TODO, dirty fix ... needs to be removed
			shift = 0.0;
		for (i in 0...items.length)
		{
			try 
			{
				shift = Reflect.field(items[i].value[0][0], periodicity);
				break;
			} catch (e:Dynamic) { }
		}
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
					[Reflect.field(arr[i][0], periodicity) - shift, arr[i][1]]
				);
				p.event = event;
				result.push(p);
			}
		}
		return result;
	}
}