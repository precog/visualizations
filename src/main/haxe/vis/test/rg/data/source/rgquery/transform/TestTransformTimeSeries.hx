/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
import rg.data.source.rgquery.IExecutorReportGrid;
using Objects;

class TestTransformTimeSeries extends TestBase
{
	public function testTransform()
	{
		var transform = new TransformTimeSeries({ }, "impression", "day", "count");

		var data : TimeSeriesType = { type : "timeseries", periodicity : "day", data : [[1310342400000, 0], [1310428800000, 1], [1310515200000, 2]] };

		assertDataPoints([{
			event : "impression",
			count : 0
		}.addFields([".#time:day"], [1310342400000]), {
			event : "impression",
			count : 1
		}.addFields([".#time:day"], [1310428800000]), {
			event : "impression",
			count : 2
		}.addFields([".#time:day"], [1310515200000])], transform.transform(data));
	}
}