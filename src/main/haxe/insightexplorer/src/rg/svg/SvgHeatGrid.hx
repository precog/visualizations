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
	var _tooltip : SvgBaloon;
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
		_tooltip = new SvgBaloon(svg);
//		_tooltip.hide();
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
	
	function mouseover(d : Float, i : Int)
	{
//		_tooltip.show();
		_tooltip.text = ["value: " + Floats.format(d)];
		_tooltip.moveTo(x(d, i) + (width / _m) / 2, y(d, i) + (height / _m) / 4);
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
			.style("stroke").string("none")
			.attr("class").stringf(cellclass)
			.attr("x").floatf(x)
			.attr("y").floatf(y)
			.style("fill-opacity").float(0)
			.on("mouseover", mouseover)
			.transition().duration(_duration)
				.style("fill-opacity").float(1)
				.style("fill").colorf(color.scale)
		;
		var me = this;
		choice.update()
			.eachNode(function(n, i) {
				trace(Dom.selectNode(n).style("fill").get());
			});
		choice.update()
			.transition().duration(_duration)
				.style("fill").colorf(function(d, i) {
					var c = me.color.scale(d, i);
					trace(c);
					return c;
				})
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
		
/*
		var renter = choice.enter()
			.append("svg:g")
			.attr("class").stringf(function(d, i) return "row row-" + i)
			.attr("transform").stringf(function(d, i) return "translate(0, " + (i * rh) + ")")
			.style("opacity").float(0);
			
		renter
			.transition().duration(_duration)
			.style("opacity").float(1);
				
		var rchoice = renter.selectAll("g.col")
			.dataf(function(d, i) return d);
		choice.update()
			.transition().duration(_duration)
//			.attr("transform").stringf(function(d, i) return "translate(0, " + (i * rh) + ")")
		;
		
		choice.exit()
			.transition().duration(_duration)
			.style("opacity").float(0).remove();
				
		rchoice.enter()
			.append("svg:g")
			.attr("fill").stringf(color.scale)
			.attr("class").stringf(function(d, i) return "cell cell-" + i)
			.attr("transform").stringf(function(d, i) return "translate(" + (i * cw) + ", 0)")
			.append("svg:rect")
				.attr("width").float(cw)
				.attr("height").float(rh)
				.attr("class").stringf(function(d, i) return "" + d)
			;
	
		var cchoice = choice.update()
			.selectAll("g.cell")
			.dataf(function(d, i) return d);	
		cchoice.enter()
			.append("svg:g")
			.attr("class").stringf(function(d, i) return "cell cell-" + i)
			.attr("fill").stringf(color.scale)
//			.attr("transform").stringf(function(d, i) return "translate(" + (i * cw) + ", 0)")
			.append("svg:rect")
				.attr("width").float(cw)
				.attr("height").float(rh)
				.attr("class").stringf(function(d, i) return "" + d)
				.style("opacity").float(0)
				.transition().duration(_duration)
					.style("opacity").float(1)
		;
		cchoice.exit()
			.transition().duration(_duration)
			.style("opacity").float(0).remove();
		cchoice.update()
			.transition().duration(_duration)
			.attr("transform").stringf(function(d, i) return "translate(" + (i * cw) + ", 0)")
		;
		cchoice.update()
			.transition().duration(_duration)
			.attr("fill").stringf(color.scale)
			.select("rect")
				.attr("width").float(cw+10)
				.attr("height").float(rh)
		;
*/
	}
	/*
	function getX()
	{
		if (null == x)
		{
			
		}
		return x;
	}
	
	function setX(scale : IScale<XDomain, Float>)
	{
		return this.x = scale;
	}
	*/
}