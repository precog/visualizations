/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

interface IAxis<T>
{
	public function scale(start : T, end : T, v : T) : Float;
	public function ticks(start : T, end : T, ?maxTicks : Int) : Array<ITickmark<T>>;
	public function max(stats : Stats<T>) : T;
	public function min(stats : Stats<T>) : T;
}