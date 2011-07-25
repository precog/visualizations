/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

class InfoVisualizationLayout extends Info
{
	static var validLayouts : Array<String>;
	
	public var type : String;
	public function new() { }
	
	public function filter() 
	{
		return [{
			field : "layout",
			validator : function(v : String) return Std.isString(v, String) && Arrays.exists(validLayouts, v.toLowerCase())
			filter : function(v) {
				return {
					field : "type",
					value : v
				};
			}
		}];
	}
}