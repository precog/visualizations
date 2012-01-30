/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

import thx.error.Error;
import utest.Assert;
using rg.info.Info;

class TestInfoDataContext
{
	public function testInfoDataContext() 
	{
		var info = new InfoDataContext();
		
		Assert.isNull(info.name);
		Assert.isNull(info.transform);
		Assert.equals(0, info.sources.length);
		
		// NAME
		// invalid
		Assert.raises(function() info.feed( { name : [] } ), Error);
		
		// valid
		info.feed( { name : "total" } );
		Assert.equals("total", info.name);
		
		// TRANSFORM
		// invalid
		Assert.raises(function() info.feed( { transform : "doSomething" } ), Error);
		
		// valid
		info.feed( { transform : function(_) return null } );
		Assert.isTrue(Reflect.isFunction(Reflect.field(info, "transform")));
		
		// SOURCES
		// invalid
		Assert.raises(function() info.feed( { src : "mysource" } ), Error);
		
		// valid
		info.feed( { src : [{ data : "A" }, { data : "B" }] } );
		Assert.equals(2, info.sources.length);
		for (src in info.sources)
			Assert.is(src, InfoDataSource);
	}
	
	public function new() { }
}