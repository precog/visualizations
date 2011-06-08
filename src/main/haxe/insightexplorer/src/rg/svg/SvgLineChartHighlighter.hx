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
	var x : Linear;
	var y : Linear;
	
	var selector : Selection;
	
	public function new(panel : SvgPanel, x : Linear, y : Linear) 
	{
		this.x = x;
		this.y = y;
		coords = { x : 0.0, y : 0.0 };
		super(panel);
	}
	
	public dynamic function approximator(coords : { x : Float, y : Float })
	{
		
	}
	
	override function init()
	{
		svg
			.append("svg:rect")
			.style("fill").string("rgba(0,0,0,0)")
			.onNode("mouseover", _over)
			.onNode("mousemove", _move)
//			.onNode("mouseout", _out)
		;
		_createHighlighter();
	}
	
	public dynamic function label(x : Float, y : Float)
	{
		return FormatDate.dateShort(Date.fromTime(x)) + ", " + FormatDate.timeShort(Date.fromTime(x));
	}
	
	function _createHighlighter()
	{
		selector = svg.append("svg:g")
			.attr("class").string("linechart-highlighter")
			.style("display").string("none");
			
		selector.append("svg:line")
			.attr("x1").float(0)
			.attr("y1").string("1em")
			.attr("x2").float(0)
			.attr("y2").float(panel.frame.height)
		;
		
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
		coords.x = x.invert(mouse[0]);
		coords.y = y.invert(mouse[1]);
		
		approximator(coords);
		
		var t = "translate(" + x.scale(coords.x) + ",0)";
		selector.attr("transform").string(t);
		text.text().string(label(coords.x, coords.y));
	}
	
	function _out(?_ , ?_)
	{
		selector.style("display").string("none");
	}
	
	override function redraw()
	{
		svg.select("rect")
			.attr("width").float(width)
			.attr("height").float(height);
		svg.select(".linechart-highlighter").attr("y2").float(height);
		_update();
	}
}