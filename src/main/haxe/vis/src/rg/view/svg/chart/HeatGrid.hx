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
import thx.js.Selection;
import rg.data.VariableIndependent;
import rg.data.IAxis;
import thx.math.scale.Linears;
import thx.math.scale.LinearT;
import thx.color.Hsl;
import thx.color.NamedColors;
import rg.util.DataPoints;
using Arrays;

class HeatGrid extends CartesianChart<Array<DataPoint>>
{
	public var colorStart : Rgb;
	public var colorEnd : Rgb;
	var dps : Array<DataPoint>;
	var scale : LinearT<Hsl>;
	var variableDependent : VariableDependent<Dynamic>;
	
	public function new(panel : Panel) 
	{
		super(panel);
		colorStart = NamedColors.red;
		colorEnd = NamedColors.green;
	}
	
	override function setVariables(variableIndependents : Array<VariableIndependent<Dynamic>>, variableDependents : Array<VariableDependent<Dynamic>>)
	{
		xVariable = cast variableIndependents[0];
		yVariables = cast [variableIndependents[1]];
		variableDependent = variableDependents[0];
		
		var min = variableDependent.axis.scale(variableDependent.min, variableDependent.max, variableDependent.min),
			max = variableDependent.axis.scale(variableDependent.min, variableDependent.max, variableDependent.max);
		scale = Linears.forHsl()
			.range([Hsl.toHsl(colorStart), Hsl.toHsl(colorEnd)])
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
	
	function scaleValue(dp, i)
	{
		var v = DataPoints.value(dp, variableDependent.type),
			sv = variableDependent.axis.scale(variableDependent.min, variableDependent.max, v);
		return scale.scale(v);
	}
	
	var xrange : Array<Dynamic>;
	var yrange : Array<Dynamic>;
	var cols : Int;
	var rows : Int;
	var w : Float;
	var h : Float;
	var stats : Stats;
	
	function x(dp, i) return Arrays.indexOf(xrange, DataPoints.value(dp, xVariable.type)) * w
	function y(dp, i) return height - (1 + Arrays.indexOf(yrange, DataPoints.value(dp, yVariables[0].type))) * h
	
	function redraw()
	{
		if (null == dps || 0 == dps.length)
			return;

		stats = DataPoints.stats(dps, variableDependent.type);
		xrange = range(cast xVariable);
		yrange = range(yVariables[0]);
		cols = xrange.length;
		rows = yrange.length;
		w = width / cols;
		h = height / rows;

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
			tooltip.moveTo(panelx + x(dp, i) + w / 2, panely + y(dp, i) + h / 2);
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
			return v.range();
		var tickmarks = variable.axis.ticks(variable.min, variable.max);
		return tickmarks.map(function(d, i) return d.value);
	}
}