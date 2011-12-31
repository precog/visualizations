package rg.graph;

import utest.Assert;

class TestNode extends TestBaseGraph<Dynamic, Dynamic>
{
	public function testId() 
	{
		var node = graph.nodes.create();
		Assert.isTrue(node.id > 0);
	}

	public function testCount()
	{
		Assert.equals(0, graph.nodes.length);
		var node = graph.nodes.create();
		Assert.equals(1, graph.nodes.length);
		graph.nodes.remove(node);
		Assert.equals(0, graph.nodes.length);
	}

	public function testDestroy()
	{
		var node = graph.nodes.create();
		graph.nodes.remove(node);
		Assert.isNull(node.graph);
		Assert.isTrue(node.id < 0);
	}

	public function testClear()
	{
		var node = graph.nodes.create();
		graph.nodes.clear();
		Assert.equals(0, graph.nodes.length);
	}

	public function testIsConnectedTo()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create();
		Assert.isFalse(n1.isConnectedTo(n2));
		Assert.isFalse(n2.isConnectedTo(n1));
		var e = graph.edges.create(n1, n2);
		Assert.isTrue(n1.isConnectedTo(n2));
		Assert.isTrue(n2.isConnectedTo(n1));
		graph.edges.remove(e);
		Assert.isFalse(n1.isConnectedTo(n2));
		Assert.isFalse(n2.isConnectedTo(n1));
	}

	public function testIsDirectSuccessorPredecessor()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create();
		Assert.isFalse(n1.isPredecessorOf(n2));
		Assert.isFalse(n2.isSuccessorOf(n1));
		var e = graph.edges.create(n1, n2);
		Assert.isTrue(n1.isPredecessorOf(n2));
		Assert.isTrue(n2.isSuccessorOf(n1));
		graph.edges.remove(e);
		Assert.isFalse(n1.isPredecessorOf(n2));
		Assert.isFalse(n2.isSuccessorOf(n1));
	}

	public function testIsSinkOrSource()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create();
		Assert.isFalse(n1.isSink());
		Assert.isFalse(n1.isSource());
		var e = graph.edges.create(n1, n2);
		Assert.isTrue(n1.isSource());
		Assert.isTrue(n2.isSink());
	}

	public function testIsIsolated()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create();
		Assert.isTrue(n1.isIsolated());
		var e = graph.edges.create(n1, n2);
		Assert.isFalse(n1.isIsolated());
	}

	public function testEdges()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create();
		Assert.isFalse(n1.edges().hasNext());
		var e = graph.edges.create(n1, n2);
		Assert.equals(1, n1.edgeCount());
		Assert.equals(1, n1.positiveCount());
		Assert.equals(0, n1.negativeCount());
		var e = graph.edges.create(n2, n1);
		Assert.equals(2, n1.edgeCount());
		Assert.equals(1, n1.positiveCount());
		Assert.equals(1, n1.negativeCount());
	}

	public function testEdgeRemoval()
	{
		var n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			n3 = graph.nodes.create(),
			n4 = graph.nodes.create(),
			n5 = graph.nodes.create();
		graph.edges.create(n2, n1);
		graph.edges.create(n3, n1);
		graph.edges.create(n4, n1);
		graph.edges.create(n5, n1);

		Assert.equals(4, graph.edges.length);

		n1.remove();

		Assert.equals(0, graph.edges.length);
	}
}