package rg.graph;

import utest.Assert;

class TestLongestPathLayer
{
	public function new() {}

	public function testLayer()
	{
		var graph = new Graph(),
			n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			n3 = graph.nodes.create(),
			n4 = graph.nodes.create(),
			n5 = graph.nodes.create(),
			e1 = graph.edges.create(n1, n2),
			e2 = graph.edges.create(n2, n3),
			e3 = graph.edges.create(n1, n4),
			e4 = graph.edges.create(n3, n5),
			layout = new LongestPathLayer().lay(graph);
		Assert.equals(3, layout.length);
		Assert.equals(2, Arrays.floatMax(layout, function(arr) return arr.length));
	}
}