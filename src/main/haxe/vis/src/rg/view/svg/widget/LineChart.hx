/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.widget;
import thx.js.Dom;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.view.svg.panel.Layer;
import rg.view.svg.panel.Panel;
import rg.data.DataPoint;
import thx.color.Colors;
import thx.color.Hsl;
import thx.js.Selection;
import thx.math.Equations;
import rg.util.Properties;
import rg.util.DataPoints;
import thx.collections.HashList;
import thx.svg.Line;
import rg.data.Stats;
import thx.svg.LineInterpolator;
import thx.svg.Symbol;
import thx.js.Access;
import thx.svg.Area;
using Arrays;

// TODO area chart
// TODO incremental chart
// TODO transition animation
// TODO stack area chart
// TODO clip path (?)
// TODO values highlighter
// TODO expose options: label.orientation
// TODO expose options: label.place (distance, angle)
// TODO expose options: label.anchor

// area : display : bool

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
	
	public var lineInterpolator : LineInterpolator;
	
	public var lineEffect : LineEffect;
	public var y0property : String;
	
	var linePathShape : Array<Array<DataPoint> -> Int -> String>;
	var chart : Selection;
	var dps : Array<Array<Array<DataPoint>>>;
	var segment : Int;
	
	
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
		var me = this;
		this.variableIndependent = variableIndependents[0];
		this.variableDependents = variableDependents;
		linePathShape = [];
		for (i in 0...variableDependents.length)
		{
			var line = new Line(x, getY1(i));
			if (null != lineInterpolator)
				line.interpolator(lineInterpolator);
			linePathShape[i] = function(dp, i)
			{
				me.segment = i;
				return line.shape(dp, i);
			};
		}
	}
	
	function x(d : DataPoint, ?i) 
	{
		var value   = DataPoints.value(d, variableIndependent.type),
			scaled  = variableIndependent.axis.scale(variableIndependent.min, variableIndependent.max, value),
			scaledw = scaled * width;
		return scaledw;
	}

