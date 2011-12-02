package rg.view.svg.chart;
import rg.view.svg.panel.Panel;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.data.DataPoint;
import thx.color.NamedColors;
import thx.js.Selection;
import rg.view.svg.widget.Label;
import rg.view.svg.widget.GridAnchor;
using Arrays;

// TODO wire labels

class Sankey extends Chart
{
	var layout : Array<Array<Node>>;
	public var levelWidth : Int;
	public var padding : Float;

	var levels : Int;
	var max : Float;
	var availableheight : Float;
	var map : Hash<Node>;
	var edges : Array<{ src : Node, dst : Node, weight : Float }>;
	var padBefore : Float;
	var padAfter : Float;

	public function new(panel : Panel)
	{
		super(panel);
		addClass("sankey");
		levelWidth = 60;
		padding = 20;
	}

	public function setVariables(variableIndependents : Array<VariableIndependent<Dynamic>>, variableDependents : Array<VariableDependent<Dynamic>>, data : Array<DataPoint>)
	{

	}

	public function data(layout : Array<Array<Node>>)
	{
		this.layout = layout;
		redraw();
	}

	function redraw()
	{
		levels = layout.length;
		max = layout[0][0].weight;
		map = new Hash();
		edges = [];

		availableheight = height - layout.floatMax(function(arr) return arr.length) * padding;

		padBefore = 20;
		padAfter = 20;

		layout.each(function(level, lvl) {
			level.each(function(n, pos) {
				map.set(n.id, n);
			});
		});

		layout.each(function(level, lvl) {
			level.each(function(n, pos) {
				for(child in n.children)
					edges.push({
						src : n,
						dst : map.get(child.id),
						weight : child.weight
					});
			});
		});

		var rules = g.selectAll("g.level").data(layout)
			.enter()
				.append("svg:g").attr("class").string("level")
				.append("svg:line")
					.attr("class").stringf(function(_, i) return "level level-"+i)
					.attr("x1").float(0)
					.attr("x2").float(0)
					.attr("y1").float(0)
					.attr("y2").float(height)
			.update()
				.attr("transform").stringf(function(_, i) {
					return "translate("+xlevel(i)+",0)";
				})
			.exit()
				.remove();

		var choice = rules.update()
			.selectAll("g.node").dataf(function(d : Array<Node>, _) return d);

		var cont = choice
			.enter()
				.append("svg:g").attr("class").string("node");
		cont.append("svg:rect")
			.attr("x").float(-levelWidth / 2)
			.attr("y").float(0)
			.attr("width").float(levelWidth)
			.attr("height").floatf(hnode);

		cont.each(function(dp, i) {
			var node = Selection.current;
			var label = new Label(node, true, true, false);
			label.anchor = GridAnchor.Bottom;
			label.text = dp.id;
		});

		choice.update().attr("transform").stringf(function(n, i) {
			return "translate(0,"+ynode(n, i)+")";
		});

// reference lines to remove
		var lines = g.selectAll("g.edge").data(edges)
			.enter()
				.append("svg:g").attr("class").string("edge")
				.append("svg:line")
					.style("stroke-opacity").float(0.25)
					.style("stroke").colorf(function(d, _)
						return
							d.src.level == d.dst.level
							? NamedColors.blue
							: (d.src.level < d.dst.level
								? NamedColors.green
								: NamedColors.red ));
		lines
				.attr("x1").floatf(function(o, _) {
					return xlevel(o.src.level);
				})
				.attr("x2").floatf(function(o, _) {
					return xlevel(o.dst.level);
				})
				.attr("y1").floatf(function(o, _) {
					return ynode(o.src) + hnode(o.src) / 2;
				})
				.attr("y2").floatf(function(o, _) {
					return ynode(o.dst) + hnode(o.dst) / 2;
				})
				.style("stroke-width").floatf(function(o, _) {
					return o.weight / max * availableheight;
				})
		;

// 


/*
		node.selectAll("line:edge").dataf(function(n : Node, _) return n.parents.map(function(p, _) return { src : n, dst : map.get(p.id), weight : p.weight }))
			.enter()
				.append("svg:line").attr("class").string("edge")
				.style("stroke-opacity").float(0.25)
				.style("stroke").colorf(function(d, _) return d.src.level == d.dst.level ? NamedColors.blue : (d.src.level > d.dst.level ? NamedColors.green : NamedColors.red))
			.update()
				.attr("x1").floatf(function(o, _) {
					return 0; //xlevel(map.get(o.src).level) - levelWidth / 2;
				})
				.attr("x2").floatf(function(o, _) {
					return xlevel(o.dst.level) - xlevel(o.src.level);
				})
				.attr("y1").floatf(function(o, _) {
					return hnode(o.src) / 2;
				})
				.attr("y2").floatf(function(o, _) {
					return (ynode(o.dst) + hnode(o.dst) / 2);
				})
				.style("stroke-width").floatf(function(o, _) {
					return o.weight / max * height / 2;
				})
			;
*/
//		trace(Dynamics.string(layout));

	}

	function xlevel(pos : Int, ?_)
	{
		return (width - padBefore - padAfter - levelWidth) / (levels - 1) * pos + (levelWidth / 2) + padBefore;
	}

	function ynode(node : Node, ?_)
	{
		var before = padding;
		for(i in 0...node.pos)
		{
			before += hnode(layout[node.level][i]) + padding;
		}
		return before;
	}

	function hnode(node : Node, ?_)
	{
		return node.weight / max * availableheight;
	}
}

typedef Node =
{
	dp : DataPoint,
	id : String,
	weight : Float,
	parents : Array<{ id : String, weight : Float }>,
	children : Array<{ id : String, weight : Float }>,
	level : Int,
	pos : Int
}