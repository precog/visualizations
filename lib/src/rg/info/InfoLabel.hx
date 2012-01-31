/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.Variable;
import rg.data.DataPoint;
import rg.axis.Stats;
import rg.axis.IAxis;

class InfoLabel
{
	public var title : Array<Variable<Dynamic, IAxis<Dynamic>>> -> Array<DataPoint> -> String;
	public var datapoint : DataPoint -> Stats<Dynamic> -> String;
	public var datapointover : DataPoint -> Stats<Dynamic> -> String;

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