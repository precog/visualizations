package rg.layout;

import thx.error.Error;
import rg.layout.GraphElement;

class GraphNodes<TNodeData, TEdgeData> extends GraphCollection<TNodeData, TEdgeData, TNodeData, GNode<TNodeData, TEdgeData>>
{
	static public function newInstance<TNodeData, TEdgeData>(graph : Graph<TNodeData, TEdgeData>) return new GraphNodes(graph)

	function new(graph : Graph<TNodeData, TEdgeData>)
	{
		super(graph);
	}

	public function create(?data : TNodeData)
	{
		var n = GNode.create(graph, ++nextid, data);
		collectionAdd(n);
		return n;
	}

	public function remove(node : GNode<TNodeData, TEdgeData>)
	{
		if(node.graph != graph)
			throw new Error("the node is not part of this graph");
		collectionRemove(node);
		graph.edges.unlink(node);
		GraphElement.friendDestroy(node).destroy();
	}

	public function clear()
	{
		for(item in this)
			remove(item);
	}

	public function toString() return Std.format("GraphNodes ($length)")
}