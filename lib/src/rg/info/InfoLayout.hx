/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.layout.ScalePattern;
import rg.visualization.Visualizations;
import thx.util.Message;
using rg.info.filter.FilterDescription;
using rg.info.filter.TransformResult;
using rg.info.Info;

@:keep class InfoLayout
{
	public var layout : Null<String>;
	public var width  : Null<Int>;
	public var height : Null<Int>;
	public var type : Null<String>;
	public var main : String;
	public var titleOnTop : Bool;
	public var scalePattern : ScalePattern;
	public var padding : InfoPadding;

	public function new()
	{
		main = "main";
		titleOnTop = true;
		scalePattern = ScalesAlternating;
		padding = new InfoPadding();
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"layout".custom(function(value : Dynamic) {
				var v = null == value ? null : (""+value).toLowerCase();
				if(!Arrays.exists(Visualizations.layouts, v))
					return TransformResult.Failure(new Message("value '{0}' is not a valid visualization layout", [value]));
				else
					return TransformResult.Success(v);
			}),
			"width".toFloat(),
			"height".toFloat(),
			"visualization".custom(["type"], function(value : Dynamic) {
				var v = null == value ? null : (""+value).toLowerCase();
				if(!Arrays.exists(Visualizations.svg, v))
					return TransformResult.Failure(new Message("value '{0}' is not a valid visualization type", [value]));
				else
					return TransformResult.Success(v);
			}),
			"main".toStr(),
			"titleontop".toBool(["titleOnTop"]),
			"yscaleposition".custom(["type"], function(value : Dynamic) {
				if(!Std.is(value, Dynamic))
					return TransformResult.Failure(new Message("value '{0}' must be a string", [value]));
				return TransformResult.Success(switch(value) {
					case "alt", "alternate", "alternating": ScalePattern.ScalesAlternating;
					case "right": ScalePattern.ScalesAfter;
					default: ScalePattern.ScalesBefore;
				});
			}),
			"padding".toInfo(InfoPadding)
		];
	}
/*
	public static function filters() : Array<FieldFilter>
	{
		return cast [{
			field : "layout",
			validator : function(v : String) return Std.is(v, String) && Arrays.exists(Visualizations.layouts, v.toLowerCase()),
			filter : function(v : Dynamic) {
				return cast [{
					field : "layout",
					value : v.toLowerCase()
				}];
			}
		}, {
			field : "width",
			validator : function(v) return Std.is(v, Float),
			filter : function(v : Dynamic) return cast [{
				value : Math.round(v),
				field : "width"
			}]
		}, {
			field : "height",
			validator : function(v) return Std.is(v, Float),
			filter : function(v : Dynamic) return cast [{
				value : Math.round(v),
				field : "height"
			}]
		}, {
			field : "visualization",
			validator : function(v) return Arrays.exists(Visualizations.svg, v.toLowerCase()),
			filter : function(v : Dynamic) return cast [{
				value : v.toLowerCase(),
				field : "type"
			}]
		}, {
			field : "main",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "titleontop",
			validator : function(v) return Std.is(v, Bool),
			filter : function(v) return [ {
				value : v,
				field : "titleOnTop"
			}]
		}, {
			field : "yscaleposition",
			validator : function(v) return Std.is(v, String),
			filter : function(v) return [ {
				value : v,
				field : switch(v) {
					case "alt", "alternate", "alternating": ScalePattern.ScalesAlternating;
					case "right": ScalePattern.ScalesAfter;
					default: ScalePattern.ScalesBefore;
				}
			}]
		}, {
			field : "padding",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return[ {
				field : "padding",
				value : new InfoPadding().feed(v)
			}]
		}];
	}
*/
}