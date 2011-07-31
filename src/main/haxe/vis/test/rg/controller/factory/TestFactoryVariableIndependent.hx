/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;

import rg.data.AxisOrdinal;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;
import rg.controller.info.InfoVariable;
import utest.Assert;
import rg.data.AxisGroupByTime;
using rg.controller.info.Info;

class TestFactoryVariableIndependent
{
	public function testIncompleteInfo()
	{
		Assert.isNull(new FactoryVariableIndependent().create(new InfoVariable()));
	}
	
	public function testSimpleParameters() 
	{
		var info = new InfoVariable().feed( {
				view : [1.0, 10.0],
				type : ".impression"
			} ),
			factory = new FactoryVariableIndependent(),
			variable = factory.create(info);
		Assert.notNull(variable);
		Assert.same(1.0, variable.min);
		Assert.same(10.0, variable.max);
		Assert.equals(".impression", variable.type);
		
		info = new InfoVariable().feed( {
			type : ".impression"
		} );
		variable = factory.create(info);
		Assert.isNull(variable.min);
		Assert.isNull(variable.max);
		Assert.equals(".impression", variable.type);
		
		info = new InfoVariable();
		variable = factory.create(info);
		Assert.isNull(variable);
	}
	
	public function testAxisType()
	{
		var info = new InfoVariable().feed( {
				view : [1.0, 10.0],
				type : ".impression"
			} ),
			factory = new FactoryVariableIndependent(),
			variable = factory.create(info);
		Assert.is(variable.axis, AxisOrdinal);
	}
	
	public function testValues()
	{
		var info = new InfoVariable().feed( {
				view   : [1.0, 10.0],
				values : [1.0, 5.0, 10.0],
				type   : ".impression"
			} ),
			factory = new FactoryVariableIndependent(),
			variable = factory.create(info);
		Assert.same([1.0, 5.0, 10.0], variable.range());
	}
	
	public function testTimeWithStringView()
	{
		var min = "2011-01-01",
			max = "2011-02-02",
			info = new InfoVariable().feed( {
			type : ".#time:hour",
			view : [min, max]
		} ),
		factory = new FactoryVariableIndependent(),
			variable = factory.create(info);
		Assert.floatEquals(Date.fromString(min).getTime(), variable.min);
		Assert.floatEquals(Date.fromString(max).getTime(), variable.max);
	}
	
	public function testTimeWithFloatView()
	{
		var min = "2011-01-01",
			max = "2011-02-02",
			info = new InfoVariable().feed( {
			type : ".#time:hour",
			view : [Date.fromString(min).getTime(), Date.fromString(max).getTime()]
		} ),
		factory = new FactoryVariableIndependent(),
			variable = factory.create(info);
		Assert.floatEquals(Date.fromString(min).getTime(), variable.min);
		Assert.floatEquals(Date.fromString(max).getTime(), variable.max);
	}
	
	public function testTimeWithDateView()
	{
		var min = "2011-01-01",
			max = "2011-02-02",
			info = new InfoVariable().feed( {
			type : ".#time:hour",
			view : [Date.fromString(min), Date.fromString(max)]
		} ),
		factory = new FactoryVariableIndependent(),
			variable = factory.create(info);
		Assert.floatEquals(Date.fromString(min).getTime(), variable.min);
		Assert.floatEquals(Date.fromString(max).getTime(), variable.max);
	}
	
	public function testTimeGroupBy()
	{
		var min = "2011-01-01",
			max = "2011-02-02",
			info = new InfoVariable().feed( {
			type : ".#time:hour",
			view : [Date.fromString(min), Date.fromString(max)],
			groupby : "day"
		} ),
		factory = new FactoryVariableIndependent(),
			variable = factory.create(info);
		Assert.is(variable.axis, AxisGroupByTime);
		var axis = Types.as(variable.axis, AxisGroupByTime);
		Assert.equals("day", axis.groupBy);
	}
	
	public function new() { }
}