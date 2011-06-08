/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg;
import rg.svg.Anchor;
import thx.js.Selection;

class SvgTitle extends SvgLayer
{
	public var text(default, setText) : String;
	public var anchor(default, setAnchor) : Anchor;
	public var padding(default, setPadding) : Int;
	public var className(default, setClassName) : String;
	var _text : Selection;
	var _gtext : Selection;
	
	public function new(panel : SvgPanel, text : String, anchor : Anchor, padding = 1, className = "title") 
	{
		super(panel);
		this.text = text;
		this.anchor = anchor;
		this.padding = padding;
		this.className = className;
	}
	
	override function init()
	{
		_gtext = svg.append("svg:g");
		_text = _gtext.append("svg:text")
			.attr("class").string(className)
			.attr("text-anchor").string("middle")
		;
	}
	
	override function redraw()
	{

	}
	
	override function resize()
	{
		if (null == _text || null == anchor || null == width || padding == null)
			return;
		switch(anchor)
		{
			case Top:
				_text.attr("transform").string("rotate(0)")
					.attr("dominant-baseline").string("hanging");
				_gtext
					.attr("transform").string("translate(" + (width / 2) + "," + padding + ")")
				;
			case Right:
				_text.attr("transform").string("rotate(-90)")
					.attr("dominant-baseline").string("baseline");
				_gtext
					.attr("transform").string("translate(" + (width - padding) + "," + (height / 2) + ")")
				;
			case Left:
				_text.attr("transform").string("rotate(90)")
					.attr("dominant-baseline").string("baseline");
				_gtext
					.attr("transform").string("translate(" + (padding) + "," + (height / 2) + ")")
				;
			case Bottom:
				_text.attr("transform").string("rotate(0)")
					.attr("dominant-baseline").string("baseline");
				_gtext
					.attr("transform").string("translate(" + (width / 2) + "," + (height - padding) + ")")
				;
		}
	}
	
	function setText(v : String)
	{
		this.text = v;
		if(null != _text)
			_text.text().string(text);
		return v;
	}
	
	function setClassName(v : String)
	{
		
		this.className = v;
		if(null != _text)
			_text.attr("class").string(v);
		return v;
	}
	
	function setAnchor(v : Anchor)
	{
		this.anchor = v;
		resize();
		return v;
	}
	
	function setPadding(v : Int)
	{
		this.padding = v;
		resize();
		return v;
	}
}