/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.Variable;
import rg.data.DataPoint;
import rg.axis.Stats;
using rg.info.filter.FilterDescription;

@:keep class InfoLabelFunnel extends InfoLabel
{
	public var arrow : DataPoint -> Stats<Dynamic> -> String;

	public static function filters() : Array<FilterDescription>
	{
		return [
			"arrow".toFunction()
		].concat(InfoLabel.filters());
	}
/*
	public static function filters() : Array<FieldFilter>
	{
		return [{
			field : "arrow",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}].concat(InfoLabel.filters());
	}
*/
}