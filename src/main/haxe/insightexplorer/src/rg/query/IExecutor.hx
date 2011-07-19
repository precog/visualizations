package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.util.TimeSeriesType;

interface IExecutor 
{
	public function children(path : String, options : { }, success : Array<String> -> Void, ?error : String -> Void) : Void;
	public function propertyCount(path : String, options : { property : String }, success : Int -> Void, ?error : String -> Void) : Void;
	public function propertySeries(path : String, options : { }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void;
	public function propertyValues(path : String, options : { }, success : Array<Dynamic> -> Void, ?error : String -> Void) : Void;
	public function propertyValueCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void) : Void;
	public function propertyValueSeries(path : String, options : { property : String, value : Dynamic }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void;
	public function searchCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void) : Void;
	public function searchSeries(path : String, options : { }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void;
	public function intersect(path : String, options : { }, success : Dynamic<Dynamic> -> Void, ?error : String -> Void) : Void;
}