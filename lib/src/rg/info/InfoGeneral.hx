package rg.info;

/**
 * ...
 * @author Franco Ponticelli
 */

using rg.info.filter.FilterDescription;
using rg.info.Info;

@:keep class InfoGeneral
{
	public var ready : Void -> Void;
	public var forcelegacy : Bool;
	public function new()
	{
		forcelegacy = false;
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"ready".toFunction(),
			"forcelegacy".toBool()
		];
	}
}