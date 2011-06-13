package rg;
//import rg.chart.LineChart;
import haxe.Timer;
import rg.query.QuerySubPath;
import rg.svg.effects.DropShadow;
//import rg.chart.StreamGraph;
import rg.ChartOptions;
import rg.pivottable.PivotTable;
import rg.pivottable.PivotTableProperty;
import rg.query.IExecutor;
import rg.query.js.ReportGridExecutor;
import rg.query.mock.RandomExecutor;
import rg.query.QueryPropertyValues;
import rg.query.QueryEventSeries;
import rg.query.QueryPropertySeries;
import rg.query.QueryTimerUpdate;
import rg.query.QueryValuesCount;
import rg.query.QuerySubPath;
import rg.svg.LineChartData;
import rg.svg.SvgContainer;
import rg.svg.SvgLineChart;
import rg.svg.SvgLineChartHighlighter;
import rg.svg.SvgPanel;
import rg.svg.SvgScaleLabel;
import rg.svg.SvgTitle;
import rg.svg.SvgZoomZone;
import thx.date.DateParser;
import thx.error.Error;
import thx.js.Dom;
import rg.pivottable.QueryProperty;
import rg.QueryOptions;
import rg.js.ReportGrid;
import rg.query.QueryLimit;
import rg.query.QueryIntersect;
import rg.query.DateLimit;
import thx.js.Selection;
import rg.query.QueryValuesSeries;
import rg.svg.SvgSpace3x3;
import rg.svg.SvgSpace;
import rg.svg.SvgPieChart;
import rg.layout.Disposition;
import thx.math.scale.Linear;
import thx.math.scale.LinearTime;
import thx.svg.LineInterpolator;
import thx.svg.LineInterpolators;
import rg.svg.Anchor;
import rg.layout.StackFrame;
import rg.layout.Orientation;
import rg.svg.SvgScaleTick;
import rg.svg.SvgScaleRule;
import rg.util.Periodicity;
import rg.svg.SvgStreamGraph;

using Objects;
using Arrays;

/**
 * ...
 * @author Franco Ponticelli
 */

class Viz 
{
	public static function pivot(el : Dynamic, query : { }, ?options : { } )
	{
		var pivot = new PivotTable(select(el));
		var queryoptions = QueryOptionsUtil.emptyPivotTableQuery();
		Objects.copyTo(query, queryoptions);

		makePivotOptions(pivot, queryoptions, options, pivot.init);
		return pivot;
	}

	static function makePivotOptions(pivot : PivotTable, query : PivotTableQueryOptions, options : { }, handler : Void -> Void)
	{
		if (null == options)
			options = { };
		var o : ChartOptions = cast defaultOptions.copyTo(options);

		if (null == query.path)
			throw new Error("you must provide a path value for your query");
		if (null == query.event)
			throw new Error("you must provide an event name for your query");
				
		function init()
		{
			if (null != query.filter)
				pivot.availableProperties = query.availableProperties.filter(query.filter);
			else
				pivot.availableProperties = query.availableProperties;
				
			pivot.start = toDatef(o.start)(Date.now());
			pivot.end = toDatef(o.end)(Date.now());
			
			pivot.path = query.path;
			pivot.event = query.event;
				
			pivot.queryProperties = [];
			for (property in query.properties)
			{
				if (null != property.time)
				{
					pivot.queryProperties.push(TimeProperty(
						periodicity(property.time),
						null == property.order ? true : property.order.toLowerCase() == "top"
					));
				} else {
					pivot.queryProperties.push(ValueProperty(
						property.name, 
						null == property.order ? false : property.order.toLowerCase() == "bottom",
						null == property.limit ? 20 : property.limit
					));
				}
			}
			handler();
		}
		
		if (null == query.availableProperties || 0 == query.availableProperties.length)
		{
			ReportGrid.children(query.path, { property : query.event, type : "property" }, function(v : Array<String>) {
				query.availableProperties = v.map(function(d, i) {
					if (d.substr(0, 1) == ".")
						return d.substr(1);
					else
						return d;
				});
				init();
			});
		} else {
			init();
		}
	}
	
