package rg.graph;

using rg.graph.Graphs;

class LongestPathLayer
{
	public function new(){}

	public function lay<TNodeData, TEdgeData>(graph : Graph<TNodeData, TEdgeData>) : Array<Array<Int>>
	{
		var clone = graph.clone(),
			layers = [[]];
		// move all sinks to L0
		for(node in clone.findSinks())
		{
			layers[0].push(node.id);
			node.remove();
		}
		for(node in clone.nodes)
		{
			var pos = distanceToASink(clone, node),
				layer = layers[pos];
			if(null == layer)
				layer = layers[pos] = [];
			layer.push(node.id);
		}
		layers.reverse();
		trace(layers);
		return layers;
	}

	static function distanceToASink<TNodeData, TEdgeData>(graph : Graph<TNodeData, TEdgeData>, node : GNode<TNodeData, TEdgeData>)
	{
		var child;
		function traverse(it : Iterator<GEdge<TNodeData, TEdgeData>>, lvl : Int)
		{
			var max = lvl;
//			if(lvl > graph.nodes.length) return lvl;
			for(edge in it)
			{
				if(edge.tail.isSink())
					continue;
				else
					max = Ints.max(max, traverse(edge.tail.negatives(), lvl + 1));
			}
			return max;
		}
		return node.isIsolated() ? 0 : traverse(node.negatives(), 1);
	}
/*
	public function lay(graph : Hash<Node>) : Array<Array<Node>>
	{
		var map = graph.clone(),
			layers = [[]],
			u = [],
			z = [];

		// move all sinks to L0
		var node;
		while(null != (node = map.findSink()))
		{
			map.removeNode(node);
			layers[0].push(node);
		}
//		trace(layers);
		for(v in map.keys())
		{
			node = graph.get(v);
			var pos = distanceToASink(node, graph),
				layer = layers[pos];
			if(null == layer)
				layer = layers[pos] = [];
			layer.push(node);
		}
//		trace(layers);
		layers.reverse();
		return layers;
	}

	function distanceToASink(node : Node, graph : Hash<Node>)
	{
		var child;
		function traverse(arr : Array<String>, lvl : Int)
		{
			var max = lvl;
			if(lvl > graph.count()) return lvl;
			for(v in arr)
			{
				child = graph.get(v);
				if(child.isSink())
					continue;
				else
					max = Ints.max(max, traverse(child.edgesp, lvl + 1));
			}
			return max;
		}
		return traverse(node.edgesp, 1);
	}
*/
}