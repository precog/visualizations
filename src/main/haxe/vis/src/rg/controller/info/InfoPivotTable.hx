/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.DataPoint;
import thx.color.Hsl;
import thx.color.Colors;
import thx.color.NamedColors;
using rg.controller.info.Info;

class InfoPivotTable 
{
	public var label : InfoLabelPivotTable;
	
	public var heatmapColorStart : Hsl;
	public var heatmapColorEnd : Hsl;
	
	public var displayHeatmap : Bool;
	public var displayColumnTotal : Bool;
	public var displayRowTotal : Bool;
	
	public var columnAxes : Int;
	
	public var click : DataPoint -> Void;
	
	public function new() 
	{
		label = new InfoLabelPivotTable();
		
		heatmapColorStart = new Hsl(210, 1, 1);
		heatmapColorEnd = new Hsl(210, 1, 0.5);
		
		displayHeatmap = true;
		displayColumnTotal = true;
		displayRowTotal = true;
		
		columnAxes = 1;
	}
	
	static function parseColor(s : String)
	{
		var rgb = Colors.parse(s);
		if (null == s)
			rgb = NamedColors.black;
		return Hsl.toHsl(rgb);
	}
	
	public static function filters()
	{
		return [{
			field : "columnaxes",
			validator : function(v) return Std.is(v, Int),
			filter : function(v) return [{
				field : "columnAxes",
				value : v
			}]
		}, {
			field : "displayheatmap",
			validator : function(v) return Std.is(v, Bool),
			filter : function(v) return [{
				field : "displayHeatmap",
				value : v
			}]
		}, {
			field : "displaycolumntotal",
			validator : function(v) return Std.is(v, Bool),
			filter : function(v) return [{
				field : "displayColumnTotal",
				value : v
			}]
		}, {
			field : "displayrowtotal",
			validator : function(v) return Std.is(v, Bool),
			filter : function(v) return [{
				field : "displayRowTotal",
				value : v
			}]
		}, {
			field : "startcolor",
			validator : function(v) return Std.is(v, String),
			filter : function(v) return [{
				field : "heatmapColorStart",
				value : parseColor(v)
			}]
		}, {
			field : "endcolor",
			validator : function(v) return Std.is(v, String),
			filter : function(v) return [{
				field : "heatmapColorEnd",
				value : parseColor(v)
			}]
		}, {
			field : "label",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "label",
				value : new InfoLabelPivotTable().feed(v)
			}]
		}, {
			field : "click",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}];
	}
}