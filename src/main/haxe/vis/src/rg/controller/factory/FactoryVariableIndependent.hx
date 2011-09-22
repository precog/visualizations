/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoVariable;
import rg.data.AxisTime;
import rg.data.AxisGroupByTime;
import rg.data.IAxis;
import rg.data.VariableIndependent;
import thx.date.DateParser;
import thx.error.Error;
import rg.util.Periodicity;

class FactoryVariableIndependent
{
	public function new() { }
	
	public function create(info : InfoVariable) : VariableIndependent<Dynamic>
	{
		if (null == info.type)
			return null;
		var axiscreateer = new FactoryAxis(),
			axis = axiscreateer.createDiscrete(info.type, info.values, info.groupBy),
			min = info.min,
			max = info.max;

		if (null == min && null != info.values)
			min = Arrays.first(info.values);
		if (null == max && null != info.values)
			max = Arrays.last(info.values);
		if (Std.is(axis, AxisTime))
		{
			var periodicity = cast(axis, AxisTime).periodicity;
			min = null != info.min ? Dates.snap(normalizeTime(info.min), periodicity) : null;
			max = null != info.max ? Dates.snap(normalizeTime(info.max), periodicity) : null;
		} else if (Std.is(axis, AxisGroupByTime))
		{
			var groupaxis = cast(axis, AxisGroupByTime);
			min = null != info.min ? info.min : AxisGroupByTime.defaultMin(groupaxis.groupBy);
			max = null != info.max ? info.max : AxisGroupByTime.defaultMax(groupaxis.groupBy);
		}
		var variable = new VariableIndependent(info.type, axis, info.scaleDistribution, min, max);
		return variable;
	}
	
	function normalizeTime(v : Dynamic) : Null<Float>
	{
		if (null == v || Std.is(v, Float))
			return v;
		if (Std.is(v, Date))
			return cast(v, Date).getTime();
		if (Std.is(v, String))
			return DateParser.parse(v).getTime();
		throw new Error("unable to normalize the value '{0}' into a valid date value", v);
	}
}