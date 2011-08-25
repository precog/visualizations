/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoLineChart;
import rg.view.svg.widget.ChartLine;
import rg.data.DataPoint;
import rg.data.Segmenter;
import rg.util.DataPoints;

class VisualizationLineChart extends VisualizationCartesian<Array<Array<Array<DataPoint>>>>
{
	public var infoLine : InfoLineChart;
	
	override function initChart()
	{
		var chart = new ChartLine(layout.getPanel(layout.mainPanelName));
		
		chart.symbol = infoLine.symbol;
		chart.symbolStyle = infoLine.symbolStyle;
		
		chart.lineInterpolator = infoLine.line.interpolation;
		chart.lineEffect = infoLine.line.effect;
		
		
		if(null == independentVariables[0].scaleDistribution)
			independentVariables[0].scaleDistribution = ScaleFill;
		
		if (null != infoLine.y0property)
			chart.y0property = infoLine.y0property;
		else if (infoLine.displayarea)
			chart.y0property = "";
		
		this.chart = chart;
	}
	
	override function transformData(dps : Array<DataPoint>) : Array<Array<Array<DataPoint>>>
	{
		var results = [],
			segmenter = new Segmenter(info.segment.on, info.segment.transform, info.segment.scale);
		for (i in 0...dependentVariables.length)
		{
			var variable = dependentVariables[i];
			var values = DataPoints.filterByDependents(dps, [variable]);
			results.push(segmenter.segment(values));
		}
		return results;
	}
}