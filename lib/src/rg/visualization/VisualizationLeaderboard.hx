/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;
import rg.info.InfoLeaderboard;
import rg.html.chart.Leadeboard;
import dhx.Selection;
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
		chart.ready.add(function() ready.dispatch());

		if (null != info.label.datapoint)
			chart.labelDataPoint = info.label.datapoint;
		if (null != info.label.datapointover)
			chart.labelDataPointOver = info.label.datapointover;
		if (null != info.label.rank)
			chart.labelRank = info.label.rank;
		if (null != info.label.value)
			chart.labelValue = info.label.value;

		chart.animated = info.animation.animated;
		chart.animationDuration = info.animation.duration;
		chart.animationDelay = info.animation.delay;
		chart.animationEase = info.animation.ease;
		chart.useMax = info.usemax;
		chart.displayBar = info.displaybar;

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