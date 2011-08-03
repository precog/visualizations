/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.widget;
import js.Dom;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.view.svg.panel.Layer;
import rg.view.svg.panel.Panel;
import rg.data.DataPoint;
import thx.js.Selection;
import thx.math.Equations;
import rg.util.Properties;
import rg.util.DataPoints;
import thx.collections.HashList;
import thx.svg.Line;
import rg.data.Stats;
import thx.svg.Symbol;
import thx.js.Access;
using Arrays;

// TODO point symbol
// TODO transition animation
// TODO click event
// TODO mouseover label
// TODO datapoint label
// TODO curve approximation
// TODO clip path (?)
// TODO effect: no-effect
// TODO effect: shadow
// TODO effect: gradient
// TODO values highlighter
// TODO area chart
// TODO expose options: label.orientation
// TODO expose options: label.place (distance, angle)
// TODO expose options: label.anchor

class LineChart extends Layer
{
	public var variableDependents : Array<VariableDependent<Dynamic>>;
	public var variableIndependent : VariableIndependent<Dynamic>;
	
	public var animated : Bool;
	public var animationDuration : Int;
	public var animationEase : Float -> Float;
	public var symbol : DataPoint -> Stats -> String;
	public var symbolStyle : DataPoint -> Stats -> String;
	
	public var segmenton : Null<String>;
	
	public var click : DataPoint -> Stats -> Void;
	public var labelDataPoint : DataPoint -> Stats -> String;
	public var labelDataPointOver : DataPoint -> Stats -> String;
	
	var linePath : Array<Line<DataPoint>>;
	var chart : Selection;
	
	public function new(panel : Panel) 
	{
		super(panel);
		addClass("line-chart");
		
		chart = g.append("svg:g");
//		overlay = g.append("svg:g");
//		g.append("svg:defs");

		animated = true;
		animationDuration = 1500;
		animationEase = Equations.linear;
	}
	
	public function setVariables(variableIndependents : Array<VariableIndependent<Dynamic>>, variableDependents : Array<VariableDependent<Dynamic>>)
	{
		this.variableIndependent = variableIndependents[0];
		this.variableDependents = variableDependents;
		linePath = [];
		for (i in 0...variableDependents.length)
		{
			linePath[i] = new thx.svg.Line(x, callback(y, variableDependents[i]));
		}
	}
	
	function x(d : DataPoint, ?i) 
	{
		var value   = DataPoints.value(d, variableIndependent.type),
			scaled  = variableIndependent.axis.scale(variableIndependent.min, variableIndependent.max, value),
			scaledw = scaled * width;
		return scaledw;
	}
	
	public function y(v : VariableDependent<Dynamic>, d : DataPoint, ?i) 
	{
		var value   = DataPoints.value(d, v.type),
			scaled  = v.axis.scale(v.min, v.max, value),
			scaledh = scaled * height;
		return height - scaledh;
	}
	
	public function init()
	{
		if (null != labelDataPointOver)
		{
			tooltip = new Baloon(g);
		}
	}
	
	var tooltip : Baloon;
	
	public function data(input : Array<DataPoint>)
	{
		var dps = transformData(input);
		
		var axisgroup = chart.selectAll("g.group").data(dps);
		// axis enter
		var axisenter = axisgroup.enter()
			.append("svg:g")
			.attr("class").stringf(function(_, i) return "group group-" + i);
		
		// axis exit
		axisgroup.exit().remove();
		
		for (i in 0...dps.length)
		{
			var d = dps[i],
				gi = chart.select("g.group-" + i),
				stats = DataPoints.stats(d.flatten(), variableDependents[i].type);
				
			// TODO add id function
			var segmentgroup = gi.selectAll("path.line").data(d);
			
			segmentgroup.enter()
				.append("svg:path")
				.attr("class").string("line item-" + i)
				.attr("d").stringf(linePath[i].shape);
			
			segmentgroup.update()
				.attr("d").stringf(linePath[i].shape);
			
			segmentgroup.exit().remove();
			
			var gsymbols = gi.selectAll("g.symbols").data(d),
				x = this.x,
				y = this.y,
				vars = this.variableDependents,
				onclick = callback(onclick, stats),
				onmouseover = callback(onmouseover, stats);
			var enter = gsymbols.enter()
				.append("svg:g")
				.attr("class").string("symbols item-" + i);
				
			// TODO add id function
			var gsymbol = enter.selectAll("g.symbol").dataf(function(d,i) return d).enter()
				.append("svg:g")
				.attr("class").string("symbol")
				.attr("transform").stringf(callback(translatePoint, i));

			if (null != click)
				gsymbol.on("click", onclick);
			
			if (null != labelDataPointOver)
				gsymbol.onNode("mouseover", onmouseover);

			gsymbol.append("svg:circle")
					.attr("r").float(4)
					.style("fill").string("#000000")
					.style("fill-opacity").float(0.0)
					.style("stroke").string("none")
				;

			if (null != symbol)
			{
				var sp = this.symbol;
				var spath = gsymbol.append("svg:path")
					.attr("class").string("item-" + i)
					.attr("d").stringf(function(dp, _) return sp(dp, stats));
				if (null != symbolStyle)
				{
					var ss = this.symbolStyle;
					spath.attr("style").stringf(function(dp, _) return ss(dp, stats));
				}
			}
			
			if (null != labelDataPoint)
			{
				var f = this.labelDataPoint;
				gsymbol.eachNode(function(n, i) {
					var dp = Access.getData(n),
						label = new Label(thx.js.Dom.selectNode(n));
					label.text = f(dp, stats);
					label.orientation = LabelOrientation.Aligned;
					label.place(3, 3, -30);
					label.anchor = GridAnchor.BottomLeft;
				});
			}

			gsymbols.update()
				.selectAll("g.symbol")
				.dataf(function(d, i) return d)
				.update()
				.attr("transform").stringf(callback(translatePoint, i))
			;
				
			gsymbols.exit().remove();
		}
	}
	
	function translatePoint(pos : Int, dp : DataPoint, ?_)
	{
		return "translate("+x(dp)+","+y(variableDependents[pos],dp)+")";
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
			tooltip.moveTo(coords[0], coords[1]);
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
	
	function transformData(dps : Array<DataPoint>) : Array<Array<Array<DataPoint>>>
	{
		var results = [];
		for (i in 0...variableDependents.length)
		{
			var variable = variableDependents[i];
			var values = DataPoints.filterByDependents(dps, [variable]);
			var map = DataPoints.partition(values, segmenton);
			results.push(map);
		}
		return results;
	}
}