package rg.controller.info;

/**
 * ...
 * @author Franco Ponticelli
 */

using rg.controller.info.Info;

class InfoGeneral 
{
	public var ready : Void -> Void;
	public function new() { }
	
	public static function filter()
	{
		return [{
			field : "ready",
			validator : function(v) return Reflect.isFunction(v),
			value : null
		}];
	}
}