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

	function copyTo(graph : Graph<TNodeData, TEdgeData>) : GraphNodes<TNodeData, TEdgeData> 
	{
		var nodes = new GraphNodes(graph);
		for(node in this)
			nodes._create(node.id, node.data);
		nodes.nextid = this.nextid;
		return nodes;
	}

	public function create(?data : TNodeData)
	{
		return _create(++nextid, data);
	}

	function _create(id, ?data : TNodeData)
	{
		var n = GNode.create(graph, id, data);
		collectionAdd(n);
		return n;
	}

	public function remove(node : GNode<TNodeData, TEdgeData>)
	{
		if(node.graph != graph)
			throw new Error("the node is not part of this graph");
		graph.edges.unlink(node);
		collectionRemove(node);
		GraphElement.friendDestroy(node).destroy();
	}

	public function clear()
	{
		for(item in this)
			remove(item);
	}

	public function toString() return Std.format("GraphNodes ($length)")
}