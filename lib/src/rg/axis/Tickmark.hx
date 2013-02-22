/**
 * ...
 * @author Franco Ponticelli
 */

package rg.axis;
import rg.util.RGStrings;

class Tickmark<T> implements ITickmark<T>
{
	@:isVar public var delta(get, null) : Float;
	@:isVar public var major(get, null) : Bool;
	@:isVar public var value(get, null) : T;
	public var label(get, null) : String;

	public function new(value : T, major : Bool, delta : Float)
	{
		this.value = value;
		this.major = major;
		this.delta = delta;
	}

	function get_delta() return delta;
	function get_major() return major;
	function get_value() return value;
	function get_label() return RGStrings.humanize(value);

	function toString() return Tickmarks.string(this);
}