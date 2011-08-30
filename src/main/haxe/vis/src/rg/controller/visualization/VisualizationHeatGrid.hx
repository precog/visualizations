/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoHeatGrid;
import rg.view.svg.chart.HeatGrid;
import rg.view.svg.layer.TickmarksOrtho;
import rg.view.svg.widget.GridAnchor;
import rg.data.DataPoint;

class VisualizationHeatGrid extends VisualizationCartesian<Array<DataPoint>>
{
	public var infoHeatGrid : InfoHeatGrid;
	
	override function initAxes()
	{
		xvariable = cast independentVariables[0];
		yvariables = [cast independentVariables[1]];
	}
	
	override function initChart()
	{
		var chart = new HeatGrid(layout.getPanel(layout.mainPanelName));
		
		chart.useContour = infoHeatGrid.contour;
		chart.colorStart = infoHeatGrid.startColor;
		chart.colorEnd   = infoHeatGrid.endColor;

		this.chart = chart;
	}

	override function transformData(dps : Array<DataPoint>) : Array<DataPoint>
	{
		return dps;
	}
	
	override function setTickmarksDefaults(tickmarks : TickmarksOrtho, i : Int, type : String, pname : String)
	{
		if (i != 0)
			return;

		tickmarks.labelAnchor = GridAnchor.Left;
		tickmarks.labelAngle = 180;
	}
}