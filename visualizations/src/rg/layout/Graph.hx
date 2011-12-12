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

	public function clone()
	{
		var g = new Graph();
		g.nodes = friendNodes(nodes).copyTo(g);
		g.edges = friendEdges(edges).copyTo(g);
		return g;
	}

	public function toString() return Std.format("Graph (nodes: ${nodes.length}, edges: ${edges.length})")

	static inline function friendNodes<TNodeData, TEdgeData>(friend : GraphNodes<TNodeData, TEdgeData>) : FriendNodesCopy<TNodeData, TEdgeData> return friend
	static inline function friendEdges<TNodeData, TEdgeData>(friend : GraphEdges<TNodeData, TEdgeData>) : FriendEdgesCopy<TNodeData, TEdgeData> return friend
}

typedef FriendNodesCopy<TNodeData, TEdgeData> = {
	private function copyTo(g : Graph<TNodeData, TEdgeData>) : GraphNodes<TNodeData, TEdgeData>;
}

typedef FriendEdgesCopy<TNodeData, TEdgeData> = {
	private function copyTo(g : Graph<TNodeData, TEdgeData>) : GraphEdges<TNodeData, TEdgeData>;
}
