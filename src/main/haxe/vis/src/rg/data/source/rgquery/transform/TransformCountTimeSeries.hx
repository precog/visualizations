/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
import rg.data.DataPoint;
using Arrays;

class TransformCountTimeSeries implements ITransform<Dynamic<Array<Array<Float>>>, Float>
{
	var properties : Dynamic;
	var unit : String;
	var periodicity : String;
	var event : String;
	public function new(properties : Dynamic, event : String, periodicity : String, unit : String) 
	{
		this.properties = properties;
		this.unit = unit;
		this.periodicity = periodicity;
		this.event = event;
	}
	
	public function transform(data : Dynamic<Array<Array<Float>>>) : Array<DataPoint<Float>>
	{
		var values : Array<Array<Float>> = Reflect.field(data, periodicity),
			properties = this.properties,
			unit = this.unit,
			event = this.event,
			periodicity = this.periodicity;
		if (null == values)
			return [];
		return values.map(function(d, _) {
			var p = Objects.addFields(Dynamics.clone(properties), [".#time:"+periodicity], [d[0]]);
			return {
				properties : p,
				value : d[1],
				unit : unit,
				event : event
			}
		});
	}
}