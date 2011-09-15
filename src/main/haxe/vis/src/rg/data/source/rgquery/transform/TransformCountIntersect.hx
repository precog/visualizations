/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
import rg.data.DataPoint;
import rg.util.Properties;
using Arrays;

class TransformCountIntersect implements ITransform<Dynamic>
{
	var properties : Dynamic;
	var fields : Array<String>;
	var event : String;
	public function new(properties : Dynamic, fields : Array<String>, event : String) 
	{
		this.properties = properties;
		this.fields = fields;
		this.event = event;
	}
	
	public function transform(data : Dynamic) : Array<DataPoint>
	{
		var items = Objects.flatten(data, fields.length);
		if (null == items || 0 == items.length)
			return [];
		
		var result = [];
		for (item in items)
		{
			var count : Int = item.value,
				p : Dynamic = Dynamics.clone(properties);
			Objects.addFields(p,
				fields,
				item.fields.map(Transforms.typedValue)
			);
			Reflect.setField(p, ".#time:eternity", 0); // TODO kind of hackish
			p.count = count;
			p.event = event;
			result.push(p);
		}
		return result;
	}
}