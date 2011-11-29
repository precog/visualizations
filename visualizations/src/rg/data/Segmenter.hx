/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import rg.util.DataPoints;

class Segmenter 
{
	var on : String;
	var transform : Array<DataPoint> -> Array<DataPoint>;
	var scale : Array<DataPoint> -> Array<DataPoint>;
	public function new(on : String, transform : Array<DataPoint> -> Array<DataPoint>, scale : Array<DataPoint> -> Array<DataPoint>) 
	{
		this.on = on;
		this.transform = transform;
		this.scale = scale;
	}
	
	public function segment(data : Array<DataPoint>) : Array<Array<DataPoint>>
	{
		var segmented = if (null == on)
			[data];
		else
			DataPoints.partition(data, on);
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