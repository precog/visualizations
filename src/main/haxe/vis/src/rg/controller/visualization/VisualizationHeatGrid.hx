/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoHeatGrid;
import rg.view.svg.chart.HeatGrid;
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
/*
		chart.stacked = infoBar.stacked;
		switch(infoBar.effect)
		{
			case NoEffect:
				chart.displayGradient = false;
			case Gradient(lightness):
				chart.displayGradient = true;
				chart.gradientLightness = lightness;
		}
		chart.padding = infoBar.barPadding;
		chart.paddingAxis = infoBar.barPaddingAxis;
		chart.paddingDataPoint = infoBar.barPaddingDataPoint;
*/
		this.chart = chart;
	}

	override function transformData(dps : Array<DataPoint>) : Array<DataPoint>
	{
		return dps;
	}
}