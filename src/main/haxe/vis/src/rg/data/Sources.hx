/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import hxevents.Dispatcher;
using Arrays;

class Sources<T>
{
	public var onLoad(default, null) : Dispatcher<Array<Array<DataPoint<T>>>>;
	
	var sources : Array<IDataSource<T>>;
	var length : Int;
	var data : Array<Array<DataPoint<T>>>;
	var count : Int;
	public function new(sources : Array<IDataSource<T>>) 
	{
		this.sources = sources;
		this.length = sources.length;
		for (i in 0...length)
			sources[i].onLoad.add(callback(loaded, i));
		onLoad = new Dispatcher();
	}

	public function load()
	{
		count = 0;
		data = [];
		sources.each(function(source,_) source.load());
	}
	
	function loaded(pos : Int, d : Array<DataPoint<T>>)
	{
		data[pos] = d;
		count++;
		if (count == length)
			complete();
	}
	
	function complete()
	{
		onLoad.dispatch(data);
	}
}