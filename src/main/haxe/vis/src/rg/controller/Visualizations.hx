/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller;
import thx.js.Selection;

class Visualizations 
{
	public static var html = ["pivottable"];
	public static var svg = ["linechart", "piechart"];
	public static var visualizations = svg.concat(html);
	public static var layouts = ["simple"];
	public static var layoutDefault : Hash<String>;
	public static var layoutType : Hash<Class<Dynamic>>;
	
	public static function instantiateLayout(name : String, width : Int, height : Int, container : Selection)
	{
		return Type.createInstance(layoutType.get(name), [width, height, container]);
	}
	
	static function __init__()
	{
		layoutDefault = new Hash();
		layoutDefault.set("linechart", "simple");
		layoutDefault.set("piechart", "simple");
		
		layoutType = new Hash();
		layoutType.set("simple", rg.view.layout.SimpleLayout);
	}
}