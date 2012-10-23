/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import thx.math.Equations;
using rg.info.filter.FilterDescription;
using rg.info.Info;

@:keep class InfoLeaderboard
{
	public var animation : InfoAnimation;
	public var label : InfoLabelLeaderboard;
	public var click : Dynamic -> Void;
	public var sortDataPoint : Dynamic -> Dynamic -> Int;
	public var usemax : Bool;
	public var displaybar : Bool;
	public var colorscale : Bool;

	public function new()
	{
		animation = new InfoAnimation();
		label = new InfoLabelLeaderboard();
		usemax = false;
		displaybar = true;
		colorscale = false;
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"animation".toInfo(InfoAnimation, function(info) { info.ease = Equations.linear; }),
			"label".toInfo(InfoLabelLeaderboard),
			"click".toFunction(),
			"sort".toExpressionFunction(["a", "b"], ["sortDataPoint"]),
			"displaybar".toBool(),
			"usemax".toBool(),
			"colorscale".toBool(),
		];
	}
}