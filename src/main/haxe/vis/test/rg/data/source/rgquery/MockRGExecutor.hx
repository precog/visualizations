/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery;
import rg.data.source.rgquery.IExecutorReportGrid;

class MockRGExecutor implements IExecutorReportGrid
{
	public var callStack : Array<{ method : String, args : Array<Dynamic> }>;
	public function children(path : String, options : { }, success : Array<String> -> Void, ?error : String -> Void) 
	{
		callStack.push({ method : "children", args : [path, options] });
	}
	public function propertyCount(path : String, options : { property : String }, success : Int -> Void, ?error : String -> Void)
	{
		callStack.push({ method : "propertyCount", args : [path, options] });
	}
	public function propertySeries(path : String, options : { }, success : TimeSeriesType -> Void, ?error : String -> Void)
	{
		callStack.push({ method : "propertySeries", args : [path, options] });
	}
	public function propertyValues(path : String, options : { }, success : Array<Dynamic> -> Void, ?error : String -> Void)
	{
		callStack.push({ method : "propertyValues", args : [path, options] });
	}
	public function propertyValueCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void)
	{
		callStack.push({ method : "propertyValueCount", args : [path, options] });
	}
	public function propertyValueSeries(path : String, options : { property : String, value : Dynamic }, success : TimeSeriesType -> Void, ?error : String -> Void)
	{
		callStack.push({ method : "propertyValueSeries", args : [path, options] });
	}
	public function searchCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void)
	{
		callStack.push({ method : "searchCount", args : [path, options] });
	}
	public function searchSeries(path : String, options : { }, success : TimeSeriesType -> Void, ?error : String -> Void)
	{
		callStack.push({ method : "searchSeries", args : [path, options] });
	}
	public function intersect(path : String, options : { }, success : Dynamic<Dynamic> -> Void, ?error : String -> Void)
	{
		callStack.push({ method : "intersect", args : [path, options] });
	}
	
	public function new() 
	{
		callStack = [];
	}
}