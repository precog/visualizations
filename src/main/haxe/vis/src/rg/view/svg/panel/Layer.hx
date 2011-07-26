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
	var g : Selection;
	public var width(default, null) : Int;
	public var height(default, null) : Int;
	
	public var customClass(default, setCustomClass) : String;

	public function new(panel : Panel)
	{
		this.frame = (this.panel = panel).frame;
		var p : SvgPanelFriend = panel;
		p.addLayer(this);
		g = panel.g.append("svg:g");
		g.attr("class").string("layer");
		_resize();
	}
	
	public function addClass(name : String)
	{
		g.classed().add(name);
	}
	
	public function removeClass(name : String)
	{
		g.classed().remove(name);
	}
	
	public function toggleClass(name : String)
	{
		g.classed().toggle(name);
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
		g.remove();
	}

	function setCustomClass(v : String)
	{
		if (null != customClass)
			g.classed().remove(customClass);
		g.classed().add(v);
		return this.customClass = v;
	}
}

typedef SvgPanelFriend = {
	private function addLayer(layer : Layer) : Void;
	private function removeLayer(layer : Layer) : Void;
}