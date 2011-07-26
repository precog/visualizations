/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.DataPoint;
using rg.controller.info.Info;

class InfoPieChart 
{
	public var innerRadius : Float;
	public var outerRadius : Float;
	public var overRadius : Float;
	public var animation : InfoAnimation;
	public var label : InfoLabel;
	public var gradientLightness : Float;
	public var sortDataPoint : DataPoint -> DataPoint -> Int;
	
	public function new()
	{
		innerRadius = 0.0;
		outerRadius = 0.9;
		overRadius = 0.95;
		animation = new InfoAnimation();
		label = new InfoLabel();
		gradientLightness = 1.5;
	}
	
	public static function filters()
	{
		return [{
			field : "gradientLightness",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "innerRadius",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "outerRadius",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "overRadius",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "animation",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [ {
				field : "animation",
				value : new InfoAnimation().feed(v)
			}]
		}, {
			field : "label",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [ {
				field : "label",
				value : new InfoLabel().feed(v)
			}]
		}, {
			field : "sort",
			validator : function(v) return Reflect.isFunction(v),
			filter : function(v) return [ {
				field : "sortDataPoint",
				value : v
			}]
		}];
	}
}