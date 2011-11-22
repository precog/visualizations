/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
using Objects;

class TestTransformIntersectTime extends TestBase
{
	public function testTransform()
	{
		var transform = new TransformIntersectTime({ }, [".platform"], "impression", "day", "count");

		var data = ( { } ).addFields(['"iphone"', '"android"'], [
			{
				type : "timeseries",
				periodicity : "day",
				data: [[1310342400000, 7], [1310428800000, 5]]
			},
			{
				type : "timeseries",
				periodicity : "day",
				data: [[1310342400000, 1972], [1310428800000, 2]]
			}]);

		assertDataPoints([{
			event : "impression",
			count : 7
		}.addFields([".#time:day", ".platform"], [1310342400000, "iphone"]), {
			event : "impression",
			count : 5
		}.addFields([".#time:day", ".platform"], [1310428800000, "iphone"]), {
			event : "impression",
			count : 1972,
		}.addFields([".#time:day", ".platform"], [1310342400000, "android"]), {
			event : "impression",
			count : 2,
		}.addFields([".#time:day", ".platform"], [1310428800000, "android"])], transform.transform(data));
	}

	public function testTransformDeep()
	{
		var transform = new TransformIntersectTime({ }, [".floatValue", ".boolValue", ".platform"], "impression", "day", "count");

		var data = ( { } ).addField("1.2", ( { } ).addField("true", ( { } ).addField('"iphone"', {
			type : "timeseries",
			periodicity : "day",
			data: [[1310342400000, 7], [1310428800000, 5]]
		})));

		assertDataPoints([{
			event : "impression",
			count : 7
		}.addFields([".#time:day", ".platform", ".boolValue", ".floatValue"], [1310342400000, "iphone", true, 1.2]), {
			event : "impression",
			count : 5
		}.addFields([".#time:day", ".platform", ".boolValue", ".floatValue"], [1310428800000, "iphone", true, 1.2])], transform.transform(data));
	}
}