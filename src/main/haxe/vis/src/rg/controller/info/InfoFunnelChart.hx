/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.DataPoint;
import rg.data.Stats;
using rg.controller.info.Info;

class InfoFunnelChart 
{
	public var animation : InfoAnimation;
	public var label : InfoLabel;
	public var sortDataPoint : DataPoint -> DataPoint -> Int;
	public var click : DataPoint -> Stats -> Void;
	public var padding : Float;
	public var flatness : Float;
	public var applyGradient : Bool;
	public var arrowSize : Float;
	
	public function new()
	{
		animation = new InfoAnimation();
		label = new InfoLabel();
		padding = 2.5;
		flatness = 1.0;
		applyGradient = true;
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
				value : new InfoLabel().feed(v)
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
			field : "style",
			validator : function(v) return v == "gradient" || v == "none",
			filter : function(v) return [ {
				field : "applyGradient",
				value : v == "gradient"
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