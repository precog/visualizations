/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

interface IAxis<T>
{
	public function scale(start : T, end : T, v : T) : Float;
	public function toTickmark(start: T, end : T, value: T): ITickmark<T>;
	public function ticks(start : T, end : T, ?maxTicks : Int) : Array<ITickmark<T>>;
}