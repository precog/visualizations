/**
 * ...
 * @author Franco Ponticelli
 */

package rg;
import rg.query.IExecutor;
import rg.util.Periodicity;

using Arrays;

class StreamGraphExampleDataExecutor implements IExecutor
{
	var values : Array<{ property : String, values : Array<Int> }>;
	var start : Date;
	var periodicity : String;
	
	public function new(values : Array<{ property : String, values : Array<Int> }>, start : Date, periodicity : String)
	{
		this.values = values;
		this.start = start;
		this.periodicity = periodicity;
	}
	
	public function children(path : String, options : { }, success : Array<String> -> Void, ?error : String -> Void)
	{
		success(values.map(function(d,i) return d.property));
	}
	public function propertyCount(path : String, options : { property : String }, success : Int -> Void, ?error : String -> Void)
	{
		for (i in 0...values.length)
		{
			if (values[i].property == options.property)
			{
				success(values[i].values.reduce(function(t, v, i) { return t + v; } , 0));
				return;
			}
		}
		success(0);
		//
	}
	public function propertySeries(path : String, options : { }, success : Dynamic<Dynamic<Int>> -> Void, ?error : String -> Void)
	{
		//
	}
	public function propertyValues(path : String, options : { }, success : Array<Dynamic> -> Void, ?error : String -> Void)
	{
		
	}
	public function propertyValueCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void)
	{
		
	}
	public function propertyValueSeries(path : String, options : { property : String, value : Dynamic }, success : Dynamic<Dynamic<Int>> -> Void, ?error : String -> Void)
	{
		//
	}
	public function searchCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void)
	{
	}
	public function searchSeries(path : String, options : { }, success : Dynamic<Dynamic<Int>> -> Void, ?error : String -> Void)
	{
	}
	public function intersect(path : String, options : { }, success : Dynamic<Dynamic> -> Void, ?error : String -> Void)
	{
		//
	}
}