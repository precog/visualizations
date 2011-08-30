/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoLeaderboard;
import rg.view.html.widget.Leadeboard;
import thx.js.Selection;
import rg.data.DataPoint;

class VisualizationLeaderboard extends VisualizationHtml
{
	public var info : InfoLeaderboard;
	var chart : Leadeboard;
	public function new(container : Selection) 
	{
		super(container);
	}
	
	override function init()
	{
		chart = new Leadeboard(container);
		
		if (null != info.label.datapoint)
			chart.labelDataPoint = info.label.datapoint;
		if (null != info.label.datapointover)
			chart.labelDataPointOver = info.label.datapointover;
			
		chart.animated = info.animation.animated;
		chart.animationDuration = info.animation.duration;
		chart.animationDelay = info.animation.delay;
		chart.animationEase = info.animation.ease;
		chart.displayGradient = info.displayGradient;
		chart.useMax = info.gradientOnMax;
		
		if (null != info.click)
			chart.click = info.click;
		if (null != info.sortDataPoint)
			chart.sortDataPoint = info.sortDataPoint;
		
		chart.init();
	}
	
	override function feedData(data : Array<DataPoint>)
	{
		chart.setVariables(independentVariables, dependentVariables);
		chart.data(data);
	}
}