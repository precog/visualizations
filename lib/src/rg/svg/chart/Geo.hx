/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.chart;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.data.DataPoint;
import rg.axis.Stats;
import rg.svg.widget.Map;
import rg.svg.panel.Panel;
import rg.util.DataPoints;
import rg.svg.widget.Label;
import thx.color.Colors;
import thx.color.NamedColors;
import thx.color.Rgb;
import thx.color.Hsl;
import thx.js.Selection;
import rg.html.widget.Tooltip;
import rg.svg.chart.ColorScaleMode;
import rg.svg.util.RGCss;
import rg.data.Variable;
import rg.axis.IAxis;
import rg.svg.panel.Panels;
using Arrays;

class Geo extends Chart
{
	public var mapcontainer(default, null) : Selection;
	public var colorMode(getColorMode, setColorMode) : ColorScaleMode;
	var variableDependent : VariableDependent<Dynamic>;
	var dps : Array<DataPoint>;
	var queue : Array<Void->Void>;

	public function new(panel : Panel)
	{
		super(panel);
		mapcontainer = g.append("svg:g").attr("class").string("mapcontainer");
		queue = [];

		colorMode = FromCss();
		resize();
	}

	public function setVariables(variableIndependents : Array<VariableIndependent<Dynamic>>, variableDependents : Array<VariableDependent<Dynamic>>, data : Array<DataPoint>)
	{
		variableDependent = variableDependents[0];
	}

	public function data(dps : Array<DataPoint>)
	{
		this.dps = dps;
		redraw();
	}

	override function resize()
	{
		super.resize();
		if(null != mapcontainer)
			mapcontainer.attr("transform").string("translate(" + (width / 2) + "," + (height / 2) + ")");
	}

	function dpvalue(dp : DataPoint) return DataPoints.value(dp, variableDependent.type)

	function drawmap(map : Map, field : String)
	{
		if (null == dps || 0 == dps.length)
		{
			queue.push(callback(drawmap, map, field));
			return;
		}
		colorMode = map.colorMode;
		var text = null;
		for (dp in dps)
		{
			var id = Reflect.field(dp, field),
				feature = map.map.get(id);
			if (null == feature)
				continue;
			stylefeature(feature.svg, Objects.copyTo(dp, feature.dp));
			if (null != map.radius && feature.svg.node().nodeName == "circle")
				feature.svg.attr("r").float(map.radius(feature.dp, variableDependent.stats));
			if (null != map.labelDataPoint && null != (text = map.labelDataPoint(feature.dp, variableDependent.stats)))
			{
				var c = Reflect.field(feature.dp, "#centroid");
				var label = new Label(mapcontainer, true, false, false);
				label.text = text;
				label.place(c[0], c[1], 0);
			}
		}
		if (queue.length == 0)
		{
			ready.dispatch();
		}
	}

	public function handlerDataPointOver(dp : DataPoint, f)
	{
		var text = f(dp, variableDependent.stats);
		if (null == text)
			tooltip.hide()
		else
		{
			tooltip.html(text.split("\n").join("<br>"));
			var centroid = Reflect.field(dp, "#centroid");
			moveTooltip(centroid[0] + width / 2, centroid[1] + height / 2, true);
		}
	}

	public function handlerClick(dp : DataPoint, f)
	{
		f(dp, variableDependent.stats);
	}

	dynamic function stylefeature(svg : Selection, dp : DataPoint)
	{

	}

	function redraw()
	{
		while (queue.length > 0)
			queue.shift()();
	}

	function getColorMode() return colorMode
	function setColorMode(v : ColorScaleMode)
	{
		switch(colorMode = v)
		{
			case FromCssInterpolation(g):
				if (null == g)
					g = 1;
				var colors = RGCss.colorsInCss();
				if (colors.length > g)
				{
					colors = colors.slice(0, g);
				}
				if (colors.length == 1) {
					colors.push(Hsl.lighter(Hsl.toHsl(Colors.parse(colors[0])), 0.9).toCss());
				}
				colors.reverse();
				setColorMode(Interpolation(colors.map(function(s, _) return Colors.parse(s))));
			case FromCss(g):
				if (null == g)
					g = RGCss.numberOfColorsInCss();
				stylefeature = function(svg : Selection, dp : DataPoint)
				{
					var t = variableDependent.axis.scale(variableDependent.min(), variableDependent.max(), DataPoints.value(dp, variableDependent.type)),
						index = Math.floor(g * t);
					svg.attr("class").string("fill-" + index);
				}
			case Sequence(c):
				var colors = Arrays.map(c, function(d, _) return d.toCss());
				stylefeature = function(svg : Selection, dp : DataPoint)
				{
					var t = variableDependent.axis.scale(variableDependent.min(), variableDependent.max(), DataPoints.value(dp, variableDependent.type)),
						index = Math.floor(colors.length * t);
					svg.style("fill").string(colors[index]);
				}
			case Interpolation(colors):
				var interpolator = Rgb.interpolateStepsf(colors);
				stylefeature = function(svg : Selection, dp : DataPoint)
				{
					var t = variableDependent.axis.scale(variableDependent.min(), variableDependent.max(), DataPoints.value(dp, variableDependent.type));
					svg.style("fill").string(interpolator(t).toCss());
				}
			case Fixed(c):
				var color = c.toCss();
				stylefeature = function(svg : Selection, dp : DataPoint)
				{
					svg.style("fill").string(color);
				}
			case Fun(f):
				stylefeature = function(svg : Selection, dp : DataPoint)
				{
					svg.style("fill").string(f(dp, variableDependent.stats));
				}
		}
		return v;
	}
/*
	function setColorMode(v : ColorScaleMode)
	{
		stylefeature = colorStyleFunction(this.colorMode = v, variableDependent);
		return v;
	}

	static function colorStyleFunction(mode : ColorScaleMode, variable : Variable<Dynamic, IAxis<Dynamic>>)
	{
		switch(mode)
		{
			case FromCss(g):
				if (null == g)
					g = RGCss.colorsInCss();
				return function(svg : Selection, dp : DataPoint)
				{
					var t = variable.axis.scale(variable.min(), variable.max(), DataPoints.value(dp, variable.type)),
						index = Math.floor(g * t);
					svg.attr("class").string("fill-" + index);
				}
			case Sequence(c):
				var colors = Arrays.map(c, function(d, _) return d.toCss());
				return function(svg : Selection, dp : DataPoint)
				{
					var t = variable.axis.scale(variable.min(), variable.max(), DataPoints.value(dp, variable.type)),
						index = Math.floor(colors.length * t);
					svg.style("fill").string(colors[index]);
				}
			case Interpolation(colors):
				var interpolator = Rgb.interpolateStepsf(colors);
				return function(svg : Selection, dp : DataPoint)
				{
					var t = variable.axis.scale(variable.min(), variable.max(), DataPoints.value(dp, variable.type));
					svg.style("fill").string(interpolator(t).toCss());
				}
			case Fixed(c):
				var color = c.toCss();
				return function(svg : Selection, dp : DataPoint)
				{
					svg.style("fill").string(color);
				}
			case Fun(f):
				return function(svg : Selection, dp : DataPoint)
				{
					svg.style("fill").string(f(dp, variable.stats));
				}
		}
	}
*/
	override public function init()
	{
		super.init();
		if (null == tooltip)
		{
			tooltip = new Tooltip();
		}

		g.classed().add("geo");
	}

	public function addMap(map : Map, field : String)
	{
		if (null != field)
			map.onReady.add(callback(drawmap, map, field));
	}
}