/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.layout;

import rg.controller.info.InfoLayout;
import rg.view.svg.panel.Panel;
import rg.view.svg.panel.Container;
import thx.js.Selection;
import rg.view.frame.FrameLayout;
import rg.view.layout.Anchor;
import rg.view.frame.Orientation;

class CartesianLayout extends Layout
{
	var main : PanelContext;
	var titleUsed : Bool;
	var titleOnTop : Bool;
	
	var leftcontainer : Container;
	var rightcontainer : Container;
	var bottomcontainer : Container;
	var maincontainer : Container;
	var middlecontainer : Container;
	
	var bottomleft : Panel;
	var bottomright : Panel;
	var bottom : PanelContext;
	
	var left : Bool;
	var alternating : Bool;

	public function new(width : Int, height : Int, container : Selection) 
	{
		super(width, height, container);
		titleUsed = false;
		titleOnTop = true;
		left = true;
		alternating = true;
	}
	
	override public function getPanel(name : String) : PanelContext
	{
		switch(name)
		{
			case "main":
				return getMain();
			case "title":
				if (titleUsed)
					return null;
				titleUsed = true;
				return new PanelContext(space.createPanelAt(titleOnTop ? 0 : 1, FrameLayout.Fixed(0, 0, 20)), titleOnTop ? Bottom : Top);
			case "x":
				return getBottom();
			case "y":
				var context = if (left)
					new PanelContext(getLeftContainer().createPanelAt(0, FrameLayout.Fixed(0, 0, 20)), Right);
				else
					new PanelContext(getRightContainer().createPanel(FrameLayout.Fixed(0, 0, 20)), Left);
				if (alternating)
					left = !left;
				return context;
			default:
				return null;
		}
	}
	
	function getMainContainer()
	{
		if (null == maincontainer)
			maincontainer = space.createContainerAt(titleOnTop ? 1 : 0, FrameLayout.Fill(0, 0), Vertical);
		return maincontainer;
	}
	
	function getMiddleContainer()
	{
		if (null == middlecontainer)
			middlecontainer = getMainContainer().createContainerAt(0, FrameLayout.Fill(0, 0), Horizontal);
		return middlecontainer;
	}
	
	function getLeftContainer()
	{
		if (null == leftcontainer)
			leftcontainer = getMiddleContainer().createContainerAt(0, FrameLayout.Fixed(0, 0, 20), Horizontal);
		return leftcontainer;
	}
	
	function getRightContainer()
	{
		if (null == rightcontainer)
			rightcontainer = getMiddleContainer().createContainerAt(2, FrameLayout.Fixed(0, 0, 20), Horizontal);
		return rightcontainer;
	}
	
	function getBottomContainer()
	{
		if (null == bottomcontainer)
			bottomcontainer = getMainContainer().createContainerAt(1, FrameLayout.Fixed(0, 0, 20), Horizontal);
		return bottomcontainer;
	}
	
	function getBottom()
	{
		if (null == bottom)
		{
			var container = getBottomContainer();
			bottomleft = container.createPanel(FrameLayout.Fixed(0, 0, 20));
			bottom = new PanelContext(container.createPanel(FrameLayout.Fill(0, 0)), Top);
			bottomright = container.createPanel(FrameLayout.Fixed(0, 0, 20));
		}
		return bottom;
	}
	
	function getMain()
	{
		if (null == main)
			main = new PanelContext(getMiddleContainer().createPanelAt(1, FrameLayout.Fill(0, 0)), Bottom);
		return main;
	}
	
	override function feedOptions(info : InfoLayout)
	{
		super.feedOptions(info);
		titleOnTop = info.titleOnTop;
		
		switch(info.layoutScaleY)
		{
			case LayoutScaleY.ScalesOnLeft:
				left = true;
				alternating = false;
			case LayoutScaleY.ScalesOnRight:
				left = false;
				alternating = false;
			case LayoutScaleY.ScalesAlternating:
				left = true;
				alternating = true;
		}
	}
}