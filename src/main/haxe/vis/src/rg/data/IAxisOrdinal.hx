/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

interface IAxisOrdinal<T> implements IAxisDiscrete<T> 
{
	public var values(getValues, null) : Array<T>;
}