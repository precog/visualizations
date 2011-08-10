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

class InfoLineChart 
{
	public var animation : InfoAnimation;
	public var segment : InfoSegment;
	public var symbol : DataPoint -> Stats -> String;
	public var symbolStyle : DataPoint -> Stats -> String;
	public var click : DataPoint -> Stats -> Void;
	public var label : InfoLabel;
	public var line : InfoLine;
	public var displayarea : Bool;
	public var y0property : String;
	
	public function new() 
	{
		animation = new InfoAnimation();
		label = new InfoLabel();
		line = new InfoLine();
		segment = new InfoSegment();
	}
	
	public static function filters()
	{
		return [{
			field : "animation",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "animation",
				value : new InfoAnimation().feed(v)
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
		}, {
			field : "y0property",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "symbol",
			validator : function(v) return Reflect.isFunction(v),
			filter: null
		}, {
			field : "symbolstyle",
			validator : function(v) return Reflect.isFunction(v),
			filter: function(v) return [ {
				field : "symbolStyle",
				value : v
			}]
		}, {
			field : "click",
			validator : function(v) return Reflect.isFunction(v),
			filter: null
		}, {
			field : "label",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "label",
				value : new InfoLabelPivotTable().feed(v)
			}]
		}, {
			field : "line",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "line",
				value : new InfoLine().feed(v)
			}]
		} , {
			field : "displayarea",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}];
	}
}