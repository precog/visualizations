/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

class InfoOption extends Info
{
	public var width  : Null<Int>;
	public var height : Null<Int>;
	override function filters() : Array<FieldFilter>
	{
		return [{
			field : "width",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				value : Math.round(v),
				field : "width"
			}]
		}, {
			field : "height",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				value : Math.round(v),
				field : "height"
			}]
		}];
	}
}