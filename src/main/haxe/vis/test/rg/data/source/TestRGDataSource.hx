/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source;

import haxe.PosInfos;
import rg.data.source.rgquery.MockRGExecutor;
import rg.data.source.rgquery.QueryAst;
import utest.Assert;
using Objects;

class TestRGDataSource 
{
	function profile(query : Query, ?groupby : String)
	{
		var executor = new MockRGExecutor();
		var ds = new DataSourceReportGrid(executor, "/", "click", query);
		ds.groupBy = groupby;
		ds.load();
		return executor.callStack;
	}
	
	function assert(a : Dynamic, b : Dynamic, ?pos : PosInfos)
	{
		Assert.same(a, b, "expected " + Dynamics.string(a) + " but was " + Dynamics.string(b), pos);
	}
	
	public function testEventCount()
	{
		assert([{
			{ method : "propertyCount", args : ["/", { property : "click"}] } 
		}], profile( {
			exp : [Event],
			operation : Count,
			where : []
		}));
	}
	
	public function testPropertyValuesCount()
	{
		assert([{
			method : "intersect", args : ["/", {
				periodicity : "eternity", 
				properties : [{
					property : "click.unique",
					limit : 10,
					order : "descending"
				}]
			}]
		}], profile( {
			exp : [Property(".unique")],
			operation : Count,
			where : []
		}));
	}

	public function testEventSeries()
	{
		assert([{
			{ method : "propertySeries", args : ["/", { property : "click", periodicity : "day"}] } 
		}], profile( {
			exp : [Time("day")],
			operation : Count,
			where : []
		}));
	}
	
	public function testGroupByOption()
	{
		assert([{
			{ method : "propertySeries", args : ["/", { property : "click", periodicity : "day", groupBy : "week" }] } 
		}], profile( {
			exp : [Time("day")],
			operation : Count,
			where : []
		}, "week"));
	}
	
	public function testPropertyValuesSeries()
	{
		assert([{
			method : "intersect", args : ["/", {
				periodicity : "day", 
				properties : [{
					property : "click.unique",
					limit : 10,
					order : "descending"
				}]
			}] 
		}], profile( {
			exp : [Property(".unique"), Time("day")],
			operation : Count,
			where : []
		}));
	}
	
	public function testPropertyValueCount()
	{
		assert([{
			{ method : "propertyValueCount", args : ["/", { property : "click.gender", value : "female"}] } 
		}], profile( {
			exp : [Property(".gender")],
			operation : Count,
			where : [Equality(".gender", "female")]
		}));
	}
	
	public function testPropertyValueSeries()
	{
		assert([{
			{ method : "propertyValueSeries", args : ["/", { property : "click.gender", value : "female", periodicity : "day"}] } 
		}], profile( {
			exp : [Property(".gender"), Time("day")],
			operation : Count,
			where : [Equality(".gender", "female")]
		}));
	}
	
	public function testSearchValueCount()
	{
		assert([{
			{ method : "searchCount", args : ["/", { where : ({}).addFields(["click.gender", "click.ageRange"], ["female", "21-30"]) }] } 
		}], profile( {
			exp : [Event], 
			operation : Count,
			where : [
				Equality(".gender", "female"),
				Equality(".ageRange", "21-30")
			]
		}));
	}
	
	public function testSearchSeries()
	{
		assert([{
			{ method : "searchSeries", args : ["/", { periodicity : "day", where : ({}).addFields(["click.gender", "click.ageRange"], ["female", "21-30"]) }] } 
		}], profile( {
			exp : [Event, Time("day")],
			operation : Count,
			where : [
				Equality(".gender", "female"),
				Equality(".ageRange", "21-30")
			]
		}));
	}
	
	public function testIntersectOverTime()
	{
		assert([{
			method : "intersect", 
			args : ["/", { 
				periodicity : "day", 
				properties : [{
					property : "click.gender",
					limit : 5,
					order : "descending"
				}, {
					property : "click.platform",
					limit : 7,
					order : "ascending"
				}, {
					property : "click.ageRange",
					limit : 10,
					order : "descending"
				}]
			}]
		}], profile( {
			exp : [
				Property(".gender", 5, true),
				Property(".platform", 7, false),
				Property(".ageRange"),
				Time("day")],
			operation : Count,
			where : []
		}));
	}
	
	public function testNormalization()
	{
		assert(
			[Event, Time("eternity")],
			DataSourceReportGrid.normalize([Event])
		);
		
		assert(
			[Event, Time("day")],
			DataSourceReportGrid.normalize([Time("day")])
		);
		
		assert(
			[Event, Time("eternity")],
			DataSourceReportGrid.normalize([])
		);
		
		assert(
			[
				Property(".platform"),
				Property(".ageRange"),
				Time("eternity")
			],
			DataSourceReportGrid.normalize([
				Property(".platform"),
				Property(".ageRange")
			])
		);
		
		assert(
			[
				Property(".platform"),
				Property(".ageRange"),
				Time("eternity")
			],
			DataSourceReportGrid.normalize([
				Time("eternity"),
				Property(".platform"),
				Property(".ageRange")
			])
		);
	}
	
	public function new() { }
}