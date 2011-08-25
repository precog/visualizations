/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

class InfoBarChart extends InfoCartesianChart
{
	public var stacked : Bool;
	public function new()
	{
		super();
		stacked = true;
	}
	
	public static function filters()
	{
		return [{
			field : "stacked",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}].concat(cast InfoCartesianChart.filters());
	}
}