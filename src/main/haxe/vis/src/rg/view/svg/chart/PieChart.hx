/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;
import haxe.Md5;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import thx.culture.FormatNumber;
import thx.js.Selection;
import rg.view.svg.panel.Layer;
import rg.view.svg.panel.Panel;
import rg.data.DataPoint;
import thx.geom.layout.Pie;
import thx.js.Svg;
import thx.math.Const;
import thx.svg.Arc;
import thx.js.Dom;
import thx.js.Access;
import thx.color.Hsl;
import thx.color.Colors;
import rg.util.DataPoints;
import rg.data.Stats;
import rg.view.svg.widget.LabelOrientation;
import rg.view.svg.widget.Label;
import rg.view.svg.widget.GridAnchor;
using Arrays;

// TODO add overDataPoint
// TODO improve automatic title when the axis is time
class PieChart extends Layer
{
	public var innerRadius : Float;
	public var outerRadius : Float;
	public var overRadius : Float;
	public var labelRadius : Float;
	
	var arcNormal : Arc<{ startAngle : Float, endAngle : Float }>;
	var arcStart : Arc<{ startAngle : Float, endAngle : Float }>;
	var arcBig : Arc<{ startAngle : Float, endAngle : Float }>;
	var pie : Pie<Float>;
	var radius : Float;
	var stats : { min : Float, max : Float, tot : Float };
	var variableDependent : VariableDependent<Dynamic>;
	public var animated : Bool;
	public var animationDuration : Int;
	public var animationEase : Float -> Float;
	public var gradientLightness : Float;
	public var animationDelay : Int;
	
	public var labelDisplay : Bool;
	public var labelOrientation : LabelOrientation;
	public var labelDontFlip : Bool;
	
	var labels : Hash<Label>;
	
	public var mouseClick : DataPoint -> Void;
	
	public function new(panel : Panel) 
	{
		super(panel);
		addClass("pie-chart");
		g.append("svg:defs");
		pie = new Pie();
		animated = false;
		animationDuration = 0;
		gradientLightness = 1.5;
		animationDelay = 0;
		innerRadius = 0.0;
		outerRadius = 0.9;
		overRadius = 0.95;
		labelRadius = 0.45;
		labels = new Hash();
		
		labelDisplay = true;
		labelOrientation = LabelOrientation.Orthogonal;
		labelDontFlip = true;
	}

	public dynamic function labelFormatDataPoint(dp : DataPoint, stats : Stats)
	{
		return FormatNumber.percent(100 * Reflect.field(dp, variableDependent.type) / stats.tot, 1);
	}
	
	public dynamic function labelFormatDataPointOver(dp : DataPoint, stats : Stats)
	{
		return Ints.format(Reflect.field(dp, variableDependent.type));
	}
/*
	function createSampleLabel(orientation, anchor, angle : Float)
	{
		var x1 = radius,
			y1 = radius,
			len = 70,
			x2 = x1 + len * Math.cos(Const.TO_RADIAN * angle),
			y2 = y1 + len * Math.sin(Const.TO_RADIAN * angle);
		
		
			
		g.append("svg:line")
			.attr("x1").float(x1)
			.attr("x2").float(x2)
			.attr("y1").float(y1)
			.attr("y2").float(y2)
			.style("stroke").string("#FF0000");
		
		var sample = new Label(g, false);
		sample.text = (angle % 360) + "º";
		sample.orientation = orientation;
		sample.anchor = anchor;
		sample.place(x2, y2, angle);
	}
*/
	
	public function setVariables(variableIndependents : Array<VariableIndependent<Dynamic>>, variableDependents : Array<VariableDependent<Dynamic>>)
	{
		variableDependent = variableDependents[0];
	}

	public function init()
	{
		resize();

//		var steps = 12;
//		for (i in 0...steps)
//			createSampleLabel(LabelOrientation.Orthogonal, GridAnchor.Top, 90 + i * 360 / steps);
	}

