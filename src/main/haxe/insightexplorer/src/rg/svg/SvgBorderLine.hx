/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg;
import rg.svg.Anchor;
import thx.js.Selection;

class SvgBorderLine extends SvgLayer
{
	public var anchor(default, setAnchor) : Anchor;
	public var className(default, setClassName) : String;
	
	var _line : Selection;
	
	public function new(panel : SvgPanel, anchor : Anchor, className = "border") 
	{
		super(panel);
		this.anchor = anchor;
		this.className = className;
	}
	
	override function init()
	{
		_line = svg.append("svg:line").attr("class").string(className);
	}
	
	override function redraw()
	{

	}
	
	override function resize()
	{
		if (null == _line || null == anchor || null == width)
			return;
		switch(anchor)
		{
			case Top:
				_line
					.attr("x1").float(0)
					.attr("x2").float(width)
					.attr("y1").float(0)
					.attr("y2").float(0)
				;
			case Right:
				_line
					.attr("x1").float(width)
					.attr("x2").float(width)
					.attr("y1").float(0)
					.attr("y2").float(height)
				;
			case Left:
				_line
					.attr("x1").float(0)
					.attr("x2").float(0)
					.attr("y1").float(0)
					.attr("y2").float(height)
				;
			case Bottom:
				_line
					.attr("x1").float(0)
					.attr("x2").float(width)
					.attr("y1").float(height)
					.attr("y2").float(height)
				;
		}
	}
	
	function setClassName(v : String)
	{
		
		this.className = v;
		if(null != _line)
			_line.attr("class").string(v);
		return v;
	}
	
	function setAnchor(v : Anchor)
	{
		this.anchor = v;
		resize();
		return v;
	}
}