package rg.layout;

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
		Assert.isNull(node.nodes);
		Assert.isTrue(node.id < 0);
	}

	public function testClear()
	{
		var node = graph.nodes.create();
		graph.nodes.clear();
		Assert.equals(0, graph.nodes.length);
	}

	public function testIsSource()
	{
		
	}

	public function testIsSink()
	{
		
	}

	public function testIsIsolated()
	{
		
	}
}