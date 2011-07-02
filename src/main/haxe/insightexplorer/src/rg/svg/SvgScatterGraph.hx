/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg;

import thx.math.scale.Ordinal;
import thx.math.scale.Linear;
import thx.math.Equations;
import thx.js.Dom;
import thx.color.Colors;
import thx.color.Hsl;
import thx.svg.Symbol;
import thx.math.scale.NumericScale;

class SvgScatterGraph extends SvgLayer
{
	var _x : Ordinal<String, Int>;
	var _y : NumericScale<Dynamic>;
	var _ease : Float -> Float;
	var _duration : Int;
	var _created : Int;
	var _data : Array<{ label : String, value : Float}>;

	public function new(panel : SvgPanel, x : Ordinal<String, Int>, y : NumericScale<Dynamic>) 
	{
		this._x = x;
		this._y = y;
		
		_ease = Equations.linear;
		_duration = 1500;
		_created = 0;
		_symbols = new Hash();
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
		svg.classed().add("scatter-graph")
			.append("svg:defs");
	}
	
	override function resize()
	{
		_y.range([0.0, height]);
	}
	
	function _key(d, i) return d.label

	override public function redraw()
	{
		if (null == _data || _data.length == 0)
			return;
		var start = 0,
			width = this.width,
			max = _y.getDomain()[1],
			y = _y;
			
		var bands = _x.rangePoints(start, width, 1);
		// symbols
		var symbols = svg.selectAll("g.symbol").data(_data, _key);

		// enter
		var be = symbols.enter()
			.append("svg:g")
			.attr("class").stringf(function(d, i) return "symbol item-" + i)
			.attr("transform").stringf(function(d, i) return "translate(" + bands.scale(d.label, i) + "," + y.scale(d.value, i) + ")")
			.style("opacity").float(0)
		;
	
		// shadow
		be.append("svg:path")
			.attr("class").string("shadow")
			.attr("transform").string("translate(1,1)")
			.style("stroke").string("#000")
			.style("fill").string("#000")
			.style("stroke-width").float(5)
			.attr("d").stringf(_symbol)
			.style("opacity").float(0.25)
		;
		
		be.append("svg:path")
			.attr("class").string("shadow")
			.attr("transform").string("translate(1,1)")
			.style("stroke").string("#000")
			.style("fill").string("#000")
			.style("stroke-width").float(3)
			.attr("d").stringf(_symbol)
			.style("opacity").float(0.5)
		;
		
		// solid symbol
		be.append("svg:path")
			.attr("d").stringf(_symbol)
		;
		
		var me = this;
		be
			.append("svg:text")
			.attr("text-anchor").string("middle")
			.attr("y").floatf(function(d,i) return -Math.ceil(Math.sqrt(me.symbolSize(d,i))))
			.text().stringf(textLabel)
		;
		
		be
			.transition().duration(_duration).ease(_ease)
			.style("opacity").float(1);

		// update
		symbols.update()
			.transition().duration(_duration).ease(_ease)
			.attr("transform").stringf(function(d, i) return "translate(" + bands.scale(d.label, i) + "," + y.scale(d.value, i) + ")")
		;

		// exit
		symbols.exit().remove();
	}
	
	var _symbols : Hash<String>;
	function _symbol(d, i)
	{
		var name = symbolName(d, i);
		if (!Reflect.hasField(Symbol, name))
			name = "circle";
		var size = symbolSize(d, i),
			key = name + "-" + size;
		var s = _symbols.get(key);
		if (null == s)
		{
			s = Reflect.callMethod(Symbol, Reflect.field(Symbol, name), [size]);
			_symbols.set(key, s);
		}
		return s;
	}
	
	public dynamic function symbolName(d : { label : String, value : Float}, i)
	{
		return "circle";
	}
	
	public dynamic function symbolSize(d : { label : String, value : Float}, i)
	{
		return 100;
	}
	
	public function textLabel(d : { label : String, value : Float }, i : Int)
	{
		return Floats.format(d.value, "I");
	}
}