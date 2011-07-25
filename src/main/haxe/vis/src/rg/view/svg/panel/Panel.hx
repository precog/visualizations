/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.panel;
import rg.view.frame.Frame;
import rg.view.frame.StackItem;
import thx.js.Selection;
using Arrays;

class Panel
{
	public var frame(default, null) : Frame;
	public var svg(default, null) : Selection;
	public var parent(default, null) : Container;
	var _layers : Array<Layer>;

	public function new(frame : StackItem)
	{
		this.frame = frame;
		frame.change = reframe;
		_layers = [];
	}
	
	function addLayer(layer : Layer)
	{
		_layers.remove(layer);
		_layers.push(layer);
	}
	
	function removeLayer(layer : Layer)
	{
		_layers.remove(layer);
	}
	
	function setParent(container : Container)
	{
		if (null != svg)
			svg.remove();

		if (null == container)
			return;
			
		init(container.svg);
	}
	
	function init(container : Selection)
	{
		svg = container.append("svg:g")
			.attr("class").string("panel")
			.attr("transform").string("translate(" + frame.x + "," + frame.y + ")");
		svg.append("svg:rect")
			.attr("class").string("panel-frame")
			.attr("width").float(frame.width)
			.attr("height").float(frame.height);
	}
	
	function reframe()
	{
		svg
			.attr("transform").string("translate(" + frame.x + "," + frame.y + ")")
			.select(".panel-frame")
				.attr("width").float(frame.width)
				.attr("height").float(frame.height);

		var layer : { private function _resize() : Void; };
		for (i in 0..._layers.length)
		{
			layer = _layers[i];
			layer._resize();
		}
	}
}