package rg.layout;

using rg.layout.Graphs;

class GreedyCyclePartitioner
{
	public function new()
	{
	}

	public function partition(graph : Hash<Node>) 
	{
		var left = [],
			right = [],
			id;

		var n;
		graph = graph.clone();
		while(!graph.empty())
		{
			
			// remove sinks
			while(null != (n = graph.findSink()))
			{
				for(negative in n.edgesn)
				{
					// prepend edgesn to right
					right.unshift({ a : negative, b : n.vertex });
					// remove edge
					graph.get(negative).edgesp.remove(n.vertex);
				}
				// remove sink
				graph.remove(n.vertex);
			}
			
			// delete isolated vertices
			for(isolated in graph.findAllIsolated())
				graph.remove(isolated.vertex);

			// remove sources
			while(null != (n = graph.findSource()))
			{
				for(positive in n.edgesp)
				{
					// append edgesp to left
					left.push({ a : n.vertex, b : positive });
					// remove edge
					graph.get(positive).edgesn.remove(n.vertex);
				}
				// remove source
				graph.remove(n.vertex);
			}

			if(!graph.empty())
			{
				// choose a vertex such that edgesp - edgesn is max
				n = graph.findMaxPositiveOverNegative();
				for(negative in n.edgesn)
				{
					// prepend edgesn to right
					right.unshift({ a : negative, b : n.vertex });
					// remove edge
					graph.get(negative).edgesp.remove(n.vertex);
				}

				for(positive in n.edgesp)
				{
					// append edgesp to left
					left.push({ a : n.vertex, b : positive });
					// remove edge
					graph.get(positive).edgesn.remove(n.vertex);
				}

				// remove from graph
				graph.remove(n.vertex);
			}
		}

		return {
			left : left,
			right : right
		};
	}
}
