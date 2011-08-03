/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoLineChart;
import rg.data.DataPoint;
import rg.view.svg.widget.LineChart;

class VisualizationLineChart extends VisualizationSvg
{
	public var info : InfoLineChart;
	var chart : LineChart;
	override function init() 
	{
		var main = layout.getPanel(layout.mainPanelName).panel;
		
		chart = new LineChart(main);
		
		chart.animated = info.animation.animated;
		chart.animationDuration = info.animation.duration;
		chart.animationEase = info.animation.ease;
		
		chart.segmenton = info.segmenton;
		
		chart.symbol = info.symbol;
		chart.symbolStyle = info.symbolStyle;
		
		chart.click = info.click;
		chart.labelDataPoint = info.label.datapoint;
		chart.labelDataPointOver = info.label.datapointover;
		
		chart.init();
	}
	
	override function feedData(data : Array<DataPoint>)
	{
		chart.setVariables(independentVariables, dependentVariables);
		chart.data(data);
	}
	
	override function destroy()
	{
		chart.destroy();
	}
}