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
	var titleUsed : Bool;
	var titleOnTop : Bool;

	public function new(width : Int, height : Int, container : Selection, titleontop : Bool ) 
	{
		super(width, height, container);
		titleUsed = false;
		this.titleOnTop = titleontop;
	}
	
	override public function getPanel(name : String) : PanelContext
	{
		switch(name)
		{
			case "main":
				if (null == main)
					main = new PanelContext(space.createPanelAt(titleOnTop ? 1 : 0, FrameLayout.Fill(0, 0)), titleOnTop ? Top : Bottom);
				return main;
			case "title":
				if (titleUsed)
					return null;
				titleUsed = true;
				return new PanelContext(space.createPanelAt(titleOnTop ? 0 : 1, FrameLayout.Fixed(0, 0, 20)), titleOnTop ? Bottom : Top);
			default:
				return null;
		}
	}
}