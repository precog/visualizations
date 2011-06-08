package rg.chart;
import rg.svg.SvgLineChart;
import thx.math.scale.Linear;
import thx.math.scale.LinearTime;
import rg.js.ReportGrid;
import thx.svg.LineInterpolator;
using Arrays;
using thx.culture.FormatDate;
import thx.js.Selection;
import rg.svg.SvgSpace3x3;
import rg.svg.SvgLayer;
import rg.query.Query;
import rg.svg.SvgPanel;
import rg.svg.Anchor;
import rg.ScaleInfo;
import rg.svg.SvgScaleTick;
import rg.svg.SvgScaleLabel;
import rg.svg.LineChartData;

class LineChart
{
/*
	var data : Array<Array<{x:Float,y:Float,y0:Float}>>;

	
	var xtime : LinearTime;
	var chart : SvgLineChart;
	
	var loading : Bool;
	public var container(default, null) : Selection;
	public var width(default, null) : Int;
	public var height(default, null) : Int;
	public var space(default, null) : SvgSpace3x3;
	
	public var x(default, null) : Linear;
	public var y(default, null) : Linear;
	
	public var timerAnimationUpdate(default, null) : Int;
	public var timerDataUpdate(default, null) : Int;
	public var periodicity(default, null) : String;
	
	public var lineInterpolator(default, null) : LineInterpolator;
	
	public var stacked(default, null) : Bool;
	
	
	public var query(default, null) : { path : String, event : String, property : String, values : Array<String> }
	
	var layers : Array<SvgLayer<Dynamic>>;
		
	var start : Float;
	var startdata : Float;
	var end : Float;
	var loader : Query<Dynamic, LineChartData>;
*/
	public var space(default, null) : SvgSpace3x3;
	public var container(default, null) : Selection;
	public var width(default, null) : Int;
	public var height(default, null) : Int;
	
	public var loader(default, null) : Query<Dynamic, LineChartData>;
	
	public var x(default, null) : Linear;
	public var y(default, null) : Linear;
	
	var chart : SvgLineChart;

