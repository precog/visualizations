/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.DataPoint;
import rg.data.Stats;
using rg.controller.info.Info;

class InfoCartesianChart 
{
	public var animation : InfoAnimation;
	public var segment : InfoSegment;
	public var click : DataPoint -> Stats -> Void;
	public var label : InfoLabelAxis;
	public var y0property : String;
	
	public var displayMinor : String -> Bool;
	public var displayMajor : String -> Bool;
	public var displayLabel : String -> Bool;
	public var displayAnchorLine : String -> Bool;

	public var labelOrientation : String -> Null<String>;
	public var labelAnchor : String -> Null<String>;
	public var labelAngle : String -> Null<Float>;

	public var lengthTickMinor : Float;
	public var lengthTickMajor : Float;
	public var paddingTickMinor : Float;
	public var paddingTickMajor : Float;
	public var paddingLabel : Float;
	
	public function new() 
	{
		animation = new InfoAnimation();
		label = new InfoLabelAxis();
		segment = new InfoSegment();
		displayMinor = function(_) return true;
		displayMajor = function(_) return true;
		displayLabel = function(_) return true;
		displayAnchorLine = function(_) return false;
		
		labelOrientation = function(_) return null;
		labelAnchor = function(_) return null;
		labelAngle = function(_) return null;
		
		lengthTickMinor = 2;
		lengthTickMajor = 5;
		paddingTickMinor = 1;
		paddingTickMajor = 1;
		paddingLabel = 10;
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
			field : "click",
			validator : function(v) return Reflect.isFunction(v),
			filter: null
		}, {
			field : "label",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "label",
				value : new InfoLabelAxis().feed(v)
			}]
		}, {
			field : "displaytickmarks",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayMinor",
				value : Std.is(v, Bool) ? function(_) return v : v
			}, {
				field : "displayMajor",
				value : Std.is(v, Bool) ? function(_) return v : v
			}, {
				field : "displayLabel",
				value : Std.is(v, Bool) ? function(_) return v : v
			}]
		}, {
			field : "displaytickminor",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayMinor",
				value : Std.is(v, Bool) ? function(_) return v : v
			}]
		}, {
			field : "displaytickmajor",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayMajor",
				value : Std.is(v, Bool) ? function(_) return v : v
			}]
		}, {
			field : "displayticklabel",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayLabel",
				value : Std.is(v, Bool) ? function(_) return v : v
			}]
		}, {
			field : "displayanchorline",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayAnchorLine",
				value : Std.is(v, Bool) ? function(_) return v : v
			}]
		}, {
			field : "lengthtick",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				field : "lengthTickMajor",
				value : v
			}, {
				field : "lengthTickMinor",
				value : v
			}]
		}, {
			field : "lengthtickminor",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				field : "lengthTickMinor",
				value : v
			}]
		}, {
			field : "lengthtickmajor",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				field : "lengthTickMajor",
				value : v
			}]
		}, {
			field : "paddingtick",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				field : "paddingTickMajor",
				value : v
			}, {
				field : "paddingTickMinor",
				value : v
			}]
		}, {
			field : "paddingtickminor",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				field : "paddingTickMinor",
				value : v
			}]
		}, {
			field : "paddingtickmajor",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				field : "paddingTickMajor",
				value : v
			}]
		}, {
			field : "paddingticklabel",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				field : "paddingLabel",
				value : v
			}]
		}, {
			field : "labelorientation",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, String),
			filter : function(v : Dynamic) return [{
				field : "labelOrientation",
				value : Std.is(v, String) ? function(_) return v : v
			}]
		}, {
			field : "labelanchor",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, String),
			filter : function(v : Dynamic) return [{
				field : "labelAnchor",
				value : Std.is(v, String) ? function(_) return v : v
			}]
		}, {
			field : "labelangle",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Float),
			filter : function(v : Dynamic) return [{
				field : "labelAngle",
				value : Std.is(v, Float) ? function(_) return v : v
			}]
		}];
	}
}