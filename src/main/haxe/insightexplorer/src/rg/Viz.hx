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
import rg.query.QueryEventsSeries;
import rg.query.QueryIntersect;
import rg.query.QueryValuesCount;
import rg.query.QueryValuesSeries;
import rg.query.QueryPropertiesCount;
import rg.query.QuerySubPath;
import rg.query.QueryTimerUpdate;
import rg.svg.effects.DropShadow;
import rg.svg.Anchor;
import rg.svg.LineChartData;
import rg.svg.SvgBaloon;
import rg.svg.SvgBarChart;
import rg.svg.SvgFunnelChart;
import rg.svg.SvgHeatGrid;
import rg.svg.SvgStackChart;
import rg.svg.SvgBorderLine;
import rg.svg.SvgLineChart;
import rg.svg.SvgLineChartHighlighter;
import rg.util.RGStrings;
import thx.math.scale.Log;
import thx.math.scale.Pow;
//import rg.svg.SvgOrdinalScaleLabel;
import rg.svg.SvgScaleLabel;
import rg.svg.SvgScaleTick;
import rg.svg.SvgSpace;
import rg.svg.SvgPieChart;
import rg.svg.SvgScatterGraph;
import rg.svg.SvgStreamGraph;
import rg.svg.SvgTitle;
import rg.QueryOptions;
import rg.svg.SvgScaleRule;
import rg.svg.SvgLayer;
import rg.util.Periodicity;

import thx.color.Colors;
import thx.color.Hsl;
import thx.color.NamedColors;
import thx.date.DateParser;
import thx.error.Error;
import thx.js.Dom;
import thx.js.Selection;
import thx.math.scale.Linear;
import thx.math.scale.Linears;
import thx.math.scale.LinearInt;
import thx.math.scale.LinearTime;
import thx.math.scale.Ordinal;
import thx.svg.LineInterpolator;
import thx.svg.LineInterpolators;
import rg.layout.StackFrame;

import haxe.Timer;

import rg.query.ParallelQuery;

using Arrays;
using Objects;

class Viz 
{
	static function createRandomHeatGridData(n = 20, m = 20, top = 100)
	{
		return Ints.range(n).map(
			function(d, i) return Ints.range(m).map(
			function(d, i) return Math.random() * top));
	}
	
