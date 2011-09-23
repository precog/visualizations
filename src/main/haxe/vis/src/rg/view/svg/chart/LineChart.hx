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
import rg.view.svg.util.RGColors;
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

class LineChart extends CartesianChart<Array<Array<Array<DataPoint>>>>
{
	public var symbol : DataPoint -> Stats<Dynamic> -> String;
	public var symbolStyle : DataPoint -> Stats<Dynamic> -> String;
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
	}
	
	override function setVariables(variableIndependents : Array<VariableIndependent<Dynamic>>, yVariables : Array<VariableDependent<Dynamic>>, data : Array<Array<Array<DataPoint>>>)
	{
		super.setVariables(variableIndependents, yVariables, data);
		
		// TODO: add v.meta.max for area charts (copy barchart)
	}
	
	function x(d : DataPoint, ?i) 
	{
		var value   = DataPoints.value(d, xVariable.type),
			scaled  = xVariable.axis.scale(xVariable.min(), xVariable.max(), value),
			scaledw = scaled * width;
		return scaledw;
	}

	function getY1(pos : Int)
	{
		var h = height,
			v = yVariables[pos],
			y0 = y0property;
		if (null != y0)
		{
			return function(d : DataPoint, i : Int)
			{
				var v1 = DataPoints.value(d, v.type),
					value   = Std.is(v1, Float) ? (v1 + DataPoints.valueAlt(d, y0, v.min())) : v1,
					scaled  = v.axis.scale(v.min(), v.max(), value),
					scaledh = scaled * h;
				return h - scaledh;
			}
		} else {
			return function(d : DataPoint, i : Int)
			{
				var value   = DataPoints.value(d, v.type),
					scaled  = v.axis.scale(v.min(), v.max(), value),
					scaledh = scaled * h;
				return h - scaledh;
			}
		}
	}

	function getY0(pos : Int)
	{
		var h = height,
			y0 = y0property,
			v = yVariables[pos];
		return function(d : DataPoint, i : Int)
		{
			var value   = DataPoints.valueAlt(d, y0, v.min()),
				scaled  = v.axis.scale(v.min(), v.max(), value),
				scaledh = scaled * h;
			return h - scaledh;
		}
	}
	
	var segments : Array<Array<DataPoint>>;
	
	public function classsf(pos : Int, cls : String)
	{
		return function(_, i : Int)
		{
			return cls + " stroke-" + (pos + i);
		}
	}
	
	public function classff(pos : Int, cls : String)
	{
		return function(_, i : Int)
		{
			return cls + " fill-" + (pos + i);
		}
	}
	
	override function data(dps : Array<Array<Array<DataPoint>>>)
	{
		linePathShape = [];
		for (i in 0...yVariables.length)
		{
			var line = new Line(x, getY1(i));
			if (null != lineInterpolator)
				line.interpolator(lineInterpolator);
			linePathShape[i] = function(dp, i)
			{
				segment = i;
				return line.shape(dp, i);
			};
		}
		
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
				stats = new Stats();
			stats.addMany(DataPoints.values(segments.flatten(), yVariables[i].type));
			// TODO add id function
			var segmentgroup = gi.selectAll("path.line").data(segments);
			
			if (null != y0property)
			{
				var area = new Area(x, getY0(i), getY1(i));
				if (null != lineInterpolator)
					area.interpolator(lineInterpolator);
				segmentgroup.enter()
					.append("svg:path")
					.attr("class").stringf(classff(i, "line area"))
					.attr("d").stringf(area.shape);
			}
			
			switch(lineEffect)
			{
				case LineEffect.Gradient(lightness, levels):
					var fs = [];
					segmentgroup.enter()
						.append("svg:path")
						.attr("class").stringf(classsf(i, "line"))
						.eachNode(function(n, i) {
							var start = Hsl.toHsl(RGColors.parse(Dom.selectNode(n).style("stroke").get(), "#000000")),
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
							.attr("class").stringf(classsf(i, "line shadow shadow-" + (j)))
							.attr("d").stringf(linePathShape[i]);
					}
				default: // do nothing
			}
			
			var path = segmentgroup.enter()
				.append("svg:path")
				.attr("class").stringf(classsf(i, "line"))
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
				vars = this.yVariables,
				onclick = callback(onclick, stats),
				onmouseover = callback(onmouseover, stats);
			var enter = gsymbols.enter()
				.append("svg:g")
				.attr("class").stringf(classsf(i, "symbols"));
				
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
				.attr("r").float(6)
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
						label = new Label(thx.js.Dom.selectNode(n), true, true, true);
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
	
	function onmouseover(stats : Stats<Dynamic>, n : js.Dom.HtmlDom, i : Int)
	{
		var dp = Access.getData(n),
			text = labelDataPointOver(dp, stats);
		if (null == text)
			tooltip.hide();
		else
		{
			var sel = thx.js.Dom.selectNode(n),
				coords = Coords.fromTransform(sel.attr("transform").get());

//			for (j in 0...segments.length)
//				tooltip.removeClass("stroke-" + j);
//			tooltip.addClass("stroke-" + seg);
			tooltip.show();
			tooltip.text = text.split("\n");
			moveTooltip(coords[0], coords[1]);
		}
	}
	
	function onclick(stats : Stats<Dynamic>, dp : DataPoint, i : Int)
	{
		click(dp, stats);
	}
}