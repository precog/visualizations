/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
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

	public var click : Dynamic -> Void;
	public var cellclass : Null<Dynamic -> Stats<Dynamic> -> String>;
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
}