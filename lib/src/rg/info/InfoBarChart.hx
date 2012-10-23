/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.svg.chart.GradientEffect;
import rg.svg.chart.GradientEffects;

using rg.info.filter.FilterDescription;

using rg.info.Info;

@:keep class InfoBarChart extends InfoCartesianChart
{
	public var stacked : Bool;
	public var effect : GradientEffect;
	public var barPaddingDataPoint : Float;
	public var barPaddingAxis: Float;
	public var barPadding : Float;
	public var horizontal : Bool;
	public var segment : InfoSegment;

	public function new()
	{
		super();
		segment = new InfoSegment();
		stacked = true;
		effect = GradientEffect.Gradient(1.25);
		barPadding = 12;
		barPaddingAxis = 4;
		barPaddingDataPoint = 2;
		horizontal = false;
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"stacked".toBool(),
			"horizontal".toBool(),
			"effect".simplified(
				GradientEffects.parse,
				ReturnMessageIfNot.isString.or(GradientEffects.canParse.make("invalid gradient effect: {0}"))
			),
			"barpadding".toFloat(["barPadding"]),
			"barpaddingaxis".toFloat(["barPaddingAxis"]),
			"barpaddingdatapoint".toFloat(["barPaddingDataPoint"]),
			"segmenton".simplified(["segment"],
				function(value) return new InfoSegment().feed({ on : value }),
				ReturnMessageIfNot.isString
			),
			"segment".toInfo(InfoSegment)
		].concat(InfoCartesianChart.filters());
	}
}