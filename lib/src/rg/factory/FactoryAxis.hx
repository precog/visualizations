/**
 * ...
 * @author Franco Ponticelli
 */

package rg.factory;
import rg.axis.AxisGroupByTime;
import rg.axis.AxisOrdinalFixedValues;
import rg.axis.AxisOrdinalStats;
import rg.axis.AxisNumeric;
import rg.axis.AxisTime;
import rg.axis.IAxis;
import rg.axis.IAxisDiscrete;
import rg.util.Properties;
import rg.data.Variable;
import thx.error.Error;

class FactoryAxis
{
	public function new() { }

	public function create(type : String, isnumeric : Null<Bool>, variable : Variable<Dynamic, IAxis<Dynamic>>, samples : Null<Array<Dynamic>>) : IAxis<Dynamic>
	{
		if (null != samples && samples.length > 0)
		{
			return new AxisOrdinalFixedValues(samples);
		} else if(true == isnumeric) {
			return new AxisNumeric();
		} else if(false == isnumeric) {
			return new AxisOrdinalStats(variable);
		} else {
			return null;
		}
	}

	public function createDiscrete(type : String, variable : Variable<Dynamic, IAxis<Dynamic>>, samples : Array<Dynamic>, groupBy : Null<String>) : IAxisDiscrete<Dynamic>
	{
		if (Properties.isTime(type))
		{
			if (null != groupBy)
				return new AxisGroupByTime(Properties.periodicity(type));
			else
				return new AxisTime(Properties.periodicity(type));
		} else if (null != samples && samples.length > 0)
		{
			return new AxisOrdinalFixedValues(samples);
		}
			return new AxisOrdinalStats(variable);
	}
}