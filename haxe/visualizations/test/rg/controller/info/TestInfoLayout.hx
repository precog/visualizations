/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import utest.Assert;
using rg.controller.info.Info;
 
class TestInfoLayout 
{
	public function testSize() 
	{
		var info = new InfoLayout().feed( { width : 10.3, height : 5 } );
		Assert.equals(10, info.width);
		Assert.equals(5, info.height);
	}
	
	public function testType()
	{
		var info = new InfoLayout().feed( { visualization : "lineChart" } );
		Assert.equals("linechart", info.type);
	}
	
	public function testLayout()
	{
		var info = new InfoLayout().feed( { layout : "simple" } );
		Assert.equals("simple", info.layout);
	}
	
	public function new() { }
}