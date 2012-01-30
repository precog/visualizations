/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

import utest.Assert;
using rg.info.Info;

class TestInfoVisualizationOption
{
	public function testFeedOptions()
	{
		var info = new InfoVisualizationOption().feed( {
			axes : [{ type : "count" }],
			data : [{ 
				name : "count",
				src : [{ event : "click", path : "/" }]
			}],
			options : { test : "option" }
		});
		Assert.notNull(info.data);
		Assert.is(info.data, Array);
		var axis : InfoVariable = info.variables[0];
		Assert.is(axis, InfoVariable);
		Assert.equals("count", axis.type);
		
		Assert.notNull(info.variables);
		Assert.is(info.variables, Array);
		var ctx : InfoDataContext = info.data[0];
		Assert.is(ctx, InfoDataContext);
		Assert.equals("count", ctx.name);
		Assert.equals("option", info.options.test);
	}
	
	public function new() { }
}