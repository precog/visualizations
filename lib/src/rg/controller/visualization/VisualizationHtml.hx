/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import thx.js.Selection;

class VisualizationHtml extends Visualization
{
	public function new(container : Selection) 
	{
		super(container);
		container.classed().add("rg");
	}
}