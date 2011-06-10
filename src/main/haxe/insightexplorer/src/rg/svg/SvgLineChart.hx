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
import thx.math.Ease;
import thx.math.EaseMode;

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
	
	public function new(panel : SvgPanel, x : Linear, y : Linear) 
	{
		this._cpid = "linechart_clip_path_" + (++_pathid);
		this._x = x;
		this._y = y;
		
		_ease = Ease.mode(EaseMode.EaseOut, Equations.exponential); // .elasticf();
		_duration = 1500;
		_created = 0;
		
		super(panel);
		redraw();
	}
	
	public dynamic function tooltip(label : String, x : Float, y : Float)
	{
		var d = Date.fromTime(x);
		return label + ": " + Ints.format(y);
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
	
	override function resize()
	{
		_x.range([0.0, width]);
		_y.range([0.0, height]);
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
		var s = _x.scale(Date.now().getTime() - _timedelta + _x.getDomain()[0]);
		var layer = svg.selectAll("g.group")
			.attr("transform").string("translate(-" + s + ",0)")
		;
	}
	
	var _timedelta : Float;
	function _redraw()
	{
		_timedelta = Date.now().getTime();
		svg.select("#" + _cpid + " rect")
			.attr("width").float(width)
			.attr("height").float(height);
			
		var layer = svg.selectAll("g.group")
			.attr("transform").string("translate(0,0)")
			.data(_data, function(d,i) return d.label);
		
		// update
		layer.update().select("path.line")
//			.transition().ease(_ease).duration(_duration)
				.attr("d").stringf(_path);
		
		// enter
		layer.enter()
			.append("svg:g")
			.attr("class").stringf(function(d, i) return "group group-" + i)
			.onNode("mouseover.animation", _highlight, true)
			.onNode("mouseout.animation", _backtonormal, true)
			.on("mousemove.tooltip", _showtooltip, true)
			.on("mouseout.tooltip", _hidetooltip, true)
			.append("svg:path")
				.attr("class").string("line")
				.attr("d").stringf(_path0)
				.style("opacity").float(0)
				.eachNode(_popin);

		// exit
		layer.exit().remove();
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
	
	
	function _popin(n, i)
	{
		var path = Dom.selectNodeData(n);
		path.transition().ease(_ease).duration(_duration)
			.delay(150 * (i - _created))
			.style("opacity").float(1.0)
			.attr("d").stringf(_path)
		;

		if (i == _data.length - 1)
		{
			_created = i;
		}
	}
}