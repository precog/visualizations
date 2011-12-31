package rg.graph;

import utest.Assert;
import rg.graph.SugiyamaMethod;

using Arrays;

class TestSugiyamaMethod
{
	public function new() {}

	public function testSugiyama()
	{
		var method   = new SugiyamaMethod(),
			edges    = [
				{ a : 1,  b : 6 },
				{ a : 1,  b : 14 },
				{ a : 2,  b : 6 },
				{ a : 2,  b : 13 },
				{ a : 3,  b : 13 },
				{ a : 3,  b : 9 },
				{ a : 3,  b : 6 },
				{ a : 6,  b : 3 },
				{ a : 3,  b : 8 },
				{ b : 3,  a : 14 },
				{ a : 3,  b : 7 },
				{ a : 4,  b : 4 },
				{ a : 4,  b : 9 },
				{ a : 4,  b : 11 },
				{ b : 4,  a : 13 },
				{ a : 4,  b : 10 },
				{ a : 5,  b : 11 },
				{ b : 5,  a : 13 },
				{ a : 5,  b : 15 },
				{ a : 6,  b : 15 },
				{ a : 7,  b : 14 },
				{ a : 7,  b : 12 },
				{ b : 8,  a : 14 },
				{ a : 9,  b : 15 },
				{ a : 10, b : 13 },
				{ a : 10, b : 14 },
				{ a : 11, b : 15 },
				{ a : 12, b : 14 },
				{ a : 14, b : 15 }
			],
			graph = new Graph();

		for(i in 0...15)
			graph.nodes.create();
		for(edge in edges)
			graph.edges.create(graph.nodes.get(edge.a), graph.nodes.get(edge.b));

		var layout = method.resolve(graph);

		for(node in graph.nodes)
		{
			var cell = layout.cell(node);
			Assert.notNull(cell);
			Assert.isTrue(cell.layer >= 0);
			Assert.isTrue(cell.position >= 0);
		}
	}
}