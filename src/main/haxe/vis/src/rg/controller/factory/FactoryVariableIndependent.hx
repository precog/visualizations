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
			min = Dates.snap(defaultMin(normalizeTime(info.min), periodicity), periodicity);
			max = Dates.snap(defaultMax(normalizeTime(info.max), periodicity), periodicity);
		} else if (Std.is(axis, AxisGroupByTime))
		{
			var periodicity = cast(axis, AxisGroupByTime).groupBy;
			min = defaultMin(normalizeTime(info.min), periodicity);
			max = defaultMax(normalizeTime(info.max), periodicity);
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
	
	function defaultMin(min : Null<Float>, periodicity : String)
	{
		if(null != min)
			return min;
		switch(periodicity)
		{
			case "eternity":
				return null;
			case "minute":
				return DateParser.parse("360 minutes ago").getTime();
			case "hour":
				return DateParser.parse("24 hours ago").getTime();
			case "day":
				return DateParser.parse("30 days ago").getTime();
			case "week":
				return DateParser.parse("16 weeks ago").getTime();
			case "month":
				return DateParser.parse("12 months ago").getTime();
			case "year":
				return DateParser.parse("6 years ago").getTime();
			default:
				throw new Error("invalid periodicity '{0}'", periodicity);
		}
	}
	
	function defaultMax(max : Null<Float>, periodicity : String)
	{
		if(null != max)
			return max;
		switch(periodicity)
		{
			case "eternity":
				return null;
			case "minute", "hour":
				return DateParser.parse("now").getTime();
			case "day", "week", "month", "year":
				return DateParser.parse("today").getTime();
			default:
				throw new Error("invalid periodicity '{0}'", periodicity);
		}
	}
}