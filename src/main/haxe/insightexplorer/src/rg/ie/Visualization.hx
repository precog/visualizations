package rg.ie;

import haxe.Timer;
import thx.collections.Set;
import thx.js.Selection;
import rg.js.ReportGrid;
import thx.math.scale.Linear;
import thx.math.scale.LinearTime;
import rg.svg.SvgLayer;
import rg.svg.SvgSpace;
import rg.svg.SvgBarChart;
import rg.svg.SvgLineChart;
import rg.svg.SvgScaleLabel;
import rg.svg.SvgScaleRule;
import rg.svg.SvgScaleTick;
import rg.svg.SvgZoomZone;
import rg.svg.Anchor;
import rg.ie.TimeChart;
import thx.js.behavior.ZoomEvent;

import thx.culture.FormatDate;

using Arrays;

/**
 * ...
 * @author Franco Ponticelli
 */

class Visualization
{
	public var path(default, null) : String;
	public var event(default, null) : String;
	public var property(default, null) : String;
	public var value(default, null) : Dynamic;
	public var values(default, null) : Array<Dynamic>;
	
	public dynamic function chartChange();
	
	public var chart(default, null) : TimeChart;
	public var time(default, null) : LinearTime;
	public var widetime(default, null) : LinearTime;
	
	var _container : Selection<Dynamic>;
	var _dirty : Bool;
	var _w : Int;
	var _h : Int;
	
	public function new(path : String, container : Selection<Dynamic>, time : LinearTime)
	{
		this.path = path;
		_container = container;
		_dirty = false;
		this.time = time;
		this.widetime = new LinearTime();
	}
	
	public function resize(w : Int, h : Int)
	{
		_w = w;
		_h = h;
		return this;
	}
	
	public function setPath(path : String)
	{
		this.path = path;
		_resetChart();
		_refresh();
		return this;
	}
	
	public function setEvent(event : String)
	{
		this.event = event;
		_resetChart();
		_refresh();
		return this;
	}
	
	public function setProperty(property : String, values : Array<Dynamic>, value : Dynamic)
	{
		this.property = property;
		this.values = values;
		this.value = value;
		_resetChart();
		_refresh();
		return this;
	}
	
	function _resetChart()
	{
		if (null == chart)
			return;
		chart.destroy();
		chart = null;
		chartChange();
	}
	
	function _refresh()
	{
		if (_dirty)
			return;
		_dirty = true;
		Timer.delay(refresh, 250);
	}
	
	var periodicity : String;
	var start : Float;
	var end : Float;
	var startVis : Float;
	var endVis : Float;
	var seriesTotal : Int;
	var seriesCount : Int;
	
	var _lastRequest : String;
	var _loading : Bool;
	function refresh()
	{
		if (_loading)
		{
			_dirty = false;
			_refresh();
			return;
		}
		var t = time.getDomain();
		startVis = t[0];
		endVis = t[1];
		var delta = endVis - startVis;
		
		periodicity = time.getGranularity();
		var s = Dates.snap(startVis - delta, periodicity);
		var e = Dates.snap(endVis + delta, periodicity);
		if ("week" == periodicity)
		{
			s = Dates.snapToWeekDay(s, "monday");
			e = Dates.snapToWeekDay(e, "monday");
		}
		widetime.domain(s, e);
		widetime.granularity(periodicity);
		t = widetime.getDomain();
		start = t[0];
		end = t[1];
		
		seriesCount = 0;
		collectedData = [];
		
		if (null != value)
		{
			seriesTotal = 1;
			var options = { property : event + "." + property, value : value, start : start, end : end, periodicity : periodicity };
			var serialized = "1:" + Std.string(options);
			if (serialized != _lastRequest)
			{
				_lastRequest = serialized;
				_loading = true;
				try
				{
					ReportGrid.propertyValueSeries(path, options, callback(chartTime2, 0) );
				} catch (e : Dynamic)
				{
					trace("error " + e);
				}
			}
		} else if (null != values && values.length > 0)
		{
			seriesTotal = values.length + 1;
			var options = { property : event + "." + property, start : start, end : end, periodicity : periodicity };
			var serialized = "2:" + Std.string(options);
			if (serialized != _lastRequest)
			{
				_lastRequest = serialized;
				_loading = true;
				// total
				ReportGrid.propertySeries(path, options, callback(chartTime2, values.length) );
				// each
				for (i in 0...values.length)
				{
					var value = values[i];
					try
					{
						ReportGrid.propertyValueSeries(path, { property : event + "." + property, value : value, start : start, end : end, periodicity : periodicity }, callback(chartTime2, i) );
					} catch (e : Dynamic)
					{
						trace("error " + e);
					}
				}
			}
		} else if (null != property)
		{
//			trace("TO IMPLEMENT 3: time series for specific property/value");
//			ReportGrid.propertySeries(path, { property : event + "." + property, start : start, end : end, periodicity : periodicity } );
		} else if (null != event)
		{
//			trace("TO IMPLEMENT 4: display properties count broken down value");
//			// ORDINAL CHART (TIME LIMIT?)
		} else {
//			trace("TO IMPLEMENT 5: display events totals");
//			// ORDINAL CHART (TIME LIMIT?)
		}
		_dirty = false;
	}
		
	public function toString() return "path: " + path + ", event: " + event + ", property: " + property + ", value: " + value + ", values: " + values.join(";")
	
	
	var collectedData : Array<Array<Array<Float>>>;
	function chartTime2(id : Int, series)
	{
		var data : Array<Array<Float>> = Reflect.field(series, periodicity);
		collectedData[id] = data;
		seriesCount++;
		if (seriesCount < seriesTotal)
			return;
			
		var results = normalizeData(collectedData);
		
		chartTime(results);
		_loading = false;
	}
	
	function chartTime(data : Array<Array<{x:Float,y:Float}>>)
	{
		if (null == chart)
		{
			chart = new TimeChart(_container, _w, _h).scaleX(time);
			chart.change = _refresh;
			chartChange();
		}
		chart.data(new thx.geom.layout.Stack().stack(data));
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
			trace("invalid data");
			trace(data);
			return null;
		}
		var s = sd[0][0],
			sample = s,
			d;
			
		switch(periodicity)
		{
			case "minute":
				while (sample > start)
				{
					s = sample;
					sample -= 60000;
				}
			case "hour":
				while (sample > start)
				{
					s = sample;
					sample -= 60000 * 60;
				}
			case "day":
				while (sample > start)
				{
					s = sample;
					sample -= 60000 * 60 * 24;
				}
			case "week":
				while (sample > start)
				{
					s = sample;
					sample -= 60000 * 60 * 24 * 7;
				}
			case "month":
				while (sample > start)
				{
					s = sample;
					d = Date.fromTime(sample);
					sample = new Date(d.getFullYear(), d.getMonth() - 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()).getTime();
				}
			case "year":
				while (sample > start)
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
			ticks = time.timeTicks();
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
//					throw "invalid data at pos " + seq[j];
				series[pos].y = seq[j][1];
			}
		}
		
		var last = results[data.length - 1];
		for (i in 0...data.length - 1)
		{
			var seq = data[i];
			if (null == seq)
				continue;
			for (j in 0...seq.length)
			{
				var pos = map.get("" + seq[j][0]);
				if (null == pos)
					continue;
				last[pos].y -= seq[j][1];
			}
		}
		
		// if all the y in last are 0 strip off the series
//		if (last.all(function(d) return d.y == 0.0))
		if(results.length > 1)
			results.pop();
			
		return results;
	}
	
	public function toggleStack()
	{
		if (null != chart)
			chart.toggleStack();
	}
}