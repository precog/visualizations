package rg.query.js;
import rg.query.IExecutor;
import rg.js.ReportGrid;

/**
 * ...
 * @author Franco Ponticelli
 */

class ReportGridExecutor implements IExecutor
{
	public function new() { }
	
	public function children(path : String, options : { }, success : Array<String> -> Void, ?error : String -> Void)
	{
		ReportGrid.children(path, options, success, error);
	}
	public function propertyCount(path : String, options : { property : String }, success : Int -> Void, ?error : String -> Void)
	{
		ReportGrid.propertyCount(path, options, success, error);
	}
	public function propertySeries(path : String, options : { }, success : Dynamic<Dynamic<Int>> -> Void, ?error : String -> Void)
	{
		ReportGrid.propertySeries(path, options, success, error);
	}
	public function propertyValues(path : String, options : { }, success : Array<Dynamic> -> Void, ?error : String -> Void)
	{
		ReportGrid.propertyValues(path, options, success, error);
	}
	public function propertyValueCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void)
	{
		ReportGrid.propertyValueCount(path, options, success, error);
	}
	public function propertyValueSeries(path : String, options : { property : String, value : Dynamic }, success : Dynamic<Dynamic<Int>> -> Void, ?error : String -> Void)
	{
		ReportGrid.propertyValueSeries(path, options, success, error);
	}
	public function searchCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void)
	{
		ReportGrid.searchCount(path, options, success, error);
	}
	public function searchSeries(path : String, options : { }, success : Dynamic<Dynamic<Int>> -> Void, ?error : String -> Void)
	{
		ReportGrid.searchSeries(path, options, success, error);
	}
	public function intersect(path : String, options : { }, success : Dynamic<Dynamic> -> Void, ?error : String -> Void)
	{
		ReportGrid.intersect(path, options, success, error);
	}
}