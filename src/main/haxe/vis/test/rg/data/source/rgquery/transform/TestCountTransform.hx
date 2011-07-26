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
			event : "impression",
			count : 39.0
		}], transform.transform(data));
		
		
		transform = new TransformCount({ }, "impression", "otherunit");
		
		data = 7;
		
		assertDataPoints([{
			event : "impression",
			otherunit : 7.0
		}], transform.transform(7));
	}
}