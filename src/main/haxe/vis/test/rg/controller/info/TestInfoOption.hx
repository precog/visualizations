/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

import utest.Assert;

class TestInfoOption
{
	public function testSize() 
	{
		var info = new InfoOption( { width : 10.3, height : 5 } );
		Assert.equals(10, info.width);
		Assert.equals(5, info.height);
	}
	
	public function new() { }
}