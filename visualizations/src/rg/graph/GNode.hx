package rg.graph;

import thx.error.Error;
import rg.graph.GraphEdges;
using Iterators;

class GNode<TNodeData, TEdgeData> extends GraphElement<TNodeData, TNodeData, TEdgeData>
{
	public static function create<TNodeData, TEdgeData>(graph : Graph<TNodeData, TEdgeData>, id : Int, ?data : TNodeData)
	{
		return new GNode(graph, id, data);
	}

//	public var nodes(default, null) : GraphNodes<TNodeData, TEdgeData>;
	function new(graph : Graph<TNodeData, TEdgeData>, id : Int, ?data : TNodeData)
	{
		super(graph, id, data);
//		nodes = graph.nodes;
	}

	override function destroy()
	{
		super.destroy();
//		nodes = null;
	}

	public function isConnectedTo(other : GNode<TNodeData, TEdgeData>)
	{
		if(other.graph != graph)
			throw new Error("the node is not part of this graph");
		return friendEdges().positives(this).contains(function(edge : GEdge<TNodeData, TEdgeData>) {
			return edge.head.id == other.id;
		}) || friendEdges().negatives(this).contains(function(edge : GEdge<TNodeData, TEdgeData>) {
			return edge.tail.id == other.id;
		});
	}

	public function connectedBy(other : GNode<TNodeData, TEdgeData>)
	{
		if(other.graph != graph)
			throw new Error("the node is not part of this graph");
		var edge = friendEdges().positives(this).firstf(function(edge : GEdge<TNodeData, TEdgeData>) {
			return edge.head.id == other.id;
		});
		if(null != edge)
		return edge;
		return friendEdges().negatives(this).firstf(function(edge : GEdge<TNodeData, TEdgeData>) {
			return edge.tail.id == other.id;
		});
	}

	public function isSource()
	{
		return friendEdges().positives(this).hasNext() && !friendEdges().negatives(this).hasNext();
	}

	public function isSink()
	{
		return friendEdges().negatives(this).hasNext() && !friendEdges().positives(this).hasNext();
	}

	public function isIsolated()
	{
		return !friendEdges().edges(this).hasNext();
	}

	public function isSuccessorOf(predecessor : GNode<TNodeData, TEdgeData>)
	{
		return predecessor.isPredecessorOf(this);
	}

	public function isPredecessorOf(successor : GNode<TNodeData, TEdgeData>)
	{
		return friendEdges().positives(this).contains(function(edge : GEdge<TNodeData, TEdgeData>) {
			return edge.head.id == successor.id;
		});
	}

	public function successorBy(predecessor : GNode<TNodeData, TEdgeData>)
	{
		return friendEdges().negatives(this).firstf(function(edge : GEdge<TNodeData, TEdgeData>) {
			return edge.tail.id == predecessor.id;
		});
	}

	public function predecessorBy(successor : GNode<TNodeData, TEdgeData>)
	{
		return friendEdges().positives(this).firstf(function(edge : GEdge<TNodeData, TEdgeData>) {
			return edge.head.id == successor.id;
		});
	}

	inline public function edges()
	{
		return friendEdges().edges(this);
	}

	inline public function positives()
	{
		return friendEdges().positives(this);
	}

	inline public function negatives()
	{
		return friendEdges().negatives(this);
	}

	inline public function edgeCount()
	{
		return friendEdges().edgeCount(this);
	}

	inline public function positiveCount()
	{
		return friendEdges().positiveCount(this);
	}

	inline public function negativeCount()
	{
		return friendEdges().negativeCount(this);
	}
	inline public function remove() friendRemove()._remove(this)

	inline function friendRemove() : { private function _remove(node : GNode<TNodeData, TEdgeData>) : Void; } return graph.nodes

	inline function friendEdges() : FriendGraphEdges<TNodeData, TEdgeData> return graph.edges

	public function toString() return Std.format("Node (#$id, positives ${positiveCount()}, negatives: ${negativeCount()}${null == data ? '' : ', data: '+data})")
}