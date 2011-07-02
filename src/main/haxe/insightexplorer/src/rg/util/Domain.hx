/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;
import hxevents.Notifier;
import thx.error.Error;
import thx.math.scale.IScale;
import thx.math.scale.Ordinal;
import thx.math.scale.Linear;

class Domain<T>
{
	var _values : Array<T>;
	var _type : Class<Dynamic>;
	public var onChange(default, null) : Notifier;
	public function new(type : Class<Dynamic>) 
	{
		_type = type;
		onChange = new Notifier();
		_values = [];
	}
	
	public function set(index : Int, value : T)
	{
		if (_values[index] == value)
			return this;
		_values[index] = value;
		onChange.dispatch();
		return this;
	}
	
	public function get(index : Int)
	{
		return _values[index];
	}
	
	public function setAll(a : Array<T>)
	{
		var changed = false,
			value;
		for (i in 0...a.length)
		{
			if (_values[i] != (value = a[i]))
			{
				changed = true;
				_values[i] = value;
			}
		}
		if (changed)
			onChange.dispatch();
		return this;
	}
	
	public function getAll()
	{
		return _values.copy();
	}
	
	public function getType()
	{
		return _type;
	}
/*
	public function createScale<TDomain>() : IScale<TDomain, Float>
	{
		switch(Type.getClassName(_type))
		{
			case "String":
				var v = getAll(),
					ordinal = new Ordinal().domain(v).range(Ints.range(v.length)),
					scale = new Linear(
			case "Float", "Int":
			
			default:
				return throw new Error("unsupported domain type '{0}'", Type.getClassName(_type));
		}
	}
*/
}