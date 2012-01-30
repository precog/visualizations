/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

class InfoPadding
{
	public var top : Null<Int>;
	public var bottom : Null<Int>;
	public var left : Null<Int>;
	public var right : Null<Int>;
	public function new() { }

	public static function filters()
	{
		return [{
			field : "top",
			validator : function(v) return Std.is(v, Int),
			filter : null
		}, {
			field : "bottom",
			validator : function(v) return Std.is(v, Int),
			filter : null
		}, {
			field : "left",
			validator : function(v) return Std.is(v, Int),
			filter : null
		}, {
			field : "right",
			validator : function(v) return Std.is(v, Int),
			filter : null
		}, ];
	}
}