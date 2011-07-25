/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

import utest.Assert;
using rg.controller.info.Info;

class TestInfoSvgOption
{
	public function testSize() 
	{
		var info = new InfoSvgOption().feed( { width : 10.3, height : 5 } );
		Assert.equals(10, info.width);
		Assert.equals(5, info.height);
	}
	
	public function new() { }
}