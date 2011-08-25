/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.widget;

import rg.data.ScaleDistribution;
import thx.js.Selection;
import rg.data.DataPoint;
import rg.util.DataPoints;
import thx.js.Access;
import rg.view.svg.panel.Panel;
import rg.util.DataPoints;
import rg.data.IAxisDiscrete;
import thx.js.Dom;
import thx.color.Hsl;
import thx.color.Colors;
using Arrays;

class ChartBar extends ChartCartesian<Array<Array<Array<DataPoint>>>>
{
	public var stacked : Bool;
	
	var chart : Selection;
	var defs : Selection;
	var dps : Array<Array<Array<DataPoint>>>;
	public var gradientLightness : Float;
	public var displayGradient : Bool;
	
	public function new(panel : Panel) 
	{
		super(panel);
		
		addClass("bar-chart");
		defs = g.append("svg:defs");
		chart = g.append("svg:g");
		gradientLightness = 1.4;
		displayGradient = true;
	}
	
	override function data(dps : Array<Array<Array<DataPoint>>>)
	{
		var padding = 10,
			ypadding = 4,
			segpadding = 2,
			values = dps.length,
			axisgs = new Hash(),
			discrete, scaledist = ScaleDistribution.ScaleFill,
			span
		;
	
		if (null != (discrete = Types.as(variableIndependent.axis, IAxisDiscrete)) && !Type.enumEq(ScaleDistribution.ScaleFill, (scaledist = discrete.scaleDistribution)))
			span = (width - (padding * (values - 1))) / values;
		else
			span = (width - (padding * (values - 1))) / values;
				
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
		
		// dependent values
		for (i in 0...dps.length)
		{
			var valuedps = dps[i],
				waxis = (span - (ypadding * (valuedps.length - 1))) / valuedps.length
			;
			
			// axis values
			for (j in 0...valuedps.length)
			{
				var axisdps = valuedps[j],
					axisg = getGroup("group-" + j, chart),
					ytype = variableDependents[j].type,
					yaxis = variableDependents[j].axis,
					ymin = variableDependents[j].min,
					ymax = variableDependents[j].max,
					w = Math.max(1, (waxis - (segpadding * (axisdps.length - 1))) / axisdps.length),
					offset = - span / 2 + j * (waxis + ypadding)
				;
				
				var prev = 0.0;
				// segment values, datapoints
				for (k in 0...axisdps.length)
				{
					var dp = axisdps[k],
						seggroup = getGroup("item-" + k, axisg),
						x = width * variableIndependent.axis.scale(variableIndependent.min, variableIndependent.max, DataPoints.value(dp, variableIndependent.type)),
						y = prev,
						h = yaxis.scale(ymin, ymax, DataPoints.value(dp, ytype)) * height;
					var bar = seggroup.append("svg:rect")
						.attr("class").string("bar")
						.attr("x").float(stacked ? x + offset : x + offset + k * (w + segpadding))
						.attr("width").float(stacked ? waxis : w)
						.attr("y").float(height - h - y)
						.attr("height").float(h)
					;
					if(displayGradient)
						bar.eachNode(applyGradient);
					if(stacked)
						prev = y + h;
				}
			}
		}
	}
	
	function applyGradient(n, i : Int)
	{
		var gn = Dom.selectNodeData(n),
			dp = Access.getData(n),
			rgb = gn.style("fill").get(),
			color = Colors.parse(null == rgb ? "#cccccc" : rgb),
			id = "rg_bar_gradient_" + color.hex("");
		if (defs.select('#'+id).empty())
		{
			
			var scolor = Hsl.darker(Hsl.toHsl(color), gradientLightness).toRgbString();
			
			var gradient = defs
				.append("svg:linearGradient")
				.attr("id").string(id)
				.attr("x1").string("0%")
				.attr("x2").string("0%")
				.attr("y1").string("100%")
				.attr("y2").string("0%")
				.attr("spreadMethod").string("pad")
			;
			gradient.append("svg:stop")
				.attr("offset").string("0%")
				.attr("stop-color").string(scolor)
				.attr("stop-opacity").float(1);
			gradient.append("svg:stop")
				.attr("offset").string("100%")
				.attr("stop-color").string(color.toRgbString())
				.attr("stop-opacity").float(1);
		}
		gn.attr("style").string("fill:url(#" + id + ")");
	}
}