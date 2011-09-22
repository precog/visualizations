/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoVariable;
import rg.data.IAxis;
import rg.data.VariableDependent;
import thx.error.Error;

class FactoryVariableDependent
{
	public function new() { }
	
	public function create(info : InfoVariable, isnumeric : Bool) : VariableDependent<Dynamic>
	{
		if (null == info.type)
			throw new Error("cannot create an axis if type is not specified");
		var axiscreator = new FactoryAxis(),
			variable = new VariableDependent(info.type, info.scaleDistribution),
			axis = axiscreator.create(info.type, isnumeric, variable, info.values);
		variable.setAxis(axis);
		variable.minf = FactoryVariableIndependent.convertBound(axis, info.min);
		variable.maxf = FactoryVariableIndependent.convertBound(axis, info.max);
		return variable;
	}
}