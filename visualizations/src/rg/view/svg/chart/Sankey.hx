package rg.view.svg.chart;
import rg.view.svg.panel.Panel;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.data.DataPoint;
import thx.color.NamedColors;
import thx.js.Selection;
import rg.view.svg.widget.Label;
import rg.view.svg.widget.GridAnchor;
import rg.view.svg.widget.DiagonalArea;
import rg.view.svg.widget.ElbowArea;
import rg.view.svg.widget.HookConnectorArea;
using Arrays;

// TODO wire labels

class Sankey extends Chart
{
	var layout : Array<Array<Node>>;
	public var levelWidth : Int;
	public var padding : Float;
	public var maxFalloffWidth : Float;
	public var padLines : Float;

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
		padding = 60;
		maxFalloffWidth = 40;
		padLines = 4.0;
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
		edges.sort(function(a, b) {
			return Floats.compare(a.weight, b.weight);
		});

		padBefore = 0.0;

		for(node in layout[0])
		{
			var extrain = Math.min(nheight(node.extraweight), maxFalloffWidth);
			if(node.parents.length > 0)
			{
				var parentWeight = hafter(node.parents[0].id, node.parents) + nheight(node.parents[0].weight);
				if(parentWeight > extrain)
					extrain = parentWeight;
			}
			if(extrain > padBefore)
				padBefore = extrain;
		}

		padBefore += 2; // TODO border width

		padAfter = 0.0;

		for(node in layout[layout.length-1])
		{
			var extrain = Math.min(nheight(node.falloffweight), maxFalloffWidth);
			trace(extrain);
			if(node.children.length > 0)
			{
				var childWeight = hafter(node.children[0].id, node.children) + nheight(node.children[0].weight) + nheight(node.falloffweight) + padLines;
				trace(childWeight);
				if(childWeight > extrain)
					extrain = childWeight;
			}
			if(extrain > padAfter)
				padAfter = extrain;
		}

		padAfter += 2;

		// draw

		var edgescontainer = g.select("g.edges");
		if(edgescontainer.empty())
			edgescontainer = g.append("svg:g").attr("class").string("edges");
		else
			edgescontainer.selectAll("*").remove();

		var yref = 540.0;

		edges.each(function(edge, _) {
			if(edge.dst.level > edge.src.level)
				return;
			var weight = nheight(edge.weight),
				hook   = new HookConnectorArea(edgescontainer),
				before = hafter(edge.dst.id, edge.src.children) + Math.min(maxFalloffWidth, nheight(edge.src.falloffweight)),
				after  = hafter(edge.src.id, edge.dst.parents);

			hook.update(
				levelWidth / 2 + xlevel(edge.src.level),
				ynode(edge.src) + ydiagonal(edge.dst.id, edge.src.children),
//				ynode(edge.src) + hnode(edge.src) / 2,
				- levelWidth / 2 + xlevel(edge.dst.level),
				nheight(edge.dst.extraweight) + ynode(edge.dst) + ydiagonal(edge.src.id, edge.dst.parents),
//				ynode(edge.dst) + hnode(edge.dst) / 2,
//				weight,
				weight,
				yref,
//				Math.max(nheight(edge.src.weight) + ynode(edge.src), nheight(edge.dst.weight) + ynode(edge.dst)) + 20,
				before,
				after
			);
			yref += weight + padLines;
		});

		edges.each(function(edge, _) {
			if(edge.dst.level <= edge.src.level)
				return;
			var weight = edge.weight / max * availableheight,
				diagonal = new DiagonalArea(edgescontainer);
			diagonal.update(
				levelWidth / 2 + xlevel(edge.src.level),
				ynode(edge.src) + ydiagonal(edge.dst.id, edge.src.children),
//				ynode(edge.src) + hnode(edge.src) / 2,
				- levelWidth / 2 + xlevel(edge.dst.level),
				nheight(edge.dst.extraweight) + ynode(edge.dst) + ydiagonal(edge.src.id, edge.dst.parents),
//				ynode(edge.dst) + hnode(edge.dst) / 2,
				weight,
				weight
			);
		});

		function normMin(v : Float) return Math.max(0, Math.min(v - 3, 5));

		// fall-off
		for(level in layout)
		{
			for(node in level)
			{
				if(node.falloffweight <= 0)
					continue;
				var elbow = new ElbowArea(edgescontainer),
					falloff = nheight(node.falloffweight);
				elbow.update(
					RightBottom,
					falloff,
					levelWidth / 2 + xlevel(node.level),
					ynode(node) + ydiagonal(null, node.children) + falloff,
					normMin(falloff),  // minr
					maxFalloffWidth, // max
					0,  // before
					5  // after
				);
			}
		}

		// extra-in
		for(level in layout)
		{
			for(node in level)
			{
				if(node.extraweight <= 0)
					continue;
				var elbow = new ElbowArea(edgescontainer),
					extra = nheight(node.extraweight);

				trace(extra);
				elbow.update(
					LeftTop,
					extra,
					- levelWidth / 2 + xlevel(node.level),
					ynode(node), // + ydiagonal(null, node.children) + falloff
					normMin(extra),  // minr
					maxFalloffWidth, // max
					0,  // before
					5  // after
				);
			}
		}

		var rules = g.selectAll("g.level").data(layout)
			.enter()
				.append("svg:g").attr("class").string("level")
/*				.append("svg:line")
					.attr("class").stringf(function(_, i) return "level level-"+i)
					.attr("x1").float(0)
					.attr("x2").float(0)
					.attr("y1").float(0)
					.attr("y2").float(height)
*/			.update()
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

		if(levelWidth > 0)
		{
			cont.append("svg:rect")
				.attr("class").string("node")
				.attr("x").float(-levelWidth / 2)
				.attr("y").float(0)
				.attr("width").float(levelWidth)
				.attr("height").floatf(hnode);

			cont.append("svg:line")
				.attr("class").string("node")
				.attr("x1").float(-levelWidth / 2)
				.attr("y1").float(0)
				.attr("x2").float(levelWidth / 2)
				.attr("y2").float(0);

			cont.append("svg:line")
				.attr("class").string("node")
				.attr("x1").float(-levelWidth / 2)
				.attr("y1").floatf(hnode)
				.attr("x2").float(levelWidth / 2)
				.attr("y2").floatf(hnode);
		}

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

		var lines = g.selectAll("g.reference").data(edges)
			.enter()
				.append("svg:g").attr("class").string("reference")
				.append("svg:line")
					.style("stroke-opacity").float(0.1)
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
				return nheight(o.weight);
			})
		;

	}

	function nheight(v : Float)
	{
		return v / max * availableheight;
	}

	function ydiagonal(id : String, edges : Array<{ id : String, weight : Float }>)
	{
		var weight = 0.0;
		for(edge in edges)
		{
			if(edge.id == id)
				break;
			weight += edge.weight;
		}
		return nheight(weight);
	}

	function hafter(id : String, edges : Array<{ id : String, weight : Float }>)
	{
		var found = false,
			pad = padLines / nheight(1),
			weight = pad;
		for(edge in edges)
		{
			if(!found)
			{
				if(edge.id == id)
				//	continue;
				found = true;
				continue;
			}
			weight += edge.weight + pad;
		}
		return nheight(weight);
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
		return nheight(node.weight);
	}
}

typedef Node =
{
	dp : DataPoint,
	id : String,
	weight : Float,
	extraweight : Float,
	falloffweight : Float,
	parents : Array<{ id : String, weight : Float }>,
	children : Array<{ id : String, weight : Float }>,
	level : Int,
	pos : Int
}