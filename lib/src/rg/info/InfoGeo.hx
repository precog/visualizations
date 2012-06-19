/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

import rg.data.DataPoint;
import rg.axis.Stats;
using rg.info.filter.FilterDescription;
using rg.info.Info;
using Arrays;

@:keep class InfoGeo
{
	public var map : Array<InfoMap>;
	public var label : InfoLabel;

	public function new()
	{
		label = new InfoLabel();
		map = [new InfoMap().feed({ template : "world" })];
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"map".toInfoArray(InfoMap)
		];
	}
/*
	public static function filters() : Array<FieldFilter>
	{
		return [{
			field : "map",
			validator : function(v) return Types.isAnonymous(v) || Std.is(v, Array),
			filter : function(v) {
				return [{
					field : "map",
					value : (Std.is(v, Array) ? cast v : [v]).map(function(d, i) {
						return new InfoMap().feed(d);
					})
				}];
			}
		}];
	}
*/
}