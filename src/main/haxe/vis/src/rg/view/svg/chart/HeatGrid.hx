/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;
import rg.data.Stats;
import rg.data.VariableDependent;
import rg.view.svg.panel.Panel;
import rg.data.DataPoint;
import thx.color.Rgb;
import thx.geom.Contour;
import thx.js.Selection;
import rg.data.VariableIndependent;
import rg.data.IAxis;
import thx.math.scale.Linears;
import thx.math.scale.LinearT;
import thx.color.Hsl;
import thx.color.NamedColors;
import rg.util.DataPoints;
import thx.svg.Line;
import thx.svg.LineInterpolator;
using Arrays;

class HeatGrid extends CartesianChart<Array<DataPoint>>
{
	public var colorStart : Rgb;
	public var colorEnd : Rgb;
	public var useContour : Bool;
	var dps : Array<DataPoint>;
	var colorScale : LinearT<Rgb>;
	var variableDependent : VariableDependent<Dynamic>;
	
	public function new(panel : Panel) 
	{
		super(panel);
		colorStart = NamedColors.yellow;
		colorEnd = NamedColors.green;
		levels = 20;
		useContour = false;
	}
	
	override function setVariables(variableIndependents : Array<VariableIndependent<Dynamic>>, variableDependents : Array<VariableDependent<Dynamic>>)
	{
		xVariable = cast variableIndependents[0];
		yVariables = cast [variableIndependents[1]];
		variableDependent = variableDependents[0];
		
		var min = variableDependent.axis.scale(variableDependent.min, variableDependent.max, variableDependent.min),
			max = variableDependent.axis.scale(variableDependent.min, variableDependent.max, variableDependent.max);
		colorScale = Linears.forRgb()
			.range([colorStart, colorEnd])
			.domain([min, max]);
	}
	
	override function init()
	{
		super.init();
		g.classed().add("heat-grid");
	}
	
	override function resize()
	{
		super.resize();
		redraw();
	}
	
	override function data(dps : Array<DataPoint>)
	{
		this.dps = dps;
		redraw();
	}
	
	function value(dp)
	{
		var v = DataPoints.value(dp, variableDependent.type);
		return scale(v);
	}
	
	function scale(v)
	{
		return variableDependent.axis.scale(variableDependent.min, variableDependent.max, v);
	}
	
	function scaleValue(dp, ?i)
	{
		return colorScale.scale(value(dp));
	}
	
	var xrange : Array<Dynamic>;
	var yrange : Array<Dynamic>;
	var cols : Int;
	var rows : Int;
	var w : Float;
	var h : Float;
	var stats : Stats<Dynamic>;
	var levels : Int;
	
	function x(dp, i) return Arrays.indexOf(xrange, DataPoints.value(dp, xVariable.type)) * w
	function y(dp, i) return height - (1 + Arrays.indexOf(yrange, DataPoints.value(dp, yVariables[0].type))) * h
	
	function redraw()
	{
		if (null == dps || 0 == dps.length)
			return;

		stats = variableDependent.stats;
		xrange = range(cast xVariable);
		yrange = range(yVariables[0]);
		cols = xrange.length;
		rows = yrange.length;
		w = width / cols;
		h = height / rows;

		if (useContour)
			drawContour();
		else
			drawSquares();
	}
	
	function drawContour()
	{
		var map = xrange.map(function(v, i) return dps.filter(function(dp) return DataPoints.value(dp, xVariable.type) == v)).map(function(arr, i) {
				var r = [];
				for (i in 0...rows)
					r.push(arr.filter(function(dp) return DataPoints.value(dp, yVariables[0].type) == yrange[i]).shift());
				return r;
			}), 
			level = 0.0,
			min = scale(variableDependent.min),
			max = scale(variableDependent.max),
			span = max - min,
			padding;
//		trace(map);

		function grid(x : Int, y : Int) {
			var ys = map[x];
			if (null == ys)
				return false;
			var dp = ys[y];
			if (null == dp)
				return false;
			var v = value(dp);
			return v >= level;
		};
		
		for (i in 0...levels)
		{
			var color = colorScale.scale(level);
			padding = 0; // i * h / (levels + 1);
			level = min + (span / levels) * i;
			
			var map = createGridMap(grid);
			
			function createContour(?start)
			{
				var contour = Contour.contour(grid, start).map(function(d, i) {
					map.remove(d[1] + "-" + d[0]);
					return [padding + d[0] * w, padding + height - d[1] * h];
				});
				if (contour.length > 0)
					contour.push(contour[0]);
				
				var line = Line.pointArray(LineInterpolator.Linear).shape(contour);
				g.append("svg:path")
					.attr("d").string(line)
					.style("fill").color(color)
				;
			}
			
			createContour();
//			if(level == 0)
//				trace(map);
//			var it = map.iterator();
//			while (it.hasNext())
//			{
//				createContour(it.next());
//				it = map.iterator();
//			}
		}
		
	}
	
	function createGridMap(grid)
	{
		var map = new Hash();
		for(r in 0...rows)
			for (c in 0...cols)
				if(grid(c, r))
					map.set(r + "-" + c, [r, c]);
		return map;
	}
	
	function drawSquares()
	{
		var choice = g.selectAll("rect").data(dps);
		choice.enter().append("svg:rect")
			.attr("x").floatf(x)
			.attr("y").floatf(y)
			.attr("width").float(w)
			.attr("height").float(h)
			.style("fill").colorf(scaleValue)
			.on("click", onclick)
			.on("mouseover", onmouseover)
		;
	}
	
	function onmouseover(dp : DataPoint, i : Int)
	{
		if (null == labelDataPointOver)
			return;
		var text = labelDataPointOver(dp, stats);
		if (null == text)
			tooltip.hide();
		else {
			tooltip.text = text.split("\n");
			moveTooltip(x(dp, i) + w / 2, y(dp, i) + h / 2);
			tooltip.show();
		}
	}
	
	function onclick(dp : DataPoint, i : Int)
	{
		if (null == click)
			return;
		click(dp, stats);
	}
	
	function range(variable : rg.data.Variable<Dynamic, IAxis<Dynamic>>) : Array<Dynamic>
	{
		var v = Types.as(variable, VariableIndependent);
		if (null != v)
			return v.axis.range(v.min, v.max);
		var tickmarks = variable.axis.ticks(variable.min, variable.max);
		return tickmarks.map(function(d, i) return d.value);
	}
}