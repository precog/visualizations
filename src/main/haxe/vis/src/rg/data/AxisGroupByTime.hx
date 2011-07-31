/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import thx.error.Error;

class AxisGroupByTime extends AxisOrdinal<Int>
{
	public function new(groupby : String)
	{
		super(valuesByGroup(groupby));
		groupBy = groupby;
	}
	
	public var groupBy(default, null) : String;
	
	public static function valuesByGroup(groupby : String)
	{
		switch(groupby)
		{
			case "minute": return Ints.range(1, 60);
			case "hour":   return Ints.range(1, 24);
			case "day":    return Ints.range(1, 31);
			case "week":   return Ints.range(1, 7);
			case "month":  return Ints.range(1, 12);
			case "year":   return Ints.range(1, 365);
			default: throw new Error("invalid groupby value '{0}'", groupby);
		}
	}
}