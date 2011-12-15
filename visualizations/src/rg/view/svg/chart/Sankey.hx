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
import rg.graph.GraphLayout;
import rg.graph.GEdge;
import rg.graph.GNode;
using Arrays;

// TODO wire labels

class Sankey extends Chart
{
	var layout : GraphLayout<NodeData, Dynamic>;
	public var layerWidth : Int;
	public var padding : Float;
	public var minpadding : Float;
	public var maxFalloffWidth : Float;
	public var padLines : Float;
	public var padFlow : Float;
	public var minCurve : Float;

	var maxweight : Float;
	var availableheight : Float;
	var padBefore : Float;
	var padAfter : Float;
	var layerstarty : Array<Float>;

	public function new(panel : Panel)
	{
		super(panel);
		addClass("sankey");
		layerWidth = 40;
		padding = 30;
		minpadding = 18;
		maxFalloffWidth = 24;
		padLines = 4.0;
		padFlow = 5;
		minCurve = 5;
	}

	public function setVariables(variableIndependents : Array<VariableIndependent<Dynamic>>, variableDependents : Array<VariableDependent<Dynamic>>, data : Array<DataPoint>)
	{

	}

	public function data(graphlayout : GraphLayout<NodeData, Dynamic>)
	{
		layout = graphlayout.clone();
		// remove nodes between back edges
		// - must be dummy
		// - must be directed right to left
		var nodes = Iterables.filter(layout.graph.nodes, function(node) return isdummy(node)).filter(function(node) {
			var edge = node.positives().next(),
				cellhead = layout.cell(edge.head),
				celltail = layout.cell(edge.tail);
			return celltail.layer > cellhead.layer;
		});
		var layers = layout.layers();

		for(node in nodes)
		{
			var cell  = layout.cell(node),
				ehead = node.positives().next(),
				etail = node.negatives().next();
			// remove from layout
			layers[cell.layer].splice(cell.position, 1);
			// create new replacement edge
			layout.graph.edges.create(etail.tail, ehead.head, ehead.weight, ehead.data);
			// remove the node (and the edges)
			node.remove();
		}

//		this.layout = graphlayout;

		redraw();
	}

