/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import hxevents.Dispatcher;
import thx.error.AbstractMethod;

interface IDataSource
{
	public var onLoad(default, null) : Dispatcher<Array<DataPoint>>;
	public function load() : Void;
}