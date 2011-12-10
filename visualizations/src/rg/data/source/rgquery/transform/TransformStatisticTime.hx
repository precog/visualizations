/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
import rg.data.DataPoint;
import rg.util.Properties;
using Arrays;

class TransformStatisticTime implements ITransform<Array<Array<Dynamic>>>
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

	public function transform(data : Array<Array<Dynamic>>) : Array<DataPoint>
	{
		var items = Objects.flatten(data, fields.length),
			properties = this.properties,
			unit = this.unit;
		if (null == items || 0 == items.length)
			return [];

		var result = [];
		for (arr in data)
		{
			var p : Dynamic = Dynamics.clone(properties);
			/*
			Objects.addFields(p,
				fields,
				item.fields.map(Transforms.typedValue)
			);
			*/
			Objects.addFields(p,
				[Properties.timeProperty(periodicity), unit],
				[
					(periodicity != "minute" && periodicity != "hour")
					? Dates.snap(arr[0].timestamp, periodicity)
					: arr[0].timestamp
					, arr[1]]
			);
			p.event = event;
			result.push(p);
		}
		return result;
	}
}