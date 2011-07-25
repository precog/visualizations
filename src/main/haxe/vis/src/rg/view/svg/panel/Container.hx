/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.panel;
import rg.view.frame.Orientation;
import rg.view.frame.StackItem;
import rg.view.frame.Stack;
import rg.view.frame.FrameLayout;

using Iterators;

class Container extends Panel
{
	var stack : Stack;
	var panels : Array<Panel>;
	public function new(frame : StackItem, orientation : Orientation)
	{
		stack = new Stack(frame.width, frame.height, orientation);
		panels = [];
		super(frame);
	}
	
	public function insertPanel(pos : Int, panel : Panel)
	{
		if (null == panel)
			return this;
			
		if (pos >= stack.length)
			return addPanel(panel);
		else if (pos < 0)
			pos = 0;
			
		if (null != panel.parent)
			panel.parent.removePanel(panel);
			
		panels.insert(pos, panel);
		var f : PanelFriend = panel;
		f.setParent(this);
		stack.insertItem(pos, cast(panel.frame, StackItem));
		return this;
	}
	
	public function addPanel(panel : Panel)
	{
		return addPanels([panel]);
	}
	
	public function addPanels(it : Iterable<Panel>)
	{
		var frames = [];
		for (panel in it)
		{
			if (null == panel)
				continue;
			
			if (null != panel.parent)
				panel.parent.removePanel(panel);
				
			panels.push(panel);
			var f : PanelFriend = panel;
			f.setParent(this);
			frames.push(cast(panel.frame, StackItem));
		}
		stack.addItems(frames);
		return this;
	}
	
	public function removePanel(panel : Panel)
	{
		if (!panels.remove(panel))
			return this;
		
		stack.removeChild(cast(panel.frame, StackItem));
		var f : PanelFriend = panel;
		f.setParent(null);
		return this;
	}
	
	public function createPanel(layout : FrameLayout)
	{
		var panel = new Panel(new StackItem(layout));
		addPanel(panel);
		return panel;
	}
	
	public function createContainer(layout : FrameLayout, orientation : Orientation)
	{
		var panel = new Container(new StackItem(layout), orientation);
		addPanel(panel);
		return panel;
	}
	
	public function createPanelAt(pos : Int, layout : FrameLayout)
	{
		var panel = new Panel(new StackItem(layout));
		insertPanel(pos, panel);
		return panel;
	}
	
	public function createContainerAt(pos : Int, layout : FrameLayout, orientation : Orientation)
	{
		var panel = new Container(new StackItem(layout), orientation);
		insertPanel(pos, panel);
		return panel;
	}

	override function reframe()
	{
		super.reframe();
		stack.setSize(frame.width, frame.height);
		stack.reflow();
	}

}

typedef PanelFriend = {
	private function setParent(p : Container) : Void;
}