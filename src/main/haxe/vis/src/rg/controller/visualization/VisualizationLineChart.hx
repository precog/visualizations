/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoLineChart;
import rg.view.svg.widget.LineChart;

class VisualizationLineChart extends VisualizationCartesian
{
	public var infoLine : InfoLineChart;
	
	override function initChart()
	{
		var chart = new LineChart(layout.getPanel(layout.mainPanelName));
		
		chart.symbol = infoLine.symbol;
		chart.symbolStyle = infoLine.symbolStyle;
		
		chart.lineInterpolator = infoLine.line.interpolation;
		chart.lineEffect = infoLine.line.effect;
		
		if (null != infoLine.y0property)
			chart.y0property = infoLine.y0property;
		else if (infoLine.displayarea)
			chart.y0property = "";
		
		this.chart = chart;
	}
}