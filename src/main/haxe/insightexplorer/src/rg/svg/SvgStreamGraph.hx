package rg.svg;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.js.Svg;
import thx.math.scale.Linear;
import thx.svg.LineInterpolator;
import thx.geom.layout.Stack;
import thx.js.Access;
import js.Dom;
using Arrays;
 
class SvgStreamGraph extends SvgLayer
{
	static var defaultClipPadding = 3;
	static var _pathid = 0;
	
	var _data : Array<Array<{ x : Float, y : Float }>>;
	var _prepdata : Array<Array<XYY0>>;
	var _scalex : Linear;
	var _cpid : String;
	var _interpolator : LineInterpolator;
	var _area : thx.svg.Area<XYY0>;
	var _timedelta : Float;
	var _clipPadding : Float;
	
	public function new(panel : SvgPanel, xscale : Linear)
	{
		_clipPadding = defaultClipPadding;
		this._cpid = "streamchart_clip_path_" + (++_pathid);
		super(panel);
		this._scalex = xscale;
//		this.data(data);
	}
	
	override public function destroy(){}
	
	override function init()
	{
		svg
			.classed().add("stream-chart")
			.append("svg:clipPath")
				.attr("id").string(_cpid)
				.append("svg:rect")
					.attr("x").float(0)
					.attr("y").float(-_clipPadding)
					.attr("width").float(0)
					.attr("height").float(0)
		;
		svg.attr("clip-path").string("url(#" + _cpid + ")");
	}
	
	public function lineInterpolator(interpolator : LineInterpolator)
	{
		this._interpolator = interpolator;
	}
	
	var _redrawn : Bool;
	override public function redraw()
	{
		
		_redraw();
	}

	public function data(d : Array<{ label : String, values : Array<{ x : Float, y : Float}> }>)
	{
		_data = d.map(function(d, i) return d.values);
		_prepareData();
		_redraw();
	}
	
	var _h : Int;
	var _w : Int;
	function _prepareData()
	{
		_prepdata = new Stack().offset(StackOffset.Wiggle).stack(_data.copy());
	//	_prepdata.reverse();
		var domx = _scalex.getDomain();
		var minx = domx.min();
		var stepx = Math.abs(_prepdata[0][1].x - _prepdata[0][0].x) + minx;
		var h = _h = panel.frame.height;
		var w = _w = panel.frame.width;
		
		var mx = _prepdata[0].length,
			my = Arrays.floatMax(_prepdata, function(d) {
				return Arrays.floatMax(d, function(d) {
					return d.y0 + d.y;
				});
			}) * 1.1;
		
		var sx = _scalex.scale;
		
		_area = new thx.svg.Area<XYY0>()
			.interpolator(_interpolator)
			.x(function(d, i) return sx(d.x))
			.y0(function(d, i) return h - d.y0 * h / my)
			.y1(function(d, i) return h - (d.y + d.y0) * h / my);
	}
	
	public function updatex()
	{
		var s = _scalex.scale(Date.now().getTime() - _timedelta + _scalex.getDomain()[0]);
		var layer = svg.selectAll("g.group")
			.attr("transform").string("translate(-" + s + ",0)")
		;
	}

	function _transition()
	{
		// LAYER
		var layer = svg.selectAll("g.group").data(_prepdata);
		// update
		layer.update().select("path.line")
			.transition()
				.attr("d").stringf(_area.shape)
		;
	}
		
	var _over : { x : Float, y : Float, y0 : Float } -> Int -> Void;
	function over(n : HtmlDom, i : Int) 
	{
		if (null == _over)
			return;

		_over(getDataAtNode(n), i);
	}
	
	var _out : { x : Float, y : Float, y0 : Float } -> Int -> Void;
	function out(n : HtmlDom, i : Int) 
	{
		if (null == _out)
			return;
		
		_out(getDataAtNode(n), i);
	}
	
	function getDataAtNode(n : HtmlDom)
	{
		var time = _scalex.invert(Svg.mouse(n)[0]);
		
		var data : Array<{ x : Float, y : Float, y0 : Float }> = Access.getData(n);
		
		var delta = Math.POSITIVE_INFINITY,
			pos = 0,
			v = Math.abs(time - data[0].x);
		while (v < delta)
		{
			delta = v;
			v = Math.abs(time - data[++pos].x);
		}
		return data[pos-1];
	}
	
	public function setTooltip(over : { x : Float, y : Float, y0 : Float } -> Int -> Void, out : { x : Float, y : Float, y0 : Float } -> Int -> Void)
	{
		_over = over;
		_out = out;
	}
	
	function _redraw()
	{
		if (null == _data)
			return;
		_timedelta = Date.now().getTime();
		
		svg.select("#" + _cpid + " rect")
			.attr("width").float(_w)
			.attr("height").float(_h + _clipPadding * 2);

		// LAYER
		var layer = svg.selectAll("g.group").data(_prepdata);
		
		// update
		layer.update()
			.attr("transform").string("translate(0,0)")
			.select("path.line").attr("d").stringf(_area.shape);

		// enter
		layer.enter()
			.append("svg:g")
			.attr("class").string("group")
			.attr("transform").string("translate(0,0)")
			.onNode("mousemove", over)
			.onNode("mouseout", out)
			.append("svg:path")
				.attr("class").stringf(function(d, i) return "line item-" + i)
				.attr("d").stringf(_area.shape)
				;
		// exit
		layer.exit().remove();
	}
}