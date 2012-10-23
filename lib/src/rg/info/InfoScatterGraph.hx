/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.axis.Stats;
import rg.svg.util.SymbolCache;
using rg.info.filter.FilterDescription;
using rg.info.Info;

@:keep class InfoScatterGraph extends InfoCartesianChart
{
	public var symbol : Dynamic -> Stats<Dynamic> -> String;
	public var symbolStyle : Dynamic -> Stats<Dynamic> -> String;
	public var segment : InfoSegment;

	public function new()
	{
		super();
		segment = new InfoSegment();
		symbol = function(dp, s) return SymbolCache.cache.get("circle", 16);
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
			"segment".toInfo(InfoSegment)
		].concat(InfoCartesianChart.filters());
	}
}