package rg.controller.visualization;
import rg.controller.info.InfoSankey;
import rg.view.layout.Layout;
import rg.view.svg.layer.Title;
import rg.view.svg.chart.Sankey;
import rg.data.DataPoint;

class VisualizationSankey extends VisualizationSvg
{
	public var info : InfoSankey;
	var title : Null<Title>;
	var chart : Sankey;

	override function init()
	{
		// TITLE
		if (null != info.label.title)
		{
			var panelContextTitle = layout.getContext("title");
			if (null == panelContextTitle)
				return;
			title = new Title(panelContextTitle.panel, null, panelContextTitle.anchor);
		}

		// CHART
		var panelChart = layout.getPanel(layout.mainPanelName);
		chart = new Sankey(panelChart);
		chart.ready.add(function() ready.dispatch());
	}

	override function feedData(data : Array<DataPoint>)
	{
		chart.setVariables(independentVariables, dependentVariables, data);

		if (null != title)
		{
			if (null != info.label.title)
			{
				title.text = info.label.title(variables, data);
				layout.suggestSize("title", title.idealHeight());
			} else
				layout.suggestSize("title", 0);
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