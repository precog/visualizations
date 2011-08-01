/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import thx.error.Error;
import thx.collections.Set;
using Arrays;
using thx.collections.Sets;

class AxisOrdinal<T> implements IAxisOrdinal<T>
{
	public var first(getFirst, null) : T;
	public var last(getLast, null) : T;
	public var values(getValues, null): Set<T>;
	public var allTicks (getAllTicks, null): Array<ITickmark<T>>;
// TODO, this should probably go outside this class, probably should affect the ITickmark collection
// public var ordering(getOrdering, null): T -> T -> Int;

	public function new(?arr : Array<T>, ?set: Set<T>)
	{
		if (null != arr)
			values = Set.ofArray(arr);
		else if (null != set)
			values = set;
		else
			values = new Set();
	}
	
	public function toTickmark(start: T, end : T, value: T): ITickmark<T>
	{
		var r = range(start, end);
		return new OrdinalTickmark(r.indexOf(value), r);
	}

	public function ticks(start: T, end: T, ?upperBound: Int) : Array<ITickmark<T>>
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
		return values.array().slice(s, e + 1);
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
	
	function getFirst() return values.first()
	function getLast() return values.last()
	function getValues() return values
	function getAllTicks()
	{
		var t = toTickmark,
			f = first,
			l = last;
		return range(f, l).map(function(d, i) return t(f, l, d));
	}
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