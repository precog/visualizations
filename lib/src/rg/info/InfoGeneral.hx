package rg.info;

/**
 * ...
 * @author Franco Ponticelli
 */

using rg.info.Info;

@:keep class InfoGeneral
{
	public var ready : Void -> Void;
	public var forcelegacy : Bool;
	public function new()
	{
		forcelegacy = false;
	}

	public static function filter() : Array<FieldFilter>
	{
		return [{
			field : "ready",
			validator : function(v) return Reflect.isFunction(v),
			value : null
		}, {
			field : "forcelegacy",
			validator : function(v) return Std.is(v, Bool),
			value : null
		}];
	}
}