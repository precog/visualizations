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
import rg.util.RGStrings;
using Arrays;

class SvgStackChart extends SvgLayer
{
	static var _pathid = 0;
	public var barWidth : Float;
	
	var _y : Linear;
	var _ease : Float -> Float;
	var _duration : Int;
	var _created : Int;
	var _data : Array<{ label : String, value : Float, y0 : Float }>;
	var _cpid : String;
	
	public function new(panel : SvgPanel, y : Linear) 
	{
		this._cpid = "barchart_clip_path_" + (++_pathid);
		this._y = y;
		
		_ease = Equations.elasticf();
		_duration = 1500;
		_created = 0;
		barWidth = 0.8;
		
		super(panel);
		redraw();
	}
	
	public function getData() return _data
	public function data(d : Array<{ label : String, value : Float}>)
	{
		_data = [];
		var cur = 0.0;
		for (item in d)
		{
			_data.push( { label : item.label, value : item.value, y0 : cur } );
			cur += item.value;
		}
		redraw();
	}
	
	override function init()
	{
		svg.classed().add("stack-chart")
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
	
	function _keyBar(d, i) return d.label
	
	var _barwidth : Int;
	
	override public function redraw()
	{
		if (null == _data || _data.length == 0)
			return;
		var start = 0,
			width = this.width,
			max = _y.getDomain()[1];
		_barwidth = Ints.max(1, Math.floor(width * barWidth));
			
		// BARS
		var bars = svg.selectAll("g.bar").data(_data, _keyBar);

		// enter
		var be = bars.enter()
			.append("svg:g")
			.attr("class").stringf(function(d, i) return "bar item-" + i)
			.attr("transform").stringf(function(d, i) return "translate(" + (width / 2) + ",0)")
		;
/*
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
*/
		// solid bar
		be.append("svg:rect")
			.attr("width").float(_barwidth)
			.attr("class").stringf(function(d,i) return "bar bar-" + i)
			.attr("height").float(0)
			.attr("x").float(-_barwidth / 2)
			.attr("y").float(_y.scale(0))
			.style("opacity").float(0.0)
		;
		
		be.eachNode(callback(_popin, max));
		
		// reverse sequence for better shadow effect
		be.sort(function(a, b) {
			if (null == a && null == b)
				return 0;
			else if (null == a)
				return 1;
			else if (null == b)
				return -1;
			return Floats.compare(b.y0, a.y0);
		});
		
		// update
		bars.update()
			.select("text")
			.text().stringf(textLabel);
		bars.update()
			.attr("transform").stringf(function(d, i) return "translate(" + (width / 2) + ",0)")
			.select("rect")
				.transition().duration(_duration).ease(_ease)
					.attr("width").float(_barwidth)
					.attr("height").floatf(hscale)
					.attr("x").float(-_barwidth / 2)
		;

		// exit
		bars.exit().remove();
	}
	
	public function textLabel(d : { label : String, value : Float, y0 : Float }, i : Int)
	{
		return RGStrings.humanize(d.label) + ": " + Floats.format(d.value, "I");
	}
	
	var _border : Float;
	function hscale(d : { label : String, value : Float, y0 : Float }, i : Int) return Math.round(_y.scale(0) - _y.scale(d.value) - _border) // - _border * 2 is to account the border width
	function yscale(d : { label : String, value : Float, y0 : Float }, i : Int) return Math.round(_y.scale(d.y0) - (_y.scale(0) - _y.scale(d.value) - _border * 2))
	function ylabel(d : { label : String, value : Float, y0 : Float }, i : Int) return Math.round(_y.scale(d.y0) - (_y.scale(0) - _y.scale(d.value) - _border * 2) / 2)
	
	function _popin(max : Float, n, i : Int)
	{
		var g = Dom.selectNodeData(n),
			bar = g.select("rect.bar"),
			shadow = g.selectAll("rect.shadow"),
			y = _y;
			
		var color = bar.style("fill").get();
		_border = bar.style("stroke-width").getFloat();

		if ("none" == color)
			color = new Hsl(Std.random(360), 0.9, 0.7).toRgbString();
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
			.delay(0 * (i - _created))
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
		
		g
			.append("svg:text")
			.attr("text-anchor").string("middle")
			.attr("dominant-baseline").string("middle")
//			.attr("class").string("bar")
			.attr("x").float(0)
			.text().stringf(textLabel)
			.style("opacity").float(0.0)
			.attr("y").floatf(ylabel)
		;
		
		shadow.transition().ease(_ease).duration(_duration)
			.delay(0 * (i - _created))
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
//			.attr("height").floatf(hscale)
			.attr("width").float(Math.ceil(_barwidth * 1.2))
//			.attr("y").floatf(yscale)
//			.style("opacity").float(1.0)
		;
	}
	
	function _backtonormal(d, i : Int)
	{
		var bar = Dom.selectNodeData(d).selectAll("rect");
		bar
			.transition().ease(_ease).duration(_duration)
			.attr("x").float( -_barwidth / 2)
//			.attr("height").floatf(hscale)
			.attr("width").float(_barwidth);
	}
/*
	function _popinshadow(max : Float, n, i)
	{
		var path = Dom.selectNodeData(n),
			y = _y;
		path.transition().ease(_ease).duration(_duration)
			.delay(150 * (i - _created))
			.attr("height").floatf(hscale)
			.attr("y").floatf(yscale)
			.style("opacity").float(0.25)
		;
	}
*/
/*
	public dynamic function tooltip(label : String, x : Float, y : Float)
	{
		var d = Date.fromTime(x);
		return label + ": " + Ints.format(y);
	}

	function _highlight(d, i : Int)
	{
		Dom.selectNode(d).select("path").classed().add("selected");
	}
	
	function _backtonormal(d, i : Int)
	{
		Dom.selectNode(d).select("path").classed().remove("selected");
	}
	
	function _showtooltip(d : { label : String, values : Array<{ x : Float, y : Float}> }, _ : Int) 
	{
		var mouse = thx.js.Svg.mouse(svg.node());
		var v = Arrays.nearest(d.values, _x.invert(mouse[0]), function(d) return d.x);
		ToolTip.display(tooltip(d.label, v.x, v.y));
	}
	
	function _hidetooltip(d, i : Int) 
	{
		ToolTip.display(null);
	}
*/
}