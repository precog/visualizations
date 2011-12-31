package rg.graph;

import utest.Assert;

class TestTwoCycleRemover 
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
			e1 = graph.edges.create(n1, n2),
			e2 = graph.edges.create(n2, n1),
			e3 = graph.edges.create(n1, n3),
			e4 = graph.edges.create(n3, n1),
			e5 = graph.edges.create(n2, n3),
			remover = new TwoCycleRemover(),
			removed = remover.remove(graph);
		Assert.equals(2, removed.length);
		Assert.equals(3, graph.edges.length);
	}
}