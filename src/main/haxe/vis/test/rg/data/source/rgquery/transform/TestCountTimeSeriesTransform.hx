/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
using Objects;

class TestCountTimeSeriesTransform extends TestBase
{
	public function testTransform()
	{
		var transform = new TransformCountTimeSeries({ }, "impression", "day", "count");
		
		var data = { day : [[1310342400000, 0], [1310428800000, 1], [1310515200000, 2]] };
		
		assertDataPoints([{
			event : "impression",
			properties : ( { count : 0 } ).addFields([".#time:day"], [1310342400000])
		}, {
			event : "impression",
			properties : ( { count : 1 } ).addFields([".#time:day"], [1310428800000])
		}, {
			event : "impression",
			properties : ( { count : 2 } ).addFields([".#time:day"], [1310515200000])
		}], transform.transform(data));
	}
}