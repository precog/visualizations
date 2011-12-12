package rg.layout;

import utest.Assert;

class TestEdge extends TestBaseGraph<Dynamic, Dynamic>
{
	public function testId()
	{
		var node = graph.nodes.create();
		Assert.isTrue(node.id > 0);
	}

	public function testCount()
	{
		Assert.equals(0, graph.edges.length);
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			e  = graph.edges.create(n1, n2);
		Assert.equals(1, graph.edges.length);
		graph.edges.remove(e);
		Assert.equals(0, graph.edges.length);
	}

	public function testCreate()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			e  = graph.edges.create(n1, n2);
		Assert.equals(n1, e.head);
		Assert.equals(n2, e.tail);
	}

	public function testChainDeletion()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			e  = graph.edges.create(n1, n2);
		Assert.equals(1, graph.edges.length);
		graph.nodes.remove(n1);
		Assert.equals(0, graph.edges.length);
		Assert.isNull(e.edges);
	}

	public function testDestroy()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			e  = graph.edges.create(n1, n2);
		graph.edges.remove(e);
		Assert.isNull(e.graph);
		Assert.isNull(e.edges);
		Assert.isNull(e.head);
		Assert.isNull(e.tail);
		Assert.isTrue(e.id < 0);
	}

	public function testClear()
	{
		Assert.equals(0, graph.edges.length);
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			e  = graph.edges.create(n1, n2);
		Assert.equals(1, graph.edges.length);
		graph.edges.clear();
		Assert.equals(0, graph.edges.length);
	}

	public function testSplit()
	{
		
	}

	public function testReverse()
	{
		
	}

	public function testReversePath()
	{
		
	}
}