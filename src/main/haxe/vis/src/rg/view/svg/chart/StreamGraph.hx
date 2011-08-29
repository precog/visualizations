/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;
import rg.data.DataPoint;
import rg.data.Stats;
import rg.util.DataPoints;
import rg.view.svg.panel.Panel;
import rg.view.svg.widget.Baloon;
import thx.svg.LineInterpolator;
import thx.geom.layout.Stack;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;
import thx.svg.Area;
import thx.js.Dom;
import thx.js.Selection;
import thx.color.Colors;
import thx.color.Hsl;
import thx.js.Svg;
import thx.js.Access;
using Arrays;


class StreamGraph extends CartesianChart<Array<Array<DataPoint>>>
{
	public function new(panel : Panel) 
	{
		super(panel);
		interpolator = LineInterpolator.Cardinal(0.6);
		gradientLightness = 0.75;
		gradientStyle = 1;
	}
	
	public var interpolator : LineInterpolator;
	public var gradientLightness : Float;
	public var gradientStyle : Int; // 0: none, 1: vertical, 2: horizontal
	
	var dps : Array<Array<DataPoint>>;
	var area : Area<TransformedData>;
	var transformedData : Array<Array<TransformedData>>;
	var stats : Stats;
	var defs : Selection;
	var maxy : Float;
	
	override function init()
	{
		super.init();
		defs = g.append("svg:defs");
		g.classed().add("stream-chart");
	}
	
	override function setVariables(variableIndependents : Array<VariableIndependent<Dynamic>>, variableDependents : Array<VariableDependent<Dynamic>>)
	{
		super.setVariables(variableIndependents, variableDependents);
		
	}

	override public function data(dps : Array<Array<DataPoint>>)
	{
		this.dps = dps;
		prepareData();
		redraw();
	}
	
	function redraw()
	{
		if (null == transformedData)
			return;

		// LAYER
		var layer = g.selectAll("g.group").data(transformedData);
		
		// update
		layer.update()
//			.attr("transform").string("translate(0,0)")
			.select("path.line").attr("d").stringf(area.shape);

		// enter
		var node = layer.enter()
			.append("svg:g")
			.attr("class").string("group")
//			.attr("transform").string("translate(0,0)")
			.onNode("mousemove", onover)
			.onNode("click", onclick)
//			.onNode("mouseout", out)
			.append("svg:path")
				.attr("class").stringf(function(d, i) return "line item-" + i)
				.attr("d").stringf(area.shape)
				;
		if(gradientStyle != 0)
			node.each(gradientStyle == 1 ? applyGradientV : applyGradientH);
		// exit
		layer.exit().remove();
	}
	
	function getDataAtNode(n, i)
	{
		var px = Svg.mouse(n)[0],
			x = Floats.uninterpolatef(transformedData[i].first().coord.x, transformedData[i].last().coord.x)(px / width);
		
		var data : Array<TransformedData> = Access.getData(n);
		
		return Arrays.nearest(transformedData[i], x, function(d) return d.coord.x);
	}
	
	function onover(n, i)
	{
		if (null == labelDataPointOver)
			return;
		var dp = getDataAtNode(n, i);
		tooltip.text = labelDataPointOver(dp.dp, stats).split("\n");
		tooltip.show();
		tooltip.moveTo(panelx + dp.coord.x * width, panely + height - (dp.coord.y + dp.coord.y0) * height / maxy);
	}
	
	function onclick(n, i)
	{
		if (null == this.click)
			return;
		var dp = getDataAtNode(n, i);
		click(dp.dp, stats);
	}
	
	function prepareData()
	{
		defs.selectAll("linearGradient.h").remove();
		var xscale = callback(variableIndependent.axis.scale, variableIndependent.min, variableIndependent.max),
			xtype = variableIndependent.type,
			x = function(d) return xscale(DataPoints.value(d, xtype)),
			yscale = callback(variableDependents[0].axis.scale, variableDependents[0].min, variableDependents[0].max),
			ytype = variableDependents[0].type,
			y = function(d) return yscale(DataPoints.value(d, ytype));
		var coords = dps.map(function(d : Array<DataPoint>, i) {
			return d.map(function(d, i) {
				return {
					x : x(d),
					y : Math.max(0, y(d))
				};
			});
		});

		var data = new Stack()
			.offset(StackOffset.Silhouette)
			.order(StackOrder.DefaultOrder)
			.stack(coords);
		
		transformedData = data.map(function(d, i) return d.map(function(d, j) {
			return {
				coord : d,
				dp : dps[i][j]
			}
		}));
		
		stats = DataPoints.stats(dps.flatten(), variableDependents[0].type);
		
		maxy = data.floatMax(function(d) return d.floatMax(function(d) return d.y0 + d.y));
		
		area = new Area<TransformedData>()
			.interpolator(interpolator)
			.x(function(d, i) return d.coord.x * width)
			.y0(function(d, i) return height - d.coord.y0 * height / maxy)
			.y1(function(d, i) return height - (d.coord.y + d.coord.y0) * height / maxy)
		;
	}
	
	function applyGradientV(d : Array<TransformedData>, i : Int)
	{
		var gn = Selection.current,
			rgb = gn.style("fill").get(),
			color = Colors.parse(null == rgb ? "#cccccc" : rgb),
			id = "rg_stream_gradient_h_" + color.hex("");
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
	
	static var vid = 0;
	function applyGradientH(d : Array<TransformedData>, i : Int)
	{
		var gn = Selection.current,
			rgb = gn.style("fill").get(),
			color = Hsl.toHsl(Colors.parse(null == rgb ? "#cccccc" : rgb)),
			id = "rg_stream_gradient_v_" + vid++;
		
		var gradient = defs
			.append("svg:linearGradient")
			.attr("class").string("x")
			.attr("id").string(id)
			.attr("x1").string("0%")
			.attr("x2").string("100%")
			.attr("y1").string("0%")
			.attr("y2").string("0%")
	//		.attr("spreadMethod").string("pad")
		;
		
		var bx = d.first().coord.x,
			ax = d.last().coord.x,
			span = ax - bx,
			percent = function(x : Float) {
				return Math.round((x - bx) / span * 10000) / 100;
			},
			max = d.floatMax(function(d) return d.coord.y);
		
//		var lastv = 0.0, tollerance = 0.25;
		for (i in 0...d.length)
		{
			var dp = d[i],
				v = 1 + (dp.coord.y / max - 0.5) * gradientLightness;
//			if (Floats.equals(v, lastv, tollerance))
//				continue;
			gradient.append("svg:stop")
				.attr("offset").string(percent(dp.coord.x) +  "%")
				.attr("stop-color").string(Hsl.darker(color, v).toCss())
				.attr("stop-opacity").float(1);
//			lastv = v;
		}
/*
		gradient.append("svg:stop")
			.attr("offset").string("0%")
			.attr("stop-color").string(scolor)
			.attr("stop-opacity").float(1);
		gradient.append("svg:stop")
			.attr("offset").string("100%")
			.attr("stop-color").string(color.toRgbString())
			.attr("stop-opacity").float(1);
*/
		gn.attr("style").string("fill:url(#" + id + ")");
	}
}

typedef XYY0 = {
	x : Float,
	y : Float,
	y0 : Float
}

typedef TransformedData = { coord : XYY0, dp : DataPoint }