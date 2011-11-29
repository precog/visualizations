/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

interface ITickmark<T>
{
	public var delta(getDelta, null) : Float;
	public var major(getMajor, null) : Bool;
	public var value(getValue, null) : T;
	public var label(getLabel, null) : String;
}