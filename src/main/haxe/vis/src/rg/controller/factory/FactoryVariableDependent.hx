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
			axis = axiscreator.create(info.type, isnumeric, info.values);
		return new VariableDependent(info.type, axis, info.min, info.max);
	}
}