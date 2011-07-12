/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

class DataAxis<T>
{
	public var type(default, null) : String;
	public var values(default, null) : Axis;
	public var rescale(default, null) : DataPoint<T> -> T;
	public function new() 
	{
		
	}
}