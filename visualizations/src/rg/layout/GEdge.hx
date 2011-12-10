package rg.layout;

class GEdge<TNodeData, TEdgeData> extends GraphElement<TEdgeData, TNodeData, TEdgeData>
{
	public static function create<TNodeData, TEdgeData>(graph : Graph<TNodeData, TEdgeData>, id : Int, head : GNode<TNodeData, TEdgeData>, tail : GNode<TNodeData, TEdgeData>, ?data : TEdgeData)
	{
		return new GEdge(graph, id, head, tail, data);
	}

	public var edges(default, null) : GraphEdges<TNodeData, TEdgeData>;
	public var head(default, null) : GNode<TNodeData, TEdgeData>;
	public var tail(default, null) : GNode<TNodeData, TEdgeData>;

	function new(graph : Graph<TNodeData, TEdgeData>, id : Int, head : GNode<TNodeData, TEdgeData>, tail : GNode<TNodeData, TEdgeData>, ?data : TEdgeData)
	{
		super(graph, id, data);
		this.edges = graph.edges;
		this.head = head;
		this.tail = tail;
	}

	override function destroy()
	{
		super.destroy();
		edges = null;
		head = null;
		tail = null;
	}
}