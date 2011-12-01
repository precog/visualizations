package rg.view.svg.chart;
import rg.view.svg.panel.Panel;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.data.DataPoint;

class Sankey extends Chart
{
	var dps : Array<DataPoint>;
	public function new(panel : Panel)
	{
		super(panel);
	}

	public function setVariables(variableIndependents : Array<VariableIndependent<Dynamic>>, variableDependents : Array<VariableDependent<Dynamic>>, data : Array<DataPoint>)
	{

	}

	public function data(dps : Array<DataPoint>)
	{
		this.dps = dps;
		redraw();
	}

	function redraw()
	{
		trace(dps);
	}
}