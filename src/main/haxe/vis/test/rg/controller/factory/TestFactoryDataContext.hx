/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;

import rg.controller.info.Info;
import rg.controller.info.InfoDataContext;
import rg.data.source.rgquery.MockRGExecutor;
import thx.error.Error;
import utest.Assert;

class TestFactoryDataContext 
{
	/*
	public var name : Null<String>;
	public var transform : Null<Dynamic>;
	public var sources : Array<InfoDataSource>;
	*/
	public function testBuild() 
	{
		var cache = new Hash(),
			executor = new MockRGExecutor(),
			factoryDataSource = new FactoryDataSource(cache, executor),
			factory = new FactoryDataContext(factoryDataSource),
			info = new InfoDataContext(),
			dc;
		Assert.raises(function() dc = factory.create(info), Error);
		
		Info.feed(info, { name : "total", src : [{ 
			event : ".sale",
			query : ".amount * .#time:day",
			path : "/seller/1"
		}, { 
			event : ".sale",
			query : ".amount * .#time:day",
			path : "/seller/2" 
		}] } );
		dc = factory.create(info);
		
		Assert.notNull(dc);
		Assert.equals("total", dc.name);
		Assert.isNull(dc.transform);
		
		Assert.equals(2, dc.data.sources.length);
		
		Info.feed(info, { transform : function() return [] } );
		dc = factory.create(info);
		Assert.notNull(dc.transform);
		Assert.isTrue(Reflect.isFunction(dc.transform));
	}
	
	public function new() { }
}