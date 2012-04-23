/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.widget;

import dhx.Selection;

class HookConnector
{
	public var g(default, null) : Selection;
	public var line(default, null) : Selection;
	public function new(container : Selection, classborder : String)
	{
		g    = container.append("svg:g").attr("class").string("hook");
		line = g.append("svg:path").attr("class").string("hook-stroke line" + (null == classborder ? "" : " " + classborder));
//		line.style("stroke").string("black").style("stroke-width").float(1);
	}

	public function addClass(cls : String)
	{
		g.classed().add(cls);
	}

	public function update(x1 : Float, y1 : Float, x2 : Float, y2 : Float, yreference : Float, before : Float, after : Float)
	{
		var linep  = createPath(
				x1,
				y1,
				x2,
				y2,
				yreference,
				before,
				after,
				5,
				5
			);
		line.attr("d").string(linep);
	}

	function createPath(x1 : Float, y1 : Float, x2 : Float, y2 : Float, yref : Float, before : Float, after : Float, r1 : Float, r2 : Float)
	{
		var path = "M"+x1+","+y1;
/*
		path += lineTo(x1+before, y1);
		path += lineTo(x1+before, yref);
		path += lineTo(x2-after, yref);
		path += lineTo(x2-after, y2);
		path += lineTo(x2, y2);
*/
		path += lineTo(x1+before-r1, y1);
		path += quarterTo(x1+before, y1+r2, r1);

		path += lineTo(x1+before, yref-r2);
		path += quarterTo(x1+before-r1, yref, r1);

		path += lineTo(x2-after+r1, yref);
		path += quarterTo(x2-after, yref-r2, r1);

		path += lineTo(x2-after, y2+r2);
		path += quarterTo(x2-after+r1, y2, r1);

		path += lineTo(x2, y2);

		return path;
	}

	static function lineTo(x : Float, y : Float) return "L" + x + "," + y
	static function quarterTo(x : Float, y : Float, r : Float) return "A"+Math.abs(r)+","+Math.abs(r)+" 0 0,"+(r < 0 ? 0 : 1)+" "+x+","+y

	function createPath2(x1 : Float, y1 : Float, sr : Float, x2 : Float, y2 : Float, yreference : Float)
	{
		var path = "M"+x1+","+y1;

		if(yreference > y1)
		{
			path += "A"+Math.abs(sr)+","+Math.abs(sr)+" 0 0,1 "+(x1+sr)+","+(y1+sr);
			path += "L"+(sr+x1)+","+(yreference-sr);
			path += "A"+Math.abs(sr)+","+Math.abs(sr)+" 0 0,1 "+(x1)+","+(yreference);
		} else {
			path += "A"+Math.abs(sr)+","+Math.abs(sr)+" 0 0,0 "+(x1+sr)+","+(y1-sr);
			path += "L"+(sr+x1)+","+(yreference+sr);
			path += "A"+Math.abs(sr)+","+Math.abs(sr)+" 0 0,0 "+(x1)+","+(yreference);
		}

		path += "L"+x2+","+yreference;

		if(yreference > y2)
		{
			path += "A"+Math.abs(sr)+","+Math.abs(sr)+" 0 0,1 "+(x2-sr)+","+(yreference-sr);
			path += "L"+(x2-sr)+","+(y2+sr);
			path += "A"+Math.abs(sr)+","+Math.abs(sr)+" 0 0,1 "+(x2)+","+(y2);
		} else {
			path += "A"+Math.abs(sr)+","+Math.abs(sr)+" 0 0,0 "+(x2-sr)+","+(yreference+sr);
			path += "L"+(x2-sr)+","+(y2-sr);
			path += "A"+Math.abs(sr)+","+Math.abs(sr)+" 0 0,0 "+(x2)+","+(y2);
		}

		return path;
	}
}