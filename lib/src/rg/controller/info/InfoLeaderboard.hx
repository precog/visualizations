/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.DataPoint;
import thx.math.Equations;
using rg.controller.info.Info;

class InfoLeaderboard
{
	public var animation : InfoAnimation;
	public var label : InfoLabelLeaderboard;
	public var click : DataPoint -> Void;
	public var sortDataPoint : DataPoint -> DataPoint -> Int;
	public var usemax : Bool;
	public var displaybar : Bool;

	public function new()
	{
		animation = new InfoAnimation();
		label = new InfoLabelLeaderboard();
		usemax = false;
		displaybar = true;
	}

	public static function filters()
	{
		return [{
			field : "animation",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) {
				var animation = new InfoAnimation();
				animation.ease = Equations.linear;
				return [{
					field : "animation",
					value : animation.feed(v)
				}];
			}
		}, {
			field : "label",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "label",
				value : new InfoLabelLeaderboard().feed(v)
			}]
		}, {
			field : "click",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}, {
			field : "sort",
			validator : function(v) return Reflect.isFunction(v),
			filter : function(v) return [{
				field : "sortDataPoint",
				value : v
			}]
		}, {
			field : "displaybar",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}, {
			field : "usemax",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}];
	}
}