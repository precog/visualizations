/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.reportgrid.transform;
import rg.data.DataPoint;
import rg.util.Properties;
using Arrays;

class TransformIntersect implements ITransform<Dynamic>
{
	var properties : Dynamic;
	var fields : Array<String>;
	var event : String;
	var orderDescending : Bool;
	public function new(properties : Dynamic, fields : Array<String>, event : String, orderDescending : Bool)
	{
		this.properties = properties;
		this.fields = fields;
		this.event = event;
		this.orderDescending = orderDescending;
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
		if(orderDescending)
		{
			result.sort(function(a, b) {
				return Ints.compare(b.count, a.count);
			});
		} else {
			result.sort(function(a, b) {
				return Ints.compare(a.count, b.count);
			});
		}
		return result;
	}
}