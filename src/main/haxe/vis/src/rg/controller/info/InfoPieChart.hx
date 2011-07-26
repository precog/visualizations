/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
using rg.controller.info.Info;

class InfoPieChart 
{
	public var padding : Int;
	public var innerRadius : Float;
	public var animation : InfoAnimation;
	
	public function new()
	{
		padding = 30;
		innerRadius = 0.0;
		animation = new InfoAnimation();
	}
	
	public static function filters()
	{
		return [{
			field : "innerRadius",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "padding",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				field : "padding",
				value : Math.round(v)
			}]
		}, {
			field : "animation",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [ {
				field : "animation",
				value : new InfoAnimation().feed(v)
			}]
		}];
	}
}