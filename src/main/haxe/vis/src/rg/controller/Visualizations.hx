/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller;
import thx.error.Error;
import thx.js.Selection;
import rg.view.layout.Layout;

class Visualizations 
{
	public static var html = ["pivottable", "leaderboard"];
	public static var svg = ["barchart", "geo", "funnelchart", "heatgrid", "linechart", "piechart", "scattergraph", "streamgraph"];
	public static var visualizations = svg.concat(html);
	public static var layouts = ["simple", "cartesian", "x"];
	public static var layoutDefault : Hash<String>;
	public static var layoutType : Hash<Class<Dynamic>>;
	public static var layoutArgs : Hash<Array<Dynamic>>;
	
	public static function instantiateLayout(name : String, width : Int, height : Int, container : Selection) : Layout
	{
		return Type.createInstance(layoutType.get(name), [width, height, container]);
	}
	
	static function __init__()
	{
		layoutDefault = new Hash();
		layoutType = new Hash();
		layoutArgs = new Hash();
		
		layoutDefault.set("barchart",		"cartesian");
		layoutDefault.set("geo",		"simple");
		layoutDefault.set("linechart",		"cartesian");
		layoutDefault.set("streamgraph",	"x");
		layoutDefault.set("piechart",		"simple");
		layoutDefault.set("funnelchart",	"simple");
		layoutDefault.set("scattergraph",	"cartesian");
		layoutDefault.set("heatgrid",		"cartesian");
		
		layoutType.set("simple",    rg.view.layout.LayoutSimple);
		layoutType.set("cartesian", rg.view.layout.LayoutCartesian);
		layoutType.set("x",         rg.view.layout.LayoutX);
	}
}