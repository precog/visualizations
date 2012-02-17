package rg.svg.widget;

import thx.js.Selection;
import thx.svg.Diagonal;

class DiagonalArea
{
	public var g(default, null) : Selection;
	var diagonal : Diagonal<Array<Float>>;
	public var area(default, null) : Selection;
	var before : Selection;
	var after : Selection;
	public function new(container : Selection, classarea : String, classborder : String)
	{
		g       = container.append("svg:g").attr("class").string("diagonal");
		diagonal = Diagonal.forArray().projection(function(a, _) return [a[1], a[0]]);
		area     = g.append("svg:path").attr("class").string("diagonal-fill" + (null == classarea ? "" : " " + classarea));
		before   = g.append("svg:path").attr("class").string("diagonal-stroke before" + (null == classborder ? "" : " " + classborder));
		after    = g.append("svg:path").attr("class").string("diagonal-stroke after" + (null == classborder ? "" : " " + classborder));
	}

	public function addClass(cls : String)
	{
		g.classed().add(cls);
	}

	public function update(x1 : Float, y1 : Float, x2 : Float, y2 : Float, sw : Float, ew : Float)
	{

		var top    = diagonal.diagonal([y1,x1,y2,x2]),
			bottom = diagonal.diagonal([y2+ew,x2,y1+sw,x1]);

		var path = top + "L" + bottom.substr(1) + "z";

		before.attr("d").string(top);
		after.attr("d").string(bottom);
		area.attr("d").string(path);
	}
}