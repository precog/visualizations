package rg.svg;
import rg.layout.Frame;
import rg.layout.StackFrame;
import thx.js.Selection;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.js.Selection;
using Arrays;

class SvgPanel
{
	public static var transitionTime = 500;
	
	public var frame(default, null) : Frame;
	public var svg(default, null) : Selection<Dynamic>;
//	public var animatePosition : Null<Bool>;
	public var parent(default, null) : SvgContainer;
	
	var _layers : Array<SvgLayer<Dynamic>>;
	public function new(frame : StackFrame)
	{
		this.frame = frame;
		frame.change = reframe;
//		animatePosition = null;
		_layers = [];
	}
	
	function addLayer(layer : SvgLayer<Dynamic>)
	{
		_layers.remove(layer);
		_layers.push(layer);
	}
	
	function removeLayer(layer : SvgLayer<Dynamic>)
	{
		_layers.remove(layer);
	}
	
	function setParent(v : SvgContainer)
	{
		if (null != svg)
			svg.remove();

		if (null == v)
			return;
			
		init(v.svg);
	}
	
	function init(container : Selection<Dynamic>)
	{
		svg = container.append("svg:g")
			.attr("class").string("panel")
			.attr("transform").string("translate(0,0)");
		
		svg.append("svg:rect")
			.attr("class").string("panel-frame")
			.attr("width").float(frame.width)
			.attr("height").float(frame.height);
	}
	
	public function redraw()
	{
		_layers.each(function(l, i) l.redraw());
	}
	
	function reframe()
	{
		svg
			.attr("transform").string("translate(" + frame.x + "," + frame.y + ")")
			.select(".panel-frame")
				.attr("width").float(frame.width)
				.attr("height").float(frame.height);
		redraw();
	}
}