/**
 * ...
 * @author Franco Ponticelli
 */

package rg.layout;
import dhx.Selection;
import rg.frame.FrameLayout;
import rg.layout.Anchor;
import rg.info.InfoLayout;
import rg.svg.panel.Panel;

@:keep class LayoutSimple extends Layout
{
	var main : Panel;
	var titleOnTop : Bool;

	public function new(width : Int, height : Int, container : Selection)
	{
		super(width, height, container);
		titleOnTop = true;
	}

	override public function getContext(name : String) : PanelContext
	{
		switch(name)
		{
			case "title":
				if (null != title)
					return null;
				return getTitle();
			default:
				return null;
		}
	}

	override public function getPanel(name : String) : Panel
	{
		switch(name)
		{
			case "main":
				if (null == main)
					main = space.createPanelAt(titleOnTop ? 1 : 0, FrameLayout.Fill(0, 0));
				return main;
			case "title":
				return getTitle().panel;
			default:
				return null;
		}
	}

	var title : PanelContext;
	function getTitle()
	{
		if (null == title)
			title = new PanelContext(space.createPanelAt(titleOnTop ? 0 : 1, FrameLayout.Fixed(0, 0, 20)), titleOnTop ? Bottom : Top);
		return title;
	}

	override function feedOptions(info : InfoLayout)
	{
		super.feedOptions(info);
		titleOnTop = info.titleOnTop;
	}
}