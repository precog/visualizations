/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery;

interface IExecutorReportGrid 
{
	public function children(path : String, options : { }, success : Array<String> -> Void, ?error : String -> Void) : Void;
	public function propertyCount(path : String, options : { property : String }, success : Int -> Void, ?error : String -> Void) : Void;
	public function propertySeries(path : String, options : { }, success : Dynamic<Dynamic<Int>> -> Void, ?error : String -> Void) : Void;
	public function propertyValues(path : String, options : { }, success : Array<Dynamic> -> Void, ?error : String -> Void) : Void;
	public function propertyValueCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void) : Void;
	public function propertyValueSeries(path : String, options : { property : String, value : Dynamic }, success : Dynamic<Dynamic<Int>> -> Void, ?error : String -> Void) : Void;
	public function searchCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void) : Void;
	public function searchSeries(path : String, options : { }, success : Dynamic<Dynamic<Int>> -> Void, ?error : String -> Void) : Void;
	public function intersect(path : String, options : { }, success : Dynamic<Dynamic> -> Void, ?error : String -> Void) : Void;
}