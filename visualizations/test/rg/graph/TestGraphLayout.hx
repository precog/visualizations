package rg.graph;

import utest.Assert;

class TestGraphLayout 
{
	public function new() {}

	public function testRemoveNode()
	{
		var graph = new Graph(),
			n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			n3 = graph.nodes.create(),
			e1 = graph.edges.create(n1, n2),
			e2 = graph.edges.create(n2, n3),
			layers = [[n1.id],[n2.id],[n3.id]],
			layout = new GraphLayout(graph, layers);
		n2.remove();
		Assert.same([[n1.id],[n3.id]], layout.layers());
	}
}