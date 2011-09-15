/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.DataPoint;
import rg.util.Periodicity;

class InfoDataSource
{
	public var query : Null<String>;
	public var path : Null<String>;
	public var event : Null<String>;
	public var namedData : Null<String>;
	public var data : Null<Array<DataPoint>>;
	public var name : Null<String>;
	public var groupBy : Null<String>;
	public var groups : Null<Array<String>>;
	public var start : Null<Float>;
	public var end : Null<Float>;
	
	public function new() {}
	
	public static function filters() : Array<FieldFilter>
	{
		return [{
			field : "query",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "path",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "event",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "name",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "start",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "end",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "data",
			validator : function(v) return Std.is(v, String) || (Std.is(v, Array) && Arrays.all(v, function(v) return Types.isAnonymous(v))),
			filter : function(v)
			{
				if(Std.is(v, Array))
					return [{ field : "data", value : v }];
				else
					return [{ field : "namedData", value : v }];
			}
		}, {
			field : "groupby",
			validator : function(v : Dynamic) return Std.is(v, String) && Periodicity.isValid(v),
			filter : function(v)
			{
				return [{ field : "groupBy", value : v }];
			}
		}, {
			field : "groupfilter",
			validator : function(v : Dynamic) return Std.is(v, String) || Std.is(v, Array),
			filter : function(v)
			{
				return [{ field : "groups", value : Std.is(v, String) ? cast v.split(",") : v }];
			}
		}];
	}
}