package rg.graph;

import utest.Assert;

class TestGreedyCyclePartitioner 
{
	public function new() {}

	public function testPartition()
	{
		var graph = new Graph(),
			n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			n3 = graph.nodes.create(),
			n4 = graph.nodes.create(),
			n5 = graph.nodes.create(),
			n6 = graph.nodes.create(),
			e1 = graph.edges.create(n6, n5),
			e2 = graph.edges.create(n5, n4),
			e3 = graph.edges.create(n4, n2),
			e4 = graph.edges.create(n2, n5),
			e5 = graph.edges.create(n5, n3),
			e6 = graph.edges.create(n3, n1),
			e7 = graph.edges.create(n1, n2),
			e8 = graph.edges.create(n2, n3),
			partitions = new GreedyCyclePartitioner().partition(graph);
		Assert.equals(graph.edges.length, partitions.left.length + partitions.right.length);
		for(edge in partitions.left)
			Assert.notContains(edge, partitions.right);
		for(edge in partitions.right)
			Assert.notContains(edge, partitions.left);
	}
}