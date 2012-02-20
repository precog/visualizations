/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.chart;

import rg.axis.ScaleDistribution;
import rg.util.RGColors;
import thx.js.Selection;
import rg.data.DataPoint;
import rg.util.DataPoints;
import thx.js.Access;
import rg.svg.panel.Panel;
import rg.util.DataPoints;
import rg.axis.IAxisDiscrete;
import thx.js.Dom;
import thx.color.Hsl;
import thx.color.Colors;
import rg.util.RGColors;
import rg.axis.Stats;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;
import rg.data.Variable;
import rg.axis.IAxis;
using Arrays;

class BarChart extends CartesianChart<Array<Array<Array<DataPoint>>>>
{
	public var stacked : Bool;

	var chart : Selection;
	var defs : Selection;
	var dps : Array<Array<Array<DataPoint>>>;
	public var gradientLightness : Float;
	public var displayGradient : Bool;
	public var padding : Float;
	public var paddingAxis : Float;
	public var paddingDataPoint : Float;
	public var horizontal : Bool;

	public function new(panel : Panel)
	{
		super(panel);

		addClass("bar-chart");
		defs = g.append("svg:defs");
		chart = g.append("svg:g");
		gradientLightness = 2;
		displayGradient = true;
		padding = 10;
		paddingAxis = 4;
		paddingDataPoint = 2;
		horizontal = false;
	}

	override function setVariables(variables : Array<Variable<Dynamic, IAxis<Dynamic>>>, variableIndependents : Array<VariableIndependent<Dynamic>>, variableDependents : Array<VariableDependent<Dynamic>>, data : Array<Array<Array<DataPoint>>>)
	{
		if(horizontal)
		{
			this.xVariable  = cast variableDependents[0];
			this.yVariables = cast variableIndependents;
		} else {
			this.xVariable  = cast variableIndependents[0];
			this.yVariables = cast variableDependents;
		}
		if (stacked)
		{
			for (v in variableDependents)
				v.meta.max = Math.NEGATIVE_INFINITY;

			// datapoints
			for (i in 0...data.length)
			{
				// y axis
				for (j in 0...data[i].length)
				{
					var v = variableDependents[j],
						t = 0.0;
					// segment
					for (k in 0...data[i][j].length)
					{
						t += DataPoints.valueAlt(data[i][j][k], v.type, 0.0);
					}
					if (v.meta.max < t)
						v.meta.max = t;
				}
			}
		}
	}


	override function data(dps : Array<Array<Array<DataPoint>>>)
	{
		if(horizontal)
			datah(dps);
		else
			datav(dps);
	}

	function datah(dps : Array<Array<Array<DataPoint>>>)
	{
		var axisgs = new Hash(),
			span = (height - (padding * (dps.length - 1))) / dps.length;

		function getGroup(name : String, container : Selection)
		{
			var gr = axisgs.get(name);
			if (null == gr)
			{
				gr = container.append("svg:g").attr("class").string(name);
				axisgs.set(name, gr);
			}
			return gr;
		}

		var flatdata = dps.flatten().flatten();

		// dependent values
		for (i in 0...dps.length)
		{
			var valuedps = dps[i],
				dist = (span - (paddingAxis * (valuedps.length - 1))) / valuedps.length;

			// axis values
			for (j in 0...valuedps.length)
			{
				var axisdps = valuedps[j],
					axisg = getGroup("group-" + j, chart),
					xtype = xVariable.type,
					xaxis = xVariable.axis,
					xmin  = xVariable.min(),
					xmax  = xVariable.max(),
					ytype = yVariables[j].type,
					yaxis = yVariables[j].axis,
					ymin  = yVariables[j].min(),
					ymax  = yVariables[j].max(),
					pad   = Math.max(1, (dist - (paddingDataPoint * (axisdps.length - 1))) / axisdps.length),
					offset = - span / 2 + j * (dist + paddingAxis),
					stats = xVariable.stats,
					over = callback(onmouseover, stats),
					click = callback(onclick, stats)
				;

				var prev = 0.0;
				// segment values, datapoints
				for (k in 0...axisdps.length)
				{
					var dp = axisdps[k],
						seggroup = getGroup("fill-" + k, axisg),
						x = prev,
						y = height * yaxis.scale(ymin, ymax, DataPoints.value(dp, ytype)),
						w = (xaxis.scale(xmin, xmax, DataPoints.value(dp, xtype)) * width);
					var bar = seggroup.append("svg:rect")
						.attr("class").string("bar")
						.attr("x").float(x)
						.attr("y").float(height - (stacked ? y - offset : y - offset - k * (pad + paddingDataPoint)))
						.attr("height").float(stacked ? dist : pad)
						.attr("width").float(w)
						.onNode("mouseover", over)
						.onNode("click", callback(click, dp))
					;
					Access.setData(bar.node(), dp);
					RGColors.storeColorForSelection(bar);
					if(displayGradient)
						bar.eachNode(applyGradient);
					if(stacked)
						prev = x + w;
				}
			}
		}
		ready.dispatch();
	}

