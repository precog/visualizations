/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;
import rg.layout.Layout;
import rg.svg.chart.Chart;

class VisualizationSvg extends Visualization
{
	public var baseChart(default, null) : Chart;
	public var layout(default, null) : Layout;
	public function new(layout : Layout) 
	{
		super(layout.container);
		this.layout = layout;
	}

	override function setVerticalOffset(offset : Int)
	{
		baseChart.setVerticalChartOffset(offset);
	}
}