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

	function assertDataPoint(expected : DataPoint, test : DataPoint, ?pos : PosInfos)
	{
		Assert.same(expected, test, pos);
	}
	
	function assertDataPoints(expected : Array<DataPoint>, test : Array<DataPoint>, ?pos : PosInfos)
	{
		for (i in 0...expected.length)
			assertDataPoint(expected[i], test[i], pos);
	}
}