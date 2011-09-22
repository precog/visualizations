/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import thx.collection.Set;

interface IAxisOrdinal<T> implements IAxisDiscrete<T> 
{
	public var first (getFirst, null): T;
	public var last  (getLast,  null): T;
	public var allTicks (getAllTicks, null): Array<ITickmark<T>>;
	public var values(getValues, null) : Array<T>;
}