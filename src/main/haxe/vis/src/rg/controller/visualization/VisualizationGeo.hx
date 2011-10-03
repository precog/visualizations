/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.factory.FactoryGeoProjection;
import rg.controller.info.InfoGeo;
import rg.view.svg.chart.Geo;
import rg.data.DataPoint;
import rg.view.svg.layer.Map;
import rg.view.svg.layer.Title;
import rg.view.svg.chart.ColorScaleMode;

class VisualizationGeo extends VisualizationSvg
{
	public var info : InfoGeo;
	var title : Null<Title>;
	var chart : Geo;
	
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
		chart = new Geo(panelChart);
/*
		// labels
		chart.labelDataPoint = info.label.datapoint;
		chart.labelDataPointOver = info.label.datapointover;

		// events
		chart.click = info.click;
*/
		
		var pfactory = new FactoryGeoProjection();
			
		for (imap in info.map)
		{
			var projection = pfactory.create(imap),
				map = new Map(chart.mapcontainer, projection);
			map.className = imap.classname;
			// labels
			if (null == imap.label)
				map.labelDataPoint = info.label.datapoint;
			else
				map.labelDataPoint = imap.label.datapoint;
				
			if (null == imap.label)
				map.labelDataPointOver = info.label.datapointover;
			else
				map.labelDataPointOver = imap.label.datapointover;

			// events
			map.click = imap.click;
			
			map.radius = imap.radius;
			map.colorMode = imap.colorScaleMode;
			
			map.handlerClick = chart.handlerClick;
			map.handlerDataPointOver = chart.handlerDataPointOver;
			map.load(imap.url, imap.type);
			chart.addMap(map, imap.property);
		}
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