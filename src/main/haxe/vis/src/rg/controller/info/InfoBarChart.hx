/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

class InfoBarChart extends InfoCartesianChart
{
	public static function filters()
	{
		return [].concat(InfoCartesianChart.filters());
	}
}