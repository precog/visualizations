/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.axis.Stats;
import thx.svg.LineInterpolator;
import thx.svg.LineInterpolators;
import rg.svg.chart.LineEffect;
import rg.svg.chart.LineEffects;
using rg.info.filter.FilterDescription;
using rg.info.Info;

@:keep class InfoLineChart extends InfoCartesianChart
{
	public var effect : LineEffect;
	public var interpolation : LineInterpolator;
	public var symbol : Dynamic -> Stats<Dynamic> -> String;
	public var symbolStyle : Dynamic -> Stats<Dynamic> -> String;
	public var displayarea : Bool;
	public var y0property : String;
	public var segment : InfoSegment;
	public var sensibleradius : Int;

	public function new()
	{
		super();
		segment = new InfoSegment();
		effect = LineEffect.Gradient(-1.2, 2);
		interpolation = LineInterpolator.Linear;
		displayarea = false;
		sensibleradius = 100;
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"symbol".toExpressionFunctionOrString([null, "stats"]),
			"symbolstyle".toExpressionFunctionOrString([null, "stats"], ["symbolStyle"]),
			"segmenton".simplified(["segment"],
				function(value) return new InfoSegment().feed({ on : value }),
				ReturnMessageIfNot.isString
			),
			"segment".toInfo(InfoSegment),
			"y0property".toStr(),
			"displayarea".toBool(),
			"sensibleradius".toInt(),
			"effect".toTry(
				LineEffects.parse,
				"invalid effect string value '{0}'"
			),
			"interpolation".toTry(
				function(v) return LineInterpolators.parse(v),
				"invalid line interpolation string value '{0}'"
			)
		].concat(InfoCartesianChart.filters());
	}
}