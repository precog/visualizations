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
import rg.view.layout.PanelContext;
import rg.view.svg.widget.Title;
import rg.data.Variable;
import rg.data.VariableIndependent;
import rg.util.Properties;

class VisualizationPieChart extends VisualizationSvg
{
	var chart : PieChart;
	var panelContextTitle : Null<PanelContext>;
	var title : Null<Title>;
	public var info : InfoPieChart;
	override function init()
	{
		// CHART
		var panelChart = layout.getPanel("main").panel;
		chart = new PieChart(panelChart);
		chart.propertyValue = dependentVariables[0].type;
		
		// aesthetic
		chart.innerRadius = info.innerradius;
		chart.outerRadius = info.outerradius;
		chart.overRadius  = info.overradius;
		chart.gradientLightness = info.gradientlightness;
		
		// labels
		if(null != info.label.datapoint)
			chart.labelFormatDataPoint = info.label.datapoint;
		if(null != info.label.datapoint)
			chart.labelFormatDataPointOver = info.label.datapointOver;

		chart.labelRadius = info.labelradius;
		chart.labelDisplay = info.labeldisplay;
		chart.labelOrientation = info.labelorientation;
		chart.labelDontFlip = info.dontfliplabel;

		// animation
		chart.animated = info.animation.animated;
		chart.animationDuration = info.animation.duration;
		chart.animationEase = info.animation.ease;
		chart.animationDelay = info.animation.delay;
		
		// events
		if(null != info.click)
			chart.mouseClick = info.click;
		
		// TITLE
		panelContextTitle = layout.getPanel("title");
		if (null == panelContextTitle)
			return;
		title = new Title(panelContextTitle.panel, null, panelContextTitle.anchor);
	}
	
	static function defaultTitle(axes : Array<Variable<Dynamic>>, dps : Array<DataPoint>)
	{
		for (axis in axes)
			if (Std.is(axis, VariableIndependent))
				return Strings.ucwords(Properties.humanize(axis.type));
		return null;
	}
	
	override function feedData(data : Array<DataPoint>)
	{
		if (null != title)
		{
			if (null == info.label.title)
				title.text = defaultTitle(variables, data);
			else
				title.text = info.label.title(variables, data);
			layout.suggestSize("title", title.idealHeight());
		}
		if (null != info.sortDataPoint)
		{
			data.sort(info.sortDataPoint);
		}
		chart.init();
		chart.data(data);
	}
	
	override public function destroy()
	{
		chart.destroy();
		if (null != title)
			title.destroy();
		super.destroy();
	}
}