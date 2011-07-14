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
		
		var data = ({ }).addFields(['"iphone"', '"android"'], [{ day: [[1310342400000,7],[1310428800000,5]]}, { day: [[1310342400000,1972],[1310428800000,2]]}]);
		
		assertDataPoints([{
			event : "impression",
			properties : ( { count : 7 } ).addFields([".#time:day", ".platform"], [1310342400000, "iphone"])
		}, {
			event : "impression",
			properties : ( { count : 5 } ).addFields([".#time:day", ".platform"], [1310428800000, "iphone"])
		}, {
			event : "impression",
			properties : ( { count : 1972 } ).addFields([".#time:day", ".platform"], [1310342400000, "android"])
		}, {
			event : "impression",
			properties : ( { count : 2 } ).addFields([".#time:day", ".platform"], [1310428800000, "android"])
		}], transform.transform(data));
	}
	
	public function testTransformDeep()
	{
		var transform = new TransformCountTimeIntersect({ }, [".floatValue", ".boolValue", ".platform"], "impression", "day", "count");
		
		var data = ({ }).addField("1.2", ({ }).addField("true", ({ }).addField('"iphone"', { day: [[1310342400000,7],[1310428800000,5]]})));
		
		assertDataPoints([{
			event : "impression",
			properties : ( { count : 7 } ).addFields([".#time:day", ".platform", ".boolValue", ".floatValue"], [1310342400000, "iphone", true, 1.2])
		}, {
			event : "impression",
			properties : ( { count : 5 } ).addFields([".#time:day", ".platform", ".boolValue", ".floatValue"], [1310428800000, "iphone", true, 1.2])
		}], transform.transform(data));
	}
}