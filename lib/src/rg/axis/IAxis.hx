/**
 * ...
 * @author Franco Ponticelli
 */

package rg.axis;
import rg.axis.ITickmark;

interface IAxis<T>
{
	public function scale(start : T, end : T, v : T) : Float;
	public function ticks(start : T, end : T, ?maxTicks : Int) : Array<ITickmark<T>>;
	public function max(stats : Stats<T>, meta : Dynamic) : T;
	public function min(stats : Stats<T>, meta : Dynamic) : T;
	public function createStats(type : String) : Stats<T>;
}