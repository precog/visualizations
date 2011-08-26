/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.view.svg.widget.BarEffect;
import rg.view.svg.widget.BarEffects;

class InfoBarChart extends InfoCartesianChart
{
	public var stacked : Bool;
	public var effect : BarEffect;
	public function new()
	{
		super();
		stacked = true;
		effect = BarEffect.Gradient(0.75);
	}
	
	public static function filters()
	{
		return [{
			field : "stacked",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}, {
			field : "effect",
			validator : function(v) return Std.is(v, String),
			filter : function(v) return [{
				field : "effect",
				value : BarEffects.parse(v)
			}]
		}].concat(cast InfoCartesianChart.filters());
	}
}