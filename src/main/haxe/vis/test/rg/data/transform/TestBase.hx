/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.transform;

import utest.Assert;

class TestBase 
{
	public function new() { }

	function assertDataPoint<T>(expected : DataPoint<T>, test : DataPoint<T>)
	{
		Assert.equals(expected.unit, test.unit);
		Assert.same(expected.value, test.value);
		Assert.same(expected.predicates, test.predicates);
	}
	
	function assertDataPoints<T>(expected : Array<DataPoint<T>>, test : Array<DataPoint<T>>)
	{
		for (i in 0...expected.length)
			assertDataPoint(expected[i], test[i]);
	}
}