	static function periodicity(v : String)
	{
		if (null == v)
			return "Eternity";
		var v = Strings.ucfirst(v.toLowerCase());
		if (!Reflect.hasField(rg.js.ReportGrid.Periodicity, v))
			throw new Error("invalid periodicity '{0}'", v);
		return v;
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
	
	static function toDatef(v : Dynamic) : Date -> Null<Date>
	{
		if (null == v)
			return function(_) return null;
		if (Reflect.isFunction(v))
			return v;
		if (Std.is(v, Date))
			return function(_) return v;
		if (Std.is(v, Float))
			return function(_) return Date.fromTime(v);
		if (Std.is(v, String))
			return function(d) return DateParser.parse(v, d);
		throw new Error("invalid date value '{0}'", v);
	}
	
	public static var executor : IExecutor = new RandomExecutor(null, Date.fromString("2011-06-04")); 
//	public static var executor : IExecutor = new  ReportGridExecutor();

	public static function pie(el : Dynamic, query : { }, ?options : { } )
	{
		var selection = select(el);
		var q : QueryOptions = cast Objects.copyTo(query, QueryOptionsUtil.emptyQuery());

		var top = null == q.bottom && q.top > 0;
		var limit = null != q.bottom ? q.bottom : (null == q.top ? 10 : q.top);
		
		var loader = new QueryValuesCount(executor, q.path, q.event, q.property, top, limit, q.other);
		if(null != q.filter)
			loader.filter = q.filter;
		loader.onError.add(error);
		
		if (null == options)
			options = { };

		var o = cast sizeOptions(selection, options);
		
		loader.time.startLimit = toDateLimit(o.start);
		loader.time.endLimit = toDateLimit(o.end);
		
		var space = new SvgSpace(o.width, o.height, selection);
		space.svg.attr("class").string("rg");
		
		var chart = new SvgPieChart(space.createPanel(Disposition.Fill(0,0)));		
		loader.onChange.add(chart.data);
		
		var animated = (null != o.refresh && o.refresh > 0);
		if (animated)
		{
			new QueryTimerUpdate(loader, o.refresh);
		} else {
			loader.load();
		}
		
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
	
	public static function yinfo(container, q, scale, left : Bool, labelwidth : Int, pos : Int)
	{
		var labels, ticks, title;
		if (left)
		{
			title = new SvgTitle(container.createPanel(Disposition.Fixed(0, 0, 14)), q.event, Anchor.Right);
			labels = SvgScaleLabel.ofLinear(container.createPanel(Disposition.Fixed(2,0,labelwidth-24)), Anchor.Right, scale);
			ticks = SvgScaleTick.ofLinear(container.createPanel(Disposition.Fixed(2, 0, 6)), Anchor.Right, scale);
		} else {
			ticks = SvgScaleTick.ofLinear(container.createPanel(Disposition.Fixed(2, 0, 6)), Anchor.Left, scale);
			labels = SvgScaleLabel.ofLinear(container.createPanel(Disposition.Fixed(2,0,labelwidth-24)), Anchor.Left, scale);
			title = new SvgTitle(container.createPanel(Disposition.Fixed(0, 0, 14)), q.event, Anchor.Left);
		}
		title.customClass = "dimension-" + pos;
		labels.customClass = "dimension-" + pos;
		ticks.customClass = "dimension-" + pos;
		return {
			labels : labels,
			ticks : ticks
		};
	}
	
	public static function sub(path : String, handler : Array<String> -> Void)
	{
		var loader = new QuerySubPath(executor, path);
		loader.onData.add(handler);
		loader.load();
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
			highlighter,
			labelwidth = 70;
//		highlighter.approximator = function(c : { x : Float, y : Float } ) c.x = Dates.snap(c.x, o.periodicity);

		var loaders = [], charts = [], isleft = true, xscale = null;
		var dropshadow = space.addEffect(new DropShadow());
		for (i in 0...queries.length)
		{
			var q : QueryOptions = cast Objects.copyTo(queries[i], QueryOptionsUtil.emptyQuery());
			var top = null == q.bottom && q.top > 0;
			var limit = null != q.bottom ? q.bottom : (null == q.top ? 10 : q.top);
				
//			var loader = QueryValuesSeries.forLineChart(executor, q.path, q.event, q.property, []);
			var loader = QueryEventSeries.forLineChart(executor, q.path, q.event);
			loader.time.periodicity = o.periodicity;
			loader.time.startLimit = toDateLimit(o.start);
			loader.time.endLimit = toDateLimit(o.end);
			loader.time.update();
			loader.onError.add(error);
			loaders.push(loader);
			
			var y = new Linear(), info;
				
			if (i == 0)
			{
				info = yinfo(container, q, y, true, labelwidth, i);
				chartpanel = container.createPanel(Disposition.Fill(0, 0));
				highlighter = new SvgLineChartHighlighter(chartpanel, x);
				isleft = false;
			} else
				info = yinfo(container, q, y, false, labelwidth, i);
			
			var chart = new SvgLineChart(chartpanel, x, y);
			chart.setLineEffect(dropshadow);
			chart.customClass = "dimension-" + i;

			chart.lineInterpolator(null == o.lineinterpolator ? LineInterpolator.Linear : LineInterpolators.parse(o.lineinterpolator));
			charts.push(chart);
			
			if (i == 0)
			{
				loader.onChange.add(function(v : LineChartData) {
					x.domain([null == loader.time.start ? v.minx : loader.time.start.getTime(), null == loader.time.end ? v.maxx : loader.time.end.getTime()]);
					xscale.redraw();
				});
			}
			
			loader.onChange.add(function(v : LineChartData) {
				y.domain([v.maxy * 1.2, 0.0]);
				info.labels.redraw();
				info.ticks.redraw();
				chart.data(v.data);
			});
		}

		var bottom = space.createContainer(Disposition.Fixed(0, 0, 20), Orientation.Horizontal);
		var belowchart = bottom.createContainer(Disposition.Fill(labelwidth, labelwidth * (queries.length - 1)), Orientation.Vertical);
		var xticks = SvgScaleTick.boundsOfLinear(belowchart.createPanel(Disposition.Fixed(0,0,6)), Anchor.Top, x);
		xscale = SvgScaleLabel.boundsOfLinear(belowchart.createPanel(Disposition.Fixed(2,0,12)), Anchor.Top, x);
		xticks.redraw();

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
				xscale.redraw();
				return false;
			});
		}

