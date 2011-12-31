package rg.graph;

import utest.Assert;

class TestEdgeSplitter 
{
	public function new() {}

	public function testSplit()
	{
		var graph = new Graph(),
			n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			n3 = graph.nodes.create(),
			e1 = graph.edges.create(n1, n2),
			e2 = graph.edges.create(n1, n3),
			layout = new GraphLayout(graph, [[n1.id], [], [n2.id], [n3.id]]);
		var newlayout = new EdgeSplitter().split(layout).layers();
		// added 3 edges to the graph
		Assert.equals(5, graph.edges.length);
		Assert.equals(4, newlayout.length);
		Assert.equals(1, newlayout[0].length);
		Assert.equals(2, newlayout[1].length);
		Assert.equals(2, newlayout[2].length);
		Assert.equals(1, newlayout[3].length);
	}
}