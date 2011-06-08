/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg;
import thx.js.Selection;
import thx.math.scale.Linear;
import thx.math.Equations;
import thx.js.Dom;
import thx.svg.LineInterpolator;
import rg.chart.ToolTip;
import thx.culture.FormatDate;

class SvgLineChart extends SvgLayer
{
	static var _pathid = 0;
	
	var _cpid : String;
	var _data : Array<{ label : String, values : Array<{ x : Float, y : Float}> }>;
	var _x : Linear;
	var _y : Linear;
	var _ease : Float -> Float;
	var _duration : Int;
	var _created : Int;
	var _interpolator : LineInterpolator;
	var _linewidth : Array<Int>;
	
	public function new(panel : SvgPanel, x : Linear, y : Linear) 
	{
		this._cpid = "linechart_clip_path_" + (++_pathid);
		this._x = x;
		this._y = y;
		
		_ease = Equations.elasticf();
		_duration = 1500;
		_created = 0;
		_linewidth = [];
		
		super(panel);
		redraw();
	}
	
	public dynamic function tooltip(label : String, x : Float, y : Float)
	{
		var d = Date.fromTime(x);
		return label + ": " + Ints.format(y) + " count, " + FormatDate.dateShort(d) + ", " + FormatDate.timeShort(d);
	}
	
	override function init()
	{
		svg
			.classed().add("line-chart")
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
	
	override public function redraw()
	{
//		_r = Math.min(panel.frame.width, panel.frame.height) / 2 - _padding;
//		_pie = new Pie();
//		_arc = Arc.fromAngleObject().innerRadius(_r * .2).outerRadius(_r);
//		_startarc = Arc.fromAngleObject().innerRadius(_r * .2).outerRadius(_r * .2);
//		_bigarc = Arc.fromAngleObject().innerRadius(_r * .4).outerRadius(_r + _padding * .9);
		if (null == _data || _data.length == 0)
			return;
		_redraw();
	}
	
	public function lineInterpolator(interpolator : LineInterpolator)
	{
		this._interpolator = interpolator;
	}
	
	public function getData() return _data
	public function data(d : Array<{ label : String, values : Array<{ x : Float, y : Float}> }>)
	{
		this._data = d;
		redraw();
	}
	
	function _path0(d : { label : String, values : Array<{ x : Float, y : Float}> }, i : Int)
	{
		var x = this._x,
			y = this._y;
		var line = new thx.svg.Line<{ x : Float, y : Float }>(
			function(d, i) return x.scale(d.x),
			function(d, i) return y.scale(0)
		);
		if (null != _interpolator)
			line.interpolator(_interpolator);
		return line.shape(d.values);
	}
	
	function _path(d : { label : String, values : Array<{ x : Float, y : Float}> }, i : Int)
	{
		var x = this._x,
			y = this._y;
		var line = new thx.svg.Line<{ x : Float, y : Float }>(
			function(d, i) return x.scale(d.x),
			function(d, i) return y.scale(d.y)
		);
		if (null != _interpolator)
			line.interpolator(_interpolator);
		return line.shape(d.values);
	}
	
	public function updatex()
	{
		_x.range([0.0, panel.frame.width]);
		var s = _x.scale(Date.now().getTime() - _timedelta + _x.getDomain()[0]);
		var layer = svg.selectAll("g.group")
			.attr("transform").string("translate(-" + s + ",0)")
		;
	}
	
	var _timedelta : Float;
	function _redraw()
	{
		_timedelta = Date.now().getTime();
		_x.range([0.0, panel.frame.width]);
		_y.range([0.0, panel.frame.height]);
		svg.select("#" + _cpid + " rect")
			.attr("width").float(panel.frame.width)
			.attr("height").float(panel.frame.height);
			
		var layer = svg.selectAll("g.group")
			.attr("transform").string("translate(0,0)")
			.data(_data, function(d,i) return d.label);
		
		// update
		layer.update().select("path.line").attr("d").stringf(_path);
		
		// enter
		layer.enter()
			.append("svg:g")
			.attr("class").stringf(function(d, i) return "group group-" + i)
			.onNode("mouseover.animation", _highlight)
			.onNode("mouseout.animation", _backtonormal)
			.on("mousemove.tooltip", _showtooltip)
			.on("mouseout.tooltip", _hidetooltip)
			.append("svg:path")
				.attr("class").string("line")
				.attr("d").stringf(_path0)
				.style("opacity").float(0)
				.eachNode(_popin);
				/*
					.transition()
						.duration(_duration)
						.ease(_ease)
						.attr("d").stringf(_path)
						*/
//					.endNode(_setPathCreated)
		

		// exit
		layer.exit().remove();
		
		/*
		// LAYER
		var layer = svg.selectAll("g.group").data(_prepdata);
		
		// update
		if (_pathCreated)
			layer.update().select("path.line").attr("d").stringf(_path);

		// enter
		layer.enter()
			.append("svg:g")
			.attr("class").stringf(function(d, i) return "group group-" + i)
			.onNode("mousemove", over)
			.onNode("mouseout", out)
			.append("svg:path")
				.attr("class").string("line")
				.attr("d").stringf(path0)
					.transition().attr("d").stringf(_path)
					.endNode(_setPathCreated);
		
		// exit
		layer.exit().remove();
		*/
	}
	
//	var last : Selection;
	function _highlight(d, i : Int)
	{
		/*
		if (null != last)
			last
				.transition().ease(_ease).duration(_duration)
				.style("stroke-width").float(_linewidth[i]);
			*/
		Dom.selectNode(d).select("path").classed().add("selected");
		/*
		last
			.transition().ease(_ease).duration(_duration)
			.style("stroke-width").float(10);
			*/
	}
	
	function _backtonormal(d, i : Int)
	{
		Dom.selectNode(d).select("path").classed().remove("selected");
		/*
		var path = Dom.selectNodeData(d).select("path");
		path
			.transition().ease(_ease).duration(_duration)
			.style("stroke-width").float(_linewidth[i]);
			*/
	}
	
	function _showtooltip(d : { label : String, values : Array<{ x : Float, y : Float}> }, _ : Int) 
	{
		// TODO find i
		var i = 0;
//		trace(Dom.event.clientX);
		var x = _x.invert(Dom.event.clientX);
//		trace(x);
		var v = Arrays.nearest(d.values, x, function(d) return d.x);
		var s = tooltip(d.label, v.x, v.y);
		ToolTip.display(s);
	}
	
	function _hidetooltip(d, i : Int) 
	{
		ToolTip.display(null);
	}
	
	
	function _popin(n, i)
	{
		var path = Dom.selectNodeData(n);
		path.transition().ease(_ease).duration(_duration)
			.delay(150 * (i - _created))
			.style("opacity").float(1.0)
			.attr("d").stringf(_path)
		;
		
		if (null == _linewidth[i])
			_linewidth[i] = path.style("stroke-width").get();
		
		if (i == _data.length - 1)
		{
			_created = i;
		}
	}
}