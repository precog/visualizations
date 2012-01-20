/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.reportgrid.transform;
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

	public function transform(data : Int) : Array<DataPoint>
	{
		var dp = { event : event };
		Objects.copyTo(properties, dp);
		Objects.addField(dp, unit, data);
		return [dp];
	}
}