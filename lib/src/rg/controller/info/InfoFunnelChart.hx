/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.DataPoint;
import rg.data.Stats;
import rg.view.svg.chart.GradientEffect;
import rg.view.svg.chart.GradientEffects;
using rg.controller.info.Info;

class InfoFunnelChart
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

	public static function filters()
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
}