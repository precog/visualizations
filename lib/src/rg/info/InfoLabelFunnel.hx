/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.Variable;
import rg.data.DataPoint;
import rg.axis.Stats;

@:keep class InfoLabelFunnel extends InfoLabel
{
	public var arrow : DataPoint -> Stats<Dynamic> -> String;

	public static function filters()
	{
		return [{
			field : "arrow",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}].concat(InfoLabel.filters());
	}
}