/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import hxevents.Dispatcher;
using Arrays;

class ChartSources<T>
{
	public var onLoad(default, null) : Array<Array<DataPoint<T>>>;
	
	var sources : Array<IDataSource<T>>;
	var length : Int;
	var data : Array<Array<DataPoint<T>>>;
	var count : Int;
	var defaultAxis : String;
	var defaultSegment : String;
	public function new(sources : Array<IDataSource<T>>, defaultAxis : String, defaultSegment : String) 
	{
		this.sources = sources;
		this.length = sources.length;
		this.defaultAxis = defaultAxis;
		this.defaultSegment = defaultSegment;
		for (i in 0...length)
			sources[i].onLoad.add(callback(loaded, i));
	}
/*
	public dynamic function transform(data : Array<Array<DataPoint<T>>>)
	{
		return data[0];
	}
*/
	public function load()
	{
		count = 0;
		data = [];
	}
	
	function loaded(pos : Int, d : Array<DataPoint<T>>)
	{
		this.data[pos] = d;
		count++;
		if (count == length)
			complete();
	}
	
	function complete()
	{

	}
}