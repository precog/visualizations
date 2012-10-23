/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.axis.Stats;
import rg.svg.chart.GradientEffect;
import rg.svg.chart.GradientEffects;
import rg.info.filter.TransformResult;
import thx.util.Message;
using rg.info.filter.FilterDescription;
using rg.info.Info;

@:keep class InfoFunnelChart
{
	public var animation : InfoAnimation;
	public var label : InfoLabelFunnel;
	public var sortDataPoint : Dynamic -> Dynamic -> Int;
	public var click : Dynamic -> Stats<Dynamic> -> Void;
	public var padding : Float;
	public var flatness : Float;
	public var effect : GradientEffect;
	public var arrowSize : Float;

	public function new()
	{
		animation = new InfoAnimation();
		label = new InfoLabelFunnel();
		padding = 2.5;
		flatness = 1.0;
		effect = GradientEffect.Gradient(1.25);
		arrowSize = 30;
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"animation".toInfo(InfoAnimation),
			"label".toInfo(InfoLabelFunnel),
			"sort".toExpressionFunction(["a", "b"], ["sortDataPoint"]),
			"click".toFunction(),
			"segmentpadding".toFloat(["padding"]),
			"flatness".toFloat(),
			"effect".custom(function(value : Dynamic) {
				if(GradientEffects.canParse(value))
					return TransformResult.Success(GradientEffects.parse(value));
				else
					return TransformResult.Failure(new Message("'{0}' is not a valid effect", value));
			}),
			"arrowsize".toFloat(["arrowSize"])
		];
	}
}