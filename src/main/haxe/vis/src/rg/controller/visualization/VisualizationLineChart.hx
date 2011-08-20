/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoLineChart;
import rg.data.DataPoint;
import rg.data.Segmenter;
import rg.util.DataPoints;
import rg.view.svg.panel.Panel;
import rg.view.svg.widget.ChartTickmarks;
import rg.view.svg.widget.LineChart;
import rg.view.frame.StackItem;
import rg.view.frame.FrameLayout;
import rg.view.svg.widget.Title;
import rg.data.Variable;
import rg.util.Properties;
import rg.data.VariableIndependent;

class VisualizationLineChart extends VisualizationSvg
{
	public var info : InfoLineChart;
	var chart : LineChart;
	var xlabel : ChartTickmarks;
	var xpanel : Panel;
	var ypanels : Array < { 
		id : Int,
		panel : Panel,
		tickmarks : ChartTickmarks,
		isleft : Bool
	}>;
	var title : Null<Title>;
	
	override function init() 
	{
		initYAxes();
		initXAxis();
		initChart();
		initTitle();
	}
	
	function initYAxes()
	{
		ypanels = [];
		for (i in 0...dependentVariables.length)
		{
			var context = layout.getContext("y" + i);
			if (null == context)
				continue;
			var panel = context.panel;
			ypanels.push({ 
				id : i,
				panel : panel,
				tickmarks : new ChartTickmarks(panel, context.anchor),
				isleft : switch(context.anchor) {
					case Right : true;
					default: false;
				}
			});
			
			var title, pname = "y" + i + "title";
			if (null == info.label.axis || null == (title = info.label.axis(dependentVariables[i].type)))
				continue;
			var context = layout.getContext(pname);
			if (null == context)
				continue;
			var t = new Title(context.panel, title, context.anchor, "axis-title");
			var h = t.idealHeight();
			layout.suggestSize(pname, h);
		}
	}
	
	function initXAxis()
	{
		var context = layout.getContext("x");
		if (null == context)
			return;

		xpanel = context.panel;
		xlabel = new ChartTickmarks(xpanel, context.anchor);
		
		var title;
		if (null == info.label.axis || null == (title = info.label.axis(independentVariables[0].type)))
			return;
		
		var context = layout.getContext("xtitle");
		if (null == context)
			return;
		var t = new Title(context.panel, title, context.anchor, "axis-title");
		var h = t.idealHeight();
		layout.suggestSize("xtitle", h);
	}
	
	function initChart()
	{
		var main = layout.getPanel(layout.mainPanelName);
		
		chart = new LineChart(main);
		
		chart.animated = info.animation.animated;
		chart.animationDuration = info.animation.duration;
		chart.animationEase = info.animation.ease;
		
		chart.symbol = info.symbol;
		chart.symbolStyle = info.symbolStyle;
		
		chart.click = info.click;
		chart.labelDataPoint = info.label.datapoint;
		chart.labelDataPointOver = info.label.datapointover;
		
		chart.lineInterpolator = info.line.interpolation;
		chart.lineEffect = info.line.effect;
		
		if (null != info.y0property)
			chart.y0property = info.y0property;
		else if (info.displayarea)
			chart.y0property = "";
		
		chart.init();
	}
	
	function initTitle()
	{
		var panelContextTitle = layout.getContext("title");
		if (null == panelContextTitle)
			return;
		title = new Title(panelContextTitle.panel, null, panelContextTitle.anchor);
	}
	
	override function feedData(data : Array<DataPoint>)
	{
		if (null != title && null != info.label.title)
		{
			title.text = info.label.title(variables, data);
			layout.suggestSize("title", title.idealHeight());
		}
		
		for (i in 0...ypanels.length)
		{
			var item = ypanels[i],
				variable = dependentVariables[item.id];
			item.tickmarks.update(variable.axis, variable.min, variable.max);
			var size = Math.round(item.tickmarks.desiredSize);
			layout.suggestSize("y" + item.id, size);
		}
		
		if (null != xlabel)
		{
			var variable = independentVariables[0];
			xlabel.update(variable.axis, variable.min, variable.max);
			var size = xlabel.desiredSize;
			layout.suggestSize("x", Math.round(size));
		}
		
		chart.setVariables(independentVariables, dependentVariables);
		chart.data(transformData(data));
	}
	
	function transformData(dps : Array<DataPoint>) : Array<Array<Array<DataPoint>>>
	{
		var results = [],
			segmenter = new Segmenter(info.segment.on, info.segment.transform, info.segment.scale);
		for (i in 0...dependentVariables.length)
		{
			var variable = dependentVariables[i];
			var values = DataPoints.filterByDependents(dps, [variable]);
			results.push(segmenter.segment(values));
		}
		return results;
	}
	
	override function destroy()
	{
		chart.destroy();
	}
}