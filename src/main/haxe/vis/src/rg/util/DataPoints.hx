/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;

import haxe.Md5;
import rg.data.DataPoint;
import rg.data.VariableIndependent;
using Arrays;

class DataPoints 
{
	public static function filterByVariable(dps : Array<DataPoint>, variables : Array<VariableIndependent<Dynamic>>)
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
	
	public inline static function value(dp : DataPoint, property : String) return Reflect.field(dp, property)
	
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