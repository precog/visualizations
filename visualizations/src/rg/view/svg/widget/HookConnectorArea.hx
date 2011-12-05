/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.widget;

import thx.js.Selection;

class HookConnectorArea
{
	var g     : Selection;
	var area  : Selection;
	var upper : Selection;
	var lower : Selection;
	public function new(container : Selection)
	{
		g     = container.append("svg:g").attr("class").string("hook");
		area  = g.append("svg:path").attr("class").string("hook-fill");
		upper = g.append("svg:path").attr("class").string("hook-stroke upper");
		lower = g.append("svg:path").attr("class").string("hook-stroke lower");
	}

	public function update(x1 : Float, y1 : Float, x2 : Float, y2 : Float, weight : Float, yreference : Float, before : Float, after : Float)
	{
		var upperp  = createPath(
				x1,
				y1,
				x2,
				y2,
				y1 > yreference ? yreference : yreference + weight,
				before + weight,
				after + weight
			),
			lowerp  = createPath(
				x2,
				y2 + weight,
				x1,
				y1 + weight,
				y1 > yreference ? yreference - weight : yreference,
				-after,
				-before
			);
		upper.attr("d").string(upperp);
		lower.attr("d").string(lowerp);
		area.attr("d").string(upperp + "L" + lowerp.substr(1) + "z");
	}

	function createPath(x1 : Float, y1 : Float, x2 : Float, y2 : Float, yref : Float, before : Float, after : Float)
	{
		var path = "M"+x1+","+y1;

		path += "L"+(x1+before)+","+y1;

		path += "L"+(x1+before)+","+yref;

		path += "L"+(x2-after)+","+yref;

		path += "L"+(x2-after)+","+y2;

		path += "L"+x2+","+y2;

		return path;
	}

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