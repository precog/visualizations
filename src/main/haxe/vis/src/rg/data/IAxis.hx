/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

interface IAxis<T>
{
	
	
	public function scale(start : T, end : T, v : T) : Float;
	
//	public function toTickmark(start: T, end, value: T): ITickmark;
}