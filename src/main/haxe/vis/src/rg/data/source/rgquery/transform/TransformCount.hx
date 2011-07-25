/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
import Objects;
import rg.data.DataPoint;

class TransformCount implements ITransform<Int>
{
	var properties : Dynamic;
	var unit : String;
	var event : String;
	public function new(properties : Dynamic, event : String, unit : String) 
	{
		this.properties = properties;
		this.unit = unit;
		this.event = event;
	}
	
	public function transform(data : Int)
	{
		var dp : DataPoint = {
			properties : Objects.addField(Objects.clone(properties), unit, data),
			event : event,
			segment : null
		};
		return [dp];
	}
}