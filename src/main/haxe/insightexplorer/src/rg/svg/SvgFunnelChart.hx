/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg;
import thx.culture.FormatNumber;
import thx.js.Dom;
import thx.js.Svg;
import thx.math.scale.Linear;
import thx.svg.Arc;
import thx.svg.Diagonal;
import thx.color.Hsl;
import thx.color.Colors;
import thx.js.Access;
import thx.svg.Symbol;
import rg.util.RGStrings;
import thx.color.NamedColors;
using Arrays;

class SvgFunnelChart extends SvgLayer
{
	public var padding : Int;
	var _data : Array<{ label : String, value : Float }>;
	public function new(panel : SvgPanel) 
	{
		super(panel);
		padding = 2;
	}
	
	public function data(d : Array<{ label : String, value : Float }>)
	{
		_data = d;
		redraw();
	}
	
	override function init()
	{
		svg.classed().add("funnel-chart")
			.append("svg:defs")
		;
		/*
		svg.append("svg:rect")
			.style("fill").string("#eee")
			.attr("width").float(360)
			.attr("height").float(400)
		;
		*/
	}
	
	override public function redraw()
	{
		if (null == _data || 0 == _data.length)
			return;

		// cleanup
		svg.selectAll("g").remove();
		svg.selectAll("radialGradient").remove();
		
		var d = _data,
			choice = svg.selectAll("svg:g").data(d),
			m = d.length,
			p = padding,
			h : Float = Math.floor(height / (m + 1)) - p,
			th = p + h,
			w = width / 2,
			tw = width,
			max = Arrays.floatMax(d, function(d) return d.value),
			scale = new Linear().domain([0, max]).range([0.0, w]),
			fx1 = function(v) return (w - scale.scale(v)),
			fx2 = function(v) return tw - (w - scale.scale(v)),
			next = function(o, i) return ((i + 1) < m) ? d[i + 1].value : o.value,
			diagonal1 = new Diagonal()
				.sourcef(function(o, i) return [ fx1(o.value), 0.0 ] )
				.targetf(function(o, i) return [ fx1(next(o,i)), h ] ),
			diagonal2 = new Diagonal()
				.sourcef(function(o, i) return [ fx2(next(o, i)), h ] )
				.targetf(function(o, i) return [ fx2(o.value), 0.0 ] ),
			conj = function(v : Float, h : Float, r = false, dir = 0) 
			{
				var x1 = r ? fx2(v) : fx1(v),
					x2 = r ? fx1(v) - fx2(v) : fx2(v) - fx1(v),
					y1 = h,
					a = 30, //100,
					b = 3, //50,
					d = r ? (dir == 0 ? 1 : 0) : dir
				;
				return " a " + a + " " + b + " 0 0 " + d + " " + x2 + " 0";
			},
			conj1 = function(d, i)
			{
				return conj(d.value, 0, true);
			},
			conj2 = function(d, i)
			{
				return conj(next(d, i), h);
			},
			conjr = function(d, i)
			{
				return " M " + fx1(d.value) + " 0 " +conj(d.value, 0) + conj(d.value, 0, true, 1);
			}
		;

		var top = svg.selectAll("svg:g").data([d[0]]).enter()
			.append("svg:g")
			.attr("transform").stringf(function(d, i) return "translate(0," + (th * (0.5 + i)) + ")");
		top
			.append("svg:path")
			.attr("class").stringf(function(d, i) return "funnel-inside item-" + i)
			.attr("d").stringf(conjr)
			.eachNode(_internalSection);
		var t = top
			.append("svg:g")
				.attr("class").string("first-label")
				.attr("transform").stringf(function(d, i) return "translate(" + w + "," + ( -h / 3) + ")");
		var fontsize = Math.max(10, Math.round(height / 16)),
			bgcolor = "#fff",
			bgopacity = 0.95,
			frcolor = "#000", // FFDD33
			offset = 1;
		t.append("svg:text")
			.attr("text-anchor").string("middle")
			.attr("dominant-baseline").string("middle")
			.style("fill").string(bgcolor)
			.style("opacity").float(bgopacity)
			.style("font-weight").string("bold")
			.style("font-size").string(fontsize + "px")
			.attr("transform").stringf(function(d, i) return "translate("+offset+","+offset+")")
			.text().stringf(function(d, i) return Floats.format(d.value, "I"))
			.append("svg:tspan")
				.attr("y").string(fontsize + "px")
				.attr("x").string("0em")
				.attr("class").string("subtitle")
				.style("fill").string(bgcolor)
				.style("font-weight").string("bold")
				.style("font-size").string(fontsize + "px")
				.text().stringf(function(d, i) return RGStrings.humanize(d.label))
		;
		t.append("svg:text")
			.attr("text-anchor").string("middle")
			.attr("dominant-baseline").string("middle")
			.style("fill").string(frcolor)
			.style("font-weight").string("bold")
			.style("font-size").string(fontsize + "px")
			.text().stringf(function(d, i) return Floats.format(d.value, "I"))
			.append("svg:tspan")
				.attr("y").string(fontsize + "px")
				.attr("x").string("0em")
				.attr("class").string("subtitle")
				.style("fill").string(frcolor)
				.style("font-weight").string("bold")
				.style("font-size").string(fontsize + "px")
				.text().stringf(function(d, i) return RGStrings.humanize(d.label))
		;

		var g = choice.enter()
			.append("svg:g")
			.attr("transform").stringf(function(d, i) return "translate(0," + ((p + h) * (0.5 + i)) + ")");
		g
			.append("svg:path")
			.attr("class").stringf(function(d, i) return "funnel-outside item-" + i)
			.attr("d").stringf(function(d, i) {
				var t = diagonal2.diagonal(d, i).split('C');
				t.shift();
				var d2 = 'C' + t.join('C');
				return diagonal1.diagonal(d, i) + conj2(d, i) + d2 + conj1(d, i);
			});
		g.eachNode(callback(_externalSection, max));
		var baloonContainer = svg,
			bb = { x : 0.0 + Math.round(tw / 3 * 2), y : 0.0, width : 0.0 + tw / 3, height : 0.0 + this.height },
			arrowsize = Math.min(30, h/3*2),
			arrowdata = _data.slice(1).map(function(o,i) return 100 * o.value / max /*d[i].value*/);
			
			
		g.each(function(d, i) {
			if (i == 0)
				return;
			var baloon = new SvgBaloon(baloonContainer);
			baloon.preferredSide = 3;
			baloon.text = [RGStrings.humanize(d.label), Floats.format(d.value, "I")];
			baloon.boundingBox = bb;
			baloon.moveTo(tw / 2, Math.round(th * (0.5 + i) + arrowsize) + 0.5, false);
		});
		
		var ga = svg.selectAll("g.arrow")
			.data(arrowdata)
			.enter()
			.append("svg:g")
			.attr("class").string("arrow")
			.attr("transform").stringf(function(d, i) return "translate(" + (tw / 2) + "," + (((p + h) * (1.5 + i)) + arrowsize / 2) + ")");
		ga
			.append("svg:path")
			.attr("transform").string("scale(1.1,0.85)translate(1,1)")
			.attr("class").string("shadow")
			.style("fill").string("#000")
			.attr("opacity").float(.25)
			.attr("d").string(Symbol.arrowDownWide(arrowsize*arrowsize))
		;
			
		ga
			.append("svg:path")
			.attr("transform").string("scale(1.1,0.8)")
			.attr("d").string(Symbol.arrowDownWide(arrowsize*arrowsize))
		;
		ga
			.append("svg:text")
			.attr("text-anchor").string("middle")
			.attr("dominant-baseline").string("baseline")
			.style("font-size").string(Math.max(7, Math.round(arrowsize / 7 * 2)) + "px")
			.style("font-family").string("Verdana, helvetica, sans-serif")
			.text().stringf(function(d, i) return FormatNumber.int(d)+"%")
		;
		

	}
	
