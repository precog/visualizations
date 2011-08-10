/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

class Variable<T>
{
	public var type : String;
	public var min : Null<T>;
	public var max : Null<T>;
	
	function new(type : String, ?min : T, ?max : T) 
	{
		this.type = type;
		this.min = min;
		this.max = max;
	}
}