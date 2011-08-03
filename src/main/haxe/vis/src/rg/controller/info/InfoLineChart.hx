/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.DataPoint;
import rg.data.Stats;
using rg.controller.info.Info;

class InfoLineChart 
{
	public var animation : InfoAnimation;
	public var segmenton : String;
	public var symbol : DataPoint -> Stats -> String;
	public var symbolStyle : DataPoint -> Stats -> String;
	public var click : DataPoint -> Stats -> Void;
	public var label : InfoLabel;
	
	public function new() 
	{
		animation = new InfoAnimation();
		label = new InfoLabel();
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
		}];
	}
}