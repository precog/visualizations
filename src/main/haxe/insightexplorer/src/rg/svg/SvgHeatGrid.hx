/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg;

import rg.util.Domain;
import thx.js.Dom;
import thx.js.Selection;
import thx.math.scale.IScale;
import thx.math.scale.Linear;
import thx.math.scale.NumericScale;
import thx.color.Rgb;

class SvgHeatGrid<TColor : Rgb> extends SvgLayer
{
	var _data : Array<Float>;
	public var color : IScale<Float, TColor>;
	var _duration : Int;
	var _m : Int;
	var _n : Int;
//	var _tooltip : SvgBaloon;
	var _grid : Selection;
	
	public function new(panel : SvgPanel, color : IScale<Float, TColor>) 
	{
		_m = _n = 0;
		super(panel);
		this.color = color;
		_duration = 1000;
	}
	
	override function init()
	{
		svg.classed().add("heat-grid");
		_grid = svg.append("svg:g");
//		_tooltip = new SvgBaloon(svg);
	}
	
	public function data(d : Array<Array<Float>>)
	{
		if (d == null)
			d = [];
		_n = d.length;
		_m = _n > 0 ? d[0].length : 0;
		_data = Arrays.flatten(d);
		redraw();
	}
	
	function col(_, i : Int) return i % _m
	function row(_, i : Int) return Math.floor(i / _m)
	
	function x(_, i : Int) return col(_, i) * width / _m
	function y(_, i : Int) return row(_, i) * height / _n
	
	function cellclass(_, i : Int) return "cell col-" + col(_,i) + " row-" + row(_,i)
	
	public dynamic function over(x : Float, y : Float, d : Dynamic, pos : Int)
	{
		
	}
	
	function _mouseover(d : Float, i : Int)
	{
		var x = Math.round(this.x(d, i) + (width / _m) / 2),
			y = Math.round(this.y(d, i) + (height / _n) / 2);
		over(x, y, d, i);
//		_tooltip.text = ["count: " + Floats.format(d, "I")];
//		_tooltip.moveTo(x(d, i) + (width / _m) / 2, y(d, i) + (height / _m) / 4);
	}
	
	override function redraw()
	{
		if (_m == 0)
			return;
		
		var choice = _grid.selectAll("rect").data(_data);

		choice.enter()
			.append("svg:rect")
			.attr("width").float(width / _m)
			.attr("height").float(height / _n)
			.style("fill").color(color.scale(0))
			.attr("class").stringf(cellclass)
			.attr("x").floatf(x)
			.attr("y").floatf(y)
			.style("fill-opacity").float(0)
			.on("mouseover", _mouseover)
			.transition().duration(_duration)
				.style("fill-opacity").float(1)
				.style("fill").colorf(color.scale)
		;
		choice.update()
			.transition().duration(_duration)
				.style("fill").colorf(color.scale)
				.attr("width").float(width / _m)
				.attr("height").float(height / _n)
				.attr("x").floatf(x)
				.attr("y").floatf(y)
		;
		
		choice.exit()
			.transition().duration(_duration)
				.style("opacity").float(0)
				.remove()
		;
	}
}