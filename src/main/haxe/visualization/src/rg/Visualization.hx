package rg;

/**
 * ...
 * @author Franco Ponticelli
 */

class Visualization 
{
	public static function pie(selector : Dynamic, query : { }, ?options : { } )
	{
		
	}
	
	static var visualizations = ["area", "bar", "line", "pie", "pivotTable", "stream"];
	static function __init__()
	{
		// inject code into ReportGrid
		var rg = untyped ReportGrid;
		for (vis in visualizations)
			Reflect.setField(rg, vis, Reflect.field(rg.Visualization, vis));
	}
}