	function redraw()
	{
		// space occupied by the node paddings
		maxweight = 0;
		layerstarty = [];
		for(i in 0...layout.length)
		{
			var v = layout.layer(i).reduce(function(cum, cur, _) return cum + cur.data.weight, 0);
			if(v > maxweight)
				maxweight = v;
		}

		var occupiedspace = 0.0;
		for(i in 0...layout.length)
		{
			var v = layout.layer(i).reduce(function(cum, cur, _){
				return cum + nodepadding(cur);
			}, 0.0);
			if(v > occupiedspace)
				occupiedspace = v;
		}
		availableheight = height - occupiedspace;
		trace(maxweight);

		// correct max available height and maxweight
		// remove space for back connections
		for(edge in layout.graph.edges)
		{
			if(layout.cell(edge.tail).layer < layout.cell(edge.head).layer)
				continue;
			availableheight -= padLines;
			maxweight += edge.weight;
		}
		availableheight -= minCurve + padFlow;
		trace(maxweight);


		var backedgesy  = 0.0;
		for(i in 0...layout.length)
		{
			var layer = layout.layer(i),
				t = 0.0;
			for(node in layer)
				t += nodepadding(node) + nheight(node.data.weight);
			layerstarty[i] = t;
			if(t > backedgesy)
				backedgesy = t;
		}

		for(i in 0...layerstarty.length)
		{
			layerstarty[i] = (backedgesy - layerstarty[i]) / 2; // STACK BOTTOM: backedgesy - layerstarty[i]
		}
		backedgesy += minCurve + padFlow;

		// padding before
		padBefore = 0.0;
		for(node in layout.layer(0))
		{
			var extra = Math.min(nheight(node.data.extrain), maxFalloffWidth);
			for(edge in node.negatives())
			{
				var tail = edge.tail,
					parentweight = hafter(edge.id, node.negatives()) + nheight(edge.weight);
				if(parentweight > extra)
					extra = parentweight;
			}
			if(extra > padBefore)
				padBefore = extra;
		}
		padBefore += 2; // TODO border border width

		// padding after
		padAfter = 0.0;
		for(node in layout.layer(layout.length-1))
		{
			var extra = Math.min(nheight(node.data.extraout), maxFalloffWidth);
			for(edge in node.positives())
			{
				var head = edge.head,
					childweight = hafter(edge.id, node.positives()) + nheight(edge.weight) + Math.min(nheight(node.data.extraout), maxFalloffWidth);
				if(childweight > extra)
					extra = childweight;
			}
			if(extra > padAfter)
				padAfter = extra;
		}
		padAfter += 2; // TODO better border width

		// DRAW
		var edgescontainer = g.select("g.edges");
		if(edgescontainer.empty())
			edgescontainer = g.append("svg:g").attr("class").string("edges");
		else
			edgescontainer.selectAll("*").remove();

		var edges = Iterables.array(layout.graph.edges).order(function(ea, eb) return Floats.compare(ea.weight, eb.weight));
		// back edges
		edges.each(function(edge, _) {
			var cellhead = layout.cell(edge.head),
				celltail = layout.cell(edge.tail);
			if(cellhead.layer > celltail.layer)
				return;
			var weight = nheight(edge.weight),
				hook   = new HookConnectorArea(edgescontainer),
				before = hafter(edge.id, edge.tail.positives()) + Math.min(maxFalloffWidth, nheight(edge.tail.data.extraout)),
				after  = hafter(edge.id, edge.head.negatives());

			hook.update(
				layerWidth / 2 + xlayer(celltail.layer),
				ynode(edge.tail) + ydiagonal(edge.id, edge.tail.positives()),
				- layerWidth / 2 + xlayer(cellhead.layer),
				nheight(edge.head.data.extrain) + ynode(edge.head) + ydiagonal(edge.id, edge.head.negatives()),
				weight,
				backedgesy,
				before,
				after
			);
			backedgesy += weight + padLines;
		});

		// forward edges
		edges.each(function(edge, _) {
			var head = edge.head,
				tail = edge.tail,
				cellhead = layout.cell(head),
				celltail = layout.cell(tail);
			if(cellhead.layer <= celltail.layer)
				return;
			var weight = nheight(edge.weight),
				diagonal = new DiagonalArea(edgescontainer);
			diagonal.update(
				layerWidth / 2 + xlayer(celltail.layer),
				ynode(tail) + ydiagonal(edge.id, tail.positives()),
//				ynode(tail) + hnode(tail) / 2,
				- layerWidth / 2 + xlayer(cellhead.layer),
				ynode(head) + nheight(head.data.extrain) + ydiagonal(edge.id, head.negatives()),
//				ynode(head) + hnode(head) / 2,
				weight,
				weight
			);
		});

		// fall-off
		function normMin(v : Float) return Math.max(0, Math.min(v - 3, minCurve));
		layout.each(function(cell, node) {
			if(node.data.extraout <= 0)
				return;
			var elbow = new ElbowArea(edgescontainer),
				falloff = nheight(node.data.extraout);
			elbow.update(
				RightBottom,
				falloff,
				layerWidth / 2 + xlayer(cell.layer),
				ynode(node) + ydiagonal(null, node.positives()) + falloff,
				normMin(falloff),  // minr
				maxFalloffWidth, // maxweight
				0,  // before
				padFlow  // after
			);
		});



		// extra-in
		layout.each(function(cell, node) {
			if(node.data.extrain <= 0)
				return;
			var elbow = new ElbowArea(edgescontainer),
				extra = nheight(node.data.extrain);
			elbow.update(
				LeftTop,
				extra,
				- layerWidth / 2 + xlayer(cell.layer),
				ynode(node), // + ydiagonal(null, node.positives()) + falloff
				normMin(extra),  // minr
				maxFalloffWidth, // maxweight
				0,  // before
				padFlow  // after
			);
		});

		var rules = g.selectAll("g.layer").data(layout.layers())
			.enter()
				.append("svg:g").attr("class").string("layer")
				.append("svg:line")
					.attr("class").stringf(function(_, i) return "layer layer-"+i)
					.attr("x1").float(0)
					.attr("x2").float(0)
					.attr("y1").float(0)
					.attr("y2").float(height)
			.update()
				.attr("transform").stringf(function(_, i) {
					return "translate("+xlayer(i)+",0)";
				})
			.exit()
				.remove();

		var choice = rules.update()
			.selectAll("g.node").dataf(function(d : Array<Int>, i) return layout.layer(i));

		var cont = choice
			.enter()
				.append("svg:g").attr("class").string("node");

		if(layerWidth > 0)
		{
			cont.append("svg:rect")
				.attr("class").string("node")
				.attr("x").float(-layerWidth / 2)
				.attr("y").float(0)
				.attr("width").float(layerWidth)
				.attr("height").floatf(hnode);

			cont.append("svg:line")
				.attr("class").string("node")
				.attr("x1").float(-layerWidth / 2)
				.attr("y1").float(0)
				.attr("x2").float(layerWidth / 2)
				.attr("y2").float(0);

			cont.append("svg:line")
				.attr("class").string("node")
				.attr("x1").float(-layerWidth / 2)
				.attr("y1").floatf(hnode)
				.attr("x2").float(layerWidth / 2)
				.attr("y2").floatf(hnode);
		}

		cont.each(function(n : GNode<NodeData, Dynamic>, i) {
			var node = Selection.current;
			if(isdummy(n))
				return;
			var label = new Label(node, true, true, false);
			label.anchor = GridAnchor.Bottom;
			label.text = n.data.id;
		});

		choice.update().attr("transform").stringf(function(n, i) {
			return "translate(0,"+ynode(n)+")";
		});

// reference lines to remove
/*
		var lines = g.selectAll("g.reference").data(edges)
			.enter()
				.append("svg:g").attr("class").string("reference")

				.append("svg:line")
					.style("stroke-opacity").float(0.1)
					.style("stroke").colorf(function(d, _)
						return
							layout.cell(d.tail).layer == layout.cell(d.head).layer
							? NamedColors.blue
							: (layout.cell(d.tail).layer < layout.cell(d.head).layer
								? NamedColors.green
								: NamedColors.red ))

		;
		lines
			.attr("x1").floatf(function(o, _) {
				return xlayer(layout.cell(o.tail).layer);
			})
			.attr("x2").floatf(function(o, _) {
				return xlayer(layout.cell(o.head).layer);
			})
			.attr("y1").floatf(function(o, _) {
				return ynode(o.tail) + hnode(o.tail) / 2;
			})
			.attr("y2").floatf(function(o, _) {
				return ynode(o.head) + hnode(o.head) / 2;
			})
			.style("stroke-width").floatf(function(o, _) {
				return nheight(o.weight);
			})
		;
*/
	}

	function nheight(v : Float)
	{
		return v / maxweight * availableheight;
	}

	function ydiagonal(id : Int, edges : Iterator<GEdge<NodeData, Dynamic>>)
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

	function hafter(id : Int, edges : Iterator<GEdge<NodeData, Dynamic>>)
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

	function xlayer(pos : Int, ?_)
	{
		return Math.round((width - padBefore - padAfter - layerWidth) / (layout.length - 1) * pos + (layerWidth / 2) + padBefore);
	}

	function ynode(node : GNode<NodeData, Dynamic>, ?_)
	{
		var cell = layout.cell(node),
			before = 0.0 + layerstarty[cell.layer];
		for(i in 0...cell.position)
		{
			var prev = layout.nodeAt(cell.layer, i);
			before += hnode(prev) + nodepadding(prev);
		}
		before += nodepadding(node);
		return before;
	}

	function nodepadding(node : GNode<NodeData, Dynamic>)
	{
		return isdummy(node) ? minpadding : padding;
	}

	function isdummy(node : GNode<NodeData, Dynamic>)
	{
		return node.data.id.substr(0, 1) == "#";
	}

	function hnode(node : GNode<NodeData, Dynamic>, ?_)
	{
		return nheight(node.data.weight);
	}
}

typedef NodeData =
{
	dp       : DataPoint,
	id       : String,
	weight   : Float,
	extrain  : Float,
	extraout : Float
}