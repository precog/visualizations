package rg.svg;
import rg.layout.Frame;
import rg.layout.Orientation;
import rg.layout.StackFrame;
import rg.layout.Stack;

using Iterators;

/**
 * ...
 * @author Franco Ponticelli
 */

class SvgContainer extends SvgPanel
{
	var stack : Stack;
	var panels : Array<SvgPanel>;
	public function new(frame : StackFrame, orientation : Orientation)
	{
		stack = new Stack(frame.width, frame.height, orientation);
		panels = [];
		super(frame);
	}
	
	public function addPanel(panel : SvgPanel)
	{
		return addPanels([panel]);
	}
	
	public function addPanels(it : Iterable<SvgPanel>)
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
			frames.push(cast(panel.frame, StackFrame));
		}
		stack.addMany(frames);
		return this;
	}
	
	public function removePanel(panel : SvgPanel)
	{
		if (!panels.remove(panel))
			return this;
		
		stack.removeChild(cast(panel.frame, StackFrame));
		var f : PanelFriend = panel;
		f.setParent(null);
		return this;
	}
	
	override public function redraw()
	{
		super.redraw();
		panels.iterator().each(function(v, i) v.redraw());
	}
	
	override function reframe()
	{
		super.reframe();
		stack.setSize(frame.width, frame.height);
		stack.reflow();
		redraw();
	}
}

typedef PanelFriend = {
	private function setParent(p : SvgContainer) : Void;
}