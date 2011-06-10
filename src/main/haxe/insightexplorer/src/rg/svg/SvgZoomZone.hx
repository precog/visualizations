package rg.svg;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.js.Dom;
import js.Dom;
import thx.js.behavior.Zoom;
import thx.js.behavior.ZoomEvent;

class SvgZoomZone extends SvgLayer
{
	var eventWired : Bool;
	var _zoomHandler : ZoomEvent -> Void;
	var _endHandler : ZoomEvent -> Void;
	var _zoom : thx.js.behavior.Zoom<Dynamic>;
	var _minx : Null<Int>;
	var _maxx : Null<Int>;
	var _miny : Null<Int>;
	var _maxy : Null<Int>;
	var _minz : Null<Float>;
	var _maxz : Null<Float>;
	
	override public function destroy()
	{
		super.destroy();
		_zoomHandler = function(_){}
	}
	
	function wireZoom(n : HtmlDom, i)
	{
		_zoom = new thx.js.behavior.Zoom();
		_zoom.zoom(_zoomh)(n);
		Dom.selectNode(n)
			.onNode("mouseup", _endh);
	}
	
	function _zoomh(n, i)
	{
		_zoomHandler(Zoom.event);
	}
	
	function _endh(n, i)
	{
		_endHandler(Zoom.event);
	}

	public function getZoom() return _zoomHandler
	public function zoom(f : ZoomEvent -> Void)
	{
		_zoomHandler = f;
		return this;
	}
	
	public function getEnd() return _endHandler
	public function end(f : ZoomEvent -> Void)
	{
		_endHandler = f;
		return this;
	}
	
	override public function redraw()
	{
		if (eventWired != true)
		{
			eventWired = true;
			svg
				.append("svg:svg")
					.attr("pointer-events").string("all")
					.eachNode(wireZoom)
				.append("svg:g")
					.attr("class").string("zoom-container")
					.attr("transform").string("translate(0,1)")
				.append("svg:rect")
					.attr("class").string("zoom-zone")
					.attr("stroke").string("none")
					.attr("fill").string("none");
		}
		svg.select("svg")
			.attr("width").float(panel.frame.width)
			.attr("height").float(panel.frame.height)
			.select("rect.zoom-zone")
				.attr("width").float(panel.frame.width-1)
				.attr("height").float(panel.frame.height-1);
	}
}