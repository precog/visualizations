package rg.chart;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.math.scale.Linear;
import thx.math.scale.LinearTime;
import rg.svg.SvgStreamChart;
import rg.js.ReportGrid;
using thx.culture.FormatDate;
using Arrays;

class StreamChart extends BaseChart
{
	var data : Array<Array<{x:Float,y:Float}>>;
	
	var xtime : LinearTime;
	var chart : SvgStreamChart;
	
	var loading : Bool;
	
	override function initScales(options : ChartOptions)
	{
		x = xtime = new LinearTime();
		x.range([0.0, width]);
		currentMax = 1.0;
		loading = false;
	}
	
	override function onAnimationStep() 
	{
		x.domain([start, end]);
		refresh();
	}
	
	override function onDataStep()
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
	
	override function initChart(options : ChartOptions)
	{
		data = [];
		for (i in 0...query.values.length)
			data.push([]);
			
		onAnimationStep();
		onDataStep();
	}
	
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
	
	function tooltip(d : { x : Float, y : Float, y0 : Float }, i : Int)
	{
		var date = Date.fromTime(d.x);
		ToolTip.display('<span class="title">'
			+ query.values[i] + '</span><br/><span class="count">'
			+ "count: " + Ints.format(d.y) + "<br/>"
			+ date.dateShort() + " " + date.timeShort() +
			"</span>");
	}
	
	var currentMax : Float;
	function updateChart(data : Array<Array<{x:Float,y:Float}>>)
	{
		if (null == chart)
		{
			chart = new SvgStreamChart(space.center, x);
			chart.setTooltip(
				tooltip,
				function(d, i) ToolTip.display()
			);
			if(null != lineInterpolator)
				chart.lineInterpolator(lineInterpolator);
			
			layers.push(chart);
		}
		
		chart.data(data);
		
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
}