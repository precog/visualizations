/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

class AxisOrdinalFixedValues<T> extends AxisOrdinal<T>
{
	var _values : Array<T>;
	public function new(arr : Array<T>)
	{
		super();
		_values = arr;
	}
	
	override function values() return _values
}