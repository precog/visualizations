/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.view.svg.widget.LineEffect;
import rg.view.svg.widget.LineEffects;
import thx.svg.LineInterpolator;
import thx.svg.LineInterpolators;

class InfoLine 
{
	public var effect : LineEffect;
	public var interpolation : LineInterpolator;
	public function new() 
	{
		effect = LineEffect.Gradient(0.75, 2);
		interpolation = LineInterpolator.Linear;
	}
	
	public static function filters() 
	{
		return [{
			field : "effect",
			validator : function(v) return Std.is(v, String),
			filter : function(v) return [{
				field : "effect",
				value : LineEffects.parse(v)
			}]
		}, {
			field : "interpolation",
			validator : function(v) return Std.is(v, String),
			filter : function(v) return [{
				field : "interpolation",
				value : LineInterpolators.parse(v)
			}]
		}];
	}
}