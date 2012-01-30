/**
 * ...
 * @author Franco Ponticelli
 */

package rg.factory;

import rg.axis.AxisOrdinal;
import rg.axis.AxisNumeric;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;
import rg.info.InfoVariable;
import thx.error.Error;
import utest.Assert;
using rg.info.Info;

class TestFactoryVariableDependent
{
	public function testIncompleteInfo()
	{
		Assert.raises(function() new FactoryVariableDependent().create(new InfoVariable(), false), Error);
	}

	public function testSimpleParameters()
	{
		var info = new InfoVariable().feed( {
				view : [1.0, 10.0],
				type : "count"
			} ),
			factory = new FactoryVariableDependent(),
			variable = factory.create(info, true);
		Assert.notNull(variable);
		Assert.same(1.0, variable.min);
		Assert.same(10.0, variable.max);
		Assert.equals("count", variable.type);

		info = new InfoVariable().feed( {
			type : "count"
		} );
		variable = factory.create(info, true);
		Assert.isNull(variable.min);
		Assert.isNull(variable.max);
		Assert.equals("count", variable.type);
	}

	public function testAxisType()
	{
		var info = new InfoVariable().feed( {
				view : [1.0, 10.0],
				type : ".impression"
			} ),
			factory = new FactoryVariableDependent(),
			variable = factory.create(info, true);
		Assert.is(variable.axis, AxisNumeric);
	}

	public function testValues()
	{
		var info = new InfoVariable().feed( {
				view   : [1.0, 10.0],
				values : [1.0, 5.0, 10.0],
				type   : ".impression"
			} ),
			factory = new FactoryVariableDependent(),
			variable = factory.create(info, true);
		Assert.same([1.0, 5.0, 10.0], Types.as(variable.axis, AxisOrdinal).values.array());
	}

	public function new() { }
}