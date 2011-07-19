/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.build;

import rg.data.AxisTime;
import rg.data.AxisOrdinal;
import thx.collections.Set;
import utest.Assert;
import rg.util.Properties;

class TestBuilderAxis 
{
	public function testAxisTime() 
	{
		var builder = new BuilderAxis();
		var axis = Types.as(builder.buildDiscrete(Properties.timeProperty("hour"), [1, 2, 3]), AxisTime);
		Assert.notNull(axis);
		Assert.equals("hour", axis.periodicity);
	}
	
	public function testAxisOrdinal()
	{
		var builder = new BuilderAxis();
		var axis = Types.as(builder.buildDiscrete("count", [1, 2, 3]), AxisOrdinal);
		Assert.equals(1, axis.first);
		Assert.equals(3, axis.last);
		Assert.same(Set.ofArray([1, 2, 3]), axis.values);
		
		axis = Types.as(builder.buildDiscrete("count", null), AxisOrdinal);
		Assert.isNull(axis.first);
		Assert.isNull(axis.last);
		Assert.equals(0, axis.values.length);
	}
	
	public function new() { }
}