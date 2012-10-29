/**
 * ...
 * @author Franco Ponticelli
 */

package rg.axis;
import rg.util.Periodicity;

class TickmarkTime extends TickmarkOrdinal<Float>
{
	public var periodicity(default, null) : String;

	public function new(value : Float, values : Array<Float>, major : Bool, periodicity : String, scaleDistribution : ScaleDistribution)
	{
		super(Arrays.indexOf(values, value), values, major, scaleDistribution);
		this.periodicity = periodicity;
	}
	override function get_label() return Periodicity.smartFormat(periodicity, values[pos])
}