/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;
import rg.info.InfoScatterGraph;
import rg.svg.chart.ScatterGraph;
import rg.data.DataPoint;
import rg.data.Segmenter;
import rg.util.DataPoints;
using Arrays;
import rg.data.Variable;
import rg.axis.IAxis;
import rg.axis.ScaleDistribution;

class VisualizationScatterGraph extends VisualizationCartesian<Array<Array<DataPoint>>>
{
	public var infoScatter : InfoScatterGraph;

	override function initAxes()
	{
		xvariable = cast independentVariables[0];
		yvariables = cast dependentVariables.map(function(d,_) : Variable<Dynamic, IAxis<Dynamic>> return d);
	}

	override function initChart()
	{
		var chart = new ScatterGraph(layout.getPanel(layout.mainPanelName));
		baseChart = chart;
		chart.ready.add(function() ready.dispatch());

		chart.symbol = infoScatter.symbol;
		chart.symbolStyle = infoScatter.symbolStyle;

		if(null == independentVariables[0].scaleDistribution)
			independentVariables[0].scaleDistribution = ScaleFill;

		this.chart = chart;
	}

	override function transformData(dps : Array<DataPoint>) : Array<Array<DataPoint>>
	{
		var results = [],
			segmenter = new Segmenter(infoScatter.segment.on, infoScatter.segment.transform, infoScatter.segment.scale);
		for (variable in dependentVariables)
			results.push(DataPoints.filterByDependents(dps, [variable]));
		return results;
	}
}