package rg.graph;

import utest.Assert;

class TestGreedySwitchDecrosser
{
	public function new(){}

	public function testDecrosser1()
	{
		var layout = generate(),
			decrossed = new GreedySwitchDecrosser().decross(layout);
		Assert.isTrue(layout.crossings() > decrossed.crossings());
	}

	public function testDecrosser2()
	{
		var layout = generate(),
			decrossed = new GreedySwitch2Decrosser().decross(layout);
		Assert.isTrue(layout.crossings() > decrossed.crossings());
	}

	public function testDecrosserCombined()
	{
		var layout = generate(),
			decrossed = GreedySwitchDecrosser.combined().decross(layout);
		Assert.isTrue(layout.crossings() > decrossed.crossings());
	}

	public function testDecrosserBest()
	{
		var layout = generate(),
			decrossed = GreedySwitchDecrosser.best().decross(layout);
		Assert.isTrue(layout.crossings() > decrossed.crossings());
	}

	static function generate()
	{
		var graph = new Graph(),
			n1 = graph.nodes.create(),
			n2 = graph.nodes.create(),
			n3 = graph.nodes.create(),
			n4 = graph.nodes.create(),
			n5 = graph.nodes.create(),
			n6 = graph.nodes.create(),
			n7 = graph.nodes.create(),
			n8 = graph.nodes.create(),
			n9 = graph.nodes.create(),
			n10 = graph.nodes.create(),
			n11 = graph.nodes.create(),
			n12 = graph.nodes.create();

			graph.edges.create(n1, n6);
			graph.edges.create(n2, n5);
			graph.edges.create(n3, n4);
			graph.edges.create(n4, n8);
			graph.edges.create(n5, n7);
			graph.edges.create(n6, n7);
			graph.edges.create(n7, n11);
			graph.edges.create(n8, n10);
			graph.edges.create(n8, n12);

		return new GraphLayout(graph, [[n1.id, n2.id, n3.id], [n4.id, n5.id, n6.id], [n7.id, n8.id, n9.id], [n10.id, n11.id, n12.id]]);
	}
}