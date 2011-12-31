package rg.graph;

class TestBaseGraph<TNodeData, TEdgeData>
{
	var graph : Graph<TNodeData, TEdgeData>;
	public function new() {}
	public function setup()
	{
		graph = new Graph();
	}
}