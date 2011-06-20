/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg;
import haxe.Timer;
import js.Dom;
import thx.culture.FormatDate;
import thx.js.Selection;
import thx.js.Svg;
import thx.math.scale.Linear;

class SvgLineChartHighlighter extends SvgLayer
{
	var text : Selection;
	var container : Selection;
	var x : Linear;
	
	var selector : Selection;
	
	public function new(panel : SvgPanel, x : Linear/*, y : Linear*/) 
	{
		this.x = x;
		super(panel);
	}
	
	public dynamic function approximator(x : Float)
	{
		return x;
	}
	
	public function prepare()
	{
		var parent = svg;
		while (parent.node().nodeName != "g" || parent.classed().get() != "panel")
		{
			parent = thx.js.Dom.selectNode(parent.node().parentNode);
		}
		parent
			.onNode("mouseover.highlighter", _over)
			.onNode("mousemove.highlighter", _move)
		;
		
		selector = svg.append("svg:g")
			.style("pointer-events").string("none")
			.attr("class").string("linechart-highlighter")
//			.style("display").string("none")
		;
			
		selector.append("svg:line")
			.attr("x1").float(0)
			.attr("y1").string("1em")
			.attr("x2").float(0)
			.attr("y2").float(panel.frame.height)
		;
		
		container = selector.append("svg:rect")
			.attr("rx").float(4)
			.attr("ry").float(4);
		
		text = selector.append("svg:text")
			.attr("dy").string("1em")
			.attr("text-anchor").string("middle")
			.attr("dominant-baseline").string("middle")
		;
	}

	public dynamic function label(x : Float)
	{
		return FormatDate.dateShort(Date.fromTime(x)) + ", " + FormatDate.timeShort(Date.fromTime(x));
	}
	
	function _over(d : HtmlDom, ?_)
	{
		selector.style("display").string("block");
	}
	
	var coords : { x : Float, y : Float };
	var mouse : Array<Float>;
	function _move(?_ , ?_)
	{
		mouse = Svg.mouse(svg.node());
		_update();
	}
	
	var lastlabel : String;
	
	function _update()
	{
		if (null == selector)
			return;
		if (null == mouse)
		{
//			selector.style("display").string("none");
			return;
		}

		var vx = x.invert(mouse[0]);
		if (vx < 100)
		{
//			selector.style("display").string("none");
			return;
		}
		var tl = label(vx);
			
		lastlabel = tl;
		
		vx = approximator(vx);
		
//		selector.style("display").string("block");
		
		var t = "translate(" + Math.round(x.scale(vx)) + ",0)";

		selector
			.attr("transform").string(t);
		text.text().string(tl);
		
		var box : { width : Float, height : Float } = untyped text.node().getBBox();
		var pw = 20 + Math.round(box.width);
		var ph = 4 + Math.round(box.height);
		container
			.attr("width").float(pw)
			.attr("height").float(ph)
			.attr("x").float(0.5 - pw / 2)
			.attr("y").float(0.5)
		;
	}
	
	function _out(?_ , ?_)
	{
		selector.style("display").string("none");
	}
	
	override function resize()
	{
		svg.select("rect")
			.attr("width").float(width)
			.attr("height").float(height);
		svg.select(".linechart-highlighter").attr("y2").float(height);
	}
	
	override function redraw()
	{
		_update();
	}
}