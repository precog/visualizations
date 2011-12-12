/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
import Objects;
import rg.data.DataPoint;

class TransformTagCount implements ITransform<Dynamic<Int>>
{
	var properties : Dynamic;
	var unit : String;
	var event : String;
	var tag : String;
	public function new(properties : Dynamic, event : String, unit : String, tag : String)
	{
		this.properties = properties;
		this.unit       = unit;
		this.event      = event;
		this.tag        = tag;
	}

	public function transform(data : Dynamic<Int>) : Array<DataPoint>
	{
		var result = [], dp, value;
		for(field in Reflect.fields(data))
		{
			value = Reflect.field(data, field);
			dp = { event : event };
			Objects.copyTo(properties, dp);
			Objects.addField(dp, unit, value);
			Objects.addField(dp, tag, Strings.trim(field, "/"));
			result.push(dp);
		}
		return result;
	}
}