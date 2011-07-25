/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import thx.error.AbstractMethod;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.data.DataPoint;

class Visualization 
{
	public var independentVariables(default, null) : Array<VariableIndependent<Dynamic>>;
	public var dependentVariables(default, null) : Array<VariableDependent<Dynamic>>;
	
	public function setVariables(independentVariables : Array<VariableIndependent<Dynamic>>, dependentVariables : Array<VariableDependent<Dynamic>>)
	{
		this.independentVariables = independentVariables;
		this.dependentVariables = dependentVariables;
	}
	
	public function init()
	{
		throw new AbstractMethod();
	}
	
	public function feedData(data : Array<DataPoint>)
	{
		trace("DATA FEED " + data);
	}
}