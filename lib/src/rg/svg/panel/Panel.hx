/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.panel;
import rg.frame.Frame;
import rg.frame.StackItem;
import thx.js.Selection;
using Arrays;

class Panel
{
	public var frame(default, null) : Frame;
	public var g(default, null) : Selection;
	public var parent(default, null) : Container;

	var _layers : Array<Layer>;

	public function new(frame : StackItem)
	{
		this.frame = frame;
		frame.change = reframe;
		_layers = [];
	}

	public function toString()
	{
		return Type.getClassName(Type.getClass(this)).split('.').pop();
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
		if (null != g)
			g.remove();

		parent = container;
		if (null == container)
			return;

		init(container.g);
	}

	function init(container : Selection)
	{
		g = container.append("svg:g")
			.attr("class").string("panel")
			.attr("transform").string("translate(" + frame.x + "," + frame.y + ")");
#if debug
		g.append("svg:rect")
			.attr("class").string("panel-frame")
			.attr("width").float(frame.width)
			.attr("height").float(frame.height);
#end
	}

	function reframe()
	{
		g
			.attr("transform").string("translate(" + frame.x + "," + frame.y + ")")
#if debug
			.select("rect.panel-frame")
				.attr("width").float(frame.width)
				.attr("height").float(frame.height)
#end
		;

		var layer : { private function _resize() : Void; };
		for (i in 0..._layers.length)
		{
			layer = _layers[i];
			layer._resize();
		}
	}
}