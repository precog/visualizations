/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoCartesianChart;
import rg.data.DataPoint;
import rg.data.Variable;
import rg.util.DataPoints;
import rg.view.svg.layer.RulesOrtho;
import rg.view.svg.layer.TickmarksOrtho;
import rg.view.svg.chart.CartesianChart;
import rg.view.svg.layer.Title;
import thx.error.AbstractMethod;
import rg.view.svg.widget.LabelOrientations;
import rg.view.svg.widget.GridAnchors;
import rg.view.frame.Orientation;
import rg.data.IAxis;

class VisualizationCartesian<T> extends VisualizationSvg
{
	public var info : InfoCartesianChart;
	var chart : CartesianChart<T>;
	var xlabel : TickmarksOrtho;
	var xrule : RulesOrtho;
	var ylabels : Array<{ id : Int, tickmarks : TickmarksOrtho }>;
	var yrules : Array<{ id : Int, rules : RulesOrtho }>;
	var title : Null<Title>;
	var xvariable : Variable<Dynamic, IAxis<Dynamic>>;
	var yvariables : Array<Variable<Dynamic, IAxis<Dynamic>>>;

	override function init()
	{
		initAxes();
		initYAxes();
		initXAxis();
		initTitle();
		initPadding();
		initChart();
		initCartesianChart();
	}

	function initAxes()
	{
		throw new AbstractMethod();
	}

	function initPadding()
	{
		layout.adjustPadding();
	}

	function initYAxes()
	{
		ylabels = [];
		yrules = [];
		for (i in 0...yvariables.length)
		{
			var tickmarks = createTickmarks(i + 1, yvariables[i].type, "y" + i),
				rules = createRules(i + 1, yvariables[i].type, Horizontal);
			if (null != tickmarks)
			{
				ylabels.push({
					id : i,
					tickmarks : tickmarks
				});
			}

			if (null != rules)
			{
				yrules.push({
					id : i,
					rules : rules
				});
			}
		}
	}

	function initXAxis()
	{
		xlabel = createTickmarks(0, xvariable.type, "x");
		xrule = createRules(0, xvariable.type, Vertical);
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

		var transformed = transformData(data);

		chart.setVariables(variables, independentVariables, dependentVariables, transformed);

		for (i in 0...ylabels.length)
		{
			var item = ylabels[i],
				variable = yvariables[item.id];
			item.tickmarks.update(variable.axis, variable.min(), variable.max());
			var size = Math.round(item.tickmarks.desiredSize);
			layout.suggestSize("y" + item.id, size);
		}

		for (i in 0...yrules.length)
		{
			var item = yrules[i],
				variable = yvariables[item.id];
			item.rules.update(variable.axis, variable.min(), variable.max());
		}

		if (null != xlabel)
		{
			var variable = xvariable;
			xlabel.update(variable.axis, variable.min(), variable.max());
			var size = Math.round(xlabel.desiredSize);
			layout.suggestSize("x", size);
		}

		if (null != xrule)
		{
			var variable = xvariable;
			xrule.update(variable.axis, variable.min(), variable.max());
		}

		chart.data(transformed);
	}

	function transformData(dps : Array<DataPoint>) : T
	{
		return throw new AbstractMethod();
	}

	override function destroy()
	{
		chart.destroy();
	}

	function setTickmarksDefaults(tickmarks : TickmarksOrtho, i : Int, type : String, pname : String)
	{

	}

	function createTickmarks(i : Int, type : String, pname : String)
	{
		var displayMinor = info.displayMinorTick(type),
			displayMajor = info.displayMajorTick(type),
			displayLabel = info.displayLabelTick(type),
			displayAnchorLine = info.displayAnchorLineTick(type),
			title = null != info.label.axis ? info.label.axis(type) : null,
			tickmarks = null,
			context;

		if (displayMinor || displayMajor || displayLabel || displayAnchorLine)
		{
			context = layout.getContext(pname);
			if (null == context)
				return null;

			tickmarks = new TickmarksOrtho(context.panel, context.anchor);
			setTickmarksDefaults(tickmarks, i, type, pname);
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

			var s = info.labelOrientation(type);
			if (null != s)
				tickmarks.labelOrientation = LabelOrientations.parse(s);
			s = info.labelAnchor(type);
			if (null != s)
				tickmarks.labelAnchor = GridAnchors.parse(s);
			var a;
			if(null != (a = info.labelAngle(type)))
				tickmarks.labelAngle = a;

			tickmarks.displayAnchorLine = displayAnchorLine;
		}

		if (null != title && null != (context = layout.getContext(pname + "title")))
		{
			var t = new Title(context.panel, title, context.anchor, "axis-title");
			var h = t.idealHeight();
			layout.suggestSize(pname + "title", h);
		}

		if(null != tickmarks)
			tickmarks.init();
		return tickmarks;
	}

	function createRules(i : Int, type : String, orientation : Orientation)
	{
		var displayMinor = info.displayMinorRule(type),
			displayMajor = info.displayMajorRule(type),
			displayAnchorLine = info.displayAnchorLineRule(type),
			title = null != info.label.axis ? info.label.axis(type) : null,
			rules = null,
			panel;

		if (displayMinor || displayMajor)
		{
			panel = layout.getPanel("main");
			if (null == panel)
				return null;

			rules = new RulesOrtho(panel, orientation);

			rules.displayMinor = displayMinor;
			rules.displayMajor = displayMajor;
			rules.displayAnchorLine = displayAnchorLine;

			rules.init();
		}

		return rules;
	}
}