/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.DataPoint;
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
	public var sortDataPoint : DataPoint -> DataPoint -> Int;
	public var click : DataPoint -> Stats<Dynamic> -> Void;
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
			"sort".toFunction(["sortDataPoint"]),
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
/*
	public static function filters() : Array<Dynamic>
	{
		return [{
			field : "animation",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "animation",
				value : new InfoAnimation().feed(v)
			}]
		}, {
			field : "label",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "label",
				value : new InfoLabelFunnel().feed(v)
			}]
		}, {
			field : "sort",
			validator : function(v) return Reflect.isFunction(v),
			filter : function(v) return [{
				field : "sortDataPoint",
				value : v
			}]
		}, {
			field : "click",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}, {
			field : "segmentpadding",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [ {
				field : "padding",
				value : v
			}]
		}, {
			field : "flatness",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "effect",
			validator : GradientEffects.canParse,
			filter : function(v) return [ {
				field : "effect",
				value : GradientEffects.parse(v)
			}]
		}, {
			field : "arrowsize",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [ {
				field : "arrowSize",
				value : v
			}]
		}];
	}
*/
}