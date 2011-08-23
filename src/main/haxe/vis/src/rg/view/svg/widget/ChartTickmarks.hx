/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.widget;
import rg.data.IAxis;
import rg.view.layout.Anchor;
import rg.view.svg.panel.Layer;
import rg.view.svg.panel.Panel;
import rg.data.ITickmark;
import thx.js.Dom;

class ChartTickmarks extends Layer
{
	var anchor : Anchor;
	
	public var tickDisplay : Bool;
	public var tickMinorLength : Float;
	public var tickMajorLength : Float;
	public var tickMinorPadding : Float;
	public var tickMajorPadding : Float;
	public var labelDisplay : Bool;
	public var labelPadding : Float;
	public var labelOrientation : LabelOrientation;
	public var labelAnchor : GridAnchor;
	public var labelAngle : Float;
	public var desiredSize(default, null) : Float;
	
	
	var translate : ITickmark<Dynamic> -> Int -> String;
	var x1 : ITickmark<Dynamic> -> Int -> Float;
	var y1 : ITickmark<Dynamic> -> Int -> Float;
	var x2 : ITickmark<Dynamic> -> Int -> Float;
	var y2 : ITickmark<Dynamic> -> Int -> Float;
	var x : ITickmark<Dynamic> -> Int -> Float;
	var y : ITickmark<Dynamic> -> Int -> Float;
	
	public function new(panel : Panel, anchor : Anchor) 
	{
		super(panel);
		this.anchor = anchor;
		
		tickDisplay = true;
		tickMinorLength = 2;
		tickMajorLength = 5;
		tickMinorPadding = 1;
		tickMajorPadding = 1;
		labelDisplay = true;
		labelPadding = 10;
		
		g.classed().add("tickmarks");
		initf();
	}
	
	var axis : IAxis<Dynamic>;
	var min : Dynamic;
	var max : Dynamic;
	
	override function resize()
	{
		if (null == axis)
			return;
		redraw();
	}
	
	public function update(axis : IAxis<Dynamic>, min : Dynamic, max : Dynamic)
	{
		this.axis = axis;
		this.min = min;
		this.max = max;
		redraw();
	}
	
	function maxTicks()
	{
		var size = switch(anchor)
		{
			case Left, Right: height;
			case Top, Bottom: width;
		}
		return Math.round(size / 2.5);
	}
	
	function redraw()
	{
		desiredSize = Math.max(tickMinorPadding + tickMinorLength, tickMajorPadding + tickMajorLength);
		var ticks = maxTicks();
		var data = axis.ticks(min, max, ticks);

		// ticks
		var tick = g.selectAll("g.tick").data(data, function(d,i) return "" + d.value);
		var enter = tick.enter()
			.append("svg:g").attr("class").string("tick")
			.attr("transform").stringf(translate);
		enter
			.append("svg:line")
				.attr("x1").floatf(x1)
				.attr("y1").floatf(y1)
				.attr("x2").floatf(x2)
				.attr("y2").floatf(y2)
				.attr("class").stringf(tickClass)
		;
		
		enter.eachNode(createLabel);
		
		tick.update()
			.attr("transform").stringf(translate);
			
		tick.exit()
			.remove();
	}
	
	function createLabel(n, i)
	{
		var d : ITickmark<Dynamic> = thx.js.Access.getData(n);
		if (!d.major)
			return;
		var label = new Label(Dom.selectNode(n), false, true, false);
		label.anchor = labelAnchor;
		label.orientation = labelOrientation;
		var padding = labelPadding;
		label.text = d.label;
		switch(anchor)
		{
			case Top:
				label.place(0, padding, labelAngle);
			case Bottom:
				label.place(0, -padding, labelAngle);
			case Left:
				label.place(padding, 0, labelAngle);
			case Right:
				label.place(-padding, 0, labelAngle);
		}
		
		var s = switch(anchor)
		{
			case Top, Bottom:
				label.getSize().height + padding;
			case Left, Right:
				label.getSize().width + padding;
		};
		if (s > desiredSize)
			desiredSize = s;
	}
	