/*
	function getY(pos : Int, f : DataPoint -> Float)
	{
		var h = height,
			v = variableDependents[pos];
		return function(d : DataPoint, i : Int)
		{
			var value   = f(d),
				scaled  = v.axis.scale(v.min, v.max, value),
				scaledh = scaled * h;
			return h - scaledh;
		}
	}
*/

	function getY1(pos : Int)
	{
		var h = height,
			v = variableDependents[pos],
			y0 = y0property;
		if (null != y0)
		{
			return function(d : DataPoint, i : Int)
			{
				var value   = DataPoints.value(d, v.type) + DataPoints.valueAlt(d, y0, 0.0),
					scaled  = v.axis.scale(v.min, v.max, value),
					scaledh = scaled * h;
				return h - scaledh;
			}
		} else {
			return function(d : DataPoint, i : Int)
			{
				var value   = DataPoints.value(d, v.type),
					scaled  = v.axis.scale(v.min, v.max, value),
					scaledh = scaled * h;
				return h - scaledh;
			}
		}
	}

	function getY0(pos : Int)
	{
		var h = height,
			y0 = y0property,
			v = variableDependents[pos];
		return function(d : DataPoint, i : Int)
		{
			var value   = DataPoints.valueAlt(d, y0, 0.0),
				scaled  = v.axis.scale(v.min, v.max, value),
				scaledh = scaled * h;
			return h - scaledh;
		}
	}

	public function init()
	{
		if (null != labelDataPointOver)
			tooltip = new Baloon(g);
	}
	
	var tooltip : Baloon;
	var segments : Array<Array<DataPoint>>;
	
	public function classf(pos : Int, cls : String)
	{
		return function(_, i : Int)
		{
			return cls + " item-" + (pos + i);
		}
	}
	
	public function data(input : Array<DataPoint>)
	{
		dps = transformData(input);
		
		var axisgroup = chart.selectAll("g.group").data(dps);
		// axis enter
		var axisenter = axisgroup.enter()
			.append("svg:g")
			.attr("class").stringf(function(_, i) return "group group-" + i);
		
		// axis exit
		axisgroup.exit().remove();
		
		for (i in 0...dps.length)
		{
			segments = dps[i];
			var gi = chart.select("g.group-" + i),
				stats = DataPoints.stats(segments.flatten(), variableDependents[i].type);
			
			// TODO add id function
			var segmentgroup = gi.selectAll("path.line").data(segments);
			
			if (null != y0property)
			{
				var area = new Area(x, getY0(i), getY1(i));
				if (null != lineInterpolator)
					area.interpolator(lineInterpolator);
				segmentgroup.enter()
					.append("svg:path")
					.attr("class").stringf(classf(i, "line area"))
					.attr("d").stringf(area.shape);
			}
			
			switch(lineEffect)
			{
				case LineEffect.Gradient(lightness, levels):
					// add temp line to grab color and width
					/*
					var temp = segmentgroup.enter()
							.append("svg:path")
							.attr("class").stringf(classf(i, "line")),
						color : String = temp.style("stroke").get();
					trace(color);
					temp.remove();
					if (null == color)
						color = "#000000";
					var start = Hsl.toHsl(Colors.parse(color)),
						end = Hsl.darker(start, lightness),
						f = Hsl.interpolatef(end, start);
						*/
					var fs = [];
					segmentgroup.enter()
						.append("svg:path")
						.attr("class").stringf(classf(i, "line"))
						.eachNode(function(n, i) {
							var color : String = Dom.selectNode(n).style("stroke").get();
							if (null == color)
								color = "#000000";
							var start = Hsl.toHsl(Colors.parse(color)),
								end = Hsl.darker(start, lightness);
							fs[i] = Hsl.interpolatef(end, start);
						}).remove();
							
					for (j in 0...levels)
					{
						segmentgroup.enter()
							.append("svg:path")
							.attr("class").string("line grad-" + (levels-j-1))
							.style("stroke").stringf(function(_,i) return fs[i](j/levels).toCss())
							.attr("d").stringf(linePathShape[i]);
					}
				case LineEffect.DropShadow(ox, oy, levels):
					for (j in 0...levels)
					{
						segmentgroup.enter()
							.append("svg:path")
							.attr("transform").string("translate("+((1+j)*ox)+","+((1+j)*oy)+")")
							.attr("class").stringf(classf(i, "line shadow shadow-" + (j)))
							.attr("d").stringf(linePathShape[i]);
					}
				default: // do nothing
			}
			
			var path = segmentgroup.enter()
				.append("svg:path")
				.attr("class").stringf(classf(i, "line"))
				.attr("d").stringf(linePathShape[i]);
				
			switch(lineEffect)
			{
				case LineEffect.Gradient(_, _):
					path.classed().add("gradient");
				case LineEffect.DropShadow(_, _, _):
					path.classed().add("dropshadow");
				case LineEffect.NoEffect:
					path.classed().add("noeffect");
			}
			
			segmentgroup.update()
				.attr("d").stringf(linePathShape[i]);
			
			segmentgroup.exit().remove();
			
			var gsymbols = gi.selectAll("g.symbols").data(segments),
				vars = this.variableDependents,
				onclick = callback(onclick, stats),
				onmouseover = callback(onmouseover, stats);
			var enter = gsymbols.enter()
				.append("svg:g")
				.attr("class").stringf(classf(i, "symbols"));
				
			// TODO add id function
			var gsymbol = enter.selectAll("g.symbol").dataf(function(d,i) return d).enter()
				.append("svg:g")
//				.attr("class").string("symbol")
				
//				.attr("class").stringf(classf(i, "symbol-"))
				.attr("transform").stringf(getTranslatePointf(i));

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
//					label.orientation = LabelOrientation.Aligned;
//					label.place(3, 3, -30);
//					label.anchor = GridAnchor.BottomLeft;
				});
			}

			gsymbols.update()
				.selectAll("g.symbol")
				.dataf(function(d, i) return d)
				.update()
				.attr("transform").stringf(getTranslatePointf(i))
			;
				
			gsymbols.exit().remove();
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