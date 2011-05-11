package rg.svg;
import haxe.Timer;
import thx.math.scale.Linear;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.js.Dom;
using Arrays;

class SvgLineChart extends SvgLayer<Array<XYY0>>
{
	static var _pathid = 0;
	
	var _data : Array<Array<XYY0>>;
	var _prepdata : Array<Array<XYY0>>;
	var _scalex : Linear;
	var _scaley : Linear;
	var _cpid : String;
	var _stacked : Bool;
	var _curstacked : Bool;
	public function new(panel : SvgPanel, data : Array<Array<XYY0>>, xscale : Linear, yscale : Linear)
	{
		this._cpid = "linechart_clip_path_" + (++_pathid);
		super(panel);
		this._data = data;
		this._scalex = xscale;
		this._scaley = yscale;
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
		if (null == _curstacked || _curstacked == _stacked)
		{
			_redraw();
		} else {
			_transition();
		}
		_curstacked = _stacked;
	}

	var _h : Int;
	var _w : Int;
	var _path : Array<XYY0> -> Int -> String;
	var _patho : Array<XYY0> -> Int -> String;
	function _prepareData()
	{
		_prepdata = _data.copy();
		_prepdata.reverse();
		var domy = _scaley.getDomain();
		var domx = _scalex.getDomain();
		var minx = domx.min();
		var stepx = Math.abs(_prepdata[0][1].x - _prepdata[0][0].x) + minx;
		_h = panel.frame.height;
		_w = panel.frame.width;
		if (_stacked)
		{
			_path = pathStacked;
			_patho = path;
		} else {
			_patho = pathStacked;
			_path = path;
		}
	}

	function path(d : Array<XYY0>, i : Int)
	{
		var sx = _scalex, sy = _scaley;
		var shape = new thx.svg.Line(
			function(d : XYY0, i : Int) return sx.scale(d.x),
			function(d : XYY0, i : Int) return sy.scale(d.y)
		).shape(d);
		return shape;
	}
	
	function path0(d : Array<XYY0>, i : Int)
	{
		var sx = _scalex,
			zero = _scaley.scale(0);
		var shape = new thx.svg.Line(
			function(d : XYY0, i : Int) return sx.scale(d.x),
			function(d : XYY0, i : Int) return zero
		).shape(d);
		return shape;
	}
	
	function pathStacked(d : Array<XYY0>, i : Int)
	{
		var sx = _scalex, sy = _scaley;
		return new thx.svg.Line(
			function(d : XYY0, i : Int) return sx.scale(d.x),
			function(d : XYY0, i : Int) return sy.scale(d.y + d.y0)
		).shape(d);
	}

	function _transition()
	{
		// LAYER
		var layer = svg.selectAll("g.layer").data(_prepdata);
		
		// update
		layer.update().select("path.line")
			.transition()
				.attr("d").stringf(_path)
		;
	}

	var _pathCreated : Bool;
	function _setPathCreated(_, _)
	{
		_pathCreated = true;
	}
	
	function _redraw()
	{
		svg.select("#" + _cpid + " rect")
			.attr("width").float(_w)
			.attr("height").float(_h);
		
		// LAYER
		var layer = svg.selectAll("g.layer").data(_prepdata);
		
		// update
		if (_pathCreated)
			layer.update().select("path.line").attr("d").stringf(_path);

		// enter
		layer.enter()
			.append("svg:g")
			.attr("class").stringf(function(d, i) return "layer layer-" + i)
			.append("svg:path")
				.attr("class").string("line")
				.attr("d").stringf(path0)
					.transition().attr("d").stringf(_path)
					.endNode(_setPathCreated);
		
		// exit
		layer.exit().remove();
	}
}