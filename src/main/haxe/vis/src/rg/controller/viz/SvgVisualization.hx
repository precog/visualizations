/**
 * ...
 * @author Franco Ponticelli
 */
/*
package rg.controller.viz;
//import rg.controller.VisualizationContext;
import thx.js.Selection;

class SvgVisualization extends HtmlVisualization
{
	public var width(default, null) : Int;
	public var height(default, null) : Int;
	
	
	var svg : Selection;
	public function new(container : Selection) 
	{
		super(container);
		width = defaultWidth();
		height = defaultHeight();
		svg = container.append("svg:svg");
	}
	
	function defaultWidth() return 100
	function defaultHeight() return 100
	
	public function resize(width : Int, height : Int)
	{
		this.width = width;
		this.height = height;
		vizResize();
	}
	
	function vizResize()
	{
		if (!inited) return;
		svg
			.attr("width").float(width)
			.attr("height").float(height);
	}
	
	override function init()
	{
		super.init();
		vizResize();
	}
}
*/