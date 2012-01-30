/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.DataPoint;
import thx.error.Error;

class InfoDataSource
{
	public var loader : (Array<DataPoint> -> Void) -> Void;

	public function new()
	{
	}

	public static function filters() : Array<FieldFilter>
	{
		return cast [{
			field : "data",
			validator : function(v) return Std.is(v, Array),
			filter : function(v)
			{
				return [{
					field : "loader",
					value : function(handler : Array<DataPoint> -> Void) handler(v)
				}];
			}
		}, {
			field : "datapoints",
			validator : function(v) return Std.is(v, Array),
			filter : function(v)
			{
				return [{
					field : "loader",
					value : function(handler : Array<DataPoint> -> Void) handler(v)
				}];
			}
		}, {
			field : "load",
			validator : function(v) return Reflect.isFunction(v) || (null != Reflect.field(v, "load")),
			filter : function(v : { public function load(handler : Array<DataPoint> -> Void) : Void; })
			{
				return [{
					field : "loader",
					value : Reflect.isObject(v) ? v.load : cast v
				}];
			}
		}];
	}
}