	override function resize()
	{
		radius = Math.min(width, height) / 2;
		arcStart = Arc.fromAngleObject()
			.innerRadius(radius * innerRadius)
			.outerRadius(radius * innerRadius);
		arcNormal = Arc.fromAngleObject()
			.innerRadius(radius * innerRadius)
			.outerRadius(radius * outerRadius);
		arcBig = Arc.fromAngleObject()
			.innerRadius(radius * innerRadius)
			.outerRadius(radius * overRadius);
		
		// recenter the chart
		if (width > height)
			g.attr("transform").string("translate(" + (width/2-height/2) + ",0)");
		else
			g.attr("transform").string("translate(0," + (height/2-width/2) + ")");
	}
	
	public function data(dp : Array<DataPoint>)
	{
		var pv = variableDependent.type;
		// filter out dp with zero values
		dp = dp.filter(function(dp) {
			return DataPoints.value(dp, pv) > 0;
		});
		
		stats = DataPoints.stats(dp, variableDependent.type);
		// data
		var choice = g.selectAll("g.group").data(pief(dp), id);
		
		// enter
		var enter = choice.enter();
		var arc = enter.append("svg:g")
			.attr("class").stringf(function(d, i) return "group item-" + i)
			.attr("transform").string("translate(" + radius + "," + radius + ")");
		var path = arc
			.append("svg:path")
			.attr("class").string("slice");
		arc.eachNode(applyGradient);
		if (animated)
		{
			path.attr("d").stringf(arcShape(arcStart));
			arc
				.eachNode(fadein)
				.onNode("mouseover.animation", highlight)
				.onNode("mouseout.animation", backtonormal);
		} else {
			path.attr("d").stringf(arcShape(arcNormal));
		}
		if (labelDisplay)
			arc.eachNode(appendLabel);
		if (null != mouseClick)
			arc.onNode("click.user", onMouseClick);

		// update
		choice.update()
			.select("path")
			.transition()
				.ease(animationEase)
				.duration(animationDuration)
				.attr("d").stringf(arcShape(arcNormal));
		if (labelDisplay)
			choice.update().eachNode(updateLabel);
		
		// exit
		choice.exit()
			.eachNode(removeLabel)
			.remove();
	}
	
	function onMouseClick(dom, i)
	{
		var d : { dp : DataPoint } = Access.getData(dom);
		mouseClick(d.dp);
	}
	
	function removeLabel(dom, i)
	{
		var n = Dom.selectNode(dom),
			d : { id : String } = Access.getData(dom);
		var label = labels.get(d.id);
		label.destroy();
		labels.remove(d.id);
	}
	
	function updateLabel(dom, i)
	{
		var n = Dom.selectNode(dom),
			d : { startAngle : Float, endAngle : Float, id : String, dp : DataPoint } = Access.getData(dom),
			label = labels.get(d.id),
			r = radius * labelRadius,
			a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
		label.text = labelFormatDataPoint(d.dp, stats);
		label.place(
			-2.5 + Math.cos(a) * r, 
			-2.5 + Math.sin(a) * r,
			Const.TO_DEGREE * a);
	}
	
	function appendLabel(dom, i : Int)
	{
		var n = Dom.selectNode(dom),
			label = new Label(n, labelDontFlip, true, true),
			d : { startAngle : Float, endAngle : Float, id : String, dp : DataPoint } = Access.getData(dom),
			r = radius * labelRadius,
			a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
		label.orientation = labelOrientation;
		switch(labelOrientation)
		{
			case FixedAngle(_): 
				label.anchor = GridAnchor.Center;
			case Aligned:
				label.anchor = GridAnchor.Left;
			case Orthogonal:
				label.anchor = GridAnchor.Top;
		}
		label.text = labelFormatDataPoint(d.dp, stats);
		label.place(
			-2.5 + Math.cos(a) * r, 
			-2.5 + Math.sin(a) * r,
			Const.TO_DEGREE * a);
		labels.set(d.id, label);
	}
	
