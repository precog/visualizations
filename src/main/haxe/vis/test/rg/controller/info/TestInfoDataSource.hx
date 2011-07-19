/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

import thx.error.Error;
import utest.Assert;

class TestInfoDataSource
{
	public function testDataSourceInfo() 
	{
		var info = new InfoDataSource();
		
		// QUERY
		// invalid
		Assert.raises(function() info.feedOptions( { query : [] } ), Error);
		
		// valid
		info.feedOptions( { query : ".impression" } );
		Assert.equals(".impression", info.query);
		
		// PATH
		// invalid
		Assert.raises(function() info.feedOptions( { path : [] } ), Error);
		
		// valid
		info.feedOptions( { path : "/" } );
		Assert.equals("/", info.path);
		
		// EVENT
		// invalid
		Assert.raises(function() info.feedOptions( { event : [] } ), Error);
		
		// valid
		info.feedOptions( { event : "click" } );
		Assert.equals("click", info.event);
		
		// NAMED DATA
		// invalid
		Assert.raises(function() info.feedOptions( { data : 1 } ), Error);
		
		// valid
		info.feedOptions( { data : "name" } );
		Assert.equals("name", info.namedData);
		Assert.isNull(info.data);
		
		// DATA
		// valid
		info.feedOptions( { data : [1,2,3] } );
		Assert.same([1,2,3], info.data);
	}
	
	public function new() { }
}