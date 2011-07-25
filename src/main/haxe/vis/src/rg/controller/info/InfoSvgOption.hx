/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

class InfoSvgOption extends InfoOption
{
	public var width  : Null<Int>;
	public var height : Null<Int>;
	
	public static function filters() : Array<FieldFilter>
	{
		return InfoOption.filters().concat([{
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
		}]);
	}
}