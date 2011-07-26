/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

interface IAxisDiscrete<T> implements IAxis<T>
{
	public function range(start : T, end : T) : Array<T>;	
}