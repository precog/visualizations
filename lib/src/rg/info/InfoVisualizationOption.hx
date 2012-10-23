/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.factory.FactoryAxis;
import thx.util.Message;
using rg.info.filter.FilterDescription;
import rg.info.filter.TransformResult;
using rg.info.Info;

@:keep class InfoVisualizationOption
{
	public var variables : Array<InfoVariable>;
	public var options : Dynamic;
	public function new() {}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"axes".toInfoArray(["variables"], InfoVariable),
			"options".toObject()
		];
	}
}