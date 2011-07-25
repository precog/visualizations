/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source;
import hxevents.Dispatcher;
using Arrays;

class DataSourceArray implements IDataSource
{
	public static function fromValues<TIn, TOut>(arr : Array<TIn>, event : String, map : TIn -> Int -> {})
	{
		return new DataSourceArray(arr.map(map).map(function(properties, i) return {
			properties : properties,
			event : event,
			segment : null
		}));
	}
	
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