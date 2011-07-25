/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.layout;
import rg.view.svg.panel.Panel;
import rg.view.svg.panel.Space;
import thx.js.Selection;

class Layout 
{
	var space : Space;
	public function new(width : Int, height : Int, container : Selection) 
	{
		container.classed().add("rg");
		space = new Space(width, height, container);
	}
	
	public function getPanel(name : String) : Panel
	{
		return null;
	}
}