/**
 * ...
 * @author Franco Ponticelli
 */

package rg.axis;

interface IAxisOrdinal<T> extends IAxisDiscrete<T>
{
	public function first(): T;
	public function last(): T;
	public function allTicks(): Array<ITickmark<T>>;
	public function values() : Array<T>;
}