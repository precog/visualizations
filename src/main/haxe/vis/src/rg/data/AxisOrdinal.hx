/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import thx.error.Error;
using Arrays;

class AxisOrdinal<T> implements IAxisOrdinal<T>
{
	public var values(getValues, null): Array<T>;
// TODO, this should probably go outside this class, probably should affect the ITickmark collection
// public var ordering(getOrdering, null): T -> T -> Int;

	public function new(values: Array<T>) {
		this.values = values;
	}

	public function sample(start: T, end: T, ?upperBound: Int) : Array<ITickmark<T>>
	{
		if (0 == upperBound)
			return [];	
		var ticks : Array<ITickmark<T>> = cast OrdinalTickmark.fromArray(range(start, end));
		return Tickmarks.bound(ticks, upperBound);
	}
	
	public function range(start: T, end: T)
	{
		var s = values.indexOf(start),
			e = values.indexOf(end);
		if (s < 0)
			throw new Error("the start bound '{0}' is not part of the acceptable values {1}", [start, values]);
		if (e < 0)
			throw new Error("the end bound '{0}' is not part of the acceptable values {1}", [end, values]);
		return values.slice(s, e + 1);
	}
	
	public function scale(start : T, end : T, v : T)
	{
		var s = values.indexOf(start),
			e = values.indexOf(end),
			p = values.indexOf(v);
		if (s < 0)
			throw new Error("the start bound '{0}' is not part of the values {1}", [start, values]);
		if (e < 0)
			throw new Error("the end bound '{0}' is not part of the values {1}", [end, values]);
		if (p < 0)
			throw new Error("the value '{0}' is not part of the values {1}", [v, values]);
		return (p - s) / (e - s);
	}
	
	function getValues() return values
}

class OrdinalTickmark<T> implements ITickmark<T>
{
	public static function fromArray<T>(values : Array<T>)
	{
		return values.map(function(_, i) return new OrdinalTickmark<T>(i, values));
	}
	
	var pos : Int;
	var values : Array<T>;
	public function new(pos : Int, values : Array<T>)
	{
		this.pos = pos;
		this.values = values;
	}
	public var delta(getDelta, null) : Float;
	function getDelta()
	{
		return pos / values.length;
	}
	
	public var major(getMajor, null) : Bool;
	function getMajor() return true
	
	public var value(getValue, null) : T;
	function getValue()
	{
		return values[pos];
	}
	
	function toString() return Tickmarks.string(this)
}