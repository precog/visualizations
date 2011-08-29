/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.Variable;
import rg.data.DataPoint;
import rg.data.Stats;
import rg.data.IAxis;

class InfoLabel 
{
	public var title : Array<Variable<Dynamic, IAxis<Dynamic>>> -> Array<DataPoint> -> String;
	public var datapoint : DataPoint -> Stats -> String;
	public var datapointover : DataPoint -> Stats -> String;
	
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
		}, {
			field : "datapointover",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}];
	}
}