	function _internalSection(n, i : Int)
	{
		var d = Dom.selectNode(n),
			c = d.style("fill").get(),
			color = Colors.parse(c);
			
		d.style("fill").string(Hsl.darker(Hsl.toHsl(color), 0.6).toRgbString());
		
		var stops = svg.select("defs")
			.append("svg:radialGradient")
			.attr("id").string("rg_funnel_int_gradient_" + i)
			.attr("cx").string("50%")
			.attr("fx").string("75%")
			.attr("cy").string("20%")
//				.attr("fx").string((0.75*cx) + "%")
//				.attr("fy").string((0.75*cy) + "%")
			.attr("r").string(Math.round(75) + "%")
		;
		stops.append("svg:stop")
			.attr("offset").string("0%")
			.attr("stop-color").string(Hsl.darker(Hsl.toHsl(color), 1.25).toRgbString()) //currentColor
//			.attr("stop-opacity").float(1)
		;

		stops.append("svg:stop")
			.attr("offset").string("100%")
			.attr("stop-color").string(Hsl.darker(Hsl.toHsl(color), 0.4).toRgbString())
//			.attr("stop-opacity").float(1)
		;
			
		d.attr("style").string("fill:url(#rg_funnel_int_gradient_" + i + ")");
	}
	function _externalSection(max : Float, n, i : Int)
	{
		var g = Dom.selectNode(n),
			d = g.select("path"),
			c = d.style("fill").get(),
			color = Colors.parse(c),
			v = (i + 1) < _data.length ? (_data[i].value - _data[i + 1].value) / _data[i].value : 0,
			percent = max / _data[i].value;
			
			
		var stops = svg.select("defs")
			.append("svg:radialGradient")
			.attr("id").string("rg_funnel_ext_gradient_" + i)
			.attr("gradientTransform").string("scale("+percent*1+",1)")
			.attr("cx").string((50 / percent) + "%")
			.attr("fx").string((40 / percent) + "%")
			.attr("cy").string((1 - percent)*3.0 + "%")
			.attr("r").string("150%")
		;
		
		var top = color.toRgbString();
		
		stops.append("svg:stop")
			.attr("offset").string("30%")
			.attr("stop-color").string(top)
		;
		var middlecolor = Hsl.darker(Hsl.toHsl(color), 1 - v * .75).toRgbString();
		
		stops.append("svg:stop")
			.attr("offset").string("45%")
			.attr("stop-color").string(middlecolor)
		;
		
		var bottomcolor = NamedColors.red.toRgbString();
		
		bottomcolor = color.toRgbString();
		
		stops.append("svg:stop")
			.attr("offset").string("70%")
			.attr("stop-color").string(bottomcolor)
		;
			
		d.attr("style").string("fill:url(#rg_funnel_ext_gradient_" + i + ")");
	}
	
	override function resize()
	{
		redraw();
	}
}