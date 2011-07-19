/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.build;
import rg.controller.info.InfoVariable;
import rg.data.IAxis;
import rg.data.VariableDependent;

class BuilderVariableDependent
{
	public function new() { }
	
	public function build(info : InfoVariable, isnumeric : Bool) : VariableDependent<Dynamic>
	{
		if (null == info.type)
			return null;
		var axisbuilder = new BuilderAxis(),
			axis = axisbuilder.build(info.type, isnumeric, info.values);
		return new VariableDependent(info.type, axis, info.min, info.max);
	}
}