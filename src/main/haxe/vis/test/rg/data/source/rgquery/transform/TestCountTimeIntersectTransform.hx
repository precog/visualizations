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
			unit : "count",
			value : 7.0,
			event : "impression",
			properties : ( {  } ).addFields([".#time:day", ".platform"], [1310342400000, "iphone"])
		}, {
			unit : "count",
			value : 5.0,
			event : "impression",
			properties : ( {  } ).addFields([".#time:day", ".platform"], [1310428800000, "iphone"])
		}, {
			unit : "count",
			value : 1972.0,
			event : "impression",
			properties : ( {  } ).addFields([".#time:day", ".platform"], [1310342400000, "android"])
		}, {
			unit : "count",
			value : 2.0,
			event : "impression",
			properties : ( {  } ).addFields([".#time:day", ".platform"], [1310428800000, "android"])
		}], transform.transform(data));
	}
	
	public function testTransformDeep()
	{
		var transform = new TransformCountTimeIntersect({ }, [".floatValue", ".boolValue", ".platform"], "impression", "day", "count");
		
		var data = ({ }).addField("1.2", ({ }).addField("true", ({ }).addField('"iphone"', { day: [[1310342400000,7],[1310428800000,5]]})));
		
		assertDataPoints([{
			unit : "count",
			value : 7.0,
			event : "impression",
			properties : ( {  } ).addFields([".#time:day", ".platform", ".boolValue", ".floatValue"], [1310342400000, "iphone", true, 1.2])
		}, {
			unit : "count",
			value : 5.0,
			event : "impression",
			properties : ( {  } ).addFields([".#time:day", ".platform", ".boolValue", ".floatValue"], [1310428800000, "iphone", true, 1.2])
		}], transform.transform(data));
	}
}