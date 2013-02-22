/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;

import thx.error.Error;
import dhx.Selection;
import rg.layout.Layout;

class Visualizations
{
	public static var html = ["pivottable", "leaderboard"];
	public static var svg = ["barchart", "geo", "funnelchart", "heatgrid", "linechart", "piechart", "scattergraph", "streamgraph", "sankey"];
	public static var visualizations = svg.concat(html);
	public static var layouts = ["simple", "cartesian", "x"];
	public static var layoutDefault : Map<String, String>;
	public static var layoutType : Map<String, Class<Dynamic>>;
	public static var layoutArgs : Map<String, Array<Dynamic>>;

	public static function instantiateLayout(name : String, width : Int, height : Int, container : Selection) : Layout
	{
		return Type.createInstance(layoutType.get(name), [width, height, container]);
	}

	static function __init__()
	{
		layoutDefault = new Map ();
		layoutType = new Map ();
		layoutArgs = new Map ();

		layoutDefault.set("barchart",	  "cartesian");
		layoutDefault.set("funnelchart",  "simple");
		layoutDefault.set("geo",		  "simple");
		layoutDefault.set("heatgrid",	  "cartesian");
		layoutDefault.set("linechart",	  "cartesian");
		layoutDefault.set("piechart",	  "simple");
		layoutDefault.set("sankey",	  "simple");
		layoutDefault.set("scattergraph", "cartesian");
		layoutDefault.set("streamgraph",  "x");

		layoutType.set("cartesian", rg.layout.LayoutCartesian);
		layoutType.set("simple",    rg.layout.LayoutSimple);
		layoutType.set("x",         rg.layout.LayoutX);
	}
}