/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import rg.util.RGStrings;

class Tickmark<T> implements ITickmark<T>
{
	public var delta(getDelta, null) : Float;
	public var major(getMajor, null) : Bool;
	public var value(getValue, null) : T;
	public var label(getLabel, null) : String;

	public function new(value : T, major : Bool, delta : Float)
	{
		this.value = value;
		this.major = major;
		this.delta = delta;
	}

	function getDelta() return delta
	function getMajor() return major
	function getValue() return value
	function getLabel() return RGStrings.humanize(value)

	function toString() return Tickmarks.string(this)
}