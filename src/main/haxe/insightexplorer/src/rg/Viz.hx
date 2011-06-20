/**
 * ...
 * @author Franco Ponticelli
 */

package rg;

import haxe.Firebug;
import rg.html.HtmlLeaderBoard;
import rg.html.HtmlPivotTable;
import rg.js.ReportGrid;
import rg.layout.Disposition;
import rg.layout.Orientation;
import rg.query.DateLimit;
import rg.query.IExecutor;
import rg.query.PropertyType;
import rg.query.Query;
import rg.query.QueryEventSeries;
import rg.query.QueryEventsCount;
import rg.query.QueryIntersect;
import rg.query.QueryValuesCount;
import rg.query.QueryValuesSeries;
import rg.query.QueryPropertiesCount;
import rg.query.QuerySubPath;
import rg.query.QueryTimerUpdate;
import rg.svg.effects.DropShadow;
import rg.svg.Anchor;
import rg.svg.LineChartData;
import thx.svg.LineInterpolator;
import thx.svg.LineInterpolators;
import rg.svg.SvgLineChart;
import rg.svg.SvgLineChartHighlighter;
import rg.svg.SvgScaleLabel;
import rg.svg.SvgScaleTick;
import rg.svg.SvgSpace;
import rg.svg.SvgPieChart;
import rg.svg.SvgStreamGraph;
import rg.svg.SvgTitle;
import rg.QueryOptions;
import rg.svg.SvgScaleRule;
import rg.svg.SvgLayer;

import thx.date.DateParser;
import thx.error.Error;
import thx.js.Dom;
import thx.js.Selection;
import thx.math.scale.Linear;
import thx.math.scale.LinearInt;
import thx.math.scale.LinearTime;

using Arrays;
using Objects;

class Viz 
{
	public static function pivot(el : Dynamic, query : { path : String, properties : Array<Dynamic> }, ?options : { } )
	{
		var properties : Array<{ event : String, property : String, top : Bool, limit : Int }> = [];
		
		if (null == query.path || "" == query.path)
				throw new Error("path cannot be null or empty");

		for (p in query.properties)
		{
			if (null == p.event || "" == p.event)
				throw new Error("event cannot be null or empty");
			if (null == p.property || "" == p.property)
				throw new Error("property cannot be null or empty");
			var istop = (null != p.top || (null == p.top && null == p.bottom)),
				limit = istop ? (null == p.top ? 10 : p.top) : p.bottom;
			properties.push({
				event : p.event,
				property : p.property,
				top : istop,
				limit : limit
			});
		}

		var o : Dynamic = (null == options) ? { } : options;

		var loader = QueryIntersect.forPivotTable(executor, query.path, properties, 1);
		
		setTimeLimits(loader, o);
		
		if (!properties.any(function(d) return "#timestamp" == d.property))
		{
			loader.time.autosetPeriodicity = false;
			loader.time.periodicity = "eternity";
		} else if (null != o.periodicity) {
			loader.time.autosetPeriodicity = false;
			loader.time.periodicity = o.periodicity;
		}
		
		var pivot = new HtmlPivotTable(select(el));
		loader.onChange.add(pivot.data);

		executeQuery(loader, o);

	}
	
	static function toDateLimit(v : Dynamic)
	{
		if (null == v)
			return DateLimit.NoLimit;
		if (Reflect.isFunction(v))
			return DateLimit.VariableLimit(v);
		if (Std.is(v, Date))
			return DateLimit.FixedLimit(v);
		if (Std.is(v, Float))
			return DateLimit.FixedLimit(Date.fromTime(v));
		if (Std.is(v, String))
			return DateLimit.VariableLimit(function() return DateParser.parse(v));
		throw new Error("invalid date value '{0}'", v);
	}

#if release
	public static var executor : IExecutor = new rg.query.js.ReportGridExecutor();
#else
//	public static var executor : IExecutor = new rg.query.mock.RandomExecutor(null, Date.fromString("2011-06-04")); 
	public static var executor : IExecutor = new rg.query.js.ReportGridExecutor();
#end
	public static function leaderBoard(el : Dynamic, query : { }, ?options : { } )
	{
		var selection = select(el).html().clear();
		var q : QueryOptions = cast Objects.copyTo(query, QueryOptionsUtil.emptyQuery());

		var top = null == q.bottom && q.top > 0;
		var limit = null != q.bottom ? q.bottom : (null == q.top ? 10 : q.top);
		
		var loader : Query<Dynamic, Array<{ label : String, value : Float }>>;
		if (null != q.property && "" != q.property)
		{
			var l = new QueryValuesCount(executor, q.path, q.event, q.property, top, limit, q.other);
			loader = l;
			if(null != q.filter)
				l.filter = q.filter;
		} else if(null != q.event && "" != q.event) {
			loader = new QueryPropertiesCount(executor, q.path, q.event);
		} else {
			loader = new QueryEventsCount(executor, q.path);
		}
			
		loader.onError.add(error);
		
		var o : Dynamic = (null == options) ? { } : options;
		
		setTimeLimits(loader, o);
		
		var chart = new HtmlLeaderBoard(selection);		
		loader.onChange.add(chart.data);
		
		executeQuery(loader, o);
		
		return chart;
	}
	
