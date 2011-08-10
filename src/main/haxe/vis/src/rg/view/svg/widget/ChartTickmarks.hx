/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.widget;
import rg.data.VariableIndependent;
import rg.view.layout.Anchor;
import rg.view.svg.panel.Layer;
import rg.view.svg.panel.Panel;
import rg.data.ITickmark;
import thx.js.Dom;

class ChartTickmarks extends Layer
{
	var variable : VariableIndependent<Dynamic>;
	var anchor : Anchor;
	
	public var tickDisplay : Bool;
	public var tickMinorLength : Float;
	public var tickMajorLength : Float;
	public var tickMinorPadding : Float;
	public var tickMajorPadding : Float;
	public var labelDisplay : Bool;
	public var labelMinorPadding : Float;
	public var labelMajorPadding : Float;
	public var labelOrientation : LabelOrientation;
	public var labelAnchor : GridAnchor;
	public var labelAngle : Float;
	
	
	var translate : ITickmark<Dynamic> -> Int -> String;
	var x1 : ITickmark<Dynamic> -> Int -> Float;
	var y1 : ITickmark<Dynamic> -> Int -> Float;
	var x2 : ITickmark<Dynamic> -> Int -> Float;
	var y2 : ITickmark<Dynamic> -> Int -> Float;
	var x : ITickmark<Dynamic> -> Int -> Float;
	var y : ITickmark<Dynamic> -> Int -> Float;
	
	public function new(panel : Panel, variable : VariableIndependent<Dynamic>, anchor : Anchor) 
	{
		super(panel);
		this.variable = variable;
		this.anchor = anchor;
		
		tickDisplay = true;
		tickMinorLength = 4;
		tickMajorLength = 6;
		tickMinorPadding = 6;
		tickMajorPadding = 4;
		labelDisplay = true;
		labelMinorPadding = 12;
		labelMajorPadding = 14;
		
		g.classed().add("tickmarks");
		initf();
	}
	
	public function update()
	{
		var data = variable.axis.ticks(variable.min, variable.max);
	
		// ticks
		var tick = g.selectAll("g.tickmark").data(data);
		tick.enter()
			.append("svg:g").attr("class").string("tickmark")
			.attr("transform").stringf(translate)
			.append("svg:line")
				.attr("x1").floatf(x1)
				.attr("y1").floatf(y1)
				.attr("x2").floatf(x2)
				.attr("y2").floatf(y2)
				.attr("class").stringf(tickClass)
		;
		
		// labels
		var label = g.selectAll("g.label").data(data);
		label.enter()
			.append("svg:g").attr("class").string("label")
			.attr("transform").stringf(translate)
			.eachNode(createLabel);
	}
	
	function createLabel(n, i)
	{
		var node = Dom.selectNode(n),
			d : ITickmark<Dynamic> = thx.js.Access.getData(n);
		var label = new Label(node, true);
		label.anchor = labelAnchor;
		label.orientation = labelOrientation;
		var padding = d.major ? labelMajorPadding : labelMinorPadding;
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
		label.text = d.label;
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
					labelAngle = -90;
				case Left:
					labelAngle = 0;
				case Right:
					labelAngle = 180;
			}
		}
	}
	
	inline function t(x : Float, y : Float) return "translate(" + x + "," + y + ")"
	
	function translateTop(d : ITickmark<Dynamic>, i : Int)return t(d.delta * panel.frame.width, 0)
	function translateBottom(d : ITickmark<Dynamic>, i : Int) : String return t(d.delta * panel.frame.width, panel.frame.height)
	function translateLeft(d : ITickmark<Dynamic>, i : Int) : String return t(0, panel.frame.height - d.delta * panel.frame.height)
	function translateRight(d : ITickmark<Dynamic>, i : Int) : String return t(panel.frame.width, panel.frame.height - d.delta * panel.frame.height)

	function x1Top(d : ITickmark<Dynamic>, i : Int) : Float return 0
	function x1Bottom(d : ITickmark<Dynamic>, i : Int) : Float return 0
	function x1Left(d : ITickmark<Dynamic>, i : Int) : Float return d.major ? tickMajorPadding : tickMinorPadding
	function x1Right(d : ITickmark<Dynamic>, i : Int) : Float return -(d.major ? tickMajorPadding : tickMinorPadding)
	function y1Top(d : ITickmark<Dynamic>, i : Int) : Float return d.major ? tickMajorPadding : tickMinorPadding
	function y1Bottom(d : ITickmark<Dynamic>, i : Int) : Float return -(d.major ? tickMajorPadding : tickMinorPadding)
	function y1Left(d : ITickmark<Dynamic>, i : Int) : Float return 0
	function y1Right(d : ITickmark<Dynamic>, i : Int) : Float return 0
	
	function x2Top(d : ITickmark<Dynamic>, i : Int) : Float return 0
	function x2Bottom(d : ITickmark<Dynamic>, i : Int) : Float return 0
	function x2Left(d : ITickmark<Dynamic>, i : Int) : Float return d.major ? tickMajorLength + tickMajorPadding : tickMinorLength + tickMinorPadding
	function x2Right(d : ITickmark<Dynamic>, i : Int) : Float return -(d.major ? tickMajorLength + tickMajorPadding : tickMinorLength + tickMinorPadding)
	function y2Top(d : ITickmark<Dynamic>, i : Int) : Float return (d.major ? tickMajorLength + tickMajorPadding : tickMinorLength + tickMinorPadding)
	function y2Bottom(d : ITickmark<Dynamic>, i : Int) : Float return -(d.major ? tickMajorLength + tickMajorPadding : tickMinorLength + tickMinorPadding)
	function y2Left(d : ITickmark<Dynamic>, i : Int) : Float return 0
	function y2Right(d : ITickmark<Dynamic>, i : Int) : Float return 0
	
	function tickClass(d : ITickmark<Dynamic>, i : Int) return d.major ? "major" : null
}