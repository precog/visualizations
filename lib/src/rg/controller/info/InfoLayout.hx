/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.view.layout.ScalePattern;
using rg.controller.info.Info;

class InfoLayout
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
	
	public static function filters() 
	{
		return [{
			field : "layout",
			validator : function(v : String) return Std.is(v, String) && Arrays.exists(Visualizations.layouts, v.toLowerCase()),
			filter : function(v : String) {
				return [{
					field : "layout",
					value : v.toLowerCase()
				}];
			}
		}, {
			field : "width",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				value : Math.round(v),
				field : "width"
			}]
		}, {
			field : "height",
			validator : function(v) return Std.is(v, Float),
			filter : function(v) return [{
				value : Math.round(v),
				field : "height"
			}]
		}, {
			field : "visualization",
			validator : function(v) return Arrays.exists(Visualizations.svg, v.toLowerCase()),
			filter : function(v) return [{
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
}