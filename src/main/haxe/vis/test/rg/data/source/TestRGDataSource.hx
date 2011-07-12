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
		new RGDataSource(executor, "/", query).load();
		return executor.callStack;
	}
	
	public function testEventCount()
	{
		Assert.same([{
			{ method : "propertyCount", args : ["/", { property : ".impression"}] } 
		}], profile( {
			exp : [Property(".impression")],
			operation : Count,
			where : []
		}));
	}
	
	public function testPropertyCount()
	{
		Assert.same([{
			{ method : "propertyCount", args : ["/", { property : ".impression.unique"}] } 
		}], profile( {
			exp : [Property(".impression.unique")],
			operation : Count,
			where : []
		}));
	}

	public function testEventSeries()
	{
		Assert.same([{
			{ method : "propertySeries", args : ["/", { property : ".impression", periodicity : "day"}] } 
		}], profile( {
			exp : [Time(".impression", "day")],
			operation : Count,
			where : []
		}));
	}
	
	public function testPropertySeries()
	{
		Assert.same([{
			{ method : "propertySeries", args : ["/", { property : ".impression.unique", periodicity : "day"}] } 
		}], profile( {
			exp : [Time(".impression.unique", "day")],
			operation : Count,
			where : []
		}));
	}
	
	public function testPropertyValueCount()
	{
		Assert.same([{
			{ method : "propertyValueCount", args : ["/", { property : ".impression.gender", value : "female"}] } 
		}], profile( {
			exp : [Property(".impression.gender")],
			operation : Count,
			where : [Equality(".impression.gender", "female")]
		}));
	}
	
	public function testPropertyValueSeries()
	{
		Assert.same([{
			{ method : "propertyValueSeries", args : ["/", { property : ".impression.gender", value : "female", periodicity : "day"}] } 
		}], profile( {
			exp : [Property(".impression.gender"), Time(".impression.gender", "day")],
			operation : Count,
			where : [Equality(".impression.gender", "female")]
		}));
	}
	
	public function testSearchValueCount()
	{
		Assert.same([{
			{ method : "searchCount", args : ["/", { where : ({}).addFields([".impression.gender", ".impression.ageRange"], ["female", "21-30"]) }] } 
		}], profile( {
			exp : [Property(".impression")], 
			operation : Count,
			where : [
				Equality(".impression.gender", "female"),
				Equality(".impression.ageRange", "21-30")
			]
		}));
	}
	
	public function testSearchSeries()
	{
		Assert.same([{
			{ method : "searchSeries", args : ["/", { periodicity : "day", where : ({}).addFields([".impression.gender", ".impression.ageRange"], ["female", "21-30"]) }] } 
		}], profile( {
			exp : [Property(".impression"), Time(".impression", "day")],
			operation : Count,
			where : [
				Equality(".impression.gender", "female"),
				Equality(".impression.ageRange", "21-30")
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
					property : ".impression.gender",
					limit : 5,
					order : "descending"
				}, {
					property : ".impression.platform",
					limit : 7,
					order : "ascending"
				}, {
					property : ".impression.ageRange",
					limit : 10,
					order : "descending"
			}] }]
		}], profile( {
			exp : [
				Property(".impression.gender", 5, true),
				Property(".impression.platform", 7, false),
				Property(".impression.ageRange"),
				Time(".impression", "day")],
			operation : Count,
			where : []
		}));
	}
	
	public function testNormalization()
	{
		Assert.same(
			[Property(".impression"), Time(".impression", "eternity")],
			RGDataSource.normalize([Property(".impression")])
		);
		
		Assert.same(
			[Property(".impression"), Time(".impression", "day")],
			RGDataSource.normalize([Time(".impression", "day")])
		);
		
		Assert.same(
			[Property(".impression.unique"), Time(".impression.unique", "day")],
			RGDataSource.normalize([Time(".impression.unique", "day")])
		);
		
		Assert.same(
			[
				Property(".impression.platform"),
				Property(".impression.ageRange"),
				Time("", "eternity")
			],
			RGDataSource.normalize([
				Property(".impression.platform"),
				Property(".impression.ageRange")
			])
		);
		
		Assert.same(
			[
				Property(".impression.platform"),
				Property(".impression.ageRange"),
				Time(".impression", "eternity")
			],
			RGDataSource.normalize([
				Time(".impression", "eternity"),
				Property(".impression.platform"),
				Property(".impression.ageRange")
			])
		);
	}
	
	public function new() { }
}