/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;
import thx.js.Dom;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.view.svg.panel.Panel;
import rg.data.DataPoint;
import thx.color.Colors;
import thx.color.Hsl;
import thx.js.Selection;
import rg.util.DataPoints;
import thx.svg.Line;
import rg.data.Stats;
import thx.svg.LineInterpolator;
import thx.js.Access;
import thx.svg.Area;
import rg.view.svg.widget.Label;
using Arrays;

// TODO transition animation
// TODO expose options: label.orientation
// TODO expose options: label.place (distance, angle)
// TODO expose options: label.anchor

class ScatterGraph extends CartesianChart<Array<Array<DataPoint>>>
{
	public var symbol : DataPoint -> Stats -> String;
	public var symbolStyle : DataPoint -> Stats -> String;

	var chart : Selection;
	var dps : Array<Array<DataPoint>>;
	
	public function new(panel : Panel) 
	{
		super(panel);

		addClass("scatter-graph");
		chart = g.append("svg:g");
	}

	function x(d : DataPoint, ?i) 
	{
		var value   = DataPoints.value(d, xVariable.type),
			scaled  = xVariable.axis.scale(xVariable.min, xVariable.max, value),
			scaledw = scaled * width;
		return scaledw;
	}

	function getY1(pos : Int)
	{
		var h = height,
			v = yVariables[pos];
		return function(d : DataPoint, i : Int)
		{
			var value   = DataPoints.value(d, v.type),
				scaled  = v.axis.scale(v.min, v.max, value),
				scaledh = scaled * h;
			return h - scaledh;
		}
	}
	
	public function classf(pos : Int, cls : String)
	{
		return function(_, i : Int) return cls + " item-" + (pos);
	}
	
	override function data(dps : Array<Array<DataPoint>>)
	{
		this.dps = dps;
		redraw();
	}
	
	override function resize()
	{
		super.resize();
		redraw();
	}
	
	function redraw()
	{
		if (null == dps || null == dps[0] || null == dps[0][0])
			return;

		var axisgroup = chart.selectAll("g.group").data(dps);
		// axis enter
		var axisenter = axisgroup.enter()
			.append("svg:g")
			.attr("class").stringf(function(_, i) return "group group-" + i);
		
		// axis exit
		axisgroup.exit().remove();
		
		for (i in 0...dps.length)
		{
			var data = dps[i],
				gi = chart.select("g.group-" + i),
				stats = yVariables[i].stats;
			var gsymbol = gi.selectAll("g.symbol").data(data),
				vars = this.yVariables,
				onclick = callback(onclick, stats),
				onmouseover = callback(onmouseover, stats);
			var enter = gsymbol.enter()
				.append("svg:g")
				.attr("class").stringf(classf(i, "symbol"))
				.attr("transform").stringf(getTranslatePointf(i));

			if (null != click)
				enter.on("click", onclick);
			
			if (null != labelDataPointOver)
				enter.onNode("mouseover", onmouseover);

			var spath = enter.append("svg:path")
				.attr("d").stringf(function(dp, _) return symbol(dp, stats));

			if (null != symbolStyle)
				spath.attr("style").stringf(function(dp, _) return symbolStyle(dp, stats));
			
			if (null != labelDataPoint)
			{
				var f = this.labelDataPoint;
				enter.eachNode(function(n, i) {
					var dp = Access.getData(n),
						label = new Label(thx.js.Dom.selectNode(n), true, true, true);
					label.text = f(dp, stats);
				});
			}

			gsymbol.update()
				.selectAll("g.symbol")
				.dataf(function(d, i) return d)
				.update()
				.attr("transform").stringf(getTranslatePointf(i))
			;
				
			gsymbol.exit().remove();
		}
	}

	function getTranslatePointf(pos : Int)
	{
		var x = this.x,
			y = getY1(pos);
		return function(dp, i) 
		{
			return "translate("+x(dp)+","+y(dp,i)+")";
		};
	}
	
	function onmouseover(stats : Stats, n : js.Dom.HtmlDom, i : Int)
	{
		var dp = Access.getData(n),
			text = labelDataPointOver(dp, stats);
		if (null == text)
			tooltip.hide();
		else
		{
			var sel = thx.js.Dom.selectNode(n),
				coords = coordsFromTransform(sel.attr("transform").get());
			tooltip.show();
			tooltip.text = text.split("\n");
			moveTooltip(coords[0], coords[1]);
		}
	}
	
	static var retransform = ~/translate\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*\)/;
	static function coordsFromTransform(s : String)
	{
		if (!retransform.match(s))
			return [0.0, 0];
		else
			return [Std.parseFloat(retransform.matched(1)), Std.parseFloat(retransform.matched(2))];
	}
	
	function onclick(stats : Stats, dp : DataPoint, i : Int)
	{
		click(dp, stats);
	}
}