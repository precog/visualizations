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
	public var value : Float -> Float -> String;
	public var datapoint : DataPoint -> String -> String;
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
		}, {
			field : "value",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}, {
			field : "datapoint",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}];
	}
}