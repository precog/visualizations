package rg.svg;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.culture.FormatNumber;
import thx.geom.layout.Pie;
import thx.js.Dom;
import thx.js.Selection;
import thx.math.Const;
import thx.math.EaseMode;
import thx.math.Equations;
import thx.svg.Arc;
import rg.chart.ToolTip;
import thx.js.Access;

class SvgPieChart extends SvgLayer
{
	var _total : Float;
	var _data : Array<Float>;
	var _labels : Array<String>;
	var _arc : Arc<{ startAngle : Float, endAngle : Float }>;
	var _startarc : Arc<{ startAngle : Float, endAngle : Float }>;
	var _bigarc : Arc<{ startAngle : Float, endAngle : Float }>;
	var _pie : Pie<Float>;
	var _r : Float;
	var _padding : Int;
	var _created : Int;
	
	var _ease : Float -> Float;
	var _duration : Int;
	
	public function new(panel : SvgPanel)
	{
		_padding = 30;
		_created = 0;
		super(panel);
		
		_ease = Equations.elasticf();
		_duration = 1500;
		
		redraw();
	}
	
	public dynamic function tooltip(label : String, value : Float, total : Float)
	{
		return label + ": " + Ints.format(value);
	}
	
	public dynamic function label(label : String, value : Float, total : Float)
	{
		return FormatNumber.percent(value / total * 100, 1);
	}
	
	function _label(d, i)
	{
		return label(_labels[i], d.value, _total);
	}

	override function init()
	{
		super.init();
		svg.classed().add("pie-chart");
		/*
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
		*/
/*
		var filter = svg
			.append("svg:filter")
			.attr("filterUnits").string("objectBoundingBox")
			.attr("x").string("0%")
			.attr("y").string("0%")
			.attr("width").string("100%")
			.attr("height").string("100%")
			.attr("id").string("label-filter")
		;

		filter
			.append("svg:feColorMatrix")
				.attr("in").string("SourceGraphic")
				.attr("type").string("matrix")
				.attr("values").string(
				  "0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0")
				.attr("result").string("bg")
				;
				
		filter
			.append("svg:feOffset")
				.attr("in").string("bg")
				.attr("dx").string("1")
				.attr("dy").string("1")
				.attr("result").string("out");
				

		filter
			.append("svg:feBlend")
				.attr("in").string("SourceGraphic")
				.attr("in2").string("out")
				.attr("mode").string("normal")
		;
*/
	}

	override public function redraw()
	{
		_r = Math.min(panel.frame.width, panel.frame.height) / 2 - _padding;
		_pie = new Pie();
		_arc = Arc.fromAngleObject().innerRadius(_r * .2).outerRadius(_r);
		_startarc = Arc.fromAngleObject().innerRadius(_r * .2).outerRadius(_r * .2);
		_bigarc = Arc.fromAngleObject().innerRadius(_r * .4).outerRadius(_r + _padding * .9);
		if (null == _data || _data.length == 0)
			return;
		_redraw();
	}

	public function getData() return _data
	public function data(d : Array<{ label : String, value : Float }>)
	{
		this._data = [];
		this._labels = [];
		_total = 0.0;
		for (item in d)
		{
			_data.push(item.value);
			_labels.push(item.label);
			_total += item.value;
		}
		redraw();
	}
	
	function sliceid(d, i)
	{
		return _labels[i];
	}

	function _keyLayer(_, i : Int) return _labels[i]
	function _redraw()
	{
		var vis = svg.data([_data]).update();

		var selection = vis.selectAll("g.group")
//.attr("filter").string("url(#label-filter)")
			.dataf(_pie.pie, sliceid);
			
		selection.update()
			.select("path")
			.transition()
				.ease(_ease)
				.duration(_duration)
				.attr("d").stringf(_arc.shape);

		selection.update()
			.select("text")
			.text().stringf(_label)
			.transition()
				.ease(_ease)
				.duration(_duration)
				.attr("transform").stringf(transformLabel)
				.attr("display").stringf(function(d, i) return d.value > .15 ? null : "none")
				;
			
		var arcs = selection.enter()
			.append("svg:g")
				.attr("class").stringf(function(d, i) return "group group-" + i)
				.attr("transform").string("translate(" + (_padding + _r) + "," + (_padding + _r) + ")");
		
		arcs
			.onNode("mousemove.animation", _highlight)
			.onNode("mouseout.animation", _backtonormal);
		arcs
			.on("mouseover.tooltip", _showtooltip)
			.on("mouseout.tooltip", _hidetooltip);
					
		arcs.append("svg:path")
			.attr("d").stringf(_startarc.shape)
			.eachNode(_arcinp);

		arcs.append("svg:text")
	//		.attr("filter").string("url(#label-filter)")
			.attr("transform").stringf(transformStartLabel)
			.attr("dy").string(".35em")
			.attr("text-anchor").string("middle")
			.attr("display").stringf(function(d, i) return d.value > .15 ? null : "none")
			.text().stringf(_label)
				.style("opacity").float(0)
				.eachNode(_arcint)
		;
	}
	
	function _arcinp(n, i)
	{
		Dom.selectNodeData(n)
			.transition().ease(_ease).duration(_duration)
			.delay(150 * (i - _created))
			.attr("d").stringf(_arc.shape)
		;
	}
	
	function _arcint(n, i)
	{
		Dom.selectNodeData(n)
			.transition().ease(_ease).duration(_duration)
			.delay(150 * (i - _created))
				.style("opacity").float(1)
				.attr("transform").stringf(transformLabel);
		if (i == _data.length - 1)
			_created = i;
	}
	
	function _highlight(d, i : Int)
	{
		var slice = Dom.selectNodeData(d).select("path");
		slice
			.transition().ease(_ease).duration(_duration)
			.attr("d").stringf(_bigarc.shape);
	}
	
	function _backtonormal(d, i : Int)
	{
		var slice = Dom.selectNodeData(d).select("path");
		slice
			.transition().ease(_ease).duration(_duration)
			.attr("d").stringf(_arc.shape);
	}
	
	function _showtooltip(d, i : Int) 
	{
		var v = tooltip(_labels[i], d.value, _total);
		ToolTip.display(v);
	}
	
	function _hidetooltip(d, i : Int) 
	{
		ToolTip.display(null);
	}
	
	function transformLabel(d, i)
	{
		var c = _arc.centroid(d);
		var a = -90 + Const.TO_DEGREE * ((d.endAngle - d.startAngle) / 2 + d.startAngle);
		if (a > 90)
			a -= 180;
		return "translate(" + c[0] + "," + c[1] + ") rotate("+a+")";
	}
	
	function transformStartLabel(d, i)
	{
		var c = _startarc.centroid(d);
		var a = -90 + Const.TO_DEGREE * ((d.endAngle - d.startAngle) / 2 + d.startAngle);
		if (a > 90)
			a -= 180;
		return "translate(" + c[0] + "," + c[1] + ") rotate("+a+")";
	}
}