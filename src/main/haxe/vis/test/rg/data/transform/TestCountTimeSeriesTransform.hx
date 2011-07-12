/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.transform;
using Objects;

class TestCountTimeSeriesTransform extends TestBase
{
	public function testTransform()
	{
		var transform = new CountTimeSeriesTransform({ periodicity : "day" });
		
		var data = { day : [[1310342400000, 0], [1310428800000, 1], [1310515200000, 2]] };
		
		assertDataPoints([{
			id : null,
			unit : "count",
			value : 0.0,
			predicates : ( {  } ).addFields(["periodicity", ".#timestamp"], ["day", 1310342400000])
		}, {
			id : null,
			unit : "count",
			value : 1.0,
			predicates : ( {  } ).addFields(["periodicity", ".#timestamp"], ["day", 1310428800000])
		}, {
			id : null,
			unit : "count",
			value : 2.0,
			predicates : ( {  } ).addFields(["periodicity", ".#timestamp"], ["day", 1310515200000])
		}], transform.transform(data));
	}
}