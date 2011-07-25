/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

import thx.error.Error;
import utest.Assert;
import rg.util.Properties;
using rg.controller.info.Info;

class TestInfoVariable
{
	public function testFeed() 
	{
		var info = new InfoVariable();
		Assert.isNull(info.type);
		Assert.isNull(info.min);
		Assert.isNull(info.max);
		Assert.isNull(info.values);

		// invalid type
		Assert.raises(function() info.feed( { type : 1 } ), Error);
		
		// valid type
		info.feed( { type : ".#time:hour" } );
		Assert.equals(Properties.timeProperty("hour"), info.type);
		
		// valid min
		info.feed( { view : [1] } );
		Assert.equals(1, info.min);
		
		// invalid max
		Assert.raises(function() info.feed( { view : {} } ), Error);
		
		// valid max
		info.feed( { view : [1,3] } );
		Assert.equals(3, info.max);
		
		// invalid values
		Assert.raises(function() info.feed( { values : { } } ), Error);
		
		// valid values
		info.feed( { values : [1,2,3] } );
		Assert.same([1,2,3], info.values);
	}
	
	public function new() { }
}