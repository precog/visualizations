/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.DataPoint;
import rg.axis.Stats;
import thx.svg.LineInterpolator;
import thx.svg.LineInterpolators;
import rg.svg.chart.LineEffect;
import rg.svg.chart.LineEffects;
using rg.info.filter.FilterDescription;
using rg.info.Info;

@:keep class InfoLineChart extends InfoCartesianChart
{
	public var effect : LineEffect;
	public var interpolation : LineInterpolator;
	public var symbol : DataPoint -> Stats<Dynamic> -> String;
	public var symbolStyle : DataPoint -> Stats<Dynamic> -> String;
	public var displayarea : Bool;
	public var y0property : String;
	public var segment : InfoSegment;
	public var sensibleradius : Int;

	public function new()
	{
		super();
		segment = new InfoSegment();
		effect = LineEffect.Gradient(-1.2, 2);
		interpolation = LineInterpolator.Linear;
		displayarea = false;
		sensibleradius = 100;
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"symbol".toFunctionOrString(),
			"symbolstyle".toFunctionOrString(["symbolStyle"]),
			"segmenton".simplified(["segment"],
				function(value) return new InfoSegment().feed({ on : value }),
				ReturnMessageIfNot.isString
			),
			"segment".toInfo(InfoSegment),
			"y0property".toStr(),
			"displayarea".toBool(),
			"sensibleradius".toInt(),
			"effect".toTry(
				LineEffects.parse,
				"invalid effect string value '{0}'"
			),
			"interpolation".toTry(
				function(v) return LineInterpolators.parse(v),
				"invalid line interpolation string value '{0}'"
			)
		].concat(InfoCartesianChart.filters());
	}
/*
	public static function filters() : Array<FieldFilter>
	{
		var result : Array<FieldFilter> = [{
			field : "symbol",
			validator : function(v) return Std.is(v, String) || Reflect.isFunction(v),
			filter: function(v : Dynamic) return [ {
				field : "symbol",
				value : Std.is(v, String) ? function(_,_) return v : v
			}]
		}, {
			field : "symbolstyle",
			validator : function(v) return Reflect.isFunction(v),
			filter: function(v) return [ {
				field : "symbolStyle",
				value : v
			}]
		}, {
			field : "y0property",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "displayarea",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}, {
			field : "sensibleradius",
			validator : function(v) return Std.is(v, Int),
			filter : null
		}, {
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
		return result.concat(InfoCartesianChart.filters());
	}
*/
}