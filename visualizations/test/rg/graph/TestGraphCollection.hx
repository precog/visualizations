package rg.graph;

import utest.Assert;

class TestGraphCollection 
{
	public function new() { }

	public function testMap()
	{
		var graph = new Graph(function(s : String) return s, function(i : Int) return "#"+i),
			na = graph.nodes.create("a"),
			nb = graph.nodes.create("b"),
			e  = graph.edges.create(na, nb, 7);
		Assert.equals(na, graph.nodes.getById("a"));
		Assert.equals(nb, graph.nodes.getById("b"));
		Assert.equals(e,  graph.edges.getById("#7"));
		graph.nodes.remove(na);
		Assert.isNull(graph.nodes.getById("a"));
		Assert.isNull(graph.edges.getById("#7"));
	}
}