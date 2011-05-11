package rg.svg;
import thx.math.scale.Linear;
import thx.math.scale.LinearTime;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.js.Dom;
using Arrays;

class SvgBarChart extends SvgLayer<Array<XYY0>>
{
	public static var defaultBarWidth = 0.8;
	static var _pathid = 0;
	
	var _data : Array<Array<XYY0>>;
	var _prepdata : Array<Array<XYY0>>;
	var _scalex : Linear;
	var _scaley : Linear;
	var _cpid : String;
	var _stacked : Bool;
	var _curstacked : Bool;
	var _barwidth : Float;
	
	public function new(panel : SvgPanel, data : Array<Array<XYY0>>, xscale : Linear, yscale : Linear)
	{
		this._cpid = "barchart_clip_path_" + (++_pathid);
		super(panel);
		this._data = data;
		this._scalex = xscale;
		this._scaley = yscale;
		this._barwidth = defaultBarWidth;
	}
	
	override public function destroy();
	
	override function init()
	{
		svg
			.append("svg:clipPath")
				.attr("id").string(_cpid)
				.append("svg:rect")
					.attr("x").float(0)
					.attr("y").float(0)
					.attr("width").float(0)
					.attr("height").float(0)
		;
		svg.attr("clip-path").string("url(#" + _cpid + ")");
	}
	
	public function getStacked() return _stacked
	public function stacked(v : Bool)
	{
		_stacked = v;
		return this;
	}
	
	override public function redraw()
	{
		_prepareData();
		if (null == _data || _data.length == 0 || _data[0].length == 0)
			return;
		if (null == _curstacked || _curstacked == _stacked)
		{
			if(_stacked)
				_redrawStacked();
			else
				_redrawSideBySide();
		} else {
			if(_stacked)
				_transitionStacked();
			else
				_transitionSideBySide();
		}
		_curstacked = _stacked;
	}

	public function getData() return _data
	public function data(d)
	{
		this._data = d;
//		_prepareData();
	}
	
	var _miny : Float;
	var _h : Int;
	var _w : Int;
	var _stepw : Float;
	var _px : Float;
	var _pnx : Float;
	var _n : Int;
	var _bnw : Float;
	var _k : String;
	function _prepareData()
	{
		if (null == _data || _data.length == 0 || _data[0].length == 0)
			return;
		_prepdata = _data.copy();
		_prepdata.reverse();
		_n = _prepdata.length;
		var domy = _scaley.getDomain();
		var domx = _scalex.getDomain();
		_miny = domy[0];
		var minx = domx.min();
		if (null == _prepdata[0][1])
		{
			trace("#########################");
			trace(_prepdata);
		}
		
		var delta : Float = 0.0;
		if (Std.is(_scalex, LinearTime))
		{
			switch(cast(_scalex, LinearTime).getGranularity())
			{
				case "minute":	delta = 60 * 1000;
				case "hour":	delta = 60 * 60 * 1000;
				case "day":		delta = 24 * 60 * 60 * 1000;
				case "week":	delta = 7 * 24 * 60 * 60 * 1000;
				case "month":	delta = 30 * 24 * 60 * 60 * 1000;
				case "year":	delta = 365 * 24 * 60 * 60 * 1000;
			}
		} else if(null != _prepdata[0][1]) {
			delta = Math.abs(_prepdata[0][1].x - _prepdata[0][0].x);
		} else {
			var d = _scalex.getDomain();
			delta = d[1] - d[0] / _scalex.getModulo();
		}
		
		var stepx = delta + minx;
		_h = panel.frame.height;
		_w = panel.frame.width;
		_stepw = _scalex.scale(stepx);
		_px = _barwidth * _stepw;
		_pnx = - _px / 2;
		_bnw = _stepw * _barwidth / _n;
		if (Std.is(_scalex, LinearTime))
			_k = cast(_scalex, LinearTime).getGranularity() + ".";
		else
			_k = ".";
	}
	
	function tx(d : XYY0, _) return "translate(" + _scalex.scale(d.x) + "," + _scaley.scale(0) + ")"
	function tl(d, i) return "translate(" + (_stepw / _n) * i + ",0)"
	function ttx(d, i) return - _stepw * _barwidth / 2 + (_stepw / _n) / 2
	function py0(d : XYY0, i) return _scaley.scale(d.y + d.y0 + _miny)
	function py0label(d : XYY0, i) return _scaley.scale(d.y + d.y0 + _miny) - 4
	function py(d,i) return _scaley.scale(d.y + _miny)
	function pylabel(d,i) return _scaley.scale(d.y + _miny) - 4
	function hb(d : XYY0, i) return _scaley.scale(_miny - d.y)
	function _keyLayer(_, i : Int) return "" + i
	function _keyBar(d : XYY0, i : Int) return _k + d.x
	function labelText(d : XYY0, i : Int) return d.y == 0 ? "" : Floats.format(d.y, "D:0")
	
