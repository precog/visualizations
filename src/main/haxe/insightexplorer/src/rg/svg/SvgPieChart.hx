package rg.svg;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.geom.layout.Pie;
import thx.js.Selection;
import thx.math.Const;
import thx.svg.Arc;
import rg.chart.ToolTip;

class SvgPieChart extends SvgLayer<Array<Float>>
{
	var _data : Array<Float>;
	var _prepdata : Array<Float>;
	var _arc : Arc<{ startAngle : Float, endAngle : Float }>;
	var _pie : Pie<Float>;
	var _r : Float;
	var _padding : Int;
	
	public function new(panel : SvgPanel, data : Array<Float>)
	{
		_padding = 4;
		super(panel);
		this._data = data;
		redraw();
		
	}
	
	override public function destroy() {}
	
	override function init()
	{
		_r = Math.min(panel.frame.width, panel.frame.height) / 2;
		_pie = new Pie();
		_arc = Arc.fromAngleObject().innerRadius((_r - _padding) * .5).outerRadius(_r - _padding);
	}
	
	override public function redraw()
	{
		if (null == _data || _data.length == 0)
			return;
		_redraw();
	}

	public function getData() return _data
	public function data(d)
	{
		this._data = d;
		redraw();
	}

	function _keyLayer(_, i : Int) return "" + i
	function _redraw()
	{
		var vis = svg
			.classed().add("pie-chart")
			.data([_data]).update()
		;

		var selection = vis.selectAll("g.layer")
			.dataf(_pie.pie, function(_, i : Int) return "" + i);
			
		selection.update()
			.select("path")
			.transition()
				.attr("d").stringf(_arc.shape);

		selection.update()
			.select("text")
			.text().stringf(function(d, i) {
				return Ints.format(d.value);
			})
			.transition()
		//		.duration()
				.attr("transform").stringf(tranformLabel)
				.attr("display").stringf(function(d, i) return d.value > .15 ? null : "none")
				;
			
		var arcs = selection.enter()
				.append("svg:g")
					.attr("class").stringf(function(d, i) return "layer layer-" + i)
					.attr("transform").string("translate(" + (_padding / 2 + _r) + "," + (_padding / 2 + _r) + ")");

		arcs
			.on("mousemove", over)
			.on("mouseout", out);
					
		arcs.append("svg:path")
			.attr("d").stringf(_arc.shape);

		arcs.append("svg:text")
			.attr("transform").stringf(tranformLabel)
			.attr("dy").string(".35em")
			.attr("text-anchor").string("middle")
			.attr("display").stringf(function(d, i) return d.value > .15 ? null : "none")
			.text().stringf(function(d, i) return Ints.format(d.value));
	}
	
	var _over : Float -> Int -> Void;
	function over(d, i : Int) 
	{
		if (null != _over)
			_over(d.value, i);
	}
	
	var _out : Float -> Int -> Void;
	function out(d, i : Int) 
	{
		if (null != _out)
			_out(d, i);
	}
	
	public function setTooltip(over : Float -> Int -> Void, out : Float -> Int -> Void)
	{
		_over = over;
		_out = out;
	}
	
	function tranformLabel(d, i)
	{
		var c = _arc.centroid(d);
		var a = -90 + Const.TO_DEGREE * ((d.endAngle - d.startAngle) / 2 + d.startAngle);
		if (a > 90)
			a -= 180;
		return "translate(" + c[0] + "," + c[1] + ") rotate("+a+")";
	}
}