	static function executeQuery(loader : Query<Dynamic, Dynamic>, options : Dynamic)
	{
		var animated = (null != options.refresh && options.refresh > 0);
		if (animated)
		{
			new QueryTimerUpdate(loader, options.refresh);
		} else {
			loader.load();
		}
	}
	
	static function setTimeLimits(loader : Query<Dynamic, Dynamic>, options : Dynamic)
	{
		loader.time.startLimit = toDateLimit(options.start);
		loader.time.endLimit = toDateLimit(options.end);
	}

	public static function pie(el : Dynamic, query : { }, ?options : { } )
	{
		var selection = select(el).html().clear();
		
		var q : QueryOptions = cast Objects.copyTo(query, QueryOptionsUtil.emptyQuery());

		var top = null == q.bottom && q.top > 0;
		var limit = null != q.bottom ? q.bottom : (null == q.top ? 10 : q.top);
		
		var loader : Query<Dynamic, Array<{ label : String, value : Float }>>;
		if (null != q.property && "" != q.property)
		{
			var l = new QueryValuesCount(executor, q.path, q.event, q.property, top, limit, q.other);
			loader = l;
			if(null != q.filter)
				l.filter = q.filter;
		} else if(null != q.event && "" != q.event) {
			loader = new QueryPropertiesCount(executor, q.path, q.event);
		} else {
			loader = new QueryEventsCount(executor, q.path);
		}
			
		loader.onError.add(error);
		
		if (null == options)
			options = { };

		var o = cast sizeOptions(selection, options);
		
		setTimeLimits(loader, o);
		
		var space = new SvgSpace(o.width, o.height, selection);
		space.svg.attr("class").string("rg");
		
		var chart = new SvgPieChart(space.createPanel(Disposition.Fill(0,0)));		
		loader.onChange.add(chart.data);
		
		executeQuery(loader, o);
		
		return chart;
	}
	
	static function error(e : String) trace("ERROR: " + e)
	
	public static function sizeOptions(selection : Selection, ?options : { } )
	{
		var v;
		if (null == options)
			options = { };
		return Objects.copyTo(options, { 
			width : (v = selection.node().clientWidth) > 10 ? v : 400,
			height : (v = selection.node().clientHeight) > 10 ? v : 300
		});
	}
	
	public static function yinfo(container, q, scale, left : Bool, labelwidth : Int, pos : Int, ylayers : Array<SvgLayer>)
	{
		var labels, ticks, title;

		var text = null == q.property ? q.event : q.event + " - " + q.property;
		
		if (left)
		{
			title = new SvgTitle(container.createPanel(Disposition.Fixed(0, 0, 14)), text, Anchor.Right);
			labels = SvgScaleLabel.ofLinear(container.createPanel(Disposition.Fixed(2,0,labelwidth-24)), Anchor.Right, scale);
			ticks = SvgScaleTick.ofLinear(container.createPanel(Disposition.Fixed(2, 0, 6)), Anchor.Right, scale);
		} else {
			ticks = SvgScaleTick.ofLinear(container.createPanel(Disposition.Fixed(2, 0, 6)), Anchor.Left, scale);
			labels = SvgScaleLabel.ofLinear(container.createPanel(Disposition.Fixed(2,0,labelwidth-24)), Anchor.Left, scale);
			title = new SvgTitle(container.createPanel(Disposition.Fixed(0, 0, 14)), text, Anchor.Left);
		}
		title.customClass = "dimension-" + pos;
		labels.customClass = "dimension-" + pos;
		ticks.customClass = "dimension-" + pos;
		ylayers.push(labels);
		ylayers.push(ticks);
	}
	
