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
			unit : "count",
			value : 0.0,
			event : "impression",
			properties : ( {  } ).addFields([".#time:day"], [1310342400000])
		}, {
			unit : "count",
			value : 1.0,
			event : "impression",
			properties : ( {  } ).addFields([".#time:day"], [1310428800000])
		}, {
			unit : "count",
			value : 2.0,
			event : "impression",
			properties : ( {  } ).addFields([".#time:day"], [1310515200000])
		}], transform.transform(data));
	}
}