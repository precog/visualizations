package rg.svg;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.js.behavior.Zoom;
import thx.js.behavior.ZoomEvent;

class SvgZoomZone extends SvgLayer<Dynamic>
{
	var eventWired : Bool;
	var _handler : ZoomEvent -> Void;
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
		_handler = function(_){}
	}
	
	function wireZoom(n : thx.js.Node<Dynamic>, i)
	{
		_zoom = new thx.js.behavior.Zoom().zoom(_zoomh, n);
	}
	
	function _zoomh(n, i)
	{
		_handler(Zoom.event);
	}

	public function getZoom() return _handler
	public function zoom(f : ZoomEvent -> Void)
	{
		_handler = f;
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
					.attr("stroke").string("#333")
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