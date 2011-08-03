/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;

import haxe.Md5;
import rg.data.DataPoint;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;
import thx.collections.HashList;
using Arrays;

class DataPoints 
{
	public static function partition(dps : Array<DataPoint>, property : String, def = "default")
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
	
	public static function filterByIndependents(dps : Array<DataPoint>, variables : Array<VariableIndependent<Dynamic>>)
	{
		for (variable in variables)
		{
			var values = variable.range();
			dps = dps.filter(function(dp) {
				var v = Reflect.field(dp, variable.type);
				if (null == v)
					return false;
				return values.exists(v);
			});
		}
		return dps;
	}
	
	public static function filterByDependents(dps : Array<DataPoint>, variables : Array<VariableDependent<Dynamic>>)
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
	
	public inline static function value(dp : DataPoint, property : String) : Dynamic return Reflect.field(dp, property)
	
	public static function stats(dps : Array<DataPoint>, property : String) 
	{
		var min = Math.POSITIVE_INFINITY,
			max = Math.NEGATIVE_INFINITY,
			tot = 0.0;
			
		for (dp in dps)
		{
			var v = Reflect.field(dp, property);
			if (null == v)
				continue;
			if (v < min)
				min = v;
			if (v > max)
				max = v;
			tot += v;
		}
		
		return {
			min : min,
			max : max,
			tot : tot
		};
	}
	
	public static function id(dp : DataPoint, dependentProperties : Array<String>)
	{
		var o = Objects.clone(dp);
		for (p in dependentProperties)
			Reflect.deleteField(o, p);
		return Md5.encode(Dynamics.string(o));
	}
}