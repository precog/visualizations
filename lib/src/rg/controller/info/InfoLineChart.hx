/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.DataPoint;
import rg.data.Stats;
import thx.svg.LineInterpolator;
import thx.svg.LineInterpolators;
import rg.view.svg.chart.LineEffect;
import rg.view.svg.chart.LineEffects;
using rg.controller.info.Info;

class InfoLineChart extends InfoCartesianChart
{
	public var effect : LineEffect;
	public var interpolation : LineInterpolator;
	public var symbol : DataPoint -> Stats<Dynamic> -> String;
	public var symbolStyle : DataPoint -> Stats<Dynamic> -> String;
	public var displayarea : Bool;
	public var y0property : String;
	public var segment : InfoSegment;

	public function new()
	{
		super();
		segment = new InfoSegment();
		effect = LineEffect.Gradient(-1.2, 2);
		interpolation = LineInterpolator.Linear;
		displayarea = false;
	}

	public static function filters()
	{
		return [{
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
		}].concat(cast InfoCartesianChart.filters());
	}
}