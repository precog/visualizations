/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoAnimation;
import rg.controller.info.InfoPieChart;
import rg.data.DataPoint;
import rg.view.svg.panel.Panel;
import rg.view.svg.chart.PieChart;
import rg.view.layout.PanelContext;
import rg.view.svg.layer.Title;
import rg.data.Variable;
import rg.data.VariableIndependent;
import rg.util.Properties;

class VisualizationPieChart extends VisualizationSvg
{
	var chart : PieChart;
	var title : Null<Title>;
	public var info : InfoPieChart;
	override function init()
	{
		// CHART
		var panelChart = layout.getPanel(layout.mainPanelName);
		chart = new PieChart(panelChart);
		
		// aesthetic
		chart.innerRadius = info.innerradius;
		chart.outerRadius = info.outerradius;
		chart.overRadius  = info.overradius;
		chart.tooltipRadius = info.tooltipradius;
		switch(info.effect)
		{
			case Gradient(v):
				chart.displayGradient = true;
				chart.gradientLightness = v;
			case NoEffect:
				chart.displayGradient = false;
		}
		
		// labels
		chart.labelDataPoint = info.label.datapoint;
		chart.labelDataPointOver = info.label.datapointover;

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
		if (null != info.label.title)
		{
			var panelContextTitle = layout.getContext("title");
			if (null == panelContextTitle)
				return;
			title = new Title(panelContextTitle.panel, null, panelContextTitle.anchor);
		}
	}
	
	// TODO move sort to axis
	override function feedData(data : Array<DataPoint>)
	{
		chart.setVariables(independentVariables, dependentVariables);
		if (null != title)
		{
			if (null != info.label.title)
			{
				title.text = info.label.title(variables, data);
				layout.suggestSize("title", title.idealHeight());
			} else
				layout.suggestSize("title", 0);
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