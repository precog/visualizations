/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.reportgrid;

interface IExecutorReportGrid 
{
	public function children(path : String, options : { ?type : String, ?property : String}, success : Array<String> -> Void, ?error : String -> Void) : Void;
	public function propertyCount(path : String, options : { property : String }, success : Int -> Void, ?error : String -> Void) : Void;
	public function propertySeries(path : String, options : { property : String }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void;
	public function propertyMeans(path : String, options : { property : String, periodicity : String }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void;
	public function propertyStandardDeviations(path : String, options : { property : String, periodicity : String }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void;
	public function propertySums(path : String, options : { property : String, periodicity : String }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void;
	public function propertyValues(path : String, options : { property : String }, success : Array<Dynamic> -> Void, ?error : String -> Void) : Void;
	public function propertyValueCount(path : String, options : { property : String, value : Dynamic }, success : Int -> Void, ?error : String -> Void) : Void;
	public function propertyValueSeries(path : String, options : { property : String, value : Dynamic }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void;
	public function searchCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void) : Void;
	public function searchSeries(path : String, options : { }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void;
	public function intersect(path : String, options : { }, success : Dynamic<Dynamic> -> Void, ?error : String -> Void) : Void;
	public function histogram(path : String, options : { property : String, ?top : Int, ?bottom : Int }, success : Int -> Void, ?error : String -> Void) : Void;
	public function propertiesHistogram(path : String, options :  { property : String, ?top : Int, ?bottom : Int }, success : Int -> Void, ?error : String -> Void) : Void;
	public function events(path : String, options : { event : String }, success : Array<Dynamic> -> Void, ?error : String -> Void) : Void;
}

typedef TimeSeriesType = Array<Array<Dynamic>>;