/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.Variable;
import rg.axis.Stats;
using rg.info.filter.FilterDescription;

@:keep class InfoLabelPivotTable extends InfoLabelAxis
{
	public var total : Float -> Stats<Dynamic> -> String;
	public var totalover : Float -> Stats<Dynamic> -> String;
	public var axisvalue : Dynamic -> String -> String;

	public static function filters() : Array<FilterDescription>
	{
		return [
			"total".toFunction(),
			"totalover".toFunction(),
			"axisvalue".toFunction()
		].concat(InfoLabelAxis.filters());
	}
}