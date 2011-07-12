/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.transform;
using Objects;

class TestCountTransform extends TestBase
{
	public function testTransform()
	{
		var transform = new CountTransform({ });
		
		var data = 39;
		
		assertDataPoints([{
			id : null,
			unit : "count",
			value : 39.0,
			predicates : { }
		}], transform.transform(data));
		
		
		transform = new CountTransform({ }, "otherunit");
		
		data = 7;
		
		assertDataPoints([{
			id : null,
			unit : "otherunit",
			value : 7.0,
			predicates : { }
		}], transform.transform(7));
	}
}