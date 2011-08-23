/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import rg.util.RGStrings;

using Arrays;

class TickmarkOrdinal<T> implements ITickmark<T>
{
	public static function fromArray<T>(values : Array<T>)
	{
		return values.map(function(_, i) return new TickmarkOrdinal<T>(i, values));
	}
	
	var pos : Int;
	var values : Array<T>;
	public function new(pos : Int, values : Array<T>)
	{
		this.pos = pos;
		this.values = values;
	}
	public var delta(getDelta, null) : Float;
	function getDelta()
	{
		return pos / (values.length - 1);
	}
	
	public var major(getMajor, null) : Bool;
	function getMajor() return true
	
	public var value(getValue, null) : T;
	function getValue()
	{
		return values[pos];
	}
	
	public var label(getLabel, null) : String;
	function getLabel()
	{
		return RGStrings.humanize(values[pos]);
	}
	
	function toString() return Tickmarks.string(this)
}