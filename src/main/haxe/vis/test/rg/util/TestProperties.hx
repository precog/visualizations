/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;

import utest.Assert;

class TestProperties
{
	public function testIsTime()
	{
		Assert.isTrue(Properties.isTime(".#time:hour"));
		Assert.isTrue(Properties.isTime(".#time:day"));
		Assert.isFalse(Properties.isTime("time:hour"));
		Assert.isFalse(Properties.isTime("count"));
	}
	
	public function new() {}
}