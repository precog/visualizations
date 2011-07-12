/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.transform;
using Objects;

class TestCountTimeIntersectTransform extends TestBase
{
	public function testTransform()
	{
		var transform = new CountTimeIntersectTransform(({ }).addFields([".#periodicity"], ["day"]), [".platform"]);
		
		var data = ({ }).addFields(['"iphone"', '"android"'], [{ day: [[1310342400000,7],[1310428800000,5]]}, { day: [[1310342400000,1972],[1310428800000,2]]}]);
		
		assertDataPoints([{
			id : null,
			unit : "count",
			value : 7.0,
			predicates : ( {  } ).addFields([".#periodicity", ".#timestamp", ".platform"], ["day", 1310342400000, "iphone"])
		}, {
			id : null,
			unit : "count",
			value : 5.0,
			predicates : ( {  } ).addFields([".#periodicity", ".#timestamp", ".platform"], ["day", 1310428800000, "iphone"])
		}, {
			id : null,
			unit : "count",
			value : 1972.0,
			predicates : ( {  } ).addFields([".#periodicity", ".#timestamp", ".platform"], ["day", 1310342400000, "android"])
		}, {
			id : null,
			unit : "count",
			value : 2.0,
			predicates : ( {  } ).addFields([".#periodicity", ".#timestamp", ".platform"], ["day", 1310428800000, "android"])
		}], transform.transform(data));
	}
	
	public function testTransformDeep()
	{
		var transform = new CountTimeIntersectTransform(({ }).addFields([".#periodicity"], ["day"]), [".floatValue", ".boolValue", ".platform"]);
		
		var data = ({ }).addField("1.2", ({ }).addField("true", ({ }).addField('"iphone"', { day: [[1310342400000,7],[1310428800000,5]]})));
		
		assertDataPoints([{
			id : null,
			unit : "count",
			value : 7.0,
			predicates : ( {  } ).addFields([".#periodicity", ".#timestamp", ".platform", ".boolValue", ".floatValue"], ["day", 1310342400000, "iphone", true, 1.2])
		}, {
			id : null,
			unit : "count",
			value : 5.0,
			predicates : ( {  } ).addFields([".#periodicity", ".#timestamp", ".platform", ".boolValue", ".floatValue"], ["day", 1310428800000, "iphone", true, 1.2])
		}], transform.transform(data));
	}
}