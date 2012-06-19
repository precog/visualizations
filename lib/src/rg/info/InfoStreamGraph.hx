/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.svg.chart.StreamEffect;
import rg.svg.chart.StreamEffects;
import thx.svg.LineInterpolator;
import thx.svg.LineInterpolators;
import rg.data.DataPoint;
import rg.axis.Stats;
using rg.info.filter.FilterDescription;
using rg.info.Info;

@:keep class InfoStreamGraph extends InfoCartesianChart
{
	public var interpolation : LineInterpolator;
	public var effect : StreamEffect;
	public var segment : InfoSegment;

	public function new()
	{
		super();
		segment = new InfoSegment();
		interpolation = LineInterpolator.Cardinal();
		effect = GradientVertical(1.25);
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"interpolation".toTry(
				function(value : Dynamic) return LineInterpolators.parse(value),
				"value is expected to be a valid interpolation string, it is '{0}'"
			),
			"effect".toTry(
				function(value : Dynamic) return StreamEffects.parse(value),
				"value is expected to be a valid effect string, it is '{0}'"
			),
			"segmenton".simplified(["segment"],
				function(value) return new InfoSegment().feed({ on : value }),
				ReturnMessageIfNot.isString
			),
			"segment".toInfo(InfoSegment)
		].concat(InfoCartesianChart.filters());
	}
/*
	public static function filters() : Array<Dynamic>
	{
		var arr : Array<Dynamic> = [{
			field : "interpolation",
			validator : function(v : Dynamic) return Std.is(v, String),
			filter : function(v : Dynamic) return [{
				field : "interpolation",
				value : LineInterpolators.parse(v)
			}]
		}, {
			field : "effect",
			validator : function(v : Dynamic) return Std.is(v, String),
			filter : function(v : Dynamic) return [ {
				field : "effect",
				value : StreamEffects.parse(v)
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
		return arr.concat(cast InfoCartesianChart.filters());
	}
*/
}