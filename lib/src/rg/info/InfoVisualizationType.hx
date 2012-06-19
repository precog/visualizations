/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

import rg.visualization.Visualizations;
using rg.info.filter.FilterDescription;
import rg.info.filter.TransformResult;
import thx.util.Message;

@:keep class InfoVisualizationType
{
	public var replace : Bool;
	public var type : Null<String>;
	public function new()
	{
		replace = true;
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"visualization".custom(["type"], function(value : Dynamic) {
				var v = null == value ? null : (""+value).toLowerCase();
				if(Arrays.exists(Visualizations.visualizations, v))
				{
					return TransformResult.Success(v);
				} else {
					return TransformResult.Failure(new Message("invalid visualization type '{0}'", value));
				}
			}),
			"replace".toBool()
		];
	}
/*
	public static function filters() : Array<Dynamic>
	{
		return [{
			field : "visualization",
			validator : function(v) return Arrays.exists(Visualizations.visualizations, v.toLowerCase()),
			filter : function(v) return [{
				value : v.toLowerCase(),
				field : "type"
			}]
		}, {
			field : "replace",
			validator : function(v) return Std.is(v, Bool),
			filtern : null
		}];
	}
*/
}