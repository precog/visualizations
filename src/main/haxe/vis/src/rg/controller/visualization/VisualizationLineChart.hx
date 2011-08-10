/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoLineChart;
import rg.data.DataPoint;
import rg.data.Segmenter;
import rg.util.DataPoints;
import rg.view.svg.widget.ChartTickmarks;
import rg.view.svg.widget.LineChart;

class VisualizationLineChart extends VisualizationSvg
{
	public var info : InfoLineChart;
	var chart : LineChart;
	var xlabel : ChartTickmarks;
	override function init() 
	{
		initXAxis();
		initChart();
	}
	
	function initXAxis()
	{
		var context = layout.getPanel("x");
		if (null == context)
			return;

		var panel   = context.panel,
			anchor  = context.anchor;
			
		xlabel = new ChartTickmarks(panel, independentVariables[0], anchor);
		
	}
	
	function initChart()
	{
		var main = layout.getPanel(layout.mainPanelName).panel;
		
		chart = new LineChart(main);
		
		chart.animated = info.animation.animated;
		chart.animationDuration = info.animation.duration;
		chart.animationEase = info.animation.ease;
		
		chart.symbol = info.symbol;
		chart.symbolStyle = info.symbolStyle;
		
		chart.click = info.click;
		chart.labelDataPoint = info.label.datapoint;
		chart.labelDataPointOver = info.label.datapointover;
		
		chart.lineInterpolator = info.line.interpolation;
		chart.lineEffect = info.line.effect;
		
		if (null != info.y0property)
			chart.y0property = info.y0property;
		else if (info.displayarea)
			chart.y0property = "";
		
		chart.init();
	}
	
	override function feedData(data : Array<DataPoint>)
	{
		if (null != xlabel)
		{
			xlabel.update();
		}
		chart.setVariables(independentVariables, dependentVariables);
		chart.data(transformData(data));
	}
	
	function transformData(dps : Array<DataPoint>) : Array<Array<Array<DataPoint>>>
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
	
	override function destroy()
	{
		chart.destroy();
	}
}