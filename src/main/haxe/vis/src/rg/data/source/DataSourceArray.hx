/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source;
import hxevents.Dispatcher;
using Arrays;

class DataSourceArray<T> implements IDataSource<T>
{
	public static function fromValues<TIn, TOut>(arr : Array<TIn>, unit : String, event : String, map : TIn -> Int -> {})
	{
		return new DataSourceArray(arr.map(map).map(function(properties, i) return {
			properties : properties,
			value : arr[i],
			event : event,
			unit : unit
		}));
	}
	
	var data : Array<DataPoint<T>>;
	
	public var onLoad(default, null) : Dispatcher<Array<DataPoint<T>>>;
	public function new(data : Array<DataPoint<T>>) 
	{
		this.data = data;
		onLoad = new Dispatcher();
	}
	
	public function load()
	{
		onLoad.dispatch(data);
	}
}