	function initf()
	{
		switch(anchor)
		{
			case Top:
				translate = translateTop;
				x1 = x1Top;
				y1 = y1Top;
				x2 = x2Top;
				y2 = y2Top;
			case Bottom:
				translate = translateBottom;
				x1 = x1Bottom;
				y1 = y1Bottom;
				x2 = x2Bottom;
				y2 = y2Bottom;
			case Left:
				translate = translateLeft;
				x1 = x1Left;
				y1 = y1Left;
				x2 = x2Left;
				y2 = y2Left;
			case Right:
				translate = translateRight;
				x1 = x1Right;
				y1 = y1Right;
				x2 = x2Right;
				y2 = y2Right;
		}
		if (null == labelOrientation)
		{
			switch(anchor)
			{
				case Top, Bottom:
					labelOrientation = LabelOrientation.Orthogonal;
				case Left, Right:
					labelOrientation = LabelOrientation.Aligned;
			}
		}
		if (null == labelAnchor)
		{
			switch(anchor)
			{
				case Top:
					labelAnchor = GridAnchor.Top;
				case Bottom:
					labelAnchor = GridAnchor.Bottom;
				case Left:
					labelAnchor = GridAnchor.Left;
				case Right:
					labelAnchor = GridAnchor.Right;
			}
		}
		if (null == labelAngle)
		{
			switch(anchor)
			{
				case Top:
					labelAngle = 90;
				case Bottom:
					labelAngle = 90;
				case Left:
					labelAngle = 0;
				case Right:
					labelAngle = 0;
			}
		}
	}
	
	inline function t(x : Float, y : Float) return "translate(" + x + "," + y + ")"
	
	function translateTop(d : ITickmark<Dynamic>, i : Int)		return t(d.delta * panel.frame.width, 0)
	function translateBottom(d : ITickmark<Dynamic>, i : Int)	return t(d.delta * panel.frame.width, panel.frame.height)
	function translateLeft(d : ITickmark<Dynamic>, i : Int)		return t(0, panel.frame.height - d.delta * panel.frame.height)
	function translateRight(d : ITickmark<Dynamic>, i : Int)	return t(panel.frame.width, panel.frame.height - d.delta * panel.frame.height)

	function x1Top(d : ITickmark<Dynamic>, i : Int)		return 0
	function x1Bottom(d : ITickmark<Dynamic>, i : Int)	return 0
	function x1Left(d : ITickmark<Dynamic>, i : Int)	return d.major ? tickMajorPadding : tickMinorPadding
	function x1Right(d : ITickmark<Dynamic>, i : Int)	return -(d.major ? tickMajorPadding : tickMinorPadding)
	function y1Top(d : ITickmark<Dynamic>, i : Int)		return d.major ? tickMajorPadding : tickMinorPadding
	function y1Bottom(d : ITickmark<Dynamic>, i : Int)	return -(d.major ? tickMajorPadding : tickMinorPadding)
	function y1Left(d : ITickmark<Dynamic>, i : Int)	return 0
	function y1Right(d : ITickmark<Dynamic>, i : Int)	return 0
	
	function x2Top(d : ITickmark<Dynamic>, i : Int)		return 0
	function x2Bottom(d : ITickmark<Dynamic>, i : Int)	return 0
	function x2Left(d : ITickmark<Dynamic>, i : Int)	return d.major ? tickMajorLength + tickMajorPadding : tickMinorLength + tickMinorPadding
	function x2Right(d : ITickmark<Dynamic>, i : Int)	return -(d.major ? tickMajorLength + tickMajorPadding : tickMinorLength + tickMinorPadding)
	
	function y2Top(d : ITickmark<Dynamic>, i : Int)		return d.major ? tickMajorLength + tickMajorPadding : tickMinorLength + tickMinorPadding
	function y2Bottom(d : ITickmark<Dynamic>, i : Int)	return -(d.major ? tickMajorLength + tickMajorPadding : tickMinorLength + tickMinorPadding)
	function y2Left(d : ITickmark<Dynamic>, i : Int)	return 0
	function y2Right(d : ITickmark<Dynamic>, i : Int)	return 0
	
	function tickClass(d : ITickmark<Dynamic>, i : Int)	return d.major ? "major" : null
}