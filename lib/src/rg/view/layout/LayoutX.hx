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

class LayoutX extends Layout
{
	
	static inline var ALT_RIGHT  = 20;
	static inline var ALT_LEFT   = 20;
	static inline var ALT_TOP    = 8;
	static inline var ALT_BOTTOM = 8;

	var main : Panel;
	var titleOnTop : Bool;
	
	var bottomcontainer : Container;
	var bottommiddlecontainer : Container;
	var maincontainer : Container;
	var middlecontainer : Container;
	
	var xtickmarks : PanelContext;
	var title : PanelContext;
	
	var xtitle : PanelContext;

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
				if (null == title)
					title = new PanelContext(space.createPanelAt(titleOnTop ? 0 : 1, FrameLayout.Fixed(0, 0, 0)), titleOnTop ? Bottom : Top);
				return title;
			case "x":
				return getXTickmarks();
			case "xtitle":
				return getXTitle();
			default:
				return null;
		}
	}
	
	override public function getPanel(name : String) : Panel
	{
		switch(name)
		{
			case "main":
				return getMain();
			case "xtickmarks":
				return getBottomContainer();
			default:
				var ctx = getContext(name);
				if (null == ctx)
					return null;
				return ctx.panel;
		}
	}
	
	override public function suggestSize(name : String, size : Int)
	{
		super.suggestSize(name, size);
		switch(name)
		{
			case "x", "xtitle":
				var size = 0,
					c = getPanel("x");
				if (null != c)
					size += c.frame.height;
				c = getPanel("xtitle");
				if (null != c)
					size += c.frame.height;
				super.suggestSize("xtickmarks", size);
		}
	}

	function getXTitle()
	{
		if (null == xtitle)
			xtitle = new PanelContext(getBottomMiddleContainer().createPanel(FrameLayout.Fixed(0, 0, 0)), Top);
		return xtitle;
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
	
	function getBottomContainer()
	{
		if (null == bottomcontainer)
			bottomcontainer = getMainContainer().createContainerAt(1, FrameLayout.Fixed(0, 0, 0), Horizontal);
		return bottomcontainer;
	}
	
	function getBottomMiddleContainer()
	{
		if (null == bottommiddlecontainer)
		{
			var container = getBottomContainer();
			bottommiddlecontainer = container.createContainer(FrameLayout.Fill(0, 0), Vertical);
			bottommiddlecontainer.g.classed().add("axis-x");
		}
		return bottommiddlecontainer;
	}
	
	function getXTickmarks()
	{
		if (null == xtickmarks)
		{
			var container = getBottomMiddleContainer();
			xtickmarks = new PanelContext(container.createPanelAt(0, FrameLayout.Fixed(0, 0, 0)), Top);
		}
		return xtickmarks;
	}
	
	function getMain()
	{
		if (null == main)
			main = getMiddleContainer().createPanelAt(1, FrameLayout.Fill(0, 0));
		return main;
	}
	
	override function feedOptions(info : InfoLayout)
	{
		super.feedOptions(info);
		titleOnTop = info.titleOnTop;
	}
	
	override function adjustPadding()
	{
		var top    = (null == title && null == paddings.top) ? ALT_TOP : paddings.top,
			bottom = ((null == xtickmarks || !titleOnTop && null == title) && null == paddings.bottom) ? ALT_BOTTOM : paddings.bottom,
			left   = null == paddings.left ? ALT_LEFT : paddings.left,
			right  = null == paddings.right ? ALT_RIGHT : paddings.right
		;

		if (null != left || null != right)
		{
			suggestPanelPadding(getMain(), left, right);
			suggestPanelPadding(bottommiddlecontainer, left, right);
		}
		
		if (null != top || null != bottom)
		{
			suggestPanelPadding(middlecontainer, top, bottom);
		}
	}
}