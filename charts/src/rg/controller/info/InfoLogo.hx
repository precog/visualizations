/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

import rg.view.html.widget.LogoPosition;
import rg.view.html.widget.LogoPositions;

class InfoLogo
{
	public var position : LogoPosition;
	public var darkbackground : Bool;

	public function new()
	{
		position = BottomRight;
		darkbackground = false;
	}

	public static function filters()
	{
		return [{
			field : "logoposition",
			validator : function(v) return Std.is(v, String),
			filter : function(v)
			{
				return [ {
					field : "position",
					value : LogoPositions.parse(v)
				}];
			}
		}, {
			field : "darkbackground",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}];
	}
}