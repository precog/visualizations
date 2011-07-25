/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;

import rg.data.IDataSource;
import rg.controller.info.InfoDataSource;
import rg.data.source.DataSourceArray;
import rg.data.source.DataSourceReportGrid;
import rg.data.source.rgquery.IExecutorReportGrid;
import rg.data.source.rgquery.MockRGExecutor;
import thx.error.Error;
import utest.Assert;
import rg.data.source.rgquery.QueryAst;
using rg.controller.info.Info;

class TestFactoryDataSource 
{
	var executor : IExecutorReportGrid;
	var cache : Hash<IDataSource>;
	var factory : FactoryDataSource;
	
	public function testIncompleteRGQuery()
	{
		var info = new InfoDataSource(),
			b = factory;
		Assert.raises(function() b.create(info), Error);
		info.feed( { query : "" } );
		Assert.raises(function() b.create(info), Error);
		info.feed( { path : "/" } );
		Assert.raises(function() b.create(info), Error);
		info.feed( { event : "click" } );
		Assert.notNull(b.create(info));
	}
	
		
	public function testRGQueryWithEmptyQuery() 
	{
		var info = new InfoDataSource().feed( { path : "/", event : "click" } ),
			ds = factory.create(info);
		Assert.notNull(ds);
		Assert.is(ds, DataSourceReportGrid);
		var r = Types.as(ds, DataSourceReportGrid);
		Assert.equals("click", r.event);
		Assert.equals("/", r.path);
		Assert.same({
			exp : [Event],
			operation : Count,
			where : []
		},  r.query);
	}
	
	public function testRGQuery() 
	{
		var info = new InfoDataSource().feed( { path : "/", event : "click", query : ".#time:hour" } ),
			ds = factory.create(info);
		Assert.notNull(ds);
		Assert.is(ds, DataSourceReportGrid);
		var r : DataSourceReportGrid = Types.as(ds, DataSourceReportGrid);
		Assert.equals("click", r.event);
		Assert.equals("/", r.path);
		Assert.same({
			exp : [Time("hour")],
			operation : Count,
			where : []
		},  r.query);
	}
	
	public function testArraySource()
	{
		var info = new InfoDataSource().feed( { data : [ {
				event : "click",
				properties : { count : 10 }
			}], name : "sample" } ),
			ds = factory.create(info);
		ds.onLoad.add(function(data) {
			Assert.same([ {
				event : "click",
				properties : { count : 10 }
			}], data);
		});
		ds.load();
	}
	
	public function testNamedSource()
	{
		cache.set("sample", new DataSourceArray([]));
		var info = new InfoDataSource().feed( { data : "sample" } ),
			ds = factory.create(info);
		Assert.notNull(ds);
		Assert.is(ds, DataSourceArray);
	}
	
	public function testNamedSourceForNotExistingSource()
	{
		var info = new InfoDataSource().feed( { data : "sample" } ),
			b = factory;
		Assert.raises(function() b.create(info), Error);
	}
	
	function setup()
	{
		cache = new Hash();
		executor = new MockRGExecutor();
		factory = new FactoryDataSource(cache, executor);
	}
	
	public function new() { }
}