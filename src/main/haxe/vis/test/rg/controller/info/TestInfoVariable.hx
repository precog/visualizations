/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

import thx.error.Error;
import utest.Assert;
import rg.util.Properties;

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
		Assert.raises(function() info.feedOptions( { type : 1 } ), Error);
		
		// valid type
		info.feedOptions( { type : ".#time:hour" } );
		Assert.equals(Properties.timeProperty("hour"), info.type);
		
		// valid min
		info.feedOptions( { view : [1] } );
		Assert.equals(1, info.min);
		
		// invalid max
		Assert.raises(function() info.feedOptions( { view : {} } ), Error);
		
		// valid max
		info.feedOptions( { view : [1,3] } );
		Assert.equals(3, info.max);
		
		// invalid values
		Assert.raises(function() info.feedOptions( { values : { } } ), Error);
		
		// valid values
		info.feedOptions( { values : [1,2,3] } );
		Assert.same([1,2,3], info.values);
	}
	
	public function new() { }
}