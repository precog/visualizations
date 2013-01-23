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
	public var title : Array<Variable<Dynamic, IAxis<Dynamic>>> -> Array<Dynamic> -> Array<String> -> String;
	public var datapoint : Dynamic -> Stats<Dynamic> -> String;
	public var datapointover : Dynamic -> Stats<Dynamic> -> String;

	public var datapointverticaloffset : Float;
	public var datapointoutline : Bool;
	public var datapointshadow : Bool;

	public function new()
	{
		datapointverticaloffset = 5;
		datapointoutline = false;
		datapointshadow = false;
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"title".toTemplateFunctionOrString(["axes", "values", "types"]),
			"datapoint".toTemplateFunction([null, "stats"]),
			"datapointover".toTemplateFunction([null, "stats"]),
			"datapointverticaloffset".toFloat(),
			"datapointoutline".toBool(),
			"datapointshadow".toBool(),
		];
	}
}