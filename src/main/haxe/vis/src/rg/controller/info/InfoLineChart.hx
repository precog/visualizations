/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
using rg.controller.info.Info;

class InfoLineChart 
{
	public var animation : InfoAnimation;
	public var segmenton : String;
	
	public function new() 
	{
		animation = new InfoAnimation();
	}
	
	public static function filters()
	{
		return [{
			field : "animation",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "animation",
				value : new InfoAnimation().feed(v)
			}]
		}, {
			field : "segmenton",
			validator : function(v) return Std.is(v, String),
			filter : null
		}];
	}
}