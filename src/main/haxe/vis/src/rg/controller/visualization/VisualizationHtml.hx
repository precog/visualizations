/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import thx.js.Selection;

class VisualizationHtml extends Visualization
{
	public var container(default, null) : Selection;
	public function new(container : Selection) 
	{
		this.container = container;
		container.classed().add("rg");
	}
}