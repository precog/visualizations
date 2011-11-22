/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
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
	public var delta(getDelta, null) : Float;
	function getDelta()
	{
		return ScaleDistributions.distribute(scaleDistribution, pos, values.length);
	}
	
	public var major(getMajor, null) : Bool;
	function getMajor() return major
	
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