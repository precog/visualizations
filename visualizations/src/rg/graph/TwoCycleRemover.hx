package rg.graph;

//  TODO add one cycled remover

class TwoCycleRemover 
{
	public function new()
	{
		
	}

	public function remove<TNodeData, TEdgeData>(graph : Graph<TNodeData, TEdgeData>) : Array<{ tail : GNode<TNodeData, TEdgeData>, head : GNode<TNodeData, TEdgeData>, data : TEdgeData, weight : Float }>
	{
		var result = [];
		for(node in graph.nodes)
		{
			for(edge in node.positives())
			{
				var reverse = edge.head.predecessorBy(node);
				if(null == reverse)
					continue;
				result.push({
					tail   : reverse.tail,
					head   : reverse.head,
					weight : reverse.weight,
					data   : reverse.data
				});
				reverse.remove();
			}
		}
		return result;
	}
/*
	public function remove(edges : Array<Edge>)
	{
		this.edges = edges;
		var i = 0, edge, removed = [];
		while(i < edges.length)
		{
			edge = edges[i];
			if(removeEdge(edge.b, edge.a))
				removed.push({ a : edge.b, b : edge.a });
			i++;
		}
		return removed;
	}

	function removeEdge(a : String, b : String)
	{
		var pos = -1;
		for(i in 0...edges.length)
		{
			if(a != edges[i].a || b != edges[i].b)
				continue;
			pos = i;
			break;
		}
		return removeEdgeAt(pos);
	}

	function removeEdgeAt(pos : Int)
	{
		if(pos < 0) return false;
		edges.splice(pos, 1);
		return true;
	}
	*/
}