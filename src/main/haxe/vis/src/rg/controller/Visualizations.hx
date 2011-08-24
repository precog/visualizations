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
	public static var svg = ["linechart", "piechart", "barchart"];
	public static var visualizations = svg.concat(html);
	public static var layouts = ["simple", "cartesian"];
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
		
		layoutDefault.set("barchart", "cartesian");
		layoutDefault.set("linechart", "cartesian");
		layoutDefault.set("piechart", "simple");
		
		layoutType.set("simple",    rg.view.layout.SimpleLayout);
		layoutType.set("cartesian", rg.view.layout.CartesianLayout);
	}
}