/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.axis.Stats;
using rg.info.filter.FilterDescription;
using rg.info.Info;
using Arrays;

@:keep class InfoGeo
{
	public var map : Array<InfoMap>;
	public var label : InfoLabel;
	public var labelOutline : Bool = false;
	public var labelShadow : Bool = false;

	public function new()
	{
		label = new InfoLabel();
		map = [new InfoMap().feed({ template : "world" })];
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"map".toInfoArray(InfoMap),
			"labeloutline".toBool(["labelOutline"]),
			"labelshadow".toBool(["labelShadow"])
		];
	}
}