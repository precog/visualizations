package rg.chart;
import js.Lib;
import thx.js.Dom;
import js.Dom;
import thx.js.Svg;

/**
 * ...
 * @author Franco Ponticelli
 */

class ToolTip 
{
	var _visible : Bool;
	var _el : HtmlDom;
	var _text : String;
	function new() 
	{
		_visible = false;
		_el = Lib.document.createElement("div");
		Lib.document.body.appendChild(_el);
		_el.id = "tooltip";
		_el.style.position = "absolute";
		_el.style.display = "none";
	}
	
	public function setText(text : String)
	{
		if(text != _text)
			_el.innerHTML = _text = text;
	}
	
	public function hide()
	{
		if (!_visible)
			return;
		_visible = false;
		_el.style.display = "none";
	}
	
	public function show()
	{
		if (_visible)
			return;
		_visible = true;
		_el.style.display = "block";
	}
	
	public function moveAt(x : Int, y : Int)
	{
		var w = _el.clientWidth;
		var h = _el.clientHeight;
		_el.style.left = (x - w / 2) + "px";
		_el.style.top = (y - h - 10) + "px";
	}
	
	static var _tooltip : ToolTip;
	public static function display(?text : String, ?x : Int, ?y : Int)
	{
		if (null == _tooltip)
		{
			_tooltip = new ToolTip();
		}
		
		if (Strings.empty(text))
		{
			_tooltip.hide();
		} else {
			_tooltip.setText(text);

			if (null == x)
			{
				var px = Lib.isIE ? untyped event.clientX + document.documentElement.scrollLeft : untyped thx.js.Dom.event.pageX;
			
				x = px;
			}
			if (null == y)
			{
				var py = Lib.isIE ? untyped event.clientY + document.documentElement.scrollTop : untyped thx.js.Dom.event.pageY;
				
				y = py;
			}
			_tooltip.show();
			_tooltip.moveAt(x, y);
		}
	}
}