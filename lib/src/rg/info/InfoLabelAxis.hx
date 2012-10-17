/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.Variable;
import rg.axis.Stats;
using rg.info.filter.FilterDescription;

@:keep class InfoLabelAxis extends InfoLabel
{
	public var axis : String -> String;
	public var tickmark : Dynamic -> String -> String;

	public static function filters() : Array<FilterDescription>
	{
		return [
			"axis".toFunction(),
			"tickmark".toFunction()
		].concat(InfoLabel.filters());
	}
}