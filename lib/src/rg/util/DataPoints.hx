/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;

import haxe.crypto.Md5;
import rg.axis.Stats;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;
import thx.collection.HashList;
using Arrays;

class DataPoints
{
	public static function partition(dps : Array<Dynamic>, property : String, def = "default")
	{
		var map = new HashList();
		function getBucket(n)
		{
			var bucket = map.get(n);
			if (null == bucket)
			{
				bucket = [];
				map.set(n, bucket);
			}
			return bucket;
		}
		var v, name, bucket;
		for (dp in dps)
		{
			v = value(dp, property);
			if (null == v)
				name = def;
			else
				name = Dynamics.string(v);
			getBucket(name).push(dp);
		}
		return map.array();
	}

	public static function filterByIndependents(dps : Array<Dynamic>, variables : Array<VariableIndependent<Dynamic>>)
	{
		for (variable in variables)
		{
			var values = variable.axis.range(variable.min(), variable.max());
			dps = dps.filter(function(dp) {
				var v = Reflect.field(dp, variable.type);
				if (null == v)
					return false;
				return values.exists(v);
			});
		}
		return dps;
	}

	public static function filterByDependents(dps : Array<Dynamic>, variables : Array<VariableDependent<Dynamic>>)
	{
		for (variable in variables)
		{
			dps = dps.filter(function(dp) {
				if (null == Reflect.field(dp, variable.type))
					return false;
				else
					return true;
			});
		}
		return dps;
	}

	public inline static function value(dp : Dynamic, property : String) : Dynamic return Reflect.field(dp, property);

	public inline static function valueAlt<T>(dp : Dynamic, property : String, alt : T) : T
	{
		var v;
		return (null == (v = Reflect.field(dp, property))) ? alt : v;
	}

	public static function values(dps : Array<Dynamic>, property : String)
	{
		return dps.map(function(dp) return value(dp, property)).filter(function(d) return d != null);
	}

	public static function id(dp : Dynamic, dependentProperties : Array<String>)
	{
		var cdp = Objects.clone(dp);
		for (p in dependentProperties)
			Reflect.deleteField(cdp, p);
		return Md5.encode(Dynamics.string(cdp));
	}
}