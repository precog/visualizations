/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import thx.error.AbstractMethod;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.data.DataPoint;
import rg.data.Variable;
using Arrays;

class Visualization 
{
	public var independentVariables(default, null) : Array<VariableIndependent<Dynamic>>;
	public var dependentVariables(default, null) : Array<VariableDependent<Dynamic>>;
	public var variables(getVariables, null) : Array<Variable<Dynamic>>;
	
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
		trace("DATA FEED " + Dynamics.string(data));
	}
	
	function getVariables() : Array<Variable<Dynamic>>
	{
		return 
			independentVariables.map(function(d, i) : Variable<Dynamic> return d)
				.concat(dependentVariables.map(function(d, i) : Variable<Dynamic> return d));
	}
	
	public function destroy()
	{
		
	}
}