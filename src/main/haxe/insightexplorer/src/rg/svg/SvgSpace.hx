package rg.svg;

import rg.layout.Orientation;
import rg.layout.Disposition;
import rg.layout.StackFrame;
import rg.layout.Frame;
import thx.error.Error;
import thx.js.Dom;
import thx.js.Selection;
import js.Dom;
import rg.layout.Stack;

class SvgSpace
{
	public var svg(default, null) : Selection;
	public var workspace(default, null) : SvgContainer;
	var _stackFrame : StackFrame;
	public function new(width : Int, height : Int, parentSelection : Selection)
	{
		svg = parentSelection.append("svg:svg");
		_stackFrame = new StackFrame(Fill());
		workspace = new SvgSpaceContainer(svg, _stackFrame);
		resize(width, height);
	}
	
	public function resize(width : Int, height : Int)
	{
		if (_stackFrame.width == width && _stackFrame.height == height)
			return;
		svg
			.attr("width").float(width)
			.attr("height").float(height);
		var sf : FrameFriend = _stackFrame;
		sf.set(0, 0, width, height);
	}
	
	public function redraw()
	{
		workspace.redraw();
	}
	
	public function createPanel(disp : Disposition)
	{
		var panel = new SvgPanel(new StackFrame(disp));
		workspace.addPanel(panel);
		return panel;
	}
	
	public function createContainer(disp : Disposition, orientation : Orientation)
	{
		var panel = new SvgContainer(new StackFrame(disp), orientation);
		workspace.addPanel(panel);
		return panel;
	}
}

private class SvgSpaceContainer extends SvgContainer
{
	public function new(svgcontainer : Selection, frame : StackFrame)
	{
		super(frame, Vertical);
//		animatePosition = false;
		init(svgcontainer);
		reframe();
	}
}