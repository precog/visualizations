package rg.info;

/**
 * ...
 * @author Franco Ponticelli
 */

using rg.info.Info;

@:keep class InfoGeneral
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