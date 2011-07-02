/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg;

import thx.color.Hsl;
import thx.color.Rgb;
import thx.color.Colors;
import thx.js.Dom;
import thx.math.Ease;
import thx.math.EaseMode;
import thx.math.Equations;
import thx.math.scale.Linear;
import thx.math.scale.Ordinal;
using Arrays;

class SvgBarChart extends SvgLayer
{
	static var _pathid = 0;
	public var barWidth : Float;
	
	var _x : Ordinal<String, Int>;
	var _y : Linear;
	var _ease : Float -> Float;
	var _duration : Int;
	var _created : Int;
	var _data : Array<{ label : String, value : Float}>;
	var _cpid : String;
	
	public function new(panel : SvgPanel, x : Ordinal<String, Int>, y : Linear) 
	{
		this._cpid = "barchart_clip_path_" + (++_pathid);
		this._x = x;
		this._y = y;
		
		_ease = Equations.elasticf();
		_duration = 1500;
		_created = 0;
		barWidth = 0.6;
		
		super(panel);
		redraw();
	}
	
	public function getData() return _data
	public function data(d : Array<{ label : String, value : Float}>)
	{
		this._data = d;
		redraw();
	}
	
	override function init()
	{
		svg.classed().add("bar-chart")
			.append("svg:clipPath")
				.attr("id").string(_cpid)
				.append("svg:rect")
					.attr("x").float(0)
					.attr("y").float(0)
					.attr("width").float(0)
					.attr("height").float(0)
		;
		svg.attr("clip-path").string("url(#" + _cpid + ")");
		svg.append("svg:defs");
	}
	
	override function resize()
	{
		_y.range([0.0, height]);
		svg.select("#" + _cpid + " rect")
			.attr("width").float(width)
			.attr("height").float(height);
	}
	
	function _key(d, i) return d.label
	
	var _barwidth : Int;
	
	override public function redraw()
	{
		if (null == _data || _data.length == 0)
			return;
		var start = 0,
			width = this.width,
			max = _y.getDomain()[1];
		_barwidth = Ints.max(1, Math.floor(width / _data.length * barWidth));
			
		var bands = _x.rangePoints(start, width, 1);
		// BARS
		var bars = svg.selectAll("g.bar").data(_data, _key);

		// enter
		var be = bars.enter()
			.append("svg:g")
//			.attr("class").stringf(function(d, i) return "bar item-" + i)
			.attr("transform").stringf(function(d, i) return "translate(" + bands.scale(d.label, i) + ",0)")
		;
		
		// shadow
		be.append("svg:rect")
			.attr("class").string("shadow")
			.attr("width").float(_barwidth)
			.attr("height").float(0)
			.attr("x").float(-_barwidth / 2)
			.attr("y").float(_y.scale(0))
			.style("opacity").float(0.0)
			.attr("transform").string("translate(1,1)")
			.style("stroke").string("#000")
			.style("fill").string("#000")
			.style("stroke-width").float(5)
			.style("opacity").float(0.0)
		;
		
		be.append("svg:rect")
			.attr("class").string("shadow")
			.attr("width").float(_barwidth)
			.attr("height").float(0)
			.attr("x").float(-_barwidth / 2)
			.attr("y").float(_y.scale(0))
			.style("opacity").float(0.0)
			.attr("transform").string("translate(1,1)")
			.style("stroke").string("#000")
			.style("fill").string("#000")
			.style("stroke-width").float(3)
			.style("opacity").float(0.0)
		;
		
		// solid bar
		be.append("svg:rect")
			.attr("width").float(_barwidth)
			.attr("class").stringf(function(d,i) return "bar item-" + i)
			.attr("height").float(0)
			.attr("x").float(-_barwidth / 2)
			.attr("y").float(_y.scale(0))
			.style("opacity").float(0.0)
		;
		
		be
			.append("svg:text")
			.attr("text-anchor").string("middle")
			.attr("x").float(0)
			.text().stringf(textLabel)
			.style("opacity").float(0.0)
			.attr("y").floatf(ylabel)
		;
		
		be.eachNode(callback(_popin, max));
		
		
		// update
		bars.update()
			.attr("transform").stringf(function(d, i) return "translate(" + bands.scale(d.label, i) + ",0)")
			.select("rect")
				.transition().duration(_duration).ease(_ease)
					.attr("width").float(_barwidth)
					.attr("height").floatf(hscale)
					.attr("x").float(-_barwidth / 2)
		;

		// exit
		bars.exit().remove();
	}
	
	public function textLabel(d : { label : String, value : Float }, i : Int)
	{
		return Floats.format(d.value, "I");
	}
	
	function hscale(d : { label : String, value : Float }, _) return _y.scale(0) - _y.scale(d.value)
	function yscale(d : { label : String, value : Float }, _) return _y.scale(d.value)
	function ylabel(d : { label : String, value : Float }, _) return _y.scale(d.value) - 5
	
	function _popin(max : Float, n, i : Int)
	{
		var g = Dom.selectNodeData(n),
			bar = g.select("rect.bar"),
			shadow = g.selectAll("rect.shadow"),
			y = _y;
			
		var color = bar.style("fill").get();
		if (svg.select("defs").select("#rg_bar_gradient_" + i).empty())
		{
			var stops = svg.select("defs")
				.append("svg:linearGradient")
				.attr("id").string("rg_bar_gradient_" + i)
				.attr("x1").string("0%")
				.attr("x2").string("0%")
				.attr("y1").string("100%")
				.attr("y2").string("0%")
				.attr("spreadMethod").string("pad");
			stops.append("svg:stop")
				.attr("offset").string("0%")
				.attr("stop-color").string(Hsl.darker(Hsl.toHsl(Colors.parse(color)), 1.4).toRgbString()) //currentColor
				.attr("stop-opacity").float(1);
			stops.append("svg:stop")
				.attr("offset").string("100%")
				.attr("stop-color").string(color)
				.attr("stop-opacity").float(1);
		}

		var me = this;
		bar
			.attr("style").string("fill:url(#rg_bar_gradient_" + i + ")")
			.transition().ease(_ease).duration(_duration)
			.delay(150 * (i - _created))
			.attr("height").floatf(hscale)
			.attr("y").floatf(yscale)
			.style("opacity").float(1.0)
			.endNode(function(n, i) {
				g.selectAll("text").transition().style("opacity").float(1);
				if (i > 0)
					return;
				g
					.onNode("mouseover.animation", me._highlight)
					.onNode("mouseout.animation", me._backtonormal);
			})
		;
		
		shadow.transition().ease(_ease).duration(_duration)
			.delay(150 * (i - _created))
			.attr("height").floatf(hscale)
			.attr("y").floatf(yscale)
			.style("opacity").float(0.25)
		;

		if (i == _data.length - 1)
			_created = i;
	}
	
	function _highlight(d, i : Int)
	{
		var bar = Dom.selectNodeData(d).selectAll("rect");
		bar
			.transition().ease(_ease).duration(_duration)
			.attr("x").float(Math.ceil( -_barwidth * 1.2 / 2))
			.attr("width").float(Math.ceil(_barwidth * 1.2))
		;
	}
	
	function _backtonormal(d, i : Int)
	{
		var bar = Dom.selectNodeData(d).selectAll("rect");
		bar
			.transition().ease(_ease).duration(_duration)
			.attr("x").float( -_barwidth / 2)
			.attr("width").float(_barwidth);
	}
}