/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoScatterGraph;
import rg.view.svg.chart.ScatterGraph;
import rg.data.DataPoint;
import rg.data.Segmenter;
import rg.util.DataPoints;

class VisualizationScatterGraph extends VisualizationCartesian<Array<Array<DataPoint>>>
{
	public var infoScatter : InfoScatterGraph;
	
	override function initChart()
	{
		var chart = new ScatterGraph(layout.getPanel(layout.mainPanelName));
		
		chart.symbol = infoScatter.symbol;
		chart.symbolStyle = infoScatter.symbolStyle;
		
		if(null == independentVariables[0].scaleDistribution)
			independentVariables[0].scaleDistribution = ScaleFill;
		
		this.chart = chart;
	}
	
	override function transformData(dps : Array<DataPoint>) : Array<Array<DataPoint>>
	{
		var results = [],
			segmenter = new Segmenter(info.segment.on, info.segment.transform, info.segment.scale);
		for (variable in dependentVariables)
			results.push(DataPoints.filterByDependents(dps, [variable]));
		return results;
	}
}