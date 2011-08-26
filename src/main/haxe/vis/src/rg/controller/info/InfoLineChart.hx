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
	public var symbol : DataPoint -> Stats -> String;
	public var symbolStyle : DataPoint -> Stats -> String;
	public var displayarea : Bool;

	public function new()
	{
		super();
		effect = LineEffect.Gradient(0.75, 2);
		interpolation = LineInterpolator.Linear;
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
		}].concat(cast InfoCartesianChart.filters());
	}
}