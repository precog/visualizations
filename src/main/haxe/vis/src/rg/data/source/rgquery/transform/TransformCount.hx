/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;

class TransformCount implements ITransform<Int, Float>
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
		return [{
			properties : properties, // TODO, should be a clone?
			value : 0.0 + data,
			unit : unit,
			event : event
		}];
	}
}