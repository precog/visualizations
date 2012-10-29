/**
 * ...
 * @author Franco Ponticelli
 */

package rg.axis;

interface ITickmark<T>
{
	public var delta(get, null) : Float;
	public var major(get, null) : Bool;
	public var value(get, null) : T;
	public var label(get, null) : String;
}