	public static function heatgrid(el : Dynamic, query : { path : String, properties : Array<Dynamic> }, ?options : { } )
	{
		var selection = select(el),
			properties : Array<{ event : String, property : String, top : Bool, limit : Int }> = [];
		
		if (null == query.path || "" == query.path)
				throw new Error("path cannot be null or empty");

		for (i in 0...query.properties.length)
		{
			var p = query.properties[i];
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

		if (null == options)
			options = { };

		var o = cast sizeOptions(selection, options);

		var loader = QueryIntersect.forPivotTable(executor, query.path, properties, 1);
		
		if (properties.any(function(d) return "#timestamp" == d.property))
		{
			if (null == o.periodicity)
			{
				loader.time.autosetPeriodicity = true;
			} else {
				loader.time.autosetPeriodicity = false;
				loader.time.periodicity = o.periodicity;
			}
		} else if (null != o.periodicity) {
			loader.time.autosetPeriodicity = false;
			loader.time.periodicity = "eternity";
		}
		setTimeLimits(loader, o);
		loader.time.update();
		
		var scolors = null == o.colors ? ["#ff0", "#f00"] : o.colors,
			colors = scolors.map(function(d, i) return Colors.parse(d)),
			padding = 3;

		var leftsize = 100,
			space = new SvgSpace(o.width, o.height, selection),
			top = space.createContainer(Disposition.Fill(0, 0), Orientation.Horizontal),
			bottom = space.createContainer(Disposition.Fixed(0, 0, 100), Orientation.Horizontal),
			ypanel = top.createPanel(Disposition.Fixed(0, padding, leftsize)),
			chartpanel = top.createPanel(Disposition.Fill(0, 0)),
			xpanel = bottom.createPanel(Disposition.Fixed(leftsize + padding, 0, 100));
		
		var y = new Ordinal(),
			yscale = SvgScaleLabel.ofOrdinal(ypanel, Anchor.Right, y),
			x = new Ordinal(),
			xscale = SvgScaleLabel.ofOrdinal(xpanel, Anchor.Top, x).alwaysHorizontal(false);
	
		space.svg.attr("class").string("rg");
		
		var color = Linears.forRgb().range(colors),
			chart = new SvgHeatGrid(chartpanel, color);
		
		var tooltip = new SvgBaloon(space.svg);
		chart.over = function(x : Float, y : Float, d : Dynamic, ?_)
		{
			tooltip.text = ["count: " + Floats.format(d, "I")];
			tooltip.moveTo(x + chartpanel.frame.x, y + chartpanel.frame.y + top.frame.y);
		}

		loader.onChange.add(function(data) {
//			trace(data);
/*
			trace(data.columns.map(function(d, i) {
				return { 
					time : Date.fromTime(d.values[0]),
					calc : d.calc
				};
			}));
*/
			var interpolator = Floats.interpolatef(0, data.calc.max),
				domain = colors.map(function(_, i) return interpolator(i / (colors.length - 1))),
				xdomain = data.columns.map(function(d, i) return d.values[0]),
				ydomain = data.rows.map(function(d, i) return d.values[0]);
			
			color.domain(domain);
			
			x.domain(xdomain);
			y.domain(ydomain);
			
			yscale.label(callback(labelValue, data.row_headers[0]));
			xscale.label(callback(labelValue, data.column_headers[0]));
			
			xscale.redraw();
			yscale.redraw();
			
//			var w = o.width - (leftsize = Math.ceil(yscale.idealSize)) - padding,
//				h = o.height - xscale.idealSize - padding;
			
			cast(ypanel.frame, StackFrame).disposition = Disposition.Fixed(0, padding, Math.ceil(yscale.idealSize));
			cast(xpanel.frame, StackFrame).disposition = Disposition.Fill(Math.ceil(padding + yscale.idealSize), 0);
	//		cast(xpanel.frame, StackFrame).disposition = Disposition.Fixed(padding, 0, Math.ceil(xscale.idealSize));

	
			cast(bottom.frame, StackFrame).disposition = Disposition.Fixed(padding, 0, Math.ceil(xscale.idealSize));
			/*
			if (w > h)
			{
				if (xdomain.length > ydomain.length)
				{
					trace("CASE: 0");
				} else {
					trace("CASE: 1");
					cast(chartpanel.frame, StackFrame).disposition = Disposition.Fill(0, 0);
					cast(top.frame, StackFrame).disposition = Disposition.Fill(0, 0);
				
					cast(bottom.frame, StackFrame).disposition = Disposition.Fixed(padding, 0, Math.ceil(xscale.idealSize));
					chart.data(data.rows.map(function(d, i) return cast d.cells));
					cast(xpanel.frame, StackFrame).disposition = Disposition.Fixed(leftsize + padding, 0, w);
				}
			} else {
				if (xdomain.length > ydomain.length)
				{
					trace("CASE: 2");
				} else {
					trace("CASE: 3");
				}
			}
			*/
			chart.data(data.rows.map(function(d, i) return cast d.cells));
			
			
			xscale.redraw();
			yscale.redraw();
			
			/*
			if (w / h < ydomain.length / xdomain.length)
			{
				cast(chartpanel.frame, StackFrame).disposition = Disposition.Proportional(0, 0, xdomain.length / ydomain.length);
				cast(top.frame, StackFrame).disposition = Disposition.Fill(0, 0);
			} else {
				cast(chartpanel.frame, StackFrame).disposition = Disposition.Fill(0, 0);
				cast(top.frame, StackFrame).disposition = Disposition.Fill(Math.round(h - (w / xdomain.length * ydomain.length)), 0);
			}
			*/
		});
		executeQuery(loader, o);
	}
	
	static function labelValue(header : Dynamic, value : Dynamic, ?_ : Int)
	{
		if (Std.is(value, String))
		{
			return RGStrings.humanize(Strings.trim(value, '"'));
		} else if (Std.is(value, Int)) {
			return Ints.format(value);
		} else if (Std.is(value, Float)) {
			if ('#' == header.substr(0, 1))
				return Periodicity.format(header.substr(1), Std.parseFloat(value));
			return Floats.format(value);
		} else {
			return Std.string(value);
		}
	}

	public static function pivot(el : Dynamic, query : { path : String, properties : Array<Dynamic> }, ?options : { } )
	{
		var properties : Array<{ event : String, property : String, top : Bool, limit : Int }> = [];
		
		if (null == query.path || "" == query.path)
				throw new Error("path cannot be null or empty");

		for (p in query.properties)
		{
			if ((null == p.event || "" == p.event) && p.property != "#timestamp")
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

		var loader = QueryIntersect.forPivotTable(executor, query.path, properties, null == o.coldimensions ? 1 : o.coldimensions);
		
		if (properties.any(function(d) return "#timestamp" == d.property))
		{
			if (null == o.periodicity)
			{
				loader.time.autosetPeriodicity = true;
			} else {
				loader.time.autosetPeriodicity = false;
				loader.time.periodicity = o.periodicity;
			}
		} else if (null != o.periodicity) {
			loader.time.autosetPeriodicity = false;
			loader.time.periodicity = "eternity";
		}
		setTimeLimits(loader, o);
		
		var pivot = new HtmlPivotTable(select(el));
		loader.onChange.add(pivot.data);
		
		if(null != o.displayColumnTotal)
			pivot.displayColumnTotal = o.displayColumnTotal == true;
		if(null != o.displayRowTotal)
			pivot.displayRowTotal = o.displayRowTotal == true;
		if(null != o.heatMap)
			pivot.heatMap = o.heatMap == true;
		if(null != o.startColor)
			pivot.startColor = Hsl.toHsl(Colors.parse(o.startColor));
		if(null != o.endColor)
			pivot.endColor = Hsl.toHsl(Colors.parse(o.endColor));

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
		
		var loader : QueryExecutor<Dynamic, Array<{ label : String, value : Float }>>;
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
	
	static function executeQuery(loader : Query<Dynamic>, options : Dynamic)
	{
		var animated = (null != options.refresh && options.refresh > 0);
		if (animated)
		{
			new QueryTimerUpdate(loader, options.refresh);
		} else {
			loader.load();
		}
	}
	
	static function setTimeLimits(loader : QueryExecutor<Dynamic, Dynamic>, options : Dynamic, forceValues = false)
	{
		if (forceValues)
		{
			if (null == options.end)
				options.end = "now";
			if (null == options.start)
				options.start = "yesterday";
		}
		loader.time.startLimit = toDateLimit(options.start);
		loader.time.endLimit = toDateLimit(options.end);
		loader.time.update();
	}

	public static function pie(el : Dynamic, query : { }, ?options : { } )
	{
		var selection = select(el).html().clear();
		
		var q : QueryOptions = cast Objects.copyTo(query, QueryOptionsUtil.emptyQuery());

		var top = null == q.bottom && q.top > 0;
		var limit = null != q.bottom ? q.bottom : (null == q.top ? 10 : q.top);
		
		var loader : QueryExecutor<Dynamic, Array<{ label : String, value : Float }>>;
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
	
	public static function bar(el : Dynamic, query : { }, ?options : { } )
	{
		var selection = select(el).html().clear();
		
		var q : QueryOptions = cast Objects.copyTo(query, QueryOptionsUtil.emptyQuery());

		var top = null == q.bottom && q.top > 0;
		var limit = null != q.bottom ? q.bottom : (null == q.top ? 10 : q.top);
		
		var loader : QueryExecutor<Dynamic, Array<{ label : String, value : Float }>>;
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
		
		var x = new Ordinal<String, Int>();
		var y = new Linear();
		var ylayers : Array<SvgLayer> = [];
		var xlayers : Array<SvgLayer> = [];
		
		var top = space.createPanel(Disposition.Fixed(0, 0, 5)),
			middle = space.createContainer(Disposition.Fill(0, 0), Orientation.Horizontal),
			left = 0;
		
		if (null == o.yaxis || o.yaxis.showlabels != false)
		{
			ylayers.push(SvgScaleLabel.ofLinear(middle.createPanel(Disposition.Fixed(0, 2, 50)), Anchor.Right, y));
			left += 52;
		}
		
		var chartpanel = middle.createPanel(Disposition.Fill(0,0));
		if (null == o.yaxis || o.yaxis.showrulers != false)
		{
			ylayers.push(SvgScaleRule.ofLinear(chartpanel, Orientation.Horizontal, y));
		}
		
				
		var chart = new SvgBarChart(chartpanel, x, y);		
		loader.onChange.add(function(d) {
			
			y.domain([(null != o.yscale && null != o.yscale.max) ? o.yscale.max : Arrays.floatMax(d, function(d) return d.value) * 1.2, 0.0]);
			ylayers.each(function(layer, _) layer.redraw());
			
			x.domain(d.map(function(d, i) return d.label));
			x.range(Ints.range(d.length));
			xlayers.each(function(layer, _) layer.redraw());
			
			chart.data(d);
		});
		
		new SvgBorderLine(chartpanel, Anchor.Bottom);
	
		var bottom = space.createContainer(Disposition.Fixed(0, 0, 20), Orientation.Horizontal);
		xlayers.push(SvgScaleLabel.ofOrdinal(bottom.createPanel(Disposition.Fill(left, 0)), Anchor.Top, x));
		
//		var bottom = space.createPanel(Disposition.Fixed(0, 0, 10));
		
		executeQuery(loader, o);
		
		return chart;
	}
	
	public static function funnel(el : Dynamic, query : { }, ?options : { } )
	{
		var selection = select(el).html().clear();
		
		var q : QueryOptions = cast Objects.copyTo(query, QueryOptionsUtil.emptyQuery());

		var top = null == q.bottom && q.top > 0;
		var limit = null != q.bottom ? q.bottom : (null == q.top ? 10 : q.top);
	
		var loader : QueryExecutor < Dynamic, Array<{ label : String, value : Float }> > ;
		
		if (null != q.property && "" != q.property)
		{
			var l = new QueryValuesCount(executor, q.path, q.event, q.property, top, limit, q.other);
			loader = l;
			if(null != q.filter)
				l.filter = q.filter;
		} else if(null != q.event && "" != q.event) {
			loader = new QueryPropertiesCount(executor, q.path, q.event);
		} else {
			var eloader = new QueryEventsCount(executor, q.path);
			loader = eloader;
			if (null != q.events)
			{
				eloader.order = function(d) return d;
				eloader.events = q.events.copy();
			}
		}
			
		loader.onError.add(error);
		
		if (null == options)
			options = { };
	
		var o = cast sizeOptions(selection, options);
		
		setTimeLimits(loader, o);
		
		var space = new SvgSpace(o.width, o.height, selection);
		space.svg.attr("class").string("rg");

		var top = space.createPanel(Disposition.Fixed(0, 0, 5)),
			middle = space.createContainer(Disposition.Fill(0, 0), Orientation.Horizontal);
		var chartpanel = middle.createPanel(Disposition.Fill(0,0));
			
		var chart = new SvgFunnelChart(chartpanel);		
		loader.onChange.add(function(d) {
			chart.data(d);
		});
		if (null != o.label)
		{
			chart.label = o.label;
		}

		executeQuery(loader, o);
		
		return chart;
	}
	
	public static function baloon(el)
	{
		var svg = select(el).append("svg:svg")
			.attr("width").float(450)
			.attr("height").float(300)
			.classed().add("rg");
		svg.append("svg:rect")
			.attr("width").float(450)
			.attr("height").float(300)
			.style("fill").string("#eee");
		
		var bb = { x : 120.0, y : 80.0, width : 200.0, height : 150.0 };
		svg.append("svg:rect")
			.attr("x").float(bb.x)
			.attr("y").float(bb.y)
			.attr("width").float(bb.width)
			.attr("height").float(bb.height)
			.style("fill").string("#ccc");
		
		var baloon = new SvgBaloon(svg);
		
		baloon.text = ["hello", "world", "this is a baloon", "another line"];
//		baloon.moveTo(200, 100);
		baloon.boundingBox = bb;
/*		
		haxe.Timer.delay(function() baloon.text = ["new", "text"], 2000);
		haxe.Timer.delay(function() baloon.moveTo(-20, 50), 3000);
		haxe.Timer.delay(function() baloon.text = ["one line"], 4000);
		haxe.Timer.delay(function() baloon.moveTo(120, -50), 5000);
		haxe.Timer.delay(function() baloon.text = ["many", "many", "many", "I mean many", "lines"], 6000);
		haxe.Timer.delay(function() baloon.moveTo(50, 200), 7000);
	*/	
		svg.onNode("mousemove", function(n, i) {
			var c = thx.js.Svg.mouse(n);
			baloon.moveTo(c[0], c[1], false);
		});
	}
	
	public static function scatter(el : Dynamic, query : { }, ?options : { } )
	{
		var selection = select(el).html().clear();
		
		var q : QueryOptions = cast Objects.copyTo(query, QueryOptionsUtil.emptyQuery());

		var top = null == q.bottom && q.top > 0;
		var limit = null != q.bottom ? q.bottom : (null == q.top ? 10 : q.top);
		
		var loader : QueryExecutor<Dynamic, Array<{ label : String, value : Float }>>;
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
		
		var x = new Ordinal<String, Int>();
		var y = new Linear();
		var ylayers : Array<SvgLayer> = [];
		var xlayers : Array<SvgLayer> = [];
		
		var top = space.createPanel(Disposition.Fixed(0, 0, 5)),
			middle = space.createContainer(Disposition.Fill(0, 0), Orientation.Horizontal),
			left = 0;
		
		if (null == o.yaxis || o.yaxis.showlabels != false)
		{
			ylayers.push(SvgScaleLabel.ofLinear(middle.createPanel(Disposition.Fixed(0, 2, 50)), Anchor.Right, y));
			left += 52;
		}
		
		var chartpanel = middle.createPanel(Disposition.Fill(0,0));
		if (null == o.yaxis || o.yaxis.showrulers != false)
		{
			ylayers.push(SvgScaleRule.ofLinear(chartpanel, Orientation.Horizontal, y));
		}
		
		if (null == o.xaxis || o.xaxis.showrulers != false)
		{
			xlayers.push(SvgScaleRule.ofOrdinal(chartpanel, Orientation.Vertical, x));
		}
		
				
		var chart = new SvgScatterGraph(chartpanel, x, y);		
		loader.onChange.add(function(d) {
			
			y.domain([(null != o.yscale && null != o.yscale.max) ? o.yscale.max : Arrays.floatMax(d, function(d) return d.value) * 1.2, 0.0]);
			ylayers.each(function(layer, _) layer.redraw());
			
			x.domain(d.map(function(d, i) return d.label));
			x.range(Ints.range(d.length));
			xlayers.each(function(layer, _) layer.redraw());
			
			chart.data(d);
		});
		
		new SvgBorderLine(chartpanel, Anchor.Bottom);
	
		var bottom = space.createContainer(Disposition.Fixed(0, 0, 20), Orientation.Horizontal);
		xlayers.push(SvgScaleLabel.ofOrdinal(bottom.createPanel(Disposition.Fill(left, 0)), Anchor.Top, x));
		
//		var bottom = space.createPanel(Disposition.Fixed(0, 0, 10));
		
		executeQuery(loader, o);
		
		return chart;
	}
	
	public static function stack(el : Dynamic, query : { }, ?options : { } )
	{
		var selection = select(el).html().clear();
		
		var q : QueryOptions = cast Objects.copyTo(query, QueryOptionsUtil.emptyQuery());

		var top = null == q.bottom && q.top > 0;
		var limit = null != q.bottom ? q.bottom : (null == q.top ? 10 : q.top);
		
		var loader : QueryExecutor<Dynamic, Array<{ label : String, value : Float }>>;
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
		
		var y = new Linear();
		var ylayers : Array<SvgLayer> = [];
		
		var top = space.createPanel(Disposition.Fixed(0, 0, 5)),
			middle = space.createContainer(Disposition.Fill(0, 0), Orientation.Horizontal),
			left = 0;
		
		if (null == o.yaxis || o.yaxis.showlabels != false)
		{
			ylayers.push(SvgScaleLabel.ofLinear(middle.createPanel(Disposition.Fixed(0, 2, 50)), Anchor.Right, y));
			left += 52;
		}
		
		var chartpanel = middle.createPanel(Disposition.Fill(0,0));
		if (null == o.yaxis || o.yaxis.showrulers != false)
		{
			ylayers.push(SvgScaleRule.ofLinear(chartpanel, Orientation.Horizontal, y));
		}
		
				
		var chart = new SvgStackChart(chartpanel, y);		
		loader.onChange.add(function(d) {
			
			y.domain([(null != o.yscale && null != o.yscale.max) ? o.yscale.max : Arrays.reduce(d, function(a, b, i) return a + b.value, 0) * 1.2, 0.0]);
			ylayers.each(function(layer, _) layer.redraw());
			chart.data(d);
		});
		
		new SvgBorderLine(chartpanel, Anchor.Bottom);
	
		var bottom = space.createContainer(Disposition.Fixed(0, 0, 20), Orientation.Horizontal);
		
//		var bottom = space.createPanel(Disposition.Fixed(0, 0, 10));
		
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
	
	public static function yinfo(container, q, scale, left : Bool, labelwidth : Int, pos : Int, ylayers : Array<SvgLayer>, usedimensionclass : Bool)
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
		if (usedimensionclass)
		{
			title.customClass = "dimension-" + pos;
			labels.customClass = "dimension-" + pos;
			ticks.customClass = "dimension-" + pos;
		}
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
		
		var x = new LinearTime().useTimeTicks(true);
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
			var loader : QueryExecutor<Dynamic, LineChartData>;
			if (null != q.property)
			{
				loader = QueryValuesSeries.forLineChart(executor, q.path, q.event, q.property, []);
			} else if(null != q.event) {
				loader = QueryEventSeries.forLineChart(executor, q.path, q.event);
			} else {
				var eloader = QueryEventsSeries.forLineChart(executor, q.path);
				loader = eloader;
				if (null != q.events)
				{
					eloader.events = q.events.copy();
				}
			}

			loader.time.periodicity = o.periodicity;
			setTimeLimits(loader, o, true);
			loader.time.update();
			loader.onError.add(error);
			loaders.push(loader);
			
			var y = new LinearInt(), info;
				
			if (i == 0)
			{
				yinfo(container, q, y, true, labelwidth, i, ylayers, queries.length > 1);
				chartpanel = container.createPanel(Disposition.Fill(0, 0));
				if ((null == o.yaxis || o.yaxis.showrulers != false) && queries.length == 1)
				{
					ylayers.push(SvgScaleRule.ofLinear(chartpanel, Orientation.Horizontal, y));
				}
				highlighter = new SvgLineChartHighlighter(chartpanel, x);
				isleft = false;
				loader.onData.addOnce(function(d) {
					highlighter.prepare();
				});
			} else
				yinfo(container, q, y, false, labelwidth, i, ylayers, queries.length > 1);
			
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
		}

		var bottom = space.createContainer(Disposition.Fixed(0, 0, 20), Orientation.Horizontal);
		var belowchart = bottom.createContainer(Disposition.Fill(labelwidth, labelwidth * (queries.length - 1)), Orientation.Vertical);
		if (null != o.xaxis && o.xaxis.labelsonbounds == true)
		{
			xlayers.push(SvgScaleTick.boundsOfLinear(belowchart.createPanel(Disposition.Fixed(0,0,6)), Anchor.Top, x));
			xlayers.push(SvgScaleLabel.boundsOfLinear(belowchart.createPanel(Disposition.Fixed(2,0,12)), Anchor.Top, x));		
		} else {
			xlayers.push(SvgScaleTick.ofLinear(belowchart.createPanel(Disposition.Fixed(0,0,6)), Anchor.Top, x));
			xlayers.push(SvgScaleLabel.ofLinear(belowchart.createPanel(Disposition.Fixed(2,0,12)), Anchor.Top, x));	
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
	
	public static function stream(el : Dynamic, _queries : Dynamic, ?options : { } )
	{
		var selection = select(el).html().clear();
		
		var o : Dynamic = cast sizeOptions(selection, options);
		
		var queries : Array<Dynamic> = Std.is(_queries, Array) ? _queries : [_queries];
			
		var space = new SvgSpace(o.width, o.height, selection, 10, 0);
		space.svg.attr("class").string("rg");
		
		var x = new LinearTime().useTimeTicks(true);
		var container = space.createContainer(Disposition.Fill(0, 0), Orientation.Horizontal);
		
		var chartpanel = null;
		var xlayers = [], loaders = [], charts = [];
		for (i in 0...queries.length)
		{
			var q : QueryOptions = cast Objects.copyTo(queries[i], QueryOptionsUtil.emptyQuery());
			var top = null == q.bottom && q.top > 0;
			var limit = null != q.bottom ? q.bottom : (null == q.top ? 10 : q.top);
			var loader : QueryExecutor<Dynamic, LineChartData>;
			if (null != q.property)
			{
				loader = QueryValuesSeries.forLineChart(executor, q.path, q.event, q.property, []);
			} else {
				loader = QueryEventSeries.forLineChart(executor, q.path, q.event);
			}

			loader.time.periodicity = o.periodicity;
			setTimeLimits(loader, o, true);
			loader.time.update();
			loader.onError.add(error);
			loaders.push(loader);
			
			var y = new LinearInt(), info;
				
			if (i == 0)
			{
				chartpanel = container.createPanel(Disposition.Fill(0, 0));
//				highlighter = new SvgLineChartHighlighter(chartpanel, x);
//				loader.onData.addOnce(function(d) {
//					highlighter.prepare();
//				});
			}
			
			var chart = new SvgStreamGraph(chartpanel, x);
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
				trace("Data " + Std.random(1000));
				y.domain([v.maxy * 1.2, 0.0]);
				chart.data(v.data);
			});
		}

		var bottom = space.createContainer(Disposition.Fixed(0, 0, 20), Orientation.Horizontal);
		var belowchart = bottom.createContainer(Disposition.Fill(0, 0), Orientation.Vertical);
		if (null != o.xaxis && o.xaxis.labelsonbounds == true)
		{
			xlayers.push(SvgScaleTick.boundsOfLinear(belowchart.createPanel(Disposition.Fixed(0,0,6)), Anchor.Top, x));
			xlayers.push(SvgScaleLabel.boundsOfLinear(belowchart.createPanel(Disposition.Fixed(2,0,12)), Anchor.Top, x));		
		} else {
			xlayers.push(SvgScaleTick.ofLinear(belowchart.createPanel(Disposition.Fixed(0,0,6)), Anchor.Top, x));
			xlayers.push(SvgScaleLabel.ofLinear(belowchart.createPanel(Disposition.Fixed(2,0,12)), Anchor.Top, x));	
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
		r.barChart = rg.Viz.bar;
		r.stackChart = rg.Viz.stack;
		r.scatterGraph = rg.Viz.scatter;
		r.funnelChart = rg.Viz.funnel;
		r.heatGrid = rg.Viz.heatgrid;
		r.streamGraph = Viz.stream;
	}
}