/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.DataPoint;

class InfoDataSource
{
	public var query : Null<String>;
	public var path : Null<String>;
	public var event : Null<String>;
	public var namedData : Null<String>;
	public var data : Null<Array<DataPoint>>;
	public var name : Null<String>;
	
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
			field : "data",
			validator : function(v) return Std.is(v, String) || (Std.is(v, Array) && Arrays.all(v, function(v) return Types.isAnonymous(v) && Std.is(v.event, String))),
			filter : function(v)
			{
				if(Std.is(v, Array))
					return [{ field : "data", value : v }];
				else
					return [{ field : "namedData", value : v }];
			}
		}];
	}
}