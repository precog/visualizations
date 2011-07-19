/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

class InfoVariable extends Info
{
	public var type : Null<String>;
	public var min : Null<Dynamic>;
	public var max : Null<Dynamic>;
	public var values : Null<Array<Dynamic>>;

	override function filters() : Array<FieldFilter>
	{
		return [{
			field : "type",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "view",
			validator : function(v) return Std.is(v, Array) && (v[0] == null || Types.isPrimitive(v[0])) && (v[1] == null || Types.isPrimitive(v[1])),
			filter : function(v) {
				var result = [];
				if (null != v[0])
					result.push( { field : "min", value : v[0] } );
				if (null != v[1])
					result.push( { field : "max", value : v[1] } );
				return result;
			}
		}, {
			field : "values",
			validator : function(v) return Std.is(v, Array) && Arrays.all(v, function(v) return Types.isPrimitive(v)),
			filter : null
		}];
	}
}