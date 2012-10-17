/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.Variable;
import rg.axis.Stats;
using rg.info.filter.FilterDescription;

@:keep class InfoLabelFunnel extends InfoLabel
{
	public var arrow : Dynamic -> Stats<Dynamic> -> String;

	public static function filters() : Array<FilterDescription>
	{
		return [
			"arrow".toFunction()
		].concat(InfoLabel.filters());
	}
}