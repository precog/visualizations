/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
using Objects;

class TestCountTimeIntersectTransform extends TestBase
{
	public function testTransform()
	{
		var transform = new TransformCountTimeIntersect({ }, [".platform"], "impression", "day", "count");
		
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
			properties : ( { count : 7 } ).addFields([".#time:day", ".platform"], [1310342400000, "iphone"]),
			segment : null
		}, {
			event : "impression",
			properties : ( { count : 5 } ).addFields([".#time:day", ".platform"], [1310428800000, "iphone"]),
			segment : null
		}, {
			event : "impression",
			properties : ( { count : 1972 } ).addFields([".#time:day", ".platform"], [1310342400000, "android"]),
			segment : null
		}, {
			event : "impression",
			properties : ( { count : 2 } ).addFields([".#time:day", ".platform"], [1310428800000, "android"]),
			segment : null
		}], transform.transform(data));
	}
	
	public function testTransformDeep()
	{
		var transform = new TransformCountTimeIntersect({ }, [".floatValue", ".boolValue", ".platform"], "impression", "day", "count");
		
		var data = ( { } ).addField("1.2", ( { } ).addField("true", ( { } ).addField('"iphone"', {
			type : "timeseries",
			periodicity : "day",
			data: [[1310342400000, 7], [1310428800000, 5]]
		})));
		
		assertDataPoints([{
			event : "impression",
			properties : ( { count : 7 } ).addFields([".#time:day", ".platform", ".boolValue", ".floatValue"], [1310342400000, "iphone", true, 1.2]),
			segment : null
		}, {
			event : "impression",
			properties : ( { count : 5 } ).addFields([".#time:day", ".platform", ".boolValue", ".floatValue"], [1310428800000, "iphone", true, 1.2]),
			segment : null
		}], transform.transform(data));
	}
}