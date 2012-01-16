/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.view.svg.chart.GradientEffect;
import rg.view.svg.chart.GradientEffects;

class InfoBarChart extends InfoCartesianChart
{
	public var stacked : Bool;
	public var effect : GradientEffect;
	public var barPaddingDataPoint : Float;
	public var barPaddingAxis: Float;
	public var barPadding : Float;
	public var horizontal : Bool;
	public function new()
	{
		super();
		stacked = true;
		effect = GradientEffect.Gradient(1.25);
		barPadding = 12;
		barPaddingAxis = 4;
		barPaddingDataPoint = 2;
		horizontal = false;
	}

	public static function filters()
	{
		return [{
			field : "stacked",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}, {
			field : "horizontal",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}, {
			field : "effect",
			validator : function(v) return Std.is(v, String),
			filter : function(v) return [{
				field : "effect",
				value : GradientEffects.parse(v)
			}]
		}, {
			field : "barpadding",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				field : "barPadding",
				value : v
			}]
		}, {
			field : "barpaddingaxis",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				field : "barPaddingAxis",
				value : v
			}]
		}, {
			field : "barpaddingdatapoint",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				field : "barPaddingDataPoint",
				value : v
			}]
		}].concat(cast InfoCartesianChart.filters());
	}
}