/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.DataPoint;
import rg.axis.Stats;
using rg.info.Info;

@:keep class InfoCartesianChart
{
	public var animation : InfoAnimation;
	public var click : DataPoint -> Stats<Dynamic> -> Void;
	public var label : InfoLabelAxis;

	public var displayMinorTick : String -> Bool;
	public var displayMajorTick : String -> Bool;
	public var displayLabelTick : String -> Bool;
	public var displayAnchorLineTick : String -> Bool;

	public var displayMinorRule : String -> Bool;
	public var displayMajorRule : String -> Bool;
	public var displayAnchorLineRule : String -> Bool;

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
		displayMinorTick = function(_) return true;
		displayMajorTick = function(_) return true;
		displayLabelTick = function(_) return true;
		displayAnchorLineTick = function(_) return false;

		displayMinorRule = function(_) return false;
		displayMajorRule = function(_) return false;
		displayAnchorLineRule = function(_) return false;

		labelOrientation = function(_) return null;
		labelAnchor = function(_) return null;
		labelAngle = function(_) return null;

		lengthTickMinor = 2;
		lengthTickMajor = 5;
		paddingTickMinor = 1;
		paddingTickMajor = 1;
		paddingLabel = 10;
	}

	public static function filters() : Array<FieldFilter>
	{
		return [{
			field : "animation",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "animation",
				value : new InfoAnimation().feed(v)
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
				value : new InfoLabelAxis().feed(v)
			}]
		}, {
			field : "displaytickmarks",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayMinorTick",
				value : Std.is(v, Bool) ? function(_) return v : v
			}, {
				field : "displayMajorTick",
				value : Std.is(v, Bool) ? function(_) return v : v
			}, {
				field : "displayLabelTick",
				value : Std.is(v, Bool) ? function(_) return v : v
			}]
		}, {
			field : "displaytickminor",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayMinorTick",
				value : Std.is(v, Bool) ? function(_) return v : v
			}]
		}, {
			field : "displaytickmajor",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayMajorTick",
				value : Std.is(v, Bool) ? function(_) return v : v
			}]
		}, {
			field : "displayticklabel",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayLabelTick",
				value : Std.is(v, Bool) ? function(_) return v : v
			}]
		}, {
			field : "displayanchorlinetick",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayAnchorLineTick",
				value : Std.is(v, Bool) ? function(_) return v : v
			}]
		}, {
			field : "displayrules",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayMinorRule",
				value : Std.is(v, Bool) ? function(_) return v : v
			}, {
				field : "displayMajorRule",
				value : Std.is(v, Bool) ? function(_) return v : v
			}]
		}, {
			field : "displayruleminor",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayMinorRule",
				value : Std.is(v, Bool) ? function(_) return v : v
			}]
		}, {
			field : "displayrulemajor",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayMajorRule",
				value : Std.is(v, Bool) ? function(_) return v : v
			}]
		}, {
			field : "displayanchorlinerule",
			validator : function(v : Dynamic) return Reflect.isFunction(v) || Std.is(v, Bool),
			filter : function(v : Dynamic) return [{
				field : "displayAnchorLineRule",
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