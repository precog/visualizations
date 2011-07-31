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
		
		chart.variableIndependents = independentVariables;
		chart.variableDependent = dependentVariables[0];
		
		chart.animated = info.animation.animated;
		chart.animationDuration = info.animation.duration;
		chart.animationEase = info.animation.ease;
		
		chart.segmenton = info.segmenton;
		
		chart.init();
	}
	
	override function feedData(data : Array<DataPoint>)
	{
		chart.data(data);
	}
	
	override function destroy()
	{
		chart.destroy();
	}
}