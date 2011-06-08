package rg.svg;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.js.Selection;

class SvgLayer
{
	var panel : SvgPanel;
	var svg : Selection;

	public function new(panel : SvgPanel)
	{
		this.panel = panel;
		var p : SvgPanelFriend = panel;
		p.addLayer(this);
		svg = cast panel.svg.append("svg:g");
		svg.attr("class").string("layer");
		init();
	}
	
	function init()
	{
		
	}
	
	public function destroy()
	{
		var p : SvgPanelFriend = panel;
		p.removeLayer(this);
		svg.remove();
	}
	
	public function redraw()
	{
		
	}
}

typedef SvgPanelFriend = {
	private function addLayer(layer : SvgLayer) : Void;
	private function removeLayer(layer : SvgLayer) : Void;
}