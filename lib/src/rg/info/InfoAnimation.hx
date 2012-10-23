/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

import thx.math.Equations;

using rg.info.filter.FilterDescription;


@:keep class InfoAnimation
{
	public var animated : Bool;
	public var duration : Int;
	public var ease : Float -> Float;
	public var delay : Int;

	public function new()
	{
		animated = false;
		duration = 1500;
		delay = 150;
		ease = Equations.elasticf();
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"animated".toBool(),
			"duration".toInt(),
			"delay".toInt(),
			"ease".toExpressionFunction(["value"])
		];
	}
}