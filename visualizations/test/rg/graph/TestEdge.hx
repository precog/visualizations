package rg.graph;

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
		Assert.equals(n1, e.tail);
		Assert.equals(n2, e.head);
	}

	public function testChainDeletion()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			e  = graph.edges.create(n1, n2);
		Assert.equals(1, graph.edges.length);
		graph.nodes.remove(n1);
		Assert.equals(0, graph.edges.length);
		Assert.isNull(e.graph);
	}

	public function testDestroy()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			e  = graph.edges.create(n1, n2);
		graph.edges.remove(e);
		Assert.isNull(e.graph);
		Assert.isNull(e.tail);
		Assert.isNull(e.head);
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

	public function testDefaultWeight()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			e  = graph.edges.create(n1, n2);
		Assert.equals(1.0, e.weight);
	}

	public function testSplit2()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			se  = graph.edges.create(n1, n2),
			de = se.split();
		Assert.isNull(se.tail); // source edge has been destroyed
		Assert.equals(n1, de[0].tail);
		Assert.isTrue(n1.isPredecessorOf(de[0].head));
		Assert.isTrue(n2.isSuccessorOf(de[1].tail));
		Assert.equals(n2, de[1].head);
		Assert.equals(1.0, de[0].weight);
		Assert.equals(1.0, de[1].weight);
	}

	public function testSplitMore()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			se = graph.edges.create(n1, n2),
			de = se.split(5);
		Assert.equals(6, de.length);
		Assert.equals(6, graph.edges.length);
	}

	public function testSplitF()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			se  = graph.edges.create(n1, n2, null, 16),
			de = se.split(3, function(e1 : GEdge<Dynamic, Dynamic>, e2 : GEdge<Dynamic, Dynamic>, _) {
				e2.weight = e1.weight / 2;
			});
		Assert.equals(4,  de.length);
		Assert.equals(16, de[0].weight);
		Assert.equals(8,  de[1].weight);
		Assert.equals(4,  de[2].weight);
		Assert.equals(2,  de[3].weight);

		Assert.equals(4, graph.edges.length);
	}

	public function testInvert()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			e  = graph.edges.create(n1, n2).invert();
		Assert.equals(n1, e.head);
		Assert.equals(n2, e.tail);
		Assert.isTrue(n2.isPredecessorOf(n1));
		Assert.isTrue(n1.isSuccessorOf(n2));
	}
}