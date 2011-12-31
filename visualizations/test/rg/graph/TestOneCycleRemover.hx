package rg.graph;

import utest.Assert;
using Arrays;

class TestOneCycleRemover 
{
	public function new()
	{
		
	}

	public function testRemover()
	{
		var graph = new Graph(),
			n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			n3 = graph.nodes.create(),
			e1 = graph.edges.create(n1, n1),
			e2 = graph.edges.create(n2, n2),
			e3 = graph.edges.create(n1, n3),
			remover = new OneCycleRemover(),
			removed = remover.remove(graph);
		Assert.equals(2, removed.length);
		Assert.isNull(e1.tail); // edge doesn't exist anymore
		Assert.isNull(e2.tail); // edge doesn't exist anymore

		Assert.equals(1, graph.edges.length);

		Assert.isTrue(removed.exists(function(i) return i.node == n1));
		Assert.isTrue(removed.exists(function(i) return i.node == n2));
	}
}