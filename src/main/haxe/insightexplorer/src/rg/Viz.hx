package rg;
//import rg.chart.LineChart;
import haxe.Timer;
import rg.chart.StreamGraph;
import rg.ChartOptions;
import rg.pivottable.PivotTable;
import rg.pivottable.PivotTableProperty;
import rg.query.IExecutor;
import rg.query.js.ReportGridExecutor;
import rg.query.mock.RandomExecutor;
import rg.query.QueryPropertyValues;
import rg.query.QueryTimerUpdate;
import rg.query.QueryValuesCount;
import rg.svg.LineChartData;
import rg.svg.SvgLineChart;
import rg.svg.SvgPanel;
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
	
	public static var executor : IExecutor = new RandomExecutor(null, Date.fromString("2011-06-04")); // ReportGridExecutor();
	
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
		
		var chart = new SvgPieChart(space.createPanel(Disposition.Fill()));		
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
	
	public static function line(el : Dynamic, query : { }, ?options : { } )
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
//		var chart = new LineChart(selection, loader, o.width, o.height);

		var space = new SvgSpace(o.width, o.height, selection);
		space.svg.attr("class").string("rg");
		var panel = space.createPanel(Disposition.Fill());
		
		var x = new LinearTime();
		var y = new Linear();
		
		var chart = new SvgLineChart(panel, x, y);
		
		if (o.animated)
		{
			thx.js.Timer.timer(function(t) {
				loader.time.update();
				x.domain([loader.time.start.getTime(), loader.time.end.getTime()]);
				chart.updatex();
				return false;
			});
		}

		loader.onChange.add(function(v : LineChartData) {
			y.domain([v.maxy * 1.2, 0.0]);
			x.domain([null == loader.time.start ? v.minx : loader.time.start.getTime(), null == loader.time.end ? v.maxx : loader.time.end.getTime()]);
			chart.data(v.data);
		});
		
//		values.onData.add(function(d) trace(d));
//		loader.onData.add(function(d) trace(d));
		
		// add line interpolator
		chart.lineInterpolator(LineInterpolator.Cardinal());

		loader.onError.add(error);
		values.onError.add(error);
		values.onChange.add(function(v : Array<{ label : String, value : Float }>) {
			loader.values = v.map(function(d, i) return d.label);
			loader.load();
		});
		var animated = (null != o.refresh && o.refresh > 0);
		if (animated)
		{
			new QueryTimerUpdate(values, o.refresh);
		} else {
			values.load();
		}
//		return line;
		
	}

	public static function stream(el : Dynamic, query : { }, ?options : { } )
	{
		var q : QueryOptions = cast Objects.copyTo(query, QueryOptionsUtil.emptyQuery());
		var loader = QueryOptionsUtil.toQueryInst(q);
		return new StreamGraph(select(el), loader, makeoptions(options, {
			lineinterpolation : "cardinal",
			left : scale(false, false, 0),
		}));
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