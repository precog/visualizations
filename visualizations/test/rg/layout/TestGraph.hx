package rg.layout;

import utest.Assert;

class TestGraph extends TestBaseGraph<Dynamic, Dynamic>
{
	public function testClone()
	{
		var n1 = graph.nodes.create(10),
			n2 = graph.nodes.create(20),
			e  = graph.edges.create(n1, n2, 30),
			clone = graph.clone();

		Assert.isTrue(n1 != clone.nodes.get(n1.id));
		Assert.notNull(clone.nodes.get(n1.id));

		Assert.equals(n1.data, clone.nodes.get(n1.id).data);
		Assert.equals(n2.data, clone.nodes.get(n2.id).data);
		Assert.equals(e.data,  clone.edges.get(e.id).data);

		Assert.equals(graph.nodes.create().id, clone.nodes.create().id);
		Assert.equals(
			graph.edges.create(n2, n1).id,
			clone.edges.create(clone.nodes.get(n1.id), clone.nodes.get(n2.id)).id);

		graph.clear();

		Assert.equals(0, graph.nodes.length);
		Assert.equals(3, clone.nodes.length);

		Assert.equals(0, graph.edges.length);
		Assert.equals(2, clone.edges.length);
	}

	public function testPath()
	{
		
	}
}