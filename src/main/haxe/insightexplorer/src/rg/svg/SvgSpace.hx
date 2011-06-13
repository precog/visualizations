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
	var _paddingTop : Int;
	var _paddingBottom : Int;
	var _paddingLeft : Int;
	var _paddingRight : Int;
	
	public function new(width : Int, height : Int, parentSelection : Selection, paddingTop = 0, ?paddingRight : Int, ?paddingBottom : Int, ?paddingLeft : Int)
	{
		svg = parentSelection.append("svg:svg");
		
		_paddingTop = paddingTop;
		_paddingRight = null == paddingRight ? _paddingTop : paddingRight;
		_paddingBottom = null == paddingBottom ? _paddingTop : paddingBottom;
		_paddingLeft = null == paddingLeft ? _paddingRight : paddingLeft;
		
		_stackFrame = new StackFrame(Fill(_paddingTop, _paddingBottom));
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
		sf.setLayout(_paddingLeft, _paddingTop, width - _paddingLeft - _paddingRight, height - _paddingTop - _paddingBottom);
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
	
	static var _filterid = 0;
	var _filters : Selection;
	function getFiltersContainer()
	{
		if (null == _filters)
		{
			_filters = svg.insert("svg:g", svg.node().firstChild)
				.attr("id").string("filters");
		}
		return _filters;
	}
	
	public function addEffect(effect : ISvgEffect) : String
	{
		var name = "rgeffect" + (++_filterid);
		effect.appendTo(getFiltersContainer(), name);
		return name;
	}
	
	public function removeEffect(name : String)
	{
		svg.select("filter#" + name).remove();
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