	function datav(dps : Array<Array<Array<DataPoint>>>)
	{
		var axisgs = new Hash(),
			span = (width - (padding * (dps.length - 1))) / dps.length;

		function getGroup(name : String, container : Selection)
		{
			var gr = axisgs.get(name);
			if (null == gr)
			{
				gr = container.append("svg:g").attr("class").string(name);
				axisgs.set(name, gr);
			}
			return gr;
		}

		var flatdata = dps.flatten().flatten();
		// dependent values
		for (i in 0...dps.length)
		{
			var valuedps = dps[i],
				dist = (span - (paddingAxis * (valuedps.length - 1))) / valuedps.length;

			// axis values
			for (j in 0...valuedps.length)
			{
				var axisdps = valuedps[j],
					axisg = getGroup("group-" + j, chart),
					xtype = xVariable.type,
					xaxis = xVariable.axis,
					xmin  = xVariable.min(),
					xmax  = xVariable.max(),
					ytype = yVariables[j].type,
					yaxis = yVariables[j].axis,
					ymin  = yVariables[j].min(),
					ymax  = yVariables[j].max(),
					pad = Math.max(1, (dist - (paddingDataPoint * (axisdps.length - 1))) / axisdps.length),
					offset = - span / 2 + j * (dist + paddingAxis),
					stats = yVariables[j].stats,
					over = callback(onmouseover, stats),
					click = callback(onclick, stats)
				;

				var prev = 0.0;
				// segment values, datapoints
				for (k in 0...axisdps.length)
				{
					var dp = axisdps[k],
						seggroup = getGroup("fill-" + k, axisg),
						x = width * xaxis.scale(xmin, xmax, DataPoints.value(dp, xtype)),
						y = prev,
						h = yaxis.scale(ymin, ymax, DataPoints.value(dp, ytype)) * height;
					var bar = seggroup.append("svg:rect")
						.attr("class").string("bar")
						.attr("x").float(stacked ? x + offset : x + offset + k * (pad + paddingDataPoint))
						.attr("width").float(stacked ? dist : pad)
						.attr("y").float(height - h - y)
						.attr("height").float(h)
						.onNode("mouseover", over)
						.onNode("click", callback(click, dp))
					;
					Access.setData(bar.node(), dp);
					RGColors.storeColorForSelection(bar);
					if(displayGradient)
						bar.eachNode(applyGradient);
					if(stacked)
						prev = y + h;
				}
			}
		}
		ready.dispatch();
	}

	function onclick(stats : Stats<Dynamic>, dp : DataPoint, _, i : Int)
	{
		click(dp, stats);
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
				x = sel.attr("x").getFloat(),
				y = sel.attr("y").getFloat(),
				w = sel.attr("width").getFloat();

			tooltip.html(text.split("\n").join("<br>"));
			moveTooltip(x + w / 2, y, RGColors.extractColor(n));
		}
	}

	function applyGradient(n, i : Int)
	{
		var ng = Dom.selectNodeData(n),
			dp = Access.getData(n),
			scolor = ng.style("fill").get(),
			color = RGColors.parse(scolor, "#ccc"),
			id = "rg_bar_gradient_" + color.hex("");
		if (defs.select('#'+id).empty())
		{
			var scolor = RGColors.applyLightness(Hsl.toHsl(color), gradientLightness).toRgbString();

			var gradient = defs
				.append("svg:linearGradient")
				.attr("gradientUnits").string("objectBoundingBox")
				.attr("id").string(id)
				.attr("x1").float(0)
				.attr("x2").float(0)
				.attr("y1").float(1)
				.attr("y2").float(0)
				.attr("spreadMethod").string("pad")
			;
			gradient.append("svg:stop")
				.attr("offset").float(0)
				.attr("stop-color").string(scolor)
				.attr("stop-opacity").float(1);
			gradient.append("svg:stop")
				.attr("offset").float(1)
				.attr("stop-color").string(color.toRgbString())
				.attr("stop-opacity").float(1);
		}
		ng.attr("style").string("fill:url(#" + id + ")");
	}
}