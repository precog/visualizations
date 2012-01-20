/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import hxevents.Dispatcher;
import hxevents.Notifier;
using Arrays;

class Sources<T>
{
	public var onLoading(default, null) : Notifier;
	public var onLoad(default, null) : Dispatcher<Array<Array<DataPoint>>>;

	var sources : Array<IDataSource>;
	public var length(default, null) : Int;
	var data : Array<Array<DataPoint>>;
	var count : Int;
	public function new(sources : Array<IDataSource>)
	{
		this.sources = sources;
		this.length = sources.length;
		for (i in 0...length)
			sources[i].onLoad.add(callback(loaded, i));
		onLoad = new Dispatcher();
		onLoading = new Notifier();
	}

	public function iterator() return sources.iterator()

	public function load()
	{
		onLoading.dispatch();
		count = 0;
		data = [];
		sources.each(function(source,_) source.load());
	}

	function loaded(pos : Int, d : Array<DataPoint>)
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