	function _redrawStacked()
	{
		svg.select("#" + _cpid + " rect")
			.attr("width").float(_w)
			.attr("height").float(_h);
		
		// LAYERS
		var layers = svg.selectAll("g.layer").data(_prepdata, _keyLayer);
		
		// update
		layers.update().attr("transform").string("translate(0,0)");
		
		// enter
		layers.enter()
			.append("svg:g")
			.attr("class").stringf(function(d,i) return "layer layer-"+i);
		
		// exit
		layers.exit().remove();
		
		// BARS
		var bars = layers.update().selectAll("g.bar").dataf(function(d, i) return d, _keyBar); // TODO WORKS???
		
		// update
		bars.update()
			.attr("transform").stringf(tx)
			.select("rect")
				.transition()
				.attr("x").float(_pnx)
				.attr("y").floatf(py0)
				.attr("width").float(_px)
				.attr("height").floatf(hb)
		;
		bars.update()
			.select("text")
				.attr("x").float(0)
				.attr("y").floatf(py0label)
				.text().stringf(labelText)
		;
		
		// enter
		var be = bars.enter()
			.append("svg:g")
			.attr("class").stringf(function(d, i) return "bar bar-" + i)
			.attr("transform").stringf(tx);
			
		be.append("svg:rect")
			.attr("width").float(_px)
			.attr("x").float(_pnx)
//			.attr("y").float(0)
//			.attr("height").float(0)
//			.transition()
				.attr("y").floatf(py0)
				.attr("height").floatf(hb)
		;

		// LABELS
		be
			.append("svg:text")
			.attr("text-anchor").string("middle")
//			.attr("y").float(0)
			.attr("x").float(0)
//			.style("fill-opacity").float(0)
			.text().stringf(labelText)
//			.transition()
//				.style("fill-opacity").float(1)
				.attr("y").floatf(py0label)
		;
		
		// exit
		bars.exit().remove();
	}
	
	function _transitionStacked()
	{
		var layers = svg.selectAll("g.layer").data(_prepdata, _keyLayer);
		
		var bars = layers.update().selectAll("g.bar").dataf(function(d, i) return d, _keyBar);
		bars.update().select("rect")
			.transition()
				.attr("y").floatf(py0)
				.end(_transitionEndStack);
		
		bars.update().select("text")
			.transition()
			.attr("y").floatf(py0label);
	}
	
	function _transitionEndStack(_, i : Int)
	{
		if (i > 0)
			return;
		var layers = svg.selectAll("g.layer").data(_prepdata, _keyLayer);
		layers
			.update()
			.transition()
			.attr("transform").string("translate(0,0)");
			
		var bars = layers.update().selectAll("g.bar").dataf(function(d, i) return d, _keyBar);
		bars.update().select("rect")
			.transition()
			.attr("width").float(_px);
		bars.update().select("text")
			.transition()
			.attr("x").float(0);
	}
	
	function _transitionSideBySide()
	{
		var layers = svg.selectAll("g.layer").data(_prepdata, _keyLayer);
		layers.update().transition()
			.attr("transform").stringf(tl)
			.end(_transitionEndSideBySide);
			
		var bars = layers.update().selectAll("g.bar").dataf(function(d, i) return d, _keyBar);
		bars.update().select("rect").transition().attr("width").float(_bnw);
		bars.update().select("text").transition().attr("x").floatf(ttx);
	}
	
	function _transitionEndSideBySide(_, i : Int)
	{
		if (i > 0)
			return;

		var layers = svg.selectAll("g.layer").data(_prepdata, _keyLayer);
		var bars = layers.update().selectAll("g.bar").dataf(function(d, i) return d, _keyBar);
		bars.update().select("rect").transition().attr("y").floatf(py);
		bars.update().select("text").transition().attr("y").floatf(pylabel);
	}
	
	function _redrawSideBySide()
	{
		svg.select("#" + _cpid + " rect")
			.attr("width").float(_w)
			.attr("height").float(_h);
		
		// LAYERS
		var layers = svg.selectAll("g.layer").data(_prepdata, _keyLayer);
		
		// update
		layers.update().attr("transform").stringf(tl);
		
		// enter
		layers.enter()
			.append("svg:g")
			.attr("class").stringf(function(d, i) return "layer layer-" + i)
			.attr("transform").stringf(tl)
			;
		
		// exit
		layers.exit().remove();
		
		// BARS
		var bars = layers.update().selectAll("g.bar").dataf(function(d, i) return d, _keyBar);
		
		// update
		bars.update()
			.attr("transform").stringf(tx)
			.select("rect")
				.transition()
				.attr("x").float(_pnx)
				.attr("y").floatf(py)
				.attr("width").float(_bnw)
				.attr("height").floatf(hb)
		;
		bars.update()
			.select("text")
				.attr("x").floatf(ttx)
				.attr("y").floatf(pylabel)
				.text().stringf(labelText)
		;
		
		// enter
		var be = bars.enter()
			.append("svg:g")
			.attr("class").stringf(function(d, i) return "bar bar-" + i)
			.attr("transform").stringf(tx);
			
		be.append("svg:rect")
			.attr("x").float(_pnx)
//			.attr("y").float(0)
			.attr("width").float(_bnw)
//			.attr("height").float(0)
//			.transition()
				.attr("y").floatf(py)
				.attr("height").floatf(hb)
		;

		// LABELS
		be
			.append("svg:text")
			.attr("text-anchor").string("middle")
			.attr("x").floatf(ttx)
			.attr("y").float(0)
//			.style("fill-opacity").float(0)
			.text().stringf(labelText)
//			.transition()
//				.style("fill-opacity").float(1)
				.attr("y").floatf(pylabel)
		;
		
		// exit
		bars.exit().remove();
	}
	
	public function getBarWidth() return _barwidth
	public function barWidth(v : Float)
	{
		_barwidth = v;
		return this;
	}
}