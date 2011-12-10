package rg.layout;

using rg.layout.Graphs;

class LongestPathLayer
{
	public function new(){}
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
}