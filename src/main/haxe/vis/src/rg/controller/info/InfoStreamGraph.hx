/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
using rg.controller.info.Info;

class InfoStreamGraph extends InfoCartesianChart
{
	public function new()
	{
		super();
	}
	
	public static function filters()
	{
		return [].concat(InfoCartesianChart.filters());
	}
}