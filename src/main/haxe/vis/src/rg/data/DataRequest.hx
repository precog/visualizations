/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import rg.data.IDataSource;
import rg.data.source.DataSourceArray;
using Arrays;

class DataRequest
{
	var queue : Array<DataContext>;
	var cache : Hash<IDataSource>;
	var datacontexts : Array<DataContext>;
	var collectedData : Array<DataPoint>;
	
	public function new(cache : Hash<IDataSource>, datacontexts : Array<DataContext>) 
	{
		this.cache = cache;
		this.datacontexts = datacontexts;
	}
	
	public dynamic function onData(data : Array<DataPoint>)
	{
		trace(data);
	}
	
	public function request()
	{
		collectedData = [];
		queue = datacontexts.copy();
		processQueue();
	}
	
	function processQueue()
	{
		var next = queue.shift();
		if (null == next)
		{
			onData(collectedData);
			return;
		}
		next.data.onData.addOnce(callback(receiveData, next.name));
		next.data.load();
	}
	
	function receiveData(name : String,  data : Array<DataPoint>)
	{
		if (null != name)
			cache.set(name, new DataSourceArray(data));
		collectedData = collectedData.concat(data);
		processQueue();
	}
}