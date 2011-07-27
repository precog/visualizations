/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.widget;
import thx.js.Selection;
import rg.view.svg.widget.LabelOrientation;
import rg.view.svg.widget.GridAnchor;

class Label 
{	
	public var text(default, setText) : String;
	public var orientation(default, setOrientation) : LabelOrientation;
	public var anchor(default, setAnchor) : GridAnchor;
	public var x(default, null) : Float;
	public var y(default, null) : Float;
	public var angle(default, null) : Float;
	public var dontFlip(default, null) : Bool;
	public var shadowOffset(default, setShadowOffset) : Float;
	
	var g : Selection;
	var gs : Selection;
	var r : Selection;
	var gr : Selection;
	var t : Selection;
	var tbg : Selection;
	var s : Selection;
//	var b : Selection;
	
	public function new(container : Selection, dontflip = true) 
	{
		g = container.append("svg:g").attr("class").string("label");
		gs = g.append("svg:g").attr("transform").string("translate(0,0)");
		gr = gs.append("svg:g");
		r = g.append("svg:g");
//		b = r.append("svg:rect").style("fill").string("none");
//		b.style("stroke").string("#333");
		
		s = gr.append("svg:text").attr("class").string("shadow");
		tbg = r.append("svg:text").attr("class").string("bg");
		t = r.append("svg:text");
		
		this.dontFlip = dontflip;
		shadowOffset = 1.25;
		x = 0;
		y = 0;
		angle = 0;
		Reflect.setField(this, "orientation", FixedAngle(0));
		Reflect.setField(this, "anchor", Center);
	}
	
	public function place(x : Float, y : Float, angle : Float)
	{
		this.x = x;
		this.y = y;
		this.angle = angle % 360;
		if (this.angle < 0)
			this.angle += 360;
		g.attr("transform").string("translate(" + x + "," + y + ")");
		switch(orientation)
		{
			case FixedAngle(a):
				r.attr("transform").string("rotate(" + a + ")");
			case Aligned:
				if (dontFlip && this.angle > 90 && this.angle < 270)
					angle += 180;
				r.attr("transform").string("rotate(" + angle + ")");
			case Orthogonal:
				if (dontFlip && this.angle > 180)
					angle -= 180;
				r.attr("transform").string("rotate(" + (-90 + angle) + ")");
		}
		gr.attr("transform").string(r.attr("transform").get());
		reanchor();
	}
	
	function setShadowOffset(v : Float)
	{
		shadowOffset = v;
		gs.attr("transform").string("translate("+v+","+v+")");
		return v;
	}
	
	function setText(v : String)
	{
		this.text = v;
		tbg.text().string(v);
		t.text().string(v);
		s.text().string(v);
		reanchor();
		return v;
	}
	
	function setOrientation(v : LabelOrientation)
	{
		this.orientation = v;
		place(x, y, angle);
		return v;
	}
	
	function setAnchor(v : GridAnchor)
	{
		this.anchor = v;
		reanchor();
		return v;
	}
	
	function getBB() : { width : Float, height : Float }
	{
		var h = t.style("font-size").getFloat();
		if (null == h || 0 >= h)
			h = untyped t.node().getExtentOfChar("A").height;
		return {
			width : untyped t.node().getComputedTextLength(),
			height : h
		}
	}
	
	function reanchor()
	{
		var bb = getBB(),
			x : Float, y : Float;
//		b.attr("width").float(bb.width).attr("height").float(bb.height);
		var a = anchor;
		if (dontFlip)
		{
			switch(orientation)
			{
				case Aligned:
					if (angle > 90 && angle < 270)
					{
						a = switch(a) 
						{
							case TopLeft:  BottomRight;
							case Top: Bottom;
							case TopRight: BottomLeft;
							case Left: Right;
							case Center: Center;
							case Right: Left;
							case BottomLeft: TopRight;
							case Bottom: Top;
							case BottomRight: TopLeft;
						}
					}
				case Orthogonal:
					if (angle > 180)
					{
						a = switch(a) 
						{
							case TopLeft:  BottomRight;
							case Top: Bottom;
							case TopRight: BottomLeft;
							case Left: Right;
							case Center: Center;
							case Right: Left;
							case BottomLeft: TopRight;
							case Bottom: Top;
							case BottomRight: TopLeft;
						}
					}
				default:
					// do nothing
			}
		}
		
		switch(a) 
		{
			case TopLeft:
				x = 0;
				y = bb.height;
			case Top:
				x = -bb.width / 2;
				y = bb.height;
			case TopRight:
				x = -bb.width;
				y = bb.height;
			case Left:
				x = 0;
				y = bb.height / 2;
			case Center:
				x = -bb.width / 2;
				y = bb.height / 2;
			case Right:
				x = -bb.width;
				y = bb.height / 2;
			case BottomLeft:
				x = 0;
				y = 0;
			case Bottom:
				x = -bb.width / 2;
				y = 0;
			case BottomRight:
				x = -bb.width;
				y = 0;
		}
		tbg.attr("x").float(x+0.5).attr("y").float(y-1.5);
		t.attr("x").float(x+0.5).attr("y").float(y-1.5);
		s.attr("x").float(x+0.5).attr("y").float(y-1.5);
//		b.attr("x").float(x).attr("y").float(y-bb.height);
	}
}