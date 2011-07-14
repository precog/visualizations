/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
using Objects;

class TestCountTransform extends TestBase
{
	public function testTransform()
	{
		var transform = new TransformCount({ }, "impression", "count");
		
		var data = 39;
		
		assertDataPoints([{
			unit : "count",
			value : 39.0,
			event : "impression",
			properties : { }
		}], transform.transform(data));
		
		
		transform = new TransformCount({ }, "impression", "otherunit");
		
		data = 7;
		
		assertDataPoints([{
			unit : "otherunit",
			value : 7.0,
			event : "impression",
			properties : { }
		}], transform.transform(7));
	}
}