/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;
import rg.info.InfoHeatGrid;
import rg.svg.chart.HeatGrid;
import rg.svg.layer.TickmarksOrtho;
import rg.svg.widget.GridAnchor;

class VisualizationHeatGrid extends VisualizationCartesian<Array<Dynamic>>
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
		baseChart = chart;
		chart.ready.add(function() ready.dispatch());

		chart.useContour = infoHeatGrid.contour;
		chart.colorMode = infoHeatGrid.colorScaleMode;

		this.chart = chart;
	}

	override function transformData(dps : Array<Dynamic>) : Array<Dynamic>
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