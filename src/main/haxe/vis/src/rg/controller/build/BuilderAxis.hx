/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.build;
import rg.data.AxisOrdinal;
import rg.data.AxisNumeric;
import rg.data.AxisTime;
import rg.data.IAxis;
import rg.data.IAxisDiscrete;
import rg.util.Properties;
import thx.error.Error;

class BuilderAxis 
{
	public function new() { }
	
	public function build(type : String, isnumeric : Bool, samples : Array<Dynamic>) : IAxis<Dynamic>
	{
		if (null != samples)
		{
			return new AxisOrdinal(samples);
		} else if(isnumeric) {
			return new AxisNumeric();
		} else {
			throw new Error("can't build dependant variable that is not numeric or without a complete set of values");
		}
	}
	
	public function buildDiscrete(type : String, samples : Array<Dynamic>) : IAxisDiscrete<Dynamic>
	{
		var pos;
		if(Properties.isTime(type))
			return new AxisTime(Properties.periodicity(type));
		else
			return new AxisOrdinal(samples);
	}
}