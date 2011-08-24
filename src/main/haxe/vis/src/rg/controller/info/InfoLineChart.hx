/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.DataPoint;
import rg.data.Stats;
import thx.svg.LineInterpolator;
import thx.svg.LineInterpolators;
using rg.controller.info.Info;

class InfoLineChart extends InfoCartesianChart
{
	public var symbol : DataPoint -> Stats -> String;
	public var symbolStyle : DataPoint -> Stats -> String;
	public var line : InfoLine;
	public var displayarea : Bool;

	public function new()
	{
		super();
		line = new InfoLine();
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
			field : "line",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "line",
				value : new InfoLine().feed(v)
			}]
		}, {
			field : "displayarea",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}].concat(cast InfoCartesianChart.filters());
	}
}