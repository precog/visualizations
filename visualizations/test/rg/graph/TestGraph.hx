package rg.graph;

import utest.Assert;

class TestGraph extends TestBaseGraph<Dynamic, Dynamic>
{
	public function testClone()
	{
		var clone = graph.clone();

		Assert.isTrue(n5 != clone.nodes.get(n5.id));
		Assert.notNull(clone.nodes.get(n5.id));

		Assert.equals(n5.data, clone.nodes.get(n5.id).data);
		Assert.equals(e2.data, clone.edges.get(e2.id).data);

		Assert.equals(graph.nodes.create().id, clone.nodes.create().id);
		Assert.equals(
			graph.edges.create(n6, n5).id,
			clone.edges.create(clone.nodes.get(n5.id), clone.nodes.get(n6.id)).id);

		graph.clear();

		Assert.equals(0, graph.nodes.length);
		Assert.equals(12, clone.nodes.length);

		Assert.equals(0, graph.edges.length);
		Assert.equals(14, clone.edges.length);
	}

	public function testPath()
	{
		var path = graph.path(n6, n2);
		Assert.equals(2, path.length);
		assertEdge(path[0], n6, n5);
		assertEdge(path[1], n2, n5);
	}

	public function testDirectedPath()
	{
		var path = graph.directedPath(n6, n2);
		Assert.equals(3, path.length);
		assertEdge(path[0], n6, n5);
		assertEdge(path[1], n5, n4);
		assertEdge(path[2], n4, n2);
	}

	public function testWeightedPath()
	{
		var path = graph.path(n6, n2, true);
		Assert.equals(3, path.length);
		assertEdge(path[0], n6, n5);
		assertEdge(path[1], n5, n3);
		assertEdge(path[2], n2, n3);
	}

	public function testWeightedDirectedPath()
	{
		var path = graph.directedPath(n6, n2, true);
		Assert.equals(4, path.length);
		assertEdge(path[0], n6, n5);
		assertEdge(path[1], n5, n3);
		assertEdge(path[2], n3, n1);
		assertEdge(path[3], n1, n2);
	}

	public function testSelfPath()
	{
		var path = graph.path(n3, n3);
		Assert.equals(1, path.length);
		Assert.equals(n3, path[0].tail);
		Assert.equals(n3, path[0].head);
	}

	public function testSelfDirectedPath()
	{
		var path = graph.directedPath(n3, n3);
		Assert.equals(1, path.length);
		Assert.equals(n3, path[0].tail);
		Assert.equals(n3, path[0].head);
	}

	public function testDisconnectedDirectedNodes()
	{
		var path = graph.directedPath(n8, n6);
		Assert.isNull(path);
	}

	public function testDisconnectedNodes()
	{
		var path = graph.path(n9, n10);
		Assert.isNull(path);
	}

	public function testFindSinks()
	{
		var items = graph.findSinks();
		Assert.equals(2, items.length);
		Arrays.exists(items, n7);
		Arrays.exists(items, n8);
	}

	public function testFindSink()
	{
		var item = graph.findSink();
		Assert.notNull(item);
		Arrays.exists([n7, n8], item);
	}

	public function testFindSources()
	{
		var items = graph.findSources();
		Assert.equals(2, items.length);
		Arrays.exists(items, n6);
		Arrays.exists(items, n4);
	}

	public function testFindSource()
	{
		var item = graph.findSource();
		Assert.notNull(item);
		Arrays.exists([n6, n4], item);
	}

	public function testFindIsolateds()
	{
		var items = graph.findIsolateds();
		Assert.equals(2, items.length);
		Arrays.exists(items, n10);
		Arrays.exists(items, n11);
	}

	public function testFindIsolated()
	{
		var item = graph.findIsolated();
		Assert.notNull(item);
		Arrays.exists([n10, n11], item);
	}

