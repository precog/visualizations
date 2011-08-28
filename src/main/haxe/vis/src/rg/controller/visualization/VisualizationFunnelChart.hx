/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoFunnelChart;
import rg.view.layout.Layout;
import rg.view.svg.chart.FunnelChart;
import rg.view.svg.layer.Title;
import rg.data.DataPoint;
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

		// labels
		if(null != info.label.datapoint)
			chart.labelFormatDataPoint = info.label.datapoint;
		if(null != info.label.datapoint)
			chart.labelFormatDataPointOver = info.label.datapointover;
		
		// events
		if(null != info.click)
			chart.mouseClick = info.click;
			
		chart.padding = info.padding;
		chart.flatness = info.flatness;
		chart.applyGradient = info.applyGradient;
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
	override function feedData(data : Array<DataPoint>)
	{
		chart.setVariables(independentVariables, dependentVariables);
		var data = DataPoints.filterByIndependents(DataPoints.filterByDependents(data, dependentVariables), independentVariables);
		if (null != info.sortDataPoint)
			data.sort(info.sortDataPoint);
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