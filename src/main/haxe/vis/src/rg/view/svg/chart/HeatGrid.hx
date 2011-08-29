/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;
import rg.view.svg.panel.Panel;
import rg.data.DataPoint;

class HeatGrid extends CartesianChart<Array<DataPoint>>
{
	public function new(panel : Panel) 
	{
		super(panel);
	}
}