package rg.svg;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.js.Selection;

class SvgLayer<T>
{
	var panel : SvgPanel;
	var svg : Selection;

	public function new(panel : SvgPanel)
	{
		this.panel = panel;
		var p : SvgPanelFriend<T> = panel;
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
		var p : SvgPanelFriend<T> = panel;
		p.removeLayer(this);
		svg.remove();
	}
	
	public function redraw()
	{
		
	}
}

typedef SvgPanelFriend<T> = {
	private function addLayer(layer : SvgLayer<T>) : Void;
	private function removeLayer(layer : SvgLayer<T>) : Void;
}