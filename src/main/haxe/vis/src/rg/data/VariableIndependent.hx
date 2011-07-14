/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

class VariableIndependent<T> extends Variable<T>
{
	public var axis(default, null) : IAxisDiscrete<T>;
	public function new(type : String, axis : IAxisDiscrete<T>, min : T, max : T) 
	{
		super(type, min, max);
		this.axis = axis;
	}
	
	public function range()
	{
		return axis.range(min, max);
	}
}