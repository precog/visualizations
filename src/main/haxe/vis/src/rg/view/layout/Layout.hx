/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.layout;
import rg.controller.info.InfoLayout;
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
	
	public function getContext(name : String) : PanelContext
	{
		return null;
	}
	
	public function getPanel(name : String) : Panel
	{
		return null;
	}
	
	public function suggestSize(name : String, size : Int)
	{
		var panel = getPanel(name);
		if (null == panel)
			return;
		suggestPanelSize(panel, size);
	}
	
	function suggestPanelSize(panel : Panel, size : Int)
	{
		var stackitem = Types.as(panel.frame, StackItem);
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
	
	public function feedOptions(info : InfoLayout)
	{
		this.mainPanelName = info.main;
	}
}