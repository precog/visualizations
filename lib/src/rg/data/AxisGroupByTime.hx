/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import thx.error.Error;

class AxisGroupByTime extends AxisOrdinalFixedValues<Int>
{
	public function new(groupby : String)
	{
		super(valuesByGroup(groupby));
		groupBy = groupby;
	}

	public var groupBy(default, null) : String;

	public static function valuesByGroup(groupby : String)
	{
		return Ints.range(defaultMin(groupby), defaultMax(groupby) + 1);
	}


	public static function defaultMin(periodicity : String)
	{
		switch(periodicity)
		{
			case "minute", "hour", "week", "month":
				return 0;
			case "day":
				return 1;
			default:
				throw new Error("invalid periodicity '{0}' for groupBy min", periodicity);
		}
	}

	public static function defaultMax(periodicity : String)
	{
		switch(periodicity)
		{
			case "minute":	return 59;
			case "hour":	return 23;
			case "day":		return 31;
			case "week":	return 6;
			case "month":	return 11;
			default:
				throw new Error("invalid periodicity '{0}' for groupBy max", periodicity);
		}
	}
}