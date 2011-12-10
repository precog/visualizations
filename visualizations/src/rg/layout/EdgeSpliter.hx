package rg.layout;

class EdgeSpliter
{
	var idf : String -> String -> Int -> String;
	public function new(?idf : String -> String -> Int -> String)
	{
		this.idf = null == idf ? Graphs.createDummy : idf;
	}

	public function split(layout : Array<Array<Node>>)
	{
		var map = new Hash();
		for(i in 0...layout.length)
		{
			for(j in 0...layout[i].length)
			{
				map.set(layout[i][j].vertex, {
					layer : i,
					node : layout[i][j]
				});
			}
		}

		for(i in 0...layout.length)
		{
			for(j in 0...layout[i].length)
			{
				var node = layout[i][j];
				for(z in 0...node.edgesp.length)
				{
					var v = node.edgesp[z],
						child = map.get(v);
					if(child.layer > i + 1)
					{
						var n = {
							vertex : idf(node.vertex, v, i + 1),
							edgesn : [node.vertex],
							edgesp : [v]
						};
						layout[i+1].push(n);
						map.set(n.vertex, {
							layer : i+1,
							node : n
						});
						node.edgesp[z] = n.vertex;
						child.node.edgesn.remove(node.vertex);
						child.node.edgesn.push(n.vertex);
					}
				}
			}
		}
	}
}