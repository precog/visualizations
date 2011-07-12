/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import hxevents.Dispatcher;
import thx.error.AbstractMethod;

interface IDataSource<T>
{
	public var onLoad(default, null) : Dispatcher<Array<DataPoint<T>>>;
	public function load() : Void;
}