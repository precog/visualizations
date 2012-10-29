/**
 * ...
 * @author Franco Ponticelli
 */

package rg.axis;
import rg.util.RGStrings;

using Arrays;

class TickmarkOrdinal<T> implements ITickmark<T>
{
	public static function fromArray<T>(values : Array<T>, scaleDistribution : ScaleDistribution)
	{
		return values.map(function(_, i) return new TickmarkOrdinal<T>(i, values, scaleDistribution));
	}

	var pos : Int;
	var values : Array<T>;
	var scaleDistribution : ScaleDistribution;
	public function new(pos : Int, values : Array<T>, major = true, scaleDistribution : ScaleDistribution)
	{
		this.pos = pos;
		this.values = values;
		this.scaleDistribution = scaleDistribution;
		this.major = major;
	}
	public var delta(get, null) : Float;
	function get_delta()
	{
		return ScaleDistributions.distribute(scaleDistribution, pos, values.length);
	}

	@:isVar public var major(get, null) : Bool;
	function get_major() return major

	public var value(get, null) : T;
	function get_value()
	{
		return values[pos];
	}

	public var label(get, null) : String;
	function get_label()
	{
		return RGStrings.humanize(values[pos]);
	}

	function toString() return Tickmarks.string(this)
}