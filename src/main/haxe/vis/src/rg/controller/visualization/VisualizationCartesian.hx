/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoCartesianChart;
import rg.data.DataPoint;
import rg.util.DataPoints;
import rg.view.svg.layer.TickmarksOrtho;
import rg.view.svg.chart.CartesianChart;
import rg.view.svg.layer.Title;
import thx.error.AbstractMethod;

class VisualizationCartesian<T> extends VisualizationSvg
{
	public var info : InfoCartesianChart;
	var chart : CartesianChart<T>;
	var xlabel : TickmarksOrtho;
	var ylabels : Array<{ id : Int, tickmarks : TickmarksOrtho }>;
	var title : Null<Title>;
	
	override function init() 
	{
		initYAxes();
		initXAxis();
		initTitle();
		initPadding();
		initChart();
		initCartesianChart();
	}
	
	function initPadding()
	{
		layout.adjustPadding();
	}
	
	function initYAxes()
	{
		ylabels = [];
		for (i in 0...dependentVariables.length)
		{
			var tickmarks = createTickmarks(dependentVariables[i].type, "y" + i);
			if (null == tickmarks)
				continue;
			ylabels.push({ 
				id : i,
				tickmarks : tickmarks
			});
		}
	}
	
	function initXAxis()
	{
		xlabel = createTickmarks(independentVariables[0].type, "x");
	}
	
	function initChart()
	{
		throw new AbstractMethod();
	}
	
	function initCartesianChart()
	{
		chart.animated = info.animation.animated;
		chart.animationDuration = info.animation.duration;
		chart.animationEase = info.animation.ease;
		
		chart.click = info.click;
		chart.labelDataPoint = info.label.datapoint;
		chart.labelDataPointOver = info.label.datapointover;

		chart.init();
	}
	
	function initTitle()
	{
		if (null == info.label.title)
			return;
		var panelContextTitle = layout.getContext("title");
		if (null == panelContextTitle)
			return;
		title = new Title(panelContextTitle.panel, null, panelContextTitle.anchor);
	}
	
	override function feedData(data : Array<DataPoint>)
	{
		if (0 == data.length)
			return;
		if (null != title && null != info.label.title)
		{
			title.text = info.label.title(variables, data);
			layout.suggestSize("title", title.idealHeight());
		}
		
		for (i in 0...ylabels.length)
		{
			var item = ylabels[i],
				variable = dependentVariables[item.id];
			item.tickmarks.update(variable.axis, variable.min, variable.max);
			var size = Math.round(item.tickmarks.desiredSize);
			layout.suggestSize("y" + item.id, size);
		}
		
		if (null != xlabel)
		{
			var variable = independentVariables[0];
			xlabel.update(variable.axis, variable.min, variable.max);
			var size = Math.round(xlabel.desiredSize);
			layout.suggestSize("x", size);
		}
		
		chart.setVariables(independentVariables, dependentVariables);
		chart.data(transformData(data));
	}
	
	function transformData(dps : Array<DataPoint>) : T
	{
		return throw new AbstractMethod();
	}
	
	override function destroy()
	{
		chart.destroy();
	}
	
	function createTickmarks(type : String, pname : String)
	{
		var displayMinor = info.displayMinor(type),
			displayMajor = info.displayMajor(type),
			displayLabel = info.displayLabel(type),
			title = null != info.label.axis ? info.label.axis(type) : null,
			tickmarks = null,
			context;

		if (displayMinor || displayMajor || displayLabel)
		{
			context = layout.getContext(pname);
			if (null == context)
				return null;
				
			tickmarks = new TickmarksOrtho(context.panel, context.anchor);
			if (!displayLabel)
				tickmarks.displayLabel = false;
			else if (null != info.label.tickmark)
				tickmarks.tickLabel = function(d) return info.label.tickmark(d, type);
			
			tickmarks.displayMinor = displayMinor;
			tickmarks.displayMajor = displayMajor;
			tickmarks.lengthMinor = info.lengthTickMinor;
			tickmarks.lengthMajor = info.lengthTickMajor;
			tickmarks.paddingMinor = info.paddingTickMinor;
			tickmarks.paddingMajor = info.paddingTickMajor;
			tickmarks.paddingLabel = info.paddingLabel;
		}
		
		tickmarks.displayAnchorLine = info.displayAnchorLine(type);
		
		if (null != title && null != (context = layout.getContext(pname + "title")))
		{
			var t = new Title(context.panel, title, context.anchor, "axis-title");
			var h = t.idealHeight();
			layout.suggestSize(pname + "title", h);
		}
		tickmarks.init();
		return tickmarks;
	}
}