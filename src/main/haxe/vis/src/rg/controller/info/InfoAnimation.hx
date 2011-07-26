/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

import thx.math.Equations;

class InfoAnimation 
{
	public var animated : Bool;
	public var duration : Int;
	public var ease : Float -> Float;
	
	public function new()
	{
		animated = true;
		duration = 1500;
		ease = Equations.elasticf();
	}
	
	public static function filters() 
	{
		return [{
			field : "animated",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}, {
			field : "duration",
			validator : function(v) return Std.is(v, Int),
			filter : null
		}, {
			field : "ease",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}];
	}
}