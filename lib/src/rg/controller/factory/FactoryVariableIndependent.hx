/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoVariable;
import rg.data.AxisTime;
import rg.data.AxisGroupByTime;
import rg.data.IAxis;
import rg.data.Stats;
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
			variable = new VariableIndependent(info.type, info.scaleDistribution),
			axis = axiscreateer.createDiscrete(info.type, cast variable, info.values, info.groupBy);
		variable.setAxis(axis);
		variable.minf = convertBound(axis, info.min);
		variable.maxf = convertBound(axis, info.max);
		return variable;
	}

	public static function convertBound(axis : IAxis<Dynamic>, value : Dynamic) : Stats<Dynamic> -> Dynamic -> Dynamic
	{
		if (null == value || Reflect.isFunction(value))
			return value;
		if (Std.is(axis, AxisTime))
		{
			if (Std.is(value, Date))
				value = cast(value, Date).getTime();
			if (Std.is(value, Float))
				return function(_, _) return value;
			if (Std.is(value, String))
				return function(_, _) return DateParser.parse(value).getTime();
			throw new Error("invalid value '{0}' for time bound", [value]);
		}
		return function(_, _) return value;
	}
}