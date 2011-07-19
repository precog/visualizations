/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.build;
import rg.controller.info.InfoVariable;
import rg.data.IAxis;
import rg.data.VariableIndependent;

class BuilderVariableIndependent
{
	public function new() { }
	
	public function build(info : InfoVariable) : VariableIndependent<Dynamic>
	{
		if (null == info.type)
			return null;
		var axisbuilder = new BuilderAxis(),
			axis = axisbuilder.buildDiscrete(info.type, info.values);
		return new VariableIndependent(info.type, axis, info.min, info.max);
	}
}