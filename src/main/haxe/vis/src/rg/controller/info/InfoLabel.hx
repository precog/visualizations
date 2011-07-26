/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.Variable;
import rg.data.DataPoint;

class InfoLabel 
{
	public var title : Array<Variable<Dynamic>> -> Array<DataPoint> -> String;
	public function new() { }
	
	public static function filters()
	{
		return [{
			field : "title",
			validator : function(v) return Std.is(v, String) || Reflect.isFunction(v),
			filter : function(v : Dynamic) return [{
				field : "title",
				value : Std.is(v, String) ? function() return v : v
			}]
		}];
	}
}