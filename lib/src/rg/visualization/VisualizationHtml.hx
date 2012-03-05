/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;
import dhx.Selection;

class VisualizationHtml extends Visualization
{
	public function new(container : Selection) 
	{
		super(container);
		container.classed().add("rg");
	}
}