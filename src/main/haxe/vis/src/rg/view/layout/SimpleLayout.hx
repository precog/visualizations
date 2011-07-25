/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.layout;
import thx.js.Selection;
import rg.view.frame.FrameLayout;
import rg.view.layout.Anchor;

class SimpleLayout extends Layout
{
	var main : PanelContext;
	var title : PanelContext;

	public function new(width : Int, height : Int, container : Selection) 
	{
		super(width, height, container);
	}
	
	override public function getPanel(name : String) : PanelContext
	{
		switch(name)
		{
			case "main":
				if (null == main)
					main = new PanelContext(space.createPanel(FrameLayout.Fill(0, 0)), None);
				return main;
			case "title":
				if (null == title)
					title = new PanelContext(space.createPanelAt(0, FrameLayout.Fixed(0, 0, 20)), Bottom);
				return title;
			default:
				return null;
		}
	}
}