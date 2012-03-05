/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

import rg.visualization.Visualizations;

@:keep class InfoVisualizationType
{
	public var replace : Bool;
	public var type : Null<String>;
	public function new()
	{
		replace = true;
	}

	public static function filters()
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
}