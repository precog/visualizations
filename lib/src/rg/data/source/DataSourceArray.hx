/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source;
import hxevents.Dispatcher;
using Arrays;

class DataSourceArray implements IDataSource
{	
	var data : Array<DataPoint>;
	
	public var onLoad(default, null) : Dispatcher<Array<DataPoint>>;
	public function new(data : Array<DataPoint>) 
	{
		this.data = data;
		onLoad = new Dispatcher();
	}
	
	public function load()
	{
		onLoad.dispatch(data);
	}
}