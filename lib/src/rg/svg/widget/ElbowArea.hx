package rg.svg.widget;

import thx.js.Selection;

class ElbowArea
{
	public var g(default, null) : Selection;
	public var area(default, null)  : Selection;
	var outer : Selection;
	var inner : Selection;
	public function new(container : Selection, classarea : String, classborder : String)
	{
		g     = container.append("svg:g").attr("class").string("elbow");
		area  = g.append("svg:path").attr("class").string("elbow-fill" + (null == classarea ? "" : " " + classarea));
		outer = g.append("svg:path").attr("class").string("elbow-stroke outer" + (null == classborder ? "" : " " + classborder));
		inner = g.append("svg:path").attr("class").string("elbow-stroke inner" + (null == classborder ? "" : " " + classborder));
	}

	public function addClass(cls : String)
	{
		g.classed().add(cls);
	}

	public function update(orientation : Orientation, weight : Float, x : Float, y : Float, minradius = 3.0, maxradius = 16.0, before = 0.0, after = 10.0)
	{
//		before = before < 0 ? 0 : before;
//		after  = after < 0 ? 0 : after;
		var dinner = "",
			douter = "",
			rad = weight < 0 ? Math.max(maxradius, weight) : Math.min(maxradius, weight);
		switch(orientation)
		{
			case RightBottom:
				dinner = "M" + (before+x+minradius)+","+(y+minradius+after)+"L"+(before+x+minradius)+","+(y+minradius)+"A"+Math.abs(minradius)+","+Math.abs(minradius)+" 0 0,0 "+(before+x)+","+y+"L"+x+","+y;
				douter = "M"+x+","+(y-weight)+"L"+(before+x)+","+(y-weight)+"A"+Math.abs(rad)+","+Math.abs(rad)+" 0 0,1 "+(before+x+rad)+","+(y-weight+rad)+"L"+(before+x+rad)+","+(y+after+minradius);
			case LeftBottom:

			case RightTop:

			case LeftTop:
				update(RightBottom, -weight, x, y, -minradius, -maxradius, -before, -after);
				return;
				dinner =
					"M"+(before+x+minradius)+","+(y+minradius+after)+
					"L"+(before+x+minradius)+","+(y+minradius)+
					"A"+minradius+","+minradius+" 0 0,0 "+(before+x)+","+y+
					"L"+x+","+y;
				douter = "M"+x+","+(y+weight)+"L"+(-before+x)+","+(y+weight)+"A"+rad+","+rad+" 0 0,1 "+(-before+x-rad)+","+(y+weight-rad)+"L"+(-before+x-rad)+","+(y-after-minradius);
			case BottomRight:

			case BottomLeft:

			case TopRight:

			case TopLeft:
		}
		var darea = douter + "L" + dinner.substr(1) + "z";
		inner.attr("d").string(dinner);
		outer.attr("d").string(douter);
		area.attr("d").string(darea);
	}
}

enum Orientation
{
	RightBottom;
	LeftBottom;
	RightTop;
	LeftTop;
	BottomRight;
	BottomLeft;
	TopRight;
	TopLeft;
}