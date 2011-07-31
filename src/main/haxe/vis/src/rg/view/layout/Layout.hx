/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.layout;
import rg.view.svg.panel.Panel;
import rg.view.svg.panel.Space;
import thx.js.Selection;
import rg.view.frame.StackItem;
import rg.view.frame.FrameLayout;

class Layout 
{
	public var mainPanelName : String;
	var space : Space;
	var container : Selection;
	public function new(width : Int, height : Int, container : Selection) 
	{
		this.container = container;
		container.classed().add("rg");
		space = new Space(width, height, container);
	}
	
	public function getPanel(name : String) : PanelContext
	{
		return null;
	}
	
	public function suggestSize(name : String, size : Int)
	{
		var context = getPanel(name);
		if (null == context)
			return;
		var stackitem = Types.as(context.panel.frame, StackItem);
		if (null == stackitem)
			return;
		switch(stackitem.disposition)
		{
			case Fixed(b, a, _):
				stackitem.disposition = Fixed(b, a, size);
			default:
				// do nothing
		}
	}
}