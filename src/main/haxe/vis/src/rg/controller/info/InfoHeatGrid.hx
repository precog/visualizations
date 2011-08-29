/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
using rg.controller.info.Info;

class InfoHeatGrid extends InfoCartesianChart
{
	public function new()
	{
		super();
	}
	
	public static function filters()
	{
		return [].concat(cast InfoCartesianChart.filters());
	}
}