	public function new(container : Selection, loader : Query<Dynamic, LineChartData>, width : Int, height : Int) 
	{
		this.container = container;
		this.loader = loader;
		this.width = width;
		this.height = height;
		
		space = new SvgSpace3x3(width, height, container, 0);
		space.svg.attr("class").string("rg");
		
		x = new Linear();
		y = new Linear();
		
		chart = new SvgLineChart(space.center, x, y);
//		loader.onChange.add(chart.data);
		
//		loader.onChange.add(onData);
//		layers = [];
//		initOptions(options, callback(init, options));
	}
/*
	function initScales(options : ChartOptions)
	{
		x = xtime = new LinearTime();
		x.range([0.0, width]);
		y = new Linear().range([0.0, height]).domain([1.0, 0.0]);
		currentMax = 1.0;
		loading = false;
	}
*/
/*
	function onAnimationStep()
	{
		x.domain([start, end]);
		refresh();
	}
*/
/*
	function onDataStep()
	{
		if (loading)
			return;
		
		collectedData = [];
		seriesCount = 0;
		loading = true;
		for (i in 0...query.values.length)
		{
			var o = { start : startdata, end : end, periodicity: "minute", property : query.event + "." + query.property, value : query.values[i] };
			ReportGrid.propertyValueSeries(query.path, o, callback(updateData, i));
		}
	}
*/
/*
	function initChart(options : ChartOptions)
	{
		data = [];
		for (i in 0...query.values.length)
			data.push([]);
		
		onAnimationStep();
		onDataStep();
	}
*/
/*
	var collectedData : Array<Array<Array<Float>>>;
	var seriesCount : Int;
	function updateData(pos : Int, d : Dynamic)
	{
		var a : Array<Array<Float>> = Reflect.field(d, periodicity);
		collectedData[pos] = a;
		seriesCount++;

		if (seriesCount < query.values.length)
			return;
		loading = false;
		var results = normalizeData(collectedData);
		
		updateChart(results);
	}
*/
/*
	function tooltip(d : { x : Float, y : Float, y0 : Float }, i : Int)
	{
		var date = Date.fromTime(d.x);
		ToolTip.display('<span class="title">'
			+ query.values[i] + '</span><br/><span class="count">'
			+ "count: " + Ints.format(d.y) + "<br/>"
			+ date.dateShort() + " " + date.timeShort() +
			"</span>");
	}
*/
/*
	function updateTimeDomain()
	{
		var now = Date.now().getTime();
		start = now - 1000 * 60 * 90;
		startdata = now - 1000 * 60 * 91;
		end = now - 1000 * 60 * .5;
	}
*/
/*
	var currentMax : Float;
	function updateChart(data : Array<Array<{x:Float,y:Float}>>)
	{
		var d = new thx.geom.layout.Stack().stack(data);
		if (null == chart)
		{
			var w = space.center.frame.width,
				h = space.center.frame.height;
			chart = new SvgLineChart(space.center, d, x, y);
			chart.setTooltip(
				tooltip,
				function(d, i) ToolTip.display()
			);
			if(null != lineInterpolator)
				chart.lineInterpolator(lineInterpolator);
			chart.stacked(stacked);
			
			layers.push(chart);
		} else
			chart.data(d);
		
		if (chart.getStacked())
		{
			var len = Std.int(data.floatMax(function(a) return a.length));
			for (i in 0...len)
			{
				var m = 0.0;
				for (j in 0...data.length)
				{
					m += data[j][i].y;
				}
				currentMax = Math.max(1, m);
			}
		} else {
			currentMax = Math.max(1, data.floatMax(function(a) return a.floatMax(function(d) return d.y)));
		}

		y.domain([currentMax * 1.1, 0]);
		chart.redraw();
	}
	
	function timeRange(data : Array<Array<Array<Float>>>)
	{
		var sd = null;
		for (i in 0...data.length)
		{
			sd = data[i];
			if (null != sd)
				break;
			else
				data[i] = [];
		}
		
		if (null == sd || null == sd[0] || null == sd[0][0])
		{
			return null;
		}
		var s = sd[0][0],
			sample = s,
			d;
			
		switch(periodicity)
		{
			case "minute":
				while (sample > startdata)
				{
					s = sample;
					sample -= 60000;
				}
			case "hour":
				while (sample > startdata)
				{
					s = sample;
					sample -= 60000 * 60;
				}
			case "day":
				while (sample > startdata)
				{
					s = sample;
					sample -= 60000 * 60 * 24;
				}
			case "week":
				while (sample > startdata)
				{
					s = sample;
					sample -= 60000 * 60 * 24 * 7;
				}
			case "month":
				while (sample > startdata)
				{
					s = sample;
					d = Date.fromTime(sample);
					sample = new Date(d.getFullYear(), d.getMonth() - 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()).getTime();
				}
			case "year":
				while (sample > startdata)
				{
					s = sample;
					d = Date.fromTime(sample);
					sample = new Date(d.getFullYear() - 1, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()).getTime();
				}
		}
		var results = [];
		
		sample = s;
		switch(periodicity)
		{
			case "minute":
				while (sample < end)
				{
					results.push(sample);
					sample += 60000;
				}
			case "hour":
				while (sample < end)
				{
					results.push(sample);
					sample += 60000 * 60;
				}
			case "day":
				while (sample < end)
				{
					results.push(sample);
					sample += 60000 * 60 * 24;
				}
			case "week":
				while (sample < end)
				{
					results.push(sample);
					sample += 60000 * 60 * 24 * 7;
				}
			case "month":
				while (sample < end)
				{
					results.push(sample);
					d = Date.fromTime(sample);
					sample = new Date(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()).getTime();
				}
			case "year":
				while (sample < end)
				{
					results.push(sample);
					d = Date.fromTime(sample);
					sample = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()).getTime();
				}
		}
		
		return results;
	}
*/
/*
	function normalizeData(data : Array<Array<Array<Float>>>)
	{
		var ticks = timeRange(data);
		if (null == ticks)
			ticks = xtime.timeTicks();
		var map = new Hash();
		for (i in 0...ticks.length)
		{
			var tick = "" + ticks[i];
			map.set(tick, i);
		}
		
		var results = [];
		for (i in 0...data.length)
		{
			var series = [];
			results.push(series);
			for (j in 0...ticks.length)
			{
				series.push( { x : ticks[j], y : 0.0 } );
			}
			
			var seq = data[i];
			if (null == seq)
				continue;
			for (j in 0...seq.length)
			{
				var pos = map.get("" + seq[j][0]);
				if (null == pos)
				{
					trace("invalid match for " + seq[j] + " should be between " + ticks[0] + " and " + ticks[ticks.length - 1] + " for " + periodicity);
					continue; // this should never happen, it may happen if ticks do not match x
				}
				series[pos].y = seq[j][1];
			}
		}

		return results;
	}
*/
/*
	function onData(v : LineChartData)
	{
		trace("data is here");
	}
*/
/*
	var _lastanimation : Float;
	var _lastdata : Float;
	function _stepanimation(t : Float)
	{
		if (t - _lastanimation < timerAnimationUpdate)
			return false;
		_lastanimation = t;
		updateTimeDomain();
		onAnimationStep();
		return false;
	}
*/
/*
	function _stepdata(t : Float)
	{
		if (t - _lastdata < timerDataUpdate)
			return false;
		_lastdata = t;
		onDataStep();
		return false;
	}
*/
/*
	function init(options)
	{
		updateTimeDomain();
		initScales(options);
		initSpace(options);
		initChart(options);
		refresh();
		
		if (timerAnimationUpdate > 0)
		{
			_lastanimation = 0.0;
//			Timer.timer(_stepanimation, timerAnimationUpdate);
		}
		
		if (timerDataUpdate > 0)
		{
			_lastdata = 0.0;
//			Timer.timer(_stepdata, timerDataUpdate);
		}
	}
*/
/*
	function initQuery(q : QueryOptions)
	{
		query.event = q.event;
		query.path = q.path;
		query.property = q.property;
		// TODO
//		query.values = q.values;
	}
*/
/*
	function initOptions(options : ChartOptions, handler : Void -> Void)
	{
		width = options.width;
		height = options.height;
//		query = options.query;
		// TODO
		options.animated;
		timerAnimationUpdate = options.animation.refresh;
		timerDataUpdate = options.animation.dataupdate;
		periodicity = "minute";
//		stacked = options.stacked == true;
		var interp = null == options.lineinterpolation ? null : options.lineinterpolation.split("-")[0];
		lineInterpolator = switch(interp)
		{
			case "basis":
				LineInterpolator.Basis;
			case "cardinal":
				var v = options.lineinterpolation.split("-")[1];
				if(null == v)
					LineInterpolator.Cardinal();
				else
					LineInterpolator.Cardinal(Std.parseFloat(v));
			case "stepafter":
				LineInterpolator.StepAfter;
			case "stepbefore":
				LineInterpolator.StepBefore;
			default:
				null;
		}
		if (null == query.values)
		{
			ReportGrid.propertyValues(query.path, { property : query.event + "." + query.property }, callback(loadProperties, handler));
		} else
			handler();
	}
*/
/*
	function initSpace(options : ChartOptions)
	{
		space = new SvgSpace3x3(width, height, container, 0);
		space.svg.attr("class").string("rg");
		
		space.setLeft(	scalePanel(space.left, Right, y, options.left));
		space.setRight(	scalePanel(space.right, Left, y, options.right));
		space.setTop(	scalePanel(space.top, Bottom, x, options.top));
		space.setBottom(scalePanel(space.bottom, Top, x, options.bottom));
	}
	
	public function refreshPanels()
	{
		for (layer in layers)
			layer.redraw();
	}
	
	function scalePanel(panel : SvgPanel, anchor : Anchor, scale : Linear, options : ScaleInfo)
	{
		var len = 0;
		if (options.ticks)
		{
			var tick = SvgScaleTick.ofLinear(panel, anchor, scale);
			layers.push(tick);
			tick.length(options.ticklength);
			len += options.ticklength;
		}
		if (options.labels)
		{
			if (options.ticks)
				len += options.spacing;
				
			var label = SvgScaleLabel.ofLinear(panel, anchor, scale);
			label.padding(len);
			layers.push(label);
			len += options.labellength;
		}
		return len;
	}
*/
}