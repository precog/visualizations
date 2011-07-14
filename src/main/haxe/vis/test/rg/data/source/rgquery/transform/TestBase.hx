/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;

import haxe.PosInfos;
import utest.Assert;

class TestBase 
{
	public function new() { }

	function assertDataPoint<T>(expected : DataPoint<T>, test : DataPoint<T>, ?pos : PosInfos)
	{
		Assert.equals(expected.event, test.event, pos);
		Assert.equals(expected.unit, test.unit, pos);
		Assert.same(expected.value, test.value, pos);
		Assert.same(expected.properties, test.properties, pos);
	}
	
	function assertDataPoints<T>(expected : Array<DataPoint<T>>, test : Array<DataPoint<T>>, ?pos : PosInfos)
	{
		for (i in 0...expected.length)
			assertDataPoint(expected[i], test[i], pos);
	}
}