/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;
import rg.layout.Layout;

class VisualizationSvg extends Visualization
{
	public var layout(default, null) : Layout;
	public function new(layout : Layout) 
	{
		super(layout.container);
		this.layout = layout;
	}
}