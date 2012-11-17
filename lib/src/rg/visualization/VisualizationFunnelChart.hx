/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;
import rg.info.InfoFunnelChart;
import rg.layout.Layout;
import rg.svg.chart.FunnelChart;
import rg.svg.chart.GradientEffect;
import rg.svg.layer.Title;
import rg.util.DataPoints;
using Arrays;

// TODO make super class common to piechart
class VisualizationFunnelChart extends VisualizationSvg
{
	public var info : InfoFunnelChart;
	var title : Null<Title>;
	var chart : FunnelChart;

	override function init()
	{
		// CHART
		var panelChart = layout.getPanel(layout.mainPanelName);
		chart = new FunnelChart(panelChart);
		baseChart = chart;
		chart.ready.add(function() ready.dispatch());

		// labels
		if(null != info.label.datapoint)
			chart.labelDataPoint = info.label.datapoint;
		if(null != info.label.datapoint)
			chart.labelDataPointOver = info.label.datapointover;
		if (null != info.label.arrow)
			chart.labelArrow = info.label.arrow;

		// events
		if(null != info.click)
			chart.click = info.click;

		chart.padding = info.padding;
		chart.flatness = info.flatness;
		switch(info.effect)
		{
			case Gradient(v):
				chart.displayGradient = true;
				chart.gradientLightness = v;
			case NoEffect:
				chart.displayGradient = false;
		}

		chart.arrowSize = info.arrowSize;

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
	override function feedData(data : Array<Dynamic>)
	{
		chart.setVariables(independentVariables, dependentVariables);
		var data = DataPoints.filterByIndependents(DataPoints.filterByDependents(data, dependentVariables), independentVariables);
		if (null != info.sortDataPoint)
			data.sort(info.sortDataPoint);
		if (null != title)
		{
			if (null != info.label.title)
			{
				title.text = info.label.title(variables, data, variables.map(function(variable, _) return variable.type));
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