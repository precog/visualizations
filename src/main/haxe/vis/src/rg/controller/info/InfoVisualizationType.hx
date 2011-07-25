/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

class InfoVisualizationType 
{
	public var type : Null<String>;
	public function new() { }
	
	public static function filters() 
	{
		return [{
			field : "visualization",
			validator : function(v) return Arrays.exists(Visualizations.visualizations, v.toLowerCase()),
			filter : function(v) return [{
				value : v.toLowerCase(),
				field : "type"
			}]
		}];
	}
}