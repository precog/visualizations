/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

using Arrays;

class Stats<T>
{
	public var min(default, null) : Null<T>;
	public var max(default, null) : Null<T>;
	public var count(default, null) : Int;
	public var values(default, null) : Array<T>;
	public var sortf(default, null) : T -> T -> Int;
	
	public function new(?sortf : T -> T -> Int)
	{
		this.sortf = sortf;
		reset();
	}
	
	public function reset() : Stats<T>
	{
		min = null;
		max = null;
		count = 0;
		values = [];
		return this;
	}
	
	public function add(v : T) : Stats<T>
	{
		count++;
		if (values.exists(v))
			return this;
		
		values.push(v);
		if (null != sortf)
			values.sort(sortf);
		min = values.first();
		max = values.last();
		return this;
	}
	
	public function addMany(it : Iterable<T>) : Stats<T>
	{
		for (v in it)
		{
			count++;
			if (values.exists(v))
				continue;
			values.push(v);
		}
		if (null != sortf)
			values.sort(sortf);
		min = values.first();
		max = values.last();
		return this;
	}
}

class StatsNumeric extends Stats<Float>
{
	public var tot : Float;
	public function new(?sortf : Float -> Float -> Int)
	{
		if (null == sortf)
			sortf = Floats.compare;
		super(sortf);
	}
	
	override function reset() : Stats<Float>
	{
		super.reset();
		tot = 0.0;
		return this;
	}
	
	override function add(v : Float) : Stats<Float>
	{
		super.add(v);
		tot += v;
		return this;
	}
	
	override function addMany(it : Iterable<Float>) : Stats<Float>
	{
		super.addMany(it);
		for (v in it)
			tot += v;
		return this;
	}
}