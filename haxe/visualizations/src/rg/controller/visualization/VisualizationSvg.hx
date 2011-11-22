/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.view.layout.Layout;

class VisualizationSvg extends Visualization
{
	public var layout(default, null) : Layout;
	public function new(layout : Layout) 
	{
		super(layout.container);
		this.layout = layout;
	}
}