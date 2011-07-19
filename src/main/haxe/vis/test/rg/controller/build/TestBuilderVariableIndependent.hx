/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.build;

import rg.data.AxisOrdinal;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;
import rg.controller.info.InfoVariable;
import utest.Assert;

class TestBuilderVariableIndependent
{
	public function testIncompleteInfo()
	{
		Assert.isNull(new BuilderVariableIndependent().build(new InfoVariable( { } )));
	}
	
	public function testSimpleParameters() 
	{
		var info = new InfoVariable( {
				view : [1.0, 10.0],
				type : ".impression"
			} ),
			builder = new BuilderVariableIndependent(),
			variable = builder.build(info);
		Assert.notNull(variable);
		Assert.same(1.0, variable.min);
		Assert.same(10.0, variable.max);
		Assert.equals(".impression", variable.type);
		
		info = new InfoVariable( {
			type : ".impression"
		} );
		variable = builder.build(info);
		Assert.isNull(variable.min);
		Assert.isNull(variable.max);
		Assert.equals(".impression", variable.type);
		
		info = new InfoVariable( { } );
		variable = builder.build(info);
		Assert.isNull(variable);
	}
	
	public function testAxisType()
	{
		var info = new InfoVariable( {
				view : [1.0, 10.0],
				type : ".impression"
			} ),
			builder = new BuilderVariableIndependent(),
			variable = builder.build(info);
		Assert.is(variable.axis, AxisOrdinal);
	}
	
	public function testValues()
	{
		var info = new InfoVariable( {
				view   : [1.0, 10.0],
				values : [1.0, 5.0, 10.0],
				type   : ".impression"
			} ),
			builder = new BuilderVariableIndependent(),
			variable = builder.build(info);
		Assert.same([1.0, 5.0, 10.0], variable.range());
	}
	
	public function new() { }
}