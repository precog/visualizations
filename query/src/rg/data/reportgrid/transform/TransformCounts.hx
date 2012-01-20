/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.reportgrid.transform;
import Objects;
import rg.data.DataPoint;
using Arrays;

class TransformCounts implements ITransform<Array<{ count : Int, value : Dynamic }>>
{
	var properties : Dynamic;
	var unit : String;
	var event : String;
	var unitvalue : String;
	public function new(properties : Dynamic, event : String, unit : String, unitvalue = "value") 
	{
		this.properties = properties;
		this.unit = unit;
		this.event = event;
		this.unitvalue = unitvalue;
	}
	
	public function transform(data : Array<{ count : Int, value : Dynamic }>) : Array<DataPoint>
	{
		var result = data.map(function(d, i) {
			var dp = { event : event };
			Objects.copyTo(properties, dp);
			Objects.addField(dp, unit, d.count);
			Objects.addField(dp, unitvalue, d.value);
			return dp;
		});
		return result;
	}
}