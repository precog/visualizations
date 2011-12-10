package rg.layout;

class GNode<TNodeData, TEdgeData> extends GraphElement<TNodeData, TNodeData, TEdgeData>
{
	public static function create<TNodeData, TEdgeData>(graph : Graph<TNodeData, TEdgeData>, id : Int, ?data : TNodeData)
	{
		return new GNode(graph, id, data);
	}

	public var nodes(default, null) : GraphNodes<TNodeData, TEdgeData>;
	function new(graph : Graph<TNodeData, TEdgeData>, id : Int, ?data : TNodeData)
	{
		super(graph, id, data);
		nodes = graph.nodes;
	}

	override function destroy()
	{
		super.destroy();
		nodes = null;
	}
}