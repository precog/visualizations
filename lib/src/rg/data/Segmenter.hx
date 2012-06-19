/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import rg.util.DataPoints;
using Arrays;

class Segmenter
{
	var on : String;
	var transform : Array<DataPoint> -> Array<DataPoint>;
	var scale : Array<DataPoint> -> Array<DataPoint>;
	var values : Array<String>;
	public function new(on : String, transform : Array<DataPoint> -> Array<DataPoint>, scale : Array<DataPoint> -> Array<DataPoint>, values : Array<String>)
	{
		this.on = on;
		this.transform = transform;
		this.scale = scale;
		this.values = values;
	}

	public function segment(data : Array<DataPoint>) : Array<Array<DataPoint>>
	{
		var segmented;
		if (null == on) {
			segmented = [data];
		} else if(values.length > 0) {
			segmented = [];
			for(value in values) {
				segmented.push(data.filter(function(dp) {
					return Reflect.field(dp, on) == value;
				}));
			}
		} else {
			segmented = DataPoints.partition(data, on);
		}
		if (null != scale)
		{
			for (i in 0...segmented.length)
			{
				segmented[i] = scale(segmented[i]);
			}
		}
		if (null != transform)
		{
			var rotated = Arrays.rotate(segmented);
			for (i in 0...rotated.length)
			{
				rotated[i] = transform(rotated[i]);
			}
			segmented = Arrays.rotate(rotated);
//			segmented.reverse();
			// TODO needs to be reversed?
		}
		return segmented;
	}
}