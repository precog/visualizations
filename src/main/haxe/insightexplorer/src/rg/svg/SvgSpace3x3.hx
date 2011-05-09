package rg.svg;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.layout.Disposition;
import rg.layout.Orientation;
import rg.layout.StackFrame;
import thx.js.Selection;

class SvgSpace3x3 extends SvgSpace
{
	public var top(default, null) : SvgPanel;
	public var topLeft(default, null) : SvgPanel;
	public var topRight(default, null) : SvgPanel;
	public var left(default, null) : SvgPanel;
	public var center(default, null) : SvgPanel;
	public var right(default, null) : SvgPanel;
	public var bottomLeft(default, null) : SvgPanel;
	public var bottom(default, null) : SvgPanel;
	public var bottomRight(default, null) : SvgPanel;
	
	var containers : Array<SvgContainer>;
	var frames : Array<StackFrame>;
	
	public function new(width : Int, height : Int, parentSelection : Selection<Dynamic>, t = 50, ?r : Int, ?b : Int, ?l : Int)
	{
		super(width, height, parentSelection);
		if (null == r)
			r = t;
		if (null == b)
			b = t;
		if (null == l)
			l = r;

		containers = [];
		frames = [];
		
		this.workspace.addPanels([
			containers[0] = new SvgContainer(frames[0] = new StackFrame(Fixed(t)), Horizontal),
			containers[1] = new SvgContainer(new StackFrame(Fill()), Horizontal),
			containers[2] = new SvgContainer(frames[1] = new StackFrame(Fixed(b)), Horizontal),
		]);
		
		containers[0].addPanels([
			topLeft  = new SvgPanel(frames[2] = new StackFrame(Fixed(l))),
			top      = new SvgPanel(new StackFrame(Fill())),
			topRight = new SvgPanel(frames[3] = new StackFrame(Fixed(r))),
		]);
		
		containers[1].addPanels([
			left   = new SvgPanel(frames[4] = new StackFrame(Fixed(l))),
			center = new SvgPanel(new StackFrame(Fill())),
			right  = new SvgPanel(frames[5] = new StackFrame(Fixed(r))),
		]);
		
		containers[2].addPanels([
			bottomLeft  = new SvgPanel(frames[6]  = new StackFrame(Fixed(l))),
			bottom      = new SvgPanel(new StackFrame(Fill())),
			bottomRight = new SvgPanel(frames[7] = new StackFrame(Fixed(r))),
		]);
	}
	
	public function setTop(v : Int)
	{
		if (v < 0)
			v = 0;
		frames[0].disposition = Fixed(v);
		return this;
	}
	
	public function setBottom(v : Int)
	{
		if (v < 0)
			v = 0;
		frames[1].disposition = Fixed(v);
		return this;
	}
	
	public function setLeft(v : Int)
	{
		if (v < 0)
			v = 0;
		frames[2].disposition = Fixed(v);
		frames[4].disposition = Fixed(v);
		frames[6].disposition = Fixed(v);
		return this;
	}
	
	public function setRight(v : Int)
	{
		if (v < 0)
			v = 0;
		frames[3].disposition = Fixed(v);
		frames[5].disposition = Fixed(v);
		frames[7].disposition = Fixed(v);
		return this;
	}
}