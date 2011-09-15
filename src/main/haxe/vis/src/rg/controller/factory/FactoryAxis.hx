/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.data.AxisGroupByTime;
import rg.data.AxisOrdinal;
import rg.data.AxisNumeric;
import rg.data.AxisTime;
import rg.data.IAxis;
import rg.data.IAxisDiscrete;
import rg.util.Properties;
import thx.error.Error;

class FactoryAxis 
{
	public function new() { }
	
	public function create(type : String, isnumeric : Bool, ?samples : Array<Dynamic>) : IAxis<Dynamic>
	{
		if (null != samples)
		{
			return new AxisOrdinal(samples);
		} else if(isnumeric) {
			return new AxisNumeric();
		} else {
			return null;
		}
	}
	
	public function createDiscrete(type : String, samples : Array<Dynamic>, groupBy : Null<String>) : IAxisDiscrete<Dynamic>
	{
		if (Properties.isTime(type))
		{
			if (null != groupBy)
				return new AxisGroupByTime(Properties.periodicity(type));
			else
				return new AxisTime(Properties.periodicity(type));
		} else
			return new AxisOrdinal(samples);
	}
}

enum AxisHint
{
	Unknown;
	Numeric;
	Samples(values : Array<Dynamic>);
}