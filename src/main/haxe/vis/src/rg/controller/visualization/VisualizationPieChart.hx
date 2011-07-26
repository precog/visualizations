/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoAnimation;
import rg.controller.info.InfoPieChart;
import rg.data.DataPoint;
import rg.view.svg.panel.Panel;
import rg.view.svg.widget.PieChart;

class VisualizationPieChart extends VisualizationSvg
{
	var chartpanel : Panel;
	var piechart : PieChart;
	public var info : InfoPieChart;
	override function init()
	{
		chartpanel = layout.getPanel("main").panel;
		piechart = new PieChart(chartpanel);
		piechart.padding = info.padding;
		piechart.innerRadius = info.innerRadius;
		piechart.propertyValue = dependentVariables[0].type;
		piechart.animated = info.animation.animated;
		piechart.animationDuration = info.animation.duration;
		piechart.animationEase = info.animation.ease;
	}
	
	override function feedData(data : Array<DataPoint>)
	{
		piechart.data(data);
	}
}