/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

class InfoLayout
{
	public var layout : Null<String>;
	public var width  : Null<Int>;
	public var height : Null<Int>;
	public var type : Null<String>;
	public var main : String;
	public function new()
	{
		main = "main";
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
		}];
	}
}