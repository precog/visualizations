/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.data.Variable;
import rg.axis.Stats;
import rg.axis.IAxis;
using rg.info.filter.FilterDescription;

@:keep class InfoLabel
{
	public var title : Array<Variable<Dynamic, IAxis<Dynamic>>> -> Array<Dynamic> -> String;
	public var datapoint : Dynamic -> Stats<Dynamic> -> String;
	public var datapointover : Dynamic -> Stats<Dynamic> -> String;

	public function new() { }

	public static function filters() : Array<FilterDescription>
	{
		return [
			"title".toFunctionOrString(),
			"datapoint".toFunction(),
			"datapointover".toFunction()
		];
	}
}