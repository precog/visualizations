/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoLeaderboard;
import rg.view.html.widget.Leadeboard;
import thx.js.Selection;
import rg.data.DataPoint;

// TODO wire animations paramaters
// TODO wire label functions

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
		chart.variableIndependent = independentVariables[0];
		chart.variableDependent = dependentVariables[0];
		
		if (null != info.label.datapoint)
			chart.labelDataPoint = info.label.datapoint;
		if (null != info.label.datapointOver)
			chart.labelDataPointOver = info.label.datapointOver;
			
		chart.animated = info.animation.animated;
		chart.animationDuration = info.animation.duration;
		chart.animationDelay = info.animation.delay;
		chart.animationEase = info.animation.ease;
		
		if (null != info.click)
			chart.click = info.click;
		if (null != info.sort)
			chart.sort = info.sort;
		
		chart.init();
	}
	
	override function feedData(data : Array<DataPoint>)
	{
		chart.data(data);
	}
}