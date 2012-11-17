/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;
import rg.factory.FactoryGeoProjection;
import rg.info.InfoGeo;
import rg.svg.chart.Geo;
import rg.svg.widget.Map;
import rg.svg.layer.Title;
import rg.svg.chart.ColorScaleMode;
using Arrays;

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
		chart.labelOutline = info.labelOutline;
		chart.labelShadow = info.labelShadow;
		baseChart = chart;
		chart.ready.add(function() ready.dispatch());
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
			map.mapping = imap.mapping;
			var mappingurl = imap.mappingurl;
			if(null != mappingurl && (!StringTools.startsWith(mappingurl, "http://") || !StringTools.startsWith(mappingurl, "https://")))
				mappingurl = RGConst.BASE_URL_GEOJSON + mappingurl + ".json" + (imap.usejsonp ? ".js" : "" );
			map.load(imap.url, imap.type, mappingurl, imap.usejsonp);
			chart.addMap(map, imap.property);
		}
	}

	override function feedData(data : Array<Dynamic>)
	{
		chart.setVariables(independentVariables, dependentVariables, data);

		if (null != title)
		{
			if (null != info.label.title)
			{
				title.text = info.label.title(variables, data, variables.map(function(variable, _) return variable.type));
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