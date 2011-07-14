/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

class VariableDependent<T> extends Variable<T> 
{
	public var axis(default, null) : IAxis<T>;
	public function new(type : String, axis : IAxis<T>, ?min : T, ?max : T) 
	{
		super(type, min, max);
		this.axis = axis;
	}
}