	public static function line(el : Dynamic, _queries : Dynamic, ?options : { } )
	{
		var selection = select(el).html().clear();
		
		var o : Dynamic = cast sizeOptions(selection, options);
		
		var queries : Array<Dynamic> = Std.is(_queries, Array) ? _queries : [_queries];
			
		var space = new SvgSpace(o.width, o.height, selection, 10, 0);
		space.svg.attr("class").string("rg");
		
		var x = new LinearTime();
		var container = space.createContainer(Disposition.Fill(0, 0), Orientation.Horizontal);
		
		var chartpanel = null,
			highlighter = null,
			labelwidth = 75;
		var ylayers = [], xlayers = [], loaders = [], charts = [], isleft = true;
//		var dropshadow = space.addEffect(new DropShadow());
		for (i in 0...queries.length)
		{
			var q : QueryOptions = cast Objects.copyTo(queries[i], QueryOptionsUtil.emptyQuery());
			var top = null == q.bottom && q.top > 0;
			var limit = null != q.bottom ? q.bottom : (null == q.top ? 10 : q.top);
			var loader : Query<Dynamic, LineChartData>;
			if (null != q.property)
			{
				loader = QueryValuesSeries.forLineChart(executor, q.path, q.event, q.property, []);
			} else {
				loader = QueryEventSeries.forLineChart(executor, q.path, q.event);
			}

			loader.time.periodicity = o.periodicity;
			setTimeLimits(loader, o);
			loader.time.update();
			loader.onError.add(error);
			loaders.push(loader);
			
			var y = new LinearInt(), info;
				
			if (i == 0)
			{
				yinfo(container, q, y, true, labelwidth, i, ylayers);
				chartpanel = container.createPanel(Disposition.Fill(0, 0));
				highlighter = new SvgLineChartHighlighter(chartpanel, x);
				isleft = false;
				loader.onData.addOnce(function(d) {
					highlighter.prepare();
				});
			} else
				yinfo(container, q, y, false, labelwidth, i, ylayers);
			
			var chart = new SvgLineChart(chartpanel, x, y);
//			chart.setLineEffect(dropshadow);
			chart.customClass = "dimension-" + i;

			chart.lineInterpolator(null == o.lineinterpolator ? LineInterpolator.Linear : LineInterpolators.parse(o.lineinterpolator));
			charts.push(chart);
			
			if (i == 0)
			{
				loader.onChange.add(function(v : LineChartData) {
					x.domain([null == loader.time.start ? v.minx : loader.time.start.getTime(), null == loader.time.end ? v.maxx : loader.time.end.getTime()]);
					xlayers.each(function(layer, i) layer.redraw());
				});
			}
			
			loader.onChange.add(function(v : LineChartData) {
				y.domain([v.maxy * 1.2, 0.0]);
				ylayers.each(function(layer, i) layer.redraw());
				chart.data(v.data);
			});
			
			if ((null == o.yaxis || o.yaxis.showrulers != false) && queries.length == 1)
			{
				ylayers.push(SvgScaleRule.ofLinear(chartpanel, Orientation.Horizontal, y));
			}
		}

		var bottom = space.createContainer(Disposition.Fixed(0, 0, 20), Orientation.Horizontal);
		var belowchart = bottom.createContainer(Disposition.Fill(labelwidth, labelwidth * (queries.length - 1)), Orientation.Vertical);
		if (null != o.xaxis && o.xaxis.labelsonbounds == true)
		{
			xlayers.push(SvgScaleTick.boundsOfLinear(belowchart.createPanel(Disposition.Fixed(0,0,6)), Anchor.Top, x));
			xlayers.push(SvgScaleLabel.boundsOfLinear(belowchart.createPanel(Disposition.Fixed(2,0,12)), Anchor.Top, x));		
		} else {
			xlayers.push(SvgScaleTick.ofLinearTime(belowchart.createPanel(Disposition.Fixed(0,0,6)), Anchor.Top, x));
			xlayers.push(SvgScaleLabel.ofLinearTime(belowchart.createPanel(Disposition.Fixed(2,0,12)), Anchor.Top, x));	
		}

		if (o.animated)
		{
			thx.js.Timer.timer(function(t) {
				loaders.each(function(loader, _) {
					loader.time.update();
				});
				x.domain([loaders[0].time.start.getTime(), loaders[0].time.end.getTime()]);
				charts.each(function(chart, _) {
					chart.updatex();
				});
				xlayers.each(function(layer, i) layer.redraw());
				return false;
			});
		}
//		else
//			highlighter.approximator = function(x : Float) return Dates.snap(x, loaders[0].time.periodicity);

		loaders.each(function(loader, _) {
			executeQuery(loader, o);
		});
	}

	static function select(el : Dynamic)
	{
		var el = if (Std.is(el, String)) Dom.select(el) else Dom.selectNode(el);
		if (el.empty())
			throw new Error("invalid container");
		return el;
	}

	static function __init__()
	{
		Firebug.redirectTraces();
		var r : Dynamic = untyped window.ReportGrid;
		r.timeSeries = rg.Viz.line;
		r.totals = rg.Viz.pie;
		r.leaderBoard = rg.Viz.leaderBoard;
		r.pivotTable = rg.Viz.pivot;
	}
}