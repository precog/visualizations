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
	public var scaleDistribution : Null<ScaleDistribution>;
	
	function new(type : String, scaleDistribution : Null<ScaleDistribution>, ?min : T, ?max : T) 
	{
		this.type = type;
		this.scaleDistribution = scaleDistribution;
		this.min = min;
		this.max = max;
	}
}