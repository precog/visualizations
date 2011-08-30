/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;
import rg.view.svg.panel.Panel;
import rg.data.DataPoint;
import thx.js.Selection;

class HeatGrid extends CartesianChart<Array<DataPoint>>
{
	var dps : Array<DataPoint>;
	
	public function new(panel : Panel) 
	{
		super(panel);
	}
	
	override function init()
	{
		super.init();
		g.classed().add("heat-grid");
		
	}
	
	override function resize()
	{
		super.resize();
		redraw();
	}
	
	override function data(dps : Array<DataPoint>)
	{
		this.dps = dps;
		redraw();
	}
	
	function redraw()
	{
		if (null == dps || 0 == dps.length)
			return;

		var choice = g.selectAll("rect").data(dps);
		
		choice.enter()
			.append("svg:rect")
		;
	}
}