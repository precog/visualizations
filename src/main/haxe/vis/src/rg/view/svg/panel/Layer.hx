/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.panel;

import rg.view.frame.Frame;
import thx.js.Selection;

class Layer
{
	var panel : Panel;
	var frame : Frame;
	var svg : Selection;
	public var width(default, null) : Int;
	public var height(default, null) : Int;
	
	public var customClass(default, setCustomClass) : String;

	public function new(panel : Panel)
	{
		this.frame = (this.panel = panel).frame;
		var p : SvgPanelFriend = panel;
		p.addLayer(this);
		svg = panel.svg.append("svg:g");
		svg.attr("class").string("layer");
		_resize();
	}
	
	function _resize()
	{
		width = frame.width;
		height = frame.height;
		resize();
	}
	
	function resize() { }
	
	public function destroy()
	{
		var p : SvgPanelFriend = panel;
		p.removeLayer(this);
		svg.remove();
	}

	function setCustomClass(v : String)
	{
		if (null != customClass)
			svg.classed().remove(customClass);
		svg.classed().add(v);
		return this.customClass = v;
	}
}

typedef SvgPanelFriend = {
	private function addLayer(layer : Layer) : Void;
	private function removeLayer(layer : Layer) : Void;
}