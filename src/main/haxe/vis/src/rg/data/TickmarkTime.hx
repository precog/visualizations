/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import rg.util.Periodicity;

class TickmarkTime extends Tickmark<Float>
{
	public var periodicity(default, null) : String;
	
	public function new(value : Float, major : Bool, delta : Float, periodicity : String) 
	{
		super(value, major, delta);
		this.periodicity = periodicity;
	}
	
	override function getLabel() return Periodicity.format(periodicity, value)
}