/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.Variable;
import rg.axis.Stats;
using rg.info.filter.FilterDescription;

@:keep class InfoLabelSankey extends InfoLabel
{
	public var edge : { head : Dynamic, tail : Dynamic, edgeweight : Float, nodeweight : Float } -> Stats<Dynamic> -> String;
	public var edgeover : { head : Dynamic, tail : Dynamic, edgeweight : Float, nodeweight : Float } -> Stats<Dynamic> -> String;
	public var node : Dynamic -> Stats<Dynamic> -> String;

	public static function filters() : Array<FilterDescription>
	{
		return [
			"edge".toTemplateFunction([null, "stats"]),
			"edgeover".toTemplateFunction([null, "stats"]),
			"node".toTemplateFunction([null, "stats"])
		].concat(InfoLabel.filters());
	}
}