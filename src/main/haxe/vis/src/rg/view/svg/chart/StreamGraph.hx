/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;
import rg.data.DataPoint;
import rg.data.Stats;
import rg.util.DataPoints;
import rg.view.svg.panel.Panel;
import thx.svg.LineInterpolator;
import thx.geom.layout.Stack;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;
import thx.svg.Area;
using Arrays;


class StreamGraph extends CartesianChart<Array<Array<DataPoint>>>
{
	public function new(panel : Panel) 
	{
		super(panel);
		interpolator = LineInterpolator.Basis;
	}
	
	public var interpolator : LineInterpolator;
//	var _area : thx.svg.Area<XYY0>;
	var dps : Array<Array<DataPoint>>;
	var area : Area<TransformedData>;
	var transformedData : Array<Array<TransformedData>>;
	var stats : Stats;
	
	override function init()
	{
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
		layer.enter()
			.append("svg:g")
			.attr("class").string("group")
//			.attr("transform").string("translate(0,0)")
//			.onNode("mousemove", over)
//			.onNode("mouseout", out)
			.append("svg:path")
				.attr("class").stringf(function(d, i) return "line item-" + i)
				.attr("d").stringf(area.shape)
				;
		// exit
		layer.exit().remove();
	}
	
	function prepareData()
	{
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

		var data = new Stack().offset(StackOffset.Silhouette).stack(coords.copy());
		
		transformedData = data.map(function(d, i) return d.map(function(d, j) {
			return {
				coord : d,
				dp : dps[i][j]
			}
		}));
		
		stats = DataPoints.stats(dps.flatten(), variableDependents[0].type);
		
		var maxy = data.floatMax(function(d) return d.floatMax(function(d) return d.y0 + d.y));
		
		area = new Area<TransformedData>()
			.interpolator(interpolator)
			.x(function(d, i) return d.coord.x * width)
			.y0(function(d, i) return height - d.coord.y0 * height / maxy)
			.y1(function(d, i) return height - (d.coord.y + d.coord.y0) * height / maxy)
		;
		
/*
		_prepdata = new Stack().offset(StackOffset.Wiggle).stack(dps.copy());
	//	_prepdata.reverse();
		var domx = _scalex.getDomain();
		var minx = domx.min();
		var stepx = Math.abs(_prepdata[0][1].x - _prepdata[0][0].x) + minx;
		var h = _h = panel.frame.height;
		var w = _w = panel.frame.width;
		
		var mx = _prepdata[0].length,
			my = Arrays.floatMax(_prepdata, function(d) {
				return Arrays.floatMax(d, function(d) {
					return d.y0 + d.y;
				});
			}) * 1.1;
		
		var sx = _scalex.scale;
		
		_area = new thx.svg.Area<XYY0>()
			.interpolator(_interpolator)
			.x(function(d, i) return sx(d.x))
			.y0(function(d, i) return h - d.y0 * h / my)
			.y1(function(d, i) return h - (d.y + d.y0) * h / my);
*/
	}
/*
	public function updatex()
	{
		var s = _scalex.scale(Date.now().getTime() - _timedelta + _scalex.getDomain()[0]);
		var layer = svg.selectAll("g.group")
			.attr("transform").string("translate(-" + s + ",0)")
		;
	}
*/
/*
	function transition()
	{
		// LAYER
		var layer = svg.selectAll("g.group").data(prepdata);
		// update
		layer.update().select("path.line")
			.transition()
				.attr("d").stringf(area.shape)
		;
	}
*/
/*	
	var _over : { x : Float, y : Float, y0 : Float } -> Int -> Void;
	function over(n : HtmlDom, i : Int) 
	{
		if (null == _over)
			return;

		_over(getDataAtNode(n), i);
	}
	
	var _out : { x : Float, y : Float, y0 : Float } -> Int -> Void;
	function out(n : HtmlDom, i : Int) 
	{
		if (null == _out)
			return;
		
		_out(getDataAtNode(n), i);
	}
	
	function getDataAtNode(n : HtmlDom)
	{
		var time = _scalex.invert(Svg.mouse(n)[0]);
		
		var data : Array<{ x : Float, y : Float, y0 : Float }> = Access.getData(n);
		
		var delta = Math.POSITIVE_INFINITY,
			pos = 0,
			v = Math.abs(time - data[0].x);
		while (v < delta)
		{
			delta = v;
			v = Math.abs(time - data[++pos].x);
		}
		return data[pos-1];
	}
	
	public function setTooltip(over : { x : Float, y : Float, y0 : Float } -> Int -> Void, out : { x : Float, y : Float, y0 : Float } -> Int -> Void)
	{
		_over = over;
		_out = out;
	}

	function redraw()
	{

		if (null == _data)
			return;
		
		svg.select("#" + _cpid + " rect")
			.attr("width").float(_w)
			.attr("height").float(_h + _clipPadding * 2);

		// LAYER
		var layer = svg.selectAll("g.group").data(_prepdata);
		
		// update
		layer.update()
			.attr("transform").string("translate(0,0)")
			.select("path.line").attr("d").stringf(_area.shape);

		// enter
		layer.enter()
			.append("svg:g")
			.attr("class").string("group")
			.attr("transform").string("translate(0,0)")
			.onNode("mousemove", over)
			.onNode("mouseout", out)
			.append("svg:path")
				.attr("class").stringf(function(d, i) return "line item-" + i)
				.attr("d").stringf(_area.shape)
				;
		// exit
		layer.exit().remove();

	}
*/
}

typedef XYY0 = {
	x : Float,
	y : Float,
	y0 : Float
}

typedef TransformedData = { coord : XYY0, dp : DataPoint }