/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg;
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
//	var y : Linear;
	
	var selector : Selection;
	
	public function new(panel : SvgPanel, x : Linear/*, y : Linear*/) 
	{
		this.x = x;
//		this.y = y;
		super(panel);
	}
	
	public dynamic function approximator(x : Float)
	{
		return x;
	}
	
	override function init()
	{
		var parent = svg;
		while (parent.node().nodeName != "g" || parent.classed().get() != "panel")
		{
			parent = thx.js.Dom.selectNode(parent.node().parentNode);
		}
		parent
//			.append("svg:rect")
//			.style("fill").string("rgba(0,0,0,0)")
			.onNode("mouseover.highlighter", _over)
			.onNode("mousemove.highlighter", _move)
			/*
			.onNode("click", _eventForward)
			.onNode("mousedown", _eventForward)
			.onNode("mousemove", _eventForward)
			.onNode("mouseover", _eventForward)
			.onNode("mouseout", _eventForward)
			*/
//			.onNode("mouseout", _out)
		;
		_createHighlighter();
	}
	
	function _eventForward(?_, ?_)
	{
		var e = thx.js.Dom.event;
		var parent = svg.node().parentNode;
		trace(e.target = parent);
		untyped parent.fireEvent(e.type, e);
	}
	
	public dynamic function label(x : Float)
	{
		return FormatDate.dateShort(Date.fromTime(x)) + ", " + FormatDate.timeShort(Date.fromTime(x));
	}
	
	function _createHighlighter()
	{
		selector = svg.append("svg:g")
			.style("pointer-events").string("none")
			.attr("class").string("linechart-highlighter")
			.style("display").string("none");
			
		selector.append("svg:line")
			.attr("x1").float(0)
			.attr("y1").string("1em")
			.attr("x2").float(0)
			.attr("y2").float(panel.frame.height)
		;
		
		container = selector.append("svg:rect")
			.attr("rx").float(5)
			.attr("ry").float(5);
		
		text = selector.append("svg:text")
			.attr("dy").string("1em")
			.attr("text-anchor").string("middle")
		;
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
	
	function _update()
	{
		if (null == mouse)
			return;
		var vx = x.invert(mouse[0]);
//		coords.y = y.invert(mouse[1]);
		
		vx = approximator(vx);
		
		var t = "translate(" + x.scale(vx) + ",0)";
		selector.attr("transform").string(t);
		text.text().string(label(vx));
		
		var b : { width : Float, height : Float } = untyped text.node().getBBox();
		var pw = 20;
		var ph = 4;
		container
			.attr("width").float(b.width + pw)
			.attr("height").float(b.height + ph)
			.attr("x").float( - (b.width + pw) / 2)
			.attr("y").float( - ph / 2)
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