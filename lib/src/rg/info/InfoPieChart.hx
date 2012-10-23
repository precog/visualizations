/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.svg.chart.GradientEffect;
import rg.svg.chart.GradientEffects;
import rg.svg.widget.LabelOrientation;
import thx.error.Error;
using rg.info.filter.FilterDescription;
using rg.info.Info;
using Arrays;

@:keep class InfoPieChart
{
	public var labelradius : Float;
	public var labelorientation : LabelOrientation;

	public var innerradius : Float;
	public var outerradius : Float;
	public var overradius : Float;
	public var tooltipradius : Float;
	public var animation : InfoAnimation;
	public var label : InfoLabel;
	public var effect : GradientEffect;
	public var sortDataPoint : Dynamic -> Dynamic -> Int;
	public var dontfliplabel : Bool;

	public var click : Dynamic -> Void;

	public function new()
	{
		innerradius = 0.0;
		labelradius = 0.45;
		labelorientation = LabelOrientation.Aligned;
		outerradius = 0.9;
		overradius = 0.95;
		tooltipradius = 0.5;
		animation = new InfoAnimation();
		label = new InfoLabel();
		effect = GradientEffect.Gradient(1.2);
		dontfliplabel = true;
	}

	static function validateOrientation(s : String)
	{
		var name = s.split(":")[0].toLowerCase();
		return ["fixed", "ortho", "orthogonal", "align", "aligned", "horizontal"].exists(name);
	}

	static function filterOrientation(s : String)
	{
		var name = s.split(":")[0].toLowerCase();
		switch(name)
		{
			case "fixed":
				var v = Std.parseFloat(s.split(":")[1]);
				if (null == v || !Math.isFinite(v))
					throw new Error("when 'fixed' is used a number should follow the 'dash' character");
				return LabelOrientation.FixedAngle(v);
			case "ortho", "orthogonal":
				return LabelOrientation.Orthogonal;
			case "align", "aligned":
				return LabelOrientation.Aligned;
			case "horizontal":
				return LabelOrientation.FixedAngle(0);
			default:
				throw new Error("invalid filter orientation '{0}'", s);
		}
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"labelradius".toFloat(),
			"dontfliplabel".toBool(),
			"labelorientation".toTry(
					filterOrientation,
					"invalid orientation value '{0}'"
				),
			"innerradius".toFloat(),
			"outerradius".toFloat(),
			"overradius".toFloat(),
			"tooltipradius".toFloat(),
			"animation".toInfo(InfoAnimation),
			"label".toInfo(InfoLabel),
			"sort".toExpressionFunction(["a", "b"], ["sortDataPoint"]),
			"click".toFunction(),
			"effect".simplified(
				GradientEffects.parse,
				ReturnMessageIfNot.isString.or(GradientEffects.canParse.make("invalid gradient effect: {0}"))
			)
		];
	}
}