	function applyGradient(n, i : Int)
	{
		var gn = Dom.selectNodeData(n),
			dp = Access.getData(n),
			id = dp.id;
		if (g.select("defs").select("#rg_pie_gradient_" + id).empty())
		{
			var slice = gn.select("path.slice"),
				shape = arcNormal.shape(Access.getData(n)),
				t = gn.append("svg:path").attr("d").string(shape),
				box : { x : Float, y : Float, width : Float, height : Float } = untyped t.node().getBBox();
			t.remove();
			var color = slice.style("fill").get();
			if (null == color)
				color = "#cccccc";
			
			var scolor = Hsl.darker(Hsl.toHsl(Colors.parse(color)), gradientLightness).toRgbString();
				
			var ratio = box.width / box.height,
				cx = -box.x * 100 / box.width / ratio,
				cy = -box.y * 100 / box.height / ratio;
			
			var r = 100 * (box.width > box.height 
				? Math.min(1, radius * outerRadius / box.width)
				: Math.max(1, radius * outerRadius / box.width));
			
			var stops = g.select("defs")
				.append("svg:radialGradient")
				.attr("id").string("rg_pie_gradient_" + id)
				.attr("cx").string(cx * ratio + "%")
				.attr("cy").string(cy + "%")
				.attr("gradientTransform").string("scale(1 "+ratio+")")
				.attr("r").string(r+"%")
			;
			stops.append("svg:stop")
				.attr("offset").string((100*innerRadius)+"%")
				.attr("stop-color").string(scolor)
				.attr("stop-opacity").float(1);
			stops.append("svg:stop")
				.attr("offset").string("100%")
				.attr("stop-color").string(color)
				.attr("stop-opacity").float(1);
		}
		gn.select("path.slice")
			.attr("style").string("fill:url(#rg_pie_gradient_" + id + ")");
	}
	
	function fadein(n, i : Int)
	{
		var gn = Dom.selectNodeData(n),
			shape = arcNormal.shape(Access.getData(n));

		gn.selectAll("path.slice")
			.transition().ease(animationEase).duration(animationDuration)
			.delay(animationDelay)
			.attr("d").string(shape)
		;
	}
	
	function highlight(d, i : Int)
	{
		var slice = Dom.selectNodeData(d).selectAll("path");
		slice
			.transition().ease(animationEase).duration(animationDuration)
			.attr("d").stringf(arcShape(arcBig));
	}
	
	function backtonormal(d, i : Int)
	{
		var slice = Dom.selectNodeData(d).selectAll("path");
		slice
			.transition().ease(animationEase).duration(animationDuration)
			.attr("d").stringf(arcShape(arcNormal));
	}
	
	function id(o : Dynamic, i : Int) return o.id
	
	function makeid(dp : DataPoint)
	{
		var o = Objects.clone(dp);
		Reflect.deleteField(o, variableDependent.type);
		return Md5.encode(Dynamics.string(o));
	}
	
	function arcShape(a : Arc<{ startAngle : Float, endAngle : Float }>)
	{
		return function(d : { startAngle : Float, endEngle : Float, id : String, dp : DataPoint }, i : Int)
		{
			return a.shape(cast d);
		}
	}
	
	function pief(dp : Array<DataPoint>) : Array<{ startAngle : Float, endEngle : Float, id : String, dp : DataPoint }>
	{
		var name = variableDependent.type,
			temp = dp.map(function(d, i) return Reflect.field(d, name)),
			arr : Dynamic = pie.pie(temp);
		for (i in 0...arr.length)
		{
			var id = makeid(dp[i]);
			Reflect.setField(arr[i], "id", id);
			Reflect.setField(arr[i], "dp", dp[i]);
		}
		return arr;
	}
	
	override function destroy()
	{
		for (label in labels)
			label.destroy();
		super.destroy();
	}
}