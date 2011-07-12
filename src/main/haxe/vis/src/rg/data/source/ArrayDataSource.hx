/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source;
import hxevents.Dispatcher;
using Arrays;

class ArrayDataSource<T> implements IDataSource<T>
{
	public static function fromValues<TIn, TOut>(arr : Array<TIn>, map : TIn -> Int -> DataPoint<TOut>)
	{
		var a : Array<DataPoint<TOut>> = arr.map(map);
		a.each(function(d, i) if (null == d.id) d.id = Predicates.id(d.predicates));
		return new ArrayDataSource(a);
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