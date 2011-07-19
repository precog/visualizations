/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.build;

import rg.data.AxisOrdinal;
import rg.data.AxisNumeric;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;
import rg.controller.info.InfoVariable;
import utest.Assert;

class TestBuilderVariableDependent
{
	public function testIncompleteInfo()
	{
		Assert.isNull(new BuilderVariableDependent().build(new InfoVariable( { } ), false));
	}
	
	public function testSimpleParameters() 
	{
		var info = new InfoVariable( {
				view : [1.0, 10.0],
				type : "count"
			} ),
			builder = new BuilderVariableDependent(),
			variable = builder.build(info, true);
		Assert.notNull(variable);
		Assert.same(1.0, variable.min);
		Assert.same(10.0, variable.max);
		Assert.equals("count", variable.type);
		
		info = new InfoVariable( {
			type : "count"
		} );
		variable = builder.build(info, true);
		Assert.isNull(variable.min);
		Assert.isNull(variable.max);
		Assert.equals("count", variable.type);
		
		info = new InfoVariable( { } );
		variable = builder.build(info, false);
		Assert.isNull(variable);
	}
	
	public function testAxisType()
	{
		var info = new InfoVariable( {
				view : [1.0, 10.0],
				type : ".impression"
			} ),
			builder = new BuilderVariableDependent(),
			variable = builder.build(info, true);
		Assert.is(variable.axis, AxisNumeric);
	}
	
	public function testValues()
	{
		var info = new InfoVariable( {
				view   : [1.0, 10.0],
				values : [1.0, 5.0, 10.0],
				type   : ".impression"
			} ),
			builder = new BuilderVariableDependent(),
			variable = builder.build(info, true);
		Assert.same([1.0, 5.0, 10.0], Types.as(variable.axis, AxisOrdinal).values.array());
	}
	
	public function new() { }
}