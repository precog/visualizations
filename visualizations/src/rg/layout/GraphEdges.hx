package rg.layout;

import thx.error.Error;

class GraphEdges<TNodeData, TEdgeData> extends GraphCollection<TNodeData, TEdgeData, TEdgeData, GEdge<TNodeData, TEdgeData>>
{
	static public function newInstance<TNodeData, TEdgeData>(graph : Graph<TNodeData, TEdgeData>) return new GraphEdges(graph)

	var edgesp : IntHash<Array<Int>>;
	var edgesn : IntHash<Array<Int>>;

	function new(graph : Graph<TNodeData, TEdgeData>)
	{
		super(graph);
		edgesp = new IntHash();
		edgesn = new IntHash();
	}

	public function create(head : GNode<TNodeData, TEdgeData>, tail : GNode<TNodeData, TEdgeData>, ?data : TEdgeData)
	{
		if(head.graph != tail.graph || head.graph != graph)
			throw new Error("can't create an edge between nodes on different graphs");
		var e = GEdge.create(graph, ++nextid, head, tail, data);
		collectionAdd(e);
		connections(head.id, edgesp).push(e.id);
		connections(tail.id, edgesn).push(e.id);
		return e;
	}

	public function remove(edge : GEdge<TNodeData, TEdgeData>)
	{
		if(edge.graph != graph)
			throw new Error("the edge is not part of this graph");
		collectionRemove(edge);
		GraphElement.friendDestroy(edge).destroy();
	}

	public function unlink(node : GNode<TNodeData, TEdgeData>)
	{
		if(node.graph != graph)
			throw new Error("the node is not part of this graph");
		_unlink(node, edgesp);
		_unlink(node, edgesn);
	}

	public function unlinkPositives(node : GNode<TNodeData, TEdgeData>)
	{
		if(node.graph != graph)
			throw new Error("the node is not part of this graph");
		_unlink(node, edgesp);
	}

	public function unlinkNegatives(node : GNode<TNodeData, TEdgeData>)
	{
		if(node.graph != graph)
			throw new Error("the node is not part of this graph");
		_unlink(node, edgesn);
	}

	public function _unlink(node : GNode<TNodeData, TEdgeData>, connections : IntHash<Array<Int>>)
	{
		var ids = connections.get(node.id);
		if(null == ids)
			return;
		for(id in ids)
			remove(get(id));
		connections.remove(node.id);
	}

	public function clear()
	{
		for(item in this)
			remove(item);
	}

	function connections(id : Int, connections : IntHash<Array<Int>>)
	{
		var c = connections.get(id);
		if(null == c)
			connections.set(id, c = []);
		return c;
	}

	public function toString() return Std.format("GraphEdges ($length)")
}