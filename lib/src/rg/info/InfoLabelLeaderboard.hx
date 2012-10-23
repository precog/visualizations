/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.Variable;
import rg.axis.Stats;
import rg.util.Properties;
using rg.info.filter.FilterDescription;

@:keep class InfoLabelLeaderboard extends InfoLabel
{
	public var rank : Dynamic -> Int -> Stats<Dynamic> -> String;
	public var value : Dynamic -> Stats<Dynamic> -> String;

	public static function filters() : Array<FilterDescription>
	{
		return [
			"rank".toTemplateFunctionOrNull([null, "index", "stats"]),
			"value".toTemplateFunctionOrNull([null, "stats"])
		].concat(InfoLabel.filters());
	}
}