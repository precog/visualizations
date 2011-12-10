package rg.layout;

class Graph<TNodeData, TEdgeData>
{
//	public static var global(getGlobal, null) : GlobalGraph;
	public var nodes(default, null) : GraphNodes<TNodeData, TEdgeData>;
	public var edges(default, null) : GraphEdges<TNodeData, TEdgeData>;

	public function new()
	{
		nodes = GraphNodes.newInstance(this);
		edges = GraphEdges.newInstance(this);
	}

	public function clear()
	{
		edges.clear();
		nodes.clear();
	}

	public function toString() return Std.format("Graph (nodes: ${nodes.length}), edges: ${edges.length})")
/*
	public static function create()
	{
		var g = new Graph();
		g.setCollections(GraphNodes.newInstance(g));//, GraphEdges.newInstance(g));
		return g;
	}
*/
/*
	function setCollections(nodes : GraphNodes<TNodeData, TEdgeData>, edges : GraphEdges<TNodeData, TEdgeData>) 
	{
		this.nodes = nodes;
//		this.edges = edges;
	}
*/

//	static inline function getGlobal() return GlobalGraph.instance
}
/*

class GlobalGraph extends Graph<Dynamic, Dynamic>
{
	public static var instance(default, null) : GlobalGraph;

	function new()
	{
		super();
		setCollections(GlobalGraphNodes.newInstance(this), GlobalGraphEdges.newInstance(this));
	}

	static function __init__()
	{
		instance = new GlobalGraph();
	}
}

class GlobalGraphNodes extends GraphNodes<Dynamic, Dynamic>
{
	static public function newInstance(graph : GlobalGraph) return new GlobalGraphNodes(graph)
}

class GlobalGraphEdges extends GraphEdges<Dynamic, Dynamic>
{
	static public function newInstance(graph : GlobalGraph) return new GlobalGraphEdges(graph)
}
*/







