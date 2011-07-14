/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

class Variable<T>
{
	public var type : String;
	public var min : T;
	public var max : T;
	
	function new(type : String, min : T, max : T) 
	{
		this.type = type;
		this.min = min;
		this.max = max;
	}
}