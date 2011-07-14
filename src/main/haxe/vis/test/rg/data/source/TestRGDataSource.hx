/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source;

import rg.data.source.rgquery.MockRGExecutor;
import rg.data.source.rgquery.QueryAst;
import utest.Assert;
using Objects;

class TestRGDataSource 
{
	function profile(query : Query)
	{
		var executor = new MockRGExecutor();
		new DataSourceReportGrid(executor, "/", "impression", query).load();
		return executor.callStack;
	}
	
	public function testEventCount()
	{
		Assert.same([{
			{ method : "propertyCount", args : ["/", { property : "impression"}] } 
		}], profile( {
			exp : [Property("")],
			operation : Count,
			where : []
		}));
	}
	
	public function testPropertyCount()
	{
		Assert.same([{
			{ method : "propertyCount", args : ["/", { property : "impression.unique"}] } 
		}], profile( {
			exp : [Property(".unique")],
			operation : Count,
			where : []
		}));
	}

	public function testEventSeries()
	{
		Assert.same([{
			{ method : "propertySeries", args : ["/", { property : "impression", periodicity : "day"}] } 
		}], profile( {
			exp : [Time("", "day")],
			operation : Count,
			where : []
		}));
	}
	
	public function testPropertySeries()
	{
		Assert.same([{
			{ method : "propertySeries", args : ["/", { property : "impression.unique", periodicity : "day"}] } 
		}], profile( {
			exp : [Time(".unique", "day")],
			operation : Count,
			where : []
		}));
	}
	
	public function testPropertyValueCount()
	{
		Assert.same([{
			{ method : "propertyValueCount", args : ["/", { property : "impression.gender", value : "female"}] } 
		}], profile( {
			exp : [Property(".gender")],
			operation : Count,
			where : [Equality(".gender", "female")]
		}));
	}
	
	public function testPropertyValueSeries()
	{
		Assert.same([{
			{ method : "propertyValueSeries", args : ["/", { property : "impression.gender", value : "female", periodicity : "day"}] } 
		}], profile( {
			exp : [Property(".gender"), Time(".gender", "day")],
			operation : Count,
			where : [Equality(".gender", "female")]
		}));
	}
	
	public function testSearchValueCount()
	{
		Assert.same([{
			{ method : "searchCount", args : ["/", { where : ({}).addFields(["impression.gender", "impression.ageRange"], ["female", "21-30"]) }] } 
		}], profile( {
			exp : [Property("")], 
			operation : Count,
			where : [
				Equality(".gender", "female"),
				Equality(".ageRange", "21-30")
			]
		}));
	}
	
	public function testSearchSeries()
	{
		Assert.same([{
			{ method : "searchSeries", args : ["/", { periodicity : "day", where : ({}).addFields(["impression.gender", "impression.ageRange"], ["female", "21-30"]) }] } 
		}], profile( {
			exp : [Property(""), Time("", "day")],
			operation : Count,
			where : [
				Equality(".gender", "female"),
				Equality(".ageRange", "21-30")
			]
		}));
	}
	
	public function testIntersectOverTime()
	{
		Assert.same([{
			method : "intersect", 
			args : ["/", { 
				periodicity : "day", 
				properties : [{
					property : ".gender",
					limit : 5,
					order : "descending"
				}, {
					property : ".platform",
					limit : 7,
					order : "ascending"
				}, {
					property : ".ageRange",
					limit : 10,
					order : "descending"
			}] }]
		}], profile( {
			exp : [
				Property(".gender", 5, true),
				Property(".platform", 7, false),
				Property(".ageRange"),
				Time("", "day")],
			operation : Count,
			where : []
		}));
	}
	
	public function testNormalization()
	{
		Assert.same(
			[Property(""), Time("", "eternity")],
			DataSourceReportGrid.normalize([Property("")])
		);
		
		Assert.same(
			[Property(""), Time("", "day")],
			DataSourceReportGrid.normalize([Time("", "day")])
		);
		
		Assert.same(
			[Property(".unique"), Time(".unique", "day")],
			DataSourceReportGrid.normalize([Time(".unique", "day")])
		);
		
		Assert.same(
			[
				Property(".platform"),
				Property(".ageRange"),
				Time("", "eternity")
			],
			DataSourceReportGrid.normalize([
				Property(".platform"),
				Property(".ageRange")
			])
		);
		
		Assert.same(
			[
				Property(".platform"),
				Property(".ageRange"),
				Time("", "eternity")
			],
			DataSourceReportGrid.normalize([
				Time("", "eternity"),
				Property(".platform"),
				Property(".ageRange")
			])
		);
	}
	
	public function new() { }
}