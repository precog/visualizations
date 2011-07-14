/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

import haxe.PosInfos;
import utest.Assert;
using Arrays;

class TestAxisOrdinal 
{
	public function testOrdinal()
	{
		var ordinal = new AxisOrdinal(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
		assertValues(['b', 'c', 'd'], ordinal.sample('b', 'd'));
		assertValues([], ordinal.sample('b', 'd', 0));
		assertValues(['b'], ordinal.sample('b', 'd', 1));
		assertValues(['b', 'd'], ordinal.sample('b', 'd', 2));
		assertValues(['b', 'c', 'd'], ordinal.sample('b', 'd', 3));
		assertValues(['b', 'c', 'd'], ordinal.sample('b', 'd', 4));
		assertValues(['a', 'h'], ordinal.sample('a', 'h', 2));
		assertValues(['a', 'd', 'g'], ordinal.sample('a', 'h', 3));
		assertValues(['a', 'c', 'e', 'g'], ordinal.sample('a', 'h', 4));
	}
	
	function assertValues<T>(expected : Array<T>, test : Array<ITickmark<T>>, ?pos : PosInfos)
	{
		var t = test.map(function(d, i) return d.value);
		Assert.same(expected, t, pos);
	}
	
	public function new() { }
}