		var animated = (null != o.refresh && o.refresh > 0);
		
		loaders.each(function(loader, _) {
			if (animated)
			{
				new QueryTimerUpdate(loader, o.refresh);
			} else {
				loader.load();
			}
		});
	}

	public static function stream(el : Dynamic, query : Dynamic, ?options : { } )
	{
		var selection = select(el);
		var q : QueryOptions = cast Objects.copyTo(query, QueryOptionsUtil.emptyQuery());
		var o : Dynamic = cast sizeOptions(selection, options);
		if (null == o.periodicity)
			o.periodicity = "hour";
		
		var top = null == q.bottom && q.top > 0;
		var limit = null != q.bottom ? q.bottom : (null == q.top ? 10 : q.top);
		
		var values = new QueryValuesCount(executor, q.path, q.event, q.property, top, limit, false);
		if(null != q.filter)
			values.filter = q.filter;

		var loader = QueryValuesSeries.forLineChart(executor, q.path, q.event, q.property, []);
		loader.time.periodicity = o.periodicity;
		loader.time.startLimit = toDateLimit(o.start);
		loader.time.endLimit = toDateLimit(o.end);

		var space = new SvgSpace(o.width, o.height, selection, 10, 0);
		space.svg.attr("class").string("rg");
		
		var x = new LinearTime();
		var y = new Linear();
		
		var left = 0, right = 0;

		var container = space.createContainer(Disposition.Fill(0,0), Orientation.Horizontal);
		
		new SvgTitle(container.createPanel(Disposition.Fixed(0, 0, 14)), q.event, Anchor.Right);
		left += 14;
//		var scale1 = SvgScaleLabel.ofLinear(container.createPanel(Disposition.Fixed(2,0,20)), Anchor.Right, y);
//		left += 22;
//		var ticks1 = SvgScaleTick.ofLinear(container.createPanel(Disposition.Fixed(2, 0, 6)), Anchor.Right, y);
//		left += 8;

		var chartpanel = container.createPanel(Disposition.Fill(0, 0));
		
//		var ticks2 = SvgScaleTick.ofLinear(container.createPanel(Disposition.Fixed(0,2,6)), Anchor.Left, y);
//		right += 8;
//		var scale2 = SvgScaleLabel.ofLinear(container.createPanel(Disposition.Fixed(0,2,20)), Anchor.Left, y);
//		right += 22;
//		new SvgTitle(container.createPanel(Disposition.Fixed(0, 0, 14)), q.event, Anchor.Left);
//		right += 14;
		
//		var yrule = SvgScaleRule.ofLinear(chartpanel, Orientation.Horizontal, y);
		
//		var zoomzone = new SvgZoomZone(chartpanel);
		
//		var highlighter = new SvgLineChartHighlighter(chartpanel, x, y);
//		highlighter.approximator = function(c : { x : Float, y : Float } ) c.x = Dates.snap(c.x, loader.time.periodicity);


		var chart = new SvgStreamGraph(chartpanel, x);
		
		var bottom = space.createContainer(Disposition.Fixed(0, 0, 20), Orientation.Horizontal);
		
		var belowchart = bottom.createContainer(Disposition.Fill(left, right), Orientation.Vertical);
		
		var xticks = SvgScaleTick.boundsOfLinear(belowchart.createPanel(Disposition.Fixed(0,0,6)), Anchor.Top, x);
//		var xscale = SvgScaleLabel.boundsOfLinear(belowchart.createPanel(Disposition.Fixed(2,0,12)), Anchor.Top, x);
		xticks.redraw();
/*
		var scale = 0.0, start = null, end = null;
		zoomzone.zoom(function(e) {
			if (null == start)
			{
				start = loader.time.start.getTime();
				end = loader.time.end.getTime();
			}
			if (e.scale != scale)
			{	
				if (e.scale > scale)
				{
					loader.time.startLimit = FixedLimit(Date.fromTime(Periodicity.prev(loader.time.periodicity, start)));
					loader.time.endLimit = FixedLimit(Date.fromTime(Periodicity.next(loader.time.periodicity, end)));
				} else {
					loader.time.startLimit = FixedLimit(Date.fromTime(Periodicity.next(loader.time.periodicity, start)));
					loader.time.endLimit = FixedLimit(Date.fromTime(Periodicity.prev(loader.time.periodicity, end)));
				}
				scale = e.scale;
				loader.time.update();
				
				x.domain([loader.time.start.getTime(), loader.time.end.getTime()]);
				chart.redraw();
				start = loader.time.start.getTime();
				end = loader.time.end.getTime();
				loader.load();
			} else {
				trace("panning: " + e.tx + " " + e.scale);
				var t = x.invert(e.tx),
					delta = start - t;
				loader.time.startLimit = FixedLimit(Date.fromTime(start + delta));
				loader.time.endLimit = FixedLimit(Date.fromTime(end + delta));
				loader.time.update();
				
	//			trace(delta + " " + loader.time.start + " " + loader.time.end);
				
				x.domain([loader.time.start.getTime(), loader.time.end.getTime()]);
				chart.redraw();
//				chart.updatex();
			}

//			chart.updatex();
		} ).end(function(e) { 
			trace("out");
			start = loader.time.start.getTime();
			end = loader.time.end.getTime();
			loader.load();
//			trace("reload");
		} );
*/
		/*
		if (o.animated)
		{
			thx.js.Timer.timer(function(t) {
				loader.time.update();
				x.domain([loader.time.start.getTime(), loader.time.end.getTime()]);
	//			chart.updatex();
				xscale.redraw();
	//			highlighter.redraw();
				return false;
			});
		}
*/
		loader.onChange.add(function(v : LineChartData) {
			y.domain([v.maxy * 1.2, 0.0]);
			x.domain([null == loader.time.start ? v.minx : loader.time.start.getTime(), null == loader.time.end ? v.maxx : loader.time.end.getTime()]);
//			scale1.redraw();
//			ticks1.redraw();
//			scale2.redraw();
//			ticks2.redraw();
//			yrule.redraw();
//			xscale.redraw();
			chart.data(v.data);
		});
		
		// add line interpolator
		chart.lineInterpolator(null == o.lineinterpolator ? LineInterpolator.Linear : LineInterpolators.parse(o.lineinterpolator));

		loader.onError.add(error);
		values.onError.add(error);
		values.onChange.add(function(v : Array<{ label : String, value : Float }>) {
			loader.values = v.map(function(d, i) return d.label);
			loader.load();
		});
//		var animated = (null != o.refresh && o.refresh > 0);
//		if (animated)
//		{
//			new QueryTimerUpdate(values, o.refresh);
//		} else {
			values.load();
//		}
//		return line;
		
	}

	static function makeoptions(?options : { }, defaults : { } ) : ChartOptions
	{
		var o = defaultOptions.clone();
		defaults.copyTo(o);
		
		options.copyTo(o);
		
		o.start = toDatef(o.start);
		o.end = toDatef(o.end);
		
		if (null == o.animated)
		{
			var e1 = o.end(Date.now());
			var e2 = o.end(DateTools.delta(Date.now(), DateTools.days( -366)));
			if (e1 == null || e2 == null)
				o.animated = false;
			else
				o.animated = e1.getTime() !=e2.getTime();
		}
		
		return cast o;
	}
	
	static function select(el : Dynamic)
	{
		var el = if (Std.is(el, String)) Dom.select(el) else Dom.selectNode(el);
		if (el.empty())
			throw new Error("invalid container");
		return el;
	}
	
	static var hlen = 20;
	static var vlen = 50;
	static var defaultOptions : ChartOptions = {
		width : 400,
		height : 400,
//		query : null,
		left : scale(true, true, hlen),
		right : scale(false, false, hlen),
		top : scale(false, false, vlen),
		bottom : scale(true, true, vlen),
//		timeranimationupdate : 250,
//		timerdataupdate : 10000,
		lineinterpolation : null,
//		stacked : false,
		start : null,
		end : null,
		animated : null,
		
		animation : {
			dataupdate : 250,
			refresh : 10000
		}
	}
	
	static function scale(displayLabels : Bool, displayTicks : Bool, labellength : Int)
	{
		return {
			ticks : displayTicks,
			labels : displayLabels,
			ticklength : 5,
			labellength : labellength,
			spacing : 4
		};
	}
}