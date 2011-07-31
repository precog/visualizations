/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

class VariableIndependent<T> extends Variable<T>
{
	public static function forTime(type : String, periodicity : String, ?min : Float, ?max : Float)
	{
		var axis = new AxisTime(periodicity);
		return new VariableIndependent(type, axis, min, max);
	}
	
	public static function forOrdinal<T>(type : String, ?values : Array<T>)
	{
		var axis = new AxisOrdinal(values);
		return new VariableIndependent(type, axis, axis.first, axis.last);
	}
	
	public var axis(default, null) : IAxisDiscrete<T>;
	public function new(type : String, axis : IAxisDiscrete<T>, ?min : T, ?max : T) 
	{
		super(type, min, max);
		this.axis = axis;
	}
	
	public function range() : Array<T>
	{
		// TODO dirty hack ... the view parameters should not affect the query or at least they should bem mediated
		var a = Types.as(axis, AxisGroupByTime);
		if (null != a)
		{
			return cast a.range(a.first, a.last);
		} else {
			return axis.range(min, max);
		}
	}
}