	public function testEventsCreate()
	{
		var nodeadd = 0,
			edgeadd = 0;
		graph.nodes.onCreate.add(function(n) {
			Assert.isFalse(graph.nodes.has(n));
			nodeadd++;
		});
		graph.edges.onCreate.add(function(ee) {
			Assert.isFalse(graph.edges.has(ee));
			edgeadd++;
		});

		n1.remove();
		e2.remove();
		graph.nodes.create();
		graph.edges.create(n3, n6);

		Assert.equals(1, nodeadd);
		Assert.equals(1, edgeadd);
	}

	public function testEventsRemove()
	{
		var noderem = 0,
			edgerem = 0;
		graph.nodes.onRemove.add(function(n) {
			Assert.equals(n1, n);
			noderem++;
		});
		graph.edges.onRemove.add(function(ee) {
			Assert.contains(ee, [e5, e6, e9]);
			edgerem++;
		});

		// this removes also e5, e6, e9
		n1.remove();
		graph.nodes.create();
		graph.edges.create(n3, n6);

		Assert.equals(1, noderem);
		Assert.equals(3, edgerem);
	}

	function assertEdge(edge : GEdge<Dynamic, Dynamic>, tail : GNode<Dynamic, Dynamic>, head : GNode<Dynamic, Dynamic>, ?pos : haxe.PosInfos)
	{
		Assert.equals(edge.tail, tail, pos);
		Assert.equals(edge.head, head, pos);
	}

	var n1  : GNode<Dynamic, Dynamic>;
	var n2  : GNode<Dynamic, Dynamic>;
	var n3  : GNode<Dynamic, Dynamic>;
	var n4  : GNode<Dynamic, Dynamic>;
	var n5  : GNode<Dynamic, Dynamic>;
	var n6  : GNode<Dynamic, Dynamic>;
	var n7  : GNode<Dynamic, Dynamic>;
	var n8  : GNode<Dynamic, Dynamic>;
	var n9  : GNode<Dynamic, Dynamic>;
	var n10 : GNode<Dynamic, Dynamic>;
	var n11 : GNode<Dynamic, Dynamic>;

	var e1  : GEdge<Dynamic, Dynamic>;
	var e2  : GEdge<Dynamic, Dynamic>;
	var e3  : GEdge<Dynamic, Dynamic>;
	var e4  : GEdge<Dynamic, Dynamic>;
	var e5  : GEdge<Dynamic, Dynamic>;
	var e6  : GEdge<Dynamic, Dynamic>;
	var e7  : GEdge<Dynamic, Dynamic>;
	var e8  : GEdge<Dynamic, Dynamic>;
	var e9  : GEdge<Dynamic, Dynamic>;
	var e10 : GEdge<Dynamic, Dynamic>;
	var e11 : GEdge<Dynamic, Dynamic>;
	var e12 : GEdge<Dynamic, Dynamic>;
	var e13 : GEdge<Dynamic, Dynamic>;

	override function setup()
	{
		super.setup();
		n1 = graph.nodes.create();
		n2 = graph.nodes.create();
		n3 = graph.nodes.create();
		n4 = graph.nodes.create();
		n5 = graph.nodes.create("NE");
		n6 = graph.nodes.create();
		n7 = graph.nodes.create();
		n8 = graph.nodes.create();
		n9 = graph.nodes.create();
		n10 = graph.nodes.create();
		n11 = graph.nodes.create();

		e1  = graph.edges.create(n6, n5);
		e2  = graph.edges.create(n5, n4, 10, "ED");
		e3  = graph.edges.create(n4, n2);
		e4  = graph.edges.create(n5, n3);
		e5  = graph.edges.create(n3, n1);
		e6  = graph.edges.create(n1, n3);
		e7  = graph.edges.create(n3, n3);
		e8  = graph.edges.create(n2, n3);
		e9  = graph.edges.create(n1, n2);
		e10 = graph.edges.create(n2, n5, 20.0);

		e11 = graph.edges.create(n4, n7);
		e12 = graph.edges.create(n5, n8);
		e13 = graph.edges.create(n9, n8);
	}
}