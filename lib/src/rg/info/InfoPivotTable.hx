/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.DataPoint;
import rg.axis.Stats;
import thx.color.Hsl;
import thx.color.NamedColors;
import rg.util.RGColors;
using rg.info.filter.FilterDescription;
using rg.info.Info;

@:keep class InfoPivotTable
{
	static var defaultStartColor = new Hsl(210, 1, 1);
	static var defaultEndColor = new Hsl(210, 1, 0.5);
	public var label : InfoLabelPivotTable;

	public var heatmapColorStart : Hsl;
	public var heatmapColorEnd : Hsl;

	public var displayHeatmap : Bool;
	public var displayColumnTotal : Bool;
	public var displayRowTotal : Bool;

	public var columnAxes : Int;

	public var click : DataPoint -> Void;
	public var cellclass : Null<DataPoint -> Stats<Dynamic> -> String>;
	public var valueclass : Null<Dynamic -> String -> String>;
	public var headerclass : Null<String -> String>;
	public var totalclass : Null<Dynamic -> Array<Dynamic> -> String>;

	public function new()
	{
		label = new InfoLabelPivotTable();

		heatmapColorStart = defaultStartColor;
		heatmapColorEnd = defaultEndColor;

		displayHeatmap = true;
		displayColumnTotal = true;
		displayRowTotal = true;

		columnAxes = 1;
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"columnaxes".toInt(["columnAxes"]),
			"displayheatmap".toBool(["displayHeatmap"]),
			"displaycolumntotal".toBool(["displayColumnTotal"]),
			"displayrowtotal".toBool(["displayRowTotal"]),
			"startcolor".toTry(["heatmapColorStart"],
				function(value : Dynamic) return Hsl.toHsl(RGColors.parse(value, defaultStartColor.toCss())),
				"value is not a parsable color '{0}'"
			),
			"endcolor".toTry(["heatmapColorEnd"],
				function(value : Dynamic) return Hsl.toHsl(RGColors.parse(value, defaultEndColor.toCss())),
				"value is not a parsable color '{0}'"
			),
			"label".toInfo(InfoLabelPivotTable),
			"click".toFunction(),
			"cellclass".toFunction(),
			"valueclass".toFunction(),
			"headerclass".toFunction(),
			"totalclass".toFunction()
		];
	}
/*
	public static function filters() : Array<FieldFilter>
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
				value : Hsl.toHsl(RGColors.parse(v, defaultStartColor.toCss()))
			}]
		}, {
			field : "endcolor",
			validator : function(v) return Std.is(v, String),
			filter : function(v) return [{
				field : "heatmapColorEnd",
				value : Hsl.toHsl(RGColors.parse(v, defaultEndColor.toCss()))
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
		}, {
			field : "cellclass",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}, {
			field : "valueclass",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}, {
			field : "headerclass",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}, {
			field : "totalclass",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}];
	}
*/
}