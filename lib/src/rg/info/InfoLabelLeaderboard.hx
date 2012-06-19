/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.Variable;
import rg.data.DataPoint;
import rg.axis.Stats;
import rg.util.Properties;
using rg.info.filter.FilterDescription;

@:keep class InfoLabelLeaderboard extends InfoLabel
{
	public var rank : DataPoint -> Int -> Stats<Dynamic> -> String;
	public var value : DataPoint -> Stats<Dynamic> -> String;

	public static function filters() : Array<FilterDescription>
	{
		return [
			"rank".toFunctionOrNull(),
			"value".toFunctionOrNull()
		].concat(InfoLabel.filters());
	}
/*
	public static function filters() : Array<FieldFilter>
	{
		return [{
			field : "rank",
			validator : function(v) return v == null || Reflect.isFunction(v),
			filter : null
		}, {
			field : "value",
			validator : function(v) return v == null || Reflect.isFunction(v),
			filter : null
		}].concat(InfoLabel.filters());
	}
*/
}