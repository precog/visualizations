package rg.layout;

using Arrays;
using rg.layout.Graphs;

//  TODO add one cycled remover

class SugiyamaMethod
{
	var partitioner : Partitioning;
	var layer : Layering;
	var splitter : Splitting;
	var decrosser : Decrossing;

	public function new(?partitioner : Partitioning, ?layer : Layering, ?splitter : Splitting, ?decrosser : Decrossing)
	{
		var id = 0;
		this.partitioner = null == partitioner ? new GreedyCyclePartitioner() : partitioner;
		this.layer       = null == layer       ? new LongestPathLayer()       : layer;
		this.splitter    = null == splitter    ? new EdgeSpliter()            : splitter;
		this.decrosser   = null == decrosser   ? GreedySwitchDecrosser.composed()     : decrosser;
	}

	public function resolve(vertices : Array<String>, edges : Array<Edge>)
	{
		edges = edges.copy();
		vertices = vertices.copy();

draw(vertices, edges);
		var remover = new TwoCycleRemover(),
			removed = remover.remove(edges),
			reversed = [];

		var partitions = partitioner.partition(createMap(vertices, edges));

		edges = partitions.right;
		for(pair in partitions.left)
		{
			edges.push({ a : pair.b, b : pair.a });
			reversed.push(pair);
		}
draw(vertices, edges);

		var layout = layer.lay(createMap(vertices, edges));

draw(vertices, edges, layout);

		splitter.split(layout);

		vertices = layout.toVertices();
		edges = layout.toEdges();

draw(vertices, edges, layout);
		decrosser.decross(layout);
draw(vertices, edges, layout);


		var map = createMap(vertices, edges);

		trace(reversed);
// reverse nodes
		for(edge in reversed)
		{
			map.reverseConnection(edge.b, edge.a);
		}

drawGraph(map, layout);

		trace(removed);
// introduce One and Two Cycles
		for(edge in removed)
		{
			map.addConnection(edge.a, edge.b);
		}
drawGraph(map, layout);

		return layout;
	}

	static function createMap(vertices : Array<String>, edges : Array<Edge>)
	{
		var map = new Hash();
		for(v in vertices)
			map.set(v, { vertex : v, edgesn : [], edgesp : [] });
		for(edge in edges)
		{
			map.get(edge.a).edgesp.push(edge.b);
			map.get(edge.b).edgesn.push(edge.a);
		}
		return map;
	}

	static function drawGraph(graph : Hash<Node>, ?layout : Array<Array<Node>>)
	{
		var vertices = Iterators.array(graph.keys()),
			edges = Iterables.map(graph, function(n, _) {
				return n.edgesp.map(function(dst, _) return { a : n.vertex, b : dst });
			}).flatten();
		draw(vertices, edges, layout);
	}

	static function draw(vertices : Array<String>, edges : Array<Edge>, ?layout : Array<Array<Node>>)
	{
		var map = new Hash<{x:Int,y:Int}>(), grid = 16, padding = 25, r = 5, size = 400, rand = new thx.math.Random(0x6699ff);
		var el = thx.js.Dom.select("body").append("svg:svg").attr("width").float(size).attr("height").float(size).style("margin").string("4px");

		el.append("svg:defs").append("svg:marker")
			.attr("id").string("Triangle")
			.attr("viewBox").string("0 0 10 10")
			.attr("refX").string("" + (r+8))
			.attr("refY").string("5")
			.attr("markerUnits").string("strokeWidth")
			.attr("markerWidth").string("4")
			.attr("markerHeight").string("6")
			.attr("orient").string("auto")
				.append("svg:path")
					.attr("d").string("M 0 0 L 10 5 L 0 10 z");
		el.append("svg:rect")
			.attr("x").float(0)
			.attr("y").float(0)
			.attr("width").float(size)
			.attr("height").float(size)
			.attr("fill").string("#eeeeee")
			.attr("stroke").string("blue")
			.attr("stroke-width").float(4)
		;

		function pos(v : Float) : Int
		{
			return Math.floor(v * grid);
		}

		function loc(v : Int)
		{
			return padding + ((size - padding * 2) / (grid - 1)) * v;
		}

		function x(id)
		{
			return loc(map.get(id).x);
		}

		function y(id)
		{
			return loc(map.get(id).y);
		}

		if(null != layout)
		{
			grid = layout.length;
			for (i in 0...layout.length)
			{
				if(layout[i].length > grid)
					grid = layout[i].length;
				for (j in 0...layout[i].length)
				{
					map.set(layout[i][j].vertex, {x:i, y:j});
				}
			}
		} else {
			var slots = Ints.range(grid).map(function(_,_) return Ints.range(grid).map(function(_,_) return null));
			map = new Hash();
			vertices.each(function(v, _) {
				var x = 0, y = 0;
				while(true)
				{
					x = pos(rand.float());
					y = pos(rand.float());
					if(slots[x][y] == null)
					{
						slots[x][y] = true;
						break;
					}
				}
				map.set(v, {x:x,y:y});
			});
		}
		el.selectAll("circle").data(vertices)
			.enter()
				.append("svg:circle")
				.attr("cx").floatf(function(v, _) return x(v))
				.attr("cy").floatf(function(v, _) return y(v))
				.attr("r").floatf(function(v, _) return v.substr(0, 1) == "#" ? 0 : r)
		;

		el.selectAll("path.edge").data(edges)
			.enter()
				.append("svg:path")
				.attr("class").string("edge")
				.attr("class").stringf(function(e,_) return e.a+"-"+e.b)
				.attr("stroke").stringf(function(e,_) {
					return thx.color.Rgb.interpolateRainbow(new thx.math.Random(Std.parseInt(e.a)*0x18e4fe+Std.parseInt(e.b)*0x3a8).float()).toCss();
				})
				.attr("opacity").float(0.75)
				.attr("stroke-width").float(2)
				.attr("d").stringf(function(e, _) return "M"+x(e.a)+","+y(e.a)+"L"+x(e.b)+","+y(e.b))
				.attr("marker-end").stringf(function(e, _) return e.b.substr(0, 1) == '#' ? '' : "url(#Triangle)")
		;

		el.selectAll("text").data(vertices)
			.enter()
				.append("svg:text")
					.text().stringf(function(v, _) return v)
					.attr("text-anchor").string("middle")
					.attr("transform").stringf(function(v, _) return "translate("+x(v)+","+(y(v)-7)+")")
					.attr("fill").string("#666")
					.style("font-weight").stringf(function(v, _) return v.substr(0, 1) == "#" ? "normal" : "bold")
					.style("font-size-adjust").floatf(function(v, _) return v.substr(0, 1) == "#" ? .4 : .5)
		;
	}
}

typedef Partitioning = {
	public function partition(graph : Hash<Node>) : { left : Array<Edge>, right : Array<Edge>};
}

typedef Layering = {
	public function lay(graph : Hash<Node>) : Array<Array<Node>>;
}

typedef Splitting = {
	public function split(layout : Array<Array<Node>>) : Void;
}

typedef Decrossing = {
	public function decross(layout : Array<Array<Node>>) : Void;
}