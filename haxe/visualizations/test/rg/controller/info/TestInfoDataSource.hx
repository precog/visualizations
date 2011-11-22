/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

import thx.error.Error;
import utest.Assert;

using rg.controller.info.Info;

class TestInfoDataSource
{
	public function testDataSourceInfo() 
	{
		var info = new InfoDataSource();
		
		// QUERY
		// invalid
		Assert.raises(function() info.feed( { query : [] } ), Error);
		
		// valid
		info.feed( { query : ".impression" } );
		Assert.equals(".impression", info.query);
		
		// PATH
		// invalid
		Assert.raises(function() info.feed( { path : [] } ), Error);
		
		// valid
		info.feed( { path : "/" } );
		Assert.equals("/", info.path);
		
		// EVENT
		// invalid
		Assert.raises(function() info.feed( { event : [] } ), Error);
		
		// valid
		info.feed( { event : "click" } );
		Assert.equals("click", info.event);
		
		// NAMED DATA
		// invalid
		Assert.raises(function() info.feed( { data : 1 } ), Error);
		
		// valid
		info.feed( { data : "name" } );
		Assert.equals("name", info.namedData);
		Assert.isNull(info.data);
		
		// DATA
		// valid
		Assert.raises(function() info.feed( { data : [1,2,3] } ), Error);
		
		info.feed( { data : [{ event : "click", count : 10 }] } );
		Assert.same([ { event : "click", count : 10 } ], info.data);
	}
	
	public function new() { }
}