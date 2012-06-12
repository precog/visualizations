/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.svg.chart.GradientEffect;
import rg.svg.chart.GradientEffects;
using rg.info.Info;

@:keep class InfoBarChart extends InfoCartesianChart
{
	public var stacked : Bool;
	public var effect : GradientEffect;
	public var barPaddingDataPoint : Float;
	public var barPaddingAxis: Float;
	public var barPadding : Float;
	public var horizontal : Bool;
	public var segment : InfoSegment;

	public function new()
	{
		super();
		segment = new InfoSegment();
		stacked = true;
		effect = GradientEffect.Gradient(1.25);
		barPadding = 12;
		barPaddingAxis = 4;
		barPaddingDataPoint = 2;
		horizontal = false;
	}

	public static function filters()
	{
		var result : Array<Dynamic> = [{
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
		}, {
			field : "segmenton",
			validator : function(v) return Std.is(v, String),
			filter : function(v) return [{
				field : "segment",
				value : new InfoSegment().feed( { on : v } )
			}]
		}, {
			field : "segment",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "segment",
				value : new InfoSegment().feed(v)
			}]
		}];
		return result.concat(cast InfoCartesianChart.filters());
	}
}