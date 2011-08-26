/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoFunnelChart;
import rg.view.layout.Layout;

class VisualizationFunnelChart extends VisualizationSvg
{
	public var info : InfoFunnelChart;
	public function new(layout : Layout) 
	{
		super(layout);
	}
}