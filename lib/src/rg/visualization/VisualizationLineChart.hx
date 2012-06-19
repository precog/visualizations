/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;
import rg.info.InfoLineChart;
import rg.data.Variable;
import rg.svg.chart.LineChart;
import rg.data.DataPoint;
import rg.data.Segmenter;
import rg.util.DataPoints;
import rg.axis.IAxis;
using Arrays;
import rg.axis.ScaleDistribution;

class VisualizationLineChart extends VisualizationCartesian<Array<Array<Array<DataPoint>>>>
{
	public var infoLine : InfoLineChart;

	override function initAxes()
	{
		xvariable = cast variables[0];
		yvariables = cast variables.slice(1);
	}

	override function initChart()
	{
		var chart = new LineChart(layout.getPanel(layout.mainPanelName));
		baseChart = chart;
		chart.ready.add(function() ready.dispatch());

		chart.symbol = infoLine.symbol;
		chart.symbolStyle = infoLine.symbolStyle;

		chart.lineInterpolator = infoLine.interpolation;
		chart.lineEffect = infoLine.effect;
		chart.sensibleRadius = infoLine.sensibleradius;

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
			segmenter = new Segmenter(infoLine.segment.on, infoLine.segment.transform, infoLine.segment.scale, infoLine.segment.values);
		for (i in 0...dependentVariables.length)
		{
			var variable = dependentVariables[i];
			var values = DataPoints.filterByDependents(dps, [variable]);
			results.push(segmenter.segment(values));
		}
		return results;
	}
}