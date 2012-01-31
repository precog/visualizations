/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.chart;
import rg.svg.panel.Layer;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.svg.panel.Panel;
import thx.error.AbstractMethod;
import rg.data.DataPoint;
import rg.axis.Stats;
import rg.svg.widget.Balloon;
import thx.math.Equations;
import rg.svg.panel.Panels;
import rg.data.Variable;
import rg.axis.IAxis;

class CartesianChart<T> extends Chart
{
	public var yVariables : Array<Variable<Dynamic, IAxis<Dynamic>>>;
	public var xVariable : Variable<Dynamic, IAxis<Dynamic>>;

	public function new(panel : Panel)
	{
		super(panel);
	}

	public function setVariables(variables : Array<Variable<Dynamic, IAxis<Dynamic>>>, variableIndependents : Array<VariableIndependent<Dynamic>>, variableDependents : Array<VariableDependent<Dynamic>>, data :T)
	{
		this.xVariable  = variables[0];
		this.yVariables = variables.slice(1);
	}

	public function data(dps : T)
	{
		throw new AbstractMethod();
	}
}