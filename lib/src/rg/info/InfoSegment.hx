/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.DataPoint;

@:keep class InfoSegment
{
	public var on : String;
	public var transform : Null<Array<DataPoint> -> Array<DataPoint>>;
	public var scale : Null<Array<DataPoint> -> Array<DataPoint>>;
	public function new() { }

	public static function filters() : Array<FieldFilter>
	{
		return [{
			field : "on",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "transform",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}, {
			field : "scale",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}];
	}
}