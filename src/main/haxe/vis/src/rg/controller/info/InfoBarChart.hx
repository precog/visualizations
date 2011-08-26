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
	public var barPaddingDataPoint : Float;
	public var barPaddingAxis: Float;
	public var barPadding : Float;
	public function new()
	{
		super();
		stacked = true;
		effect = BarEffect.Gradient(0.75);
		barPadding = 16;
		barPaddingAxis = 4;
		barPaddingDataPoint = 2;
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