/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.widget;
import haxe.Md5;
import rg.view.svg.panel.Layer;
import rg.view.svg.panel.Panel;
import rg.data.DataPoint;
import thx.geom.layout.Pie;
import thx.svg.Arc;
import thx.js.Dom;
import thx.js.Access;
import thx.color.Hsl;
import thx.color.Colors;
using Arrays;

class PieChart extends Layer
{
	public var innerRadius : Float;
	public var outerRadius : Float;
	public var overRadius : Float;
	
	var arcNormal : Arc<{ startAngle : Float, endAngle : Float }>;
	var arcStart : Arc<{ startAngle : Float, endAngle : Float }>;
	var arcBig : Arc<{ startAngle : Float, endAngle : Float }>;
	var pie : Pie<Float>;
	var radius : Float;
	public var propertyValue : String;
	public var animated : Bool;
	public var animationDuration : Int;
	public var animationEase : Float -> Float;
	public var gradientLightness : Float;
	public var animationDelay : Int;
	
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
	}
	
	public function init()
	{
		resize();
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
			path.attr("d").stringf(arcStart.shape);
			arc
				.eachNode(fadein)
				.onNode("mouseover.animation", highlight)
				.onNode("mouseout.animation", backtonormal);
		} else {
			path.attr("d").stringf(arcNormal.shape);
		}

		// update
		choice.update()
			.select("path")
			.transition()
				.ease(animationEase)
				.duration(animationDuration)
				.attr("d").stringf(arcNormal.shape);
		
		// exit
		choice.exit().remove();
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
			.attr("d").stringf(arcBig.shape);
	}
	
	function backtonormal(d, i : Int)
	{
		var slice = Dom.selectNodeData(d).selectAll("path");
		slice
			.transition().ease(animationEase).duration(animationDuration)
			.attr("d").stringf(arcNormal.shape);
	}
	
	function id(o : Dynamic, i : Int) return o.id
	
	function makeid(dp : DataPoint)
	{
		var o = Objects.clone(dp);
		Reflect.deleteField(o.properties, propertyValue);
		return Md5.encode(Dynamics.string(o));
	}
	
	function pief(dp : Array<DataPoint>)
	{
		var name = propertyValue,
			temp = dp.map(function(d, i) return Reflect.field(d.properties, name)),
			arr = pie.pie(temp);
		trace(name);
		trace(dp);
		trace(temp);
		trace(arr);
		for (i in 0...arr.length)
		{
			var id = makeid(dp[i]);
			Reflect.setField(arr[i], "id", id);
		}
		return arr;
	}
}