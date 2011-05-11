package rg.ie;

import thx.js.Selection;
import thx.js.behavior.ZoomEvent;
import rg.svg.SvgSpace3x3;
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
import rg.layout.Orientation;
using Arrays;

/**
 * ...
 * @author Franco Ponticelli
 */

class TimeChart
{
	var _space : SvgSpace3x3;
	var _svg : Selection;
	var _w : Int;
	var _h : Int;
	
	var _y : Linear;
	var _x : LinearTime;
	
	var _ytick : SvgScaleTick;
	var _xtick : SvgScaleTick;
	var _ylabel : SvgScaleLabel;
	var _xlabel : SvgScaleLabel;
	var _xrule : SvgScaleRule;
	var _yrule : SvgScaleRule;
	var _ymax : Float;
	var _layers : Array<SvgLayer<Dynamic>>;
	var _zoomzone : SvgZoomZone;
	var _chart : SvgBarChart;
	var _start : Float;
	var _end : Float;

	public function new(container : Selection, w : Int, h : Int)
	{
		_w = w;
		_h = h;
		_svg = container
			.append("svg:svg")
			.attr("class").string("time-chart")
			.attr("width").float(_w)
			.attr("height").float(_h);
			
		_inited = false;
	}
	
	public function toggleStack()
	{
		if (null == _chart)
			return;
		_chart.stacked(!_chart.getStacked());
		_chart.redraw();
//		data();
	}
	
	public function getScaleX() return _x
	public function scaleX(s : LinearTime)
	{
		_x = s;
		return this;
	}
	
	public function getScaleY() return _y
	public function scaleY(s : Linear)
	{
		_y = s;
		return this;
	}
	
	public function destroy()
	{
		_svg.remove();
	}
	
	var _inited : Bool;
	function _init()
	{
		_inited = true;
		_space = new SvgSpace3x3(_w, _h, _svg, 0, 0, 75, 45);
		_ymax = 10;
		_layers = [];
		
		if(null == _y)
			_y = new Linear();
		if(null == _x)
			_x = new LinearTime();
			
		_ytick = SvgScaleTick.ofLinear(_space.left, Right, _y);
		_layers.push(_ytick);
		_ylabel = SvgScaleLabel.ofLinear(_space.left, Right, _y).padding(10);
		_layers.push(_ylabel);
		_yrule = SvgScaleRule.ofLinear(_space.center, Horizontal, _y);
		_layers.push(_yrule);
		
		_xtick = SvgScaleTick.ofLinear(_space.bottom, Top, _x);
		_layers.push(_xtick);
		_xlabel = SvgScaleLabel.ofLinear(_space.bottom, Top, _x).padding(10);
		_layers.push(_xlabel);
		_xrule = SvgScaleRule.ofLinear(_space.center, Vertical, _x);
		_layers.push(_xrule);
		
		_chart = new SvgBarChart(_space.center, [[]], _x, _y).stacked(true);
		_layers.push(_chart);
		
		var d = _x.getDomain();
		_start = d[0];
		_end = d[1];
		
		var me = this;
		_zoomzone = new SvgZoomZone(_space.center).zoom(function(e : ZoomEvent) {
			me._x.transform(e.scale, e.tx, me._start, me._end);
//			numbers.transform(e.scale, e.ty, startFloat, endFloat);
//			me._refresh();
			me.redraw();
			me.change();
//			_layers.each(function(l, i) l.redraw());
		});
		_zoomzone.redraw();
//		redraw();
	}
	
	public dynamic function change();
	
	function redraw()
	{
		_layers.each(function(d, i) d.redraw());
		_chart.redraw();
	}
	
	var _lastPeriod : String;
	var _cache : Array<Array<{x:Float,y:Float,y0:Float}>>;
	public function data(?d : Array<Array<{x:Float,y:Float,y0:Float}>>)
	{
		if (!_inited)
			_init();
		if (null == d)
			d = _cache;
		else
			_cache = d;
		if (null == d)
			return;
		var s = _start, e = _end;
		var max = _chart.getStacked()
			? d.floatMax(function(d) return d.floatMax(function(d) return d.y + d.y0))
			: d.floatMax(function(d) return d.floatMax(function(d) return d.y));
		if (!Math.isFinite(max))
			max = 10.0;
		if (_lastPeriod != _x.getGranularity())
		{
			_lastPeriod = _x.getGranularity();
			_ymax = 10.0;
		}
		_ymax = Math.max(_ymax, max * 1.2);
		_y.domain(_ymax, 0);
		_chart.data(d);
		redraw();
	}
}