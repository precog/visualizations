/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

import thx.error.Error;
import utest.Assert;

class TestInfoData
{
	public function testDataInfo() 
	{
		var info = new InfoData();
		
		Assert.isNull(info.name);
		Assert.isNull(info.transform);
		Assert.equals(0, info.sources.length);
		
		// NAME
		// invalid
		Assert.raises(function() info.feedOptions( { name : [] } ), Error);
		
		// valid
		info.feedOptions( { name : "total" } );
		Assert.equals("total", info.name);
		
		// TRANSFORM
		// invalid
		Assert.raises(function() info.feedOptions( { transform : "doSomething" } ), Error);
		
		// valid
		info.feedOptions( { transform : function(_) return null } );
		Assert.isTrue(Reflect.isFunction(Reflect.field(info, "transform")));
		
		// SOURCES
		// invalid
		Assert.raises(function() info.feedOptions( { src : "mysource" } ), Error);
		
		// valid
		info.feedOptions( { src : [{ data : "A" }, { data : "B" }] } );
		Assert.equals(2, info.sources.length);
		for (src in info.sources)
		{
			Assert.is(src, InfoDataSource);
		}
	}
	
	public function new() { }
}