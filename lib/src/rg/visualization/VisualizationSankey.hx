package rg.visualization;
import rg.info.InfoSankey;
//import rg.graph.Layout;
import rg.graph.EdgeSplitter;
import rg.svg.layer.Title;
import rg.svg.chart.Sankey;
import rg.data.DataPoint;
import rg.graph.LongestPathLayer;
import rg.graph.Graph;
import rg.graph.GraphLayout;
import rg.graph.GEdge;
import rg.graph.SugiyamaMethod;
import rg.graph.HeaviestNodeLayer;
import rg.graph.GreedySwitchDecrosser;
import rg.util.DataPoints;

using Arrays;

class VisualizationSankey extends VisualizationSvg
{
	public var info : InfoSankey;
	var title : Null<Title>;
	var chart : Sankey;

	override function init()
	{
		// TITLE
		if (null != info.label.title)
		{
			var panelContextTitle = layout.getContext("title");
			if (null == panelContextTitle)
				return;
			title = new Title(panelContextTitle.panel, null, panelContextTitle.anchor);
		}

		// CHART
		var panelChart = layout.getPanel(layout.mainPanelName);
		chart = new Sankey(panelChart);
		baseChart = chart;
		chart.ready.add(function() ready.dispatch());
	}

	override function feedData(data : Array<DataPoint>)
	{
//trace(data);
		chart.setVariables(independentVariables, dependentVariables, data);
		if (null != title)
		{
			if (null != info.label.title)
			{
				title.text = info.label.title(variables, data);
				layout.suggestSize("title", title.idealHeight());
			} else
				layout.suggestSize("title", 0);
		}
		var layout = (null != info.layoutmap) ? layoutDataWithMap(data, info.layoutmap) : layoutData(data, info.layoutmethod);

		if(null != info.layerWidth)
			chart.layerWidth = info.layerWidth;
		if(null != info.nodeSpacing)
			chart.nodeSpacing = info.nodeSpacing;
		if(null != info.dummySpacing)
			chart.dummySpacing = info.dummySpacing;
		if(null != info.extraWidth)
			chart.extraWidth = info.extraWidth;
		if(null != info.backEdgeSpacing)
			chart.backEdgeSpacing = info.backEdgeSpacing;
		if(null != info.extraHeight)
			chart.extraHeight = info.extraHeight;
		if(null != info.extraRadius)
			chart.extraRadius = info.extraRadius;
		if(null != info.imageWidth)
			chart.imageWidth = info.imageWidth;
		if(null != info.imageHeight)
			chart.imageHeight = info.imageHeight;
		if(null != info.imageSpacing)
			chart.imageSpacing = info.imageSpacing;
		if(null != info.labelNodeSpacing)
			chart.labelNodeSpacing = info.labelNodeSpacing;


		chart.labelDataPoint = info.label.datapoint;
		chart.labelDataPointOver = info.label.datapointover;
		chart.labelNode = info.label.node;
		chart.labelEdge = info.label.edge;
		chart.labelEdgeOver = info.label.edgeover;
		chart.imagePath = info.imagePath;
		chart.click = info.click;
		chart.clickEdge = info.clickEdge;

		chart.nodeClass = info.nodeclass;
		chart.edgeClass = info.edgeclass;
		chart.displayEntry = info.displayentry;
		chart.displayExit  = info.displayexit;

		chart.init();
		chart.data(layout);
	}

	function layoutDataWithMap(data : Array<DataPoint>, map : { layers : Array<Array<String>>, dummies : Array<Array<String>> }, ?idf : NodeData -> String, ?weightf : DataPoint -> Float, ?edgesf : DataPoint -> Array<{ head : String, tail : String, weight : Float}>)
	{
		var graph = createGraph(data, idf, weightf, edgesf);
		var layers = map.layers.map(function(layer : Array<String>, _) return layer.map(function(id, _) {
			var n = graph.nodes.getById(id);
			if(null == n)
			{
				n = graph.nodes.create({
					id : id,
					weight : 0.0,
					entry : 0.0,
					exit : 0.0,
					dp : { id : id }
				});
			}
			return n.id;
		}));

		for(path in map.dummies)
		{
			var tail   = graph.nodes.getById(path.first()),
				head   = graph.nodes.getById(path.last()),
				npath  = [tail],
				edge   = tail.connectedBy(head),
				weight = null == edge ? 0.0 : edge.weight;

			// add dummy nodes
			for(i in 1...path.length-1)
			{
				var id = path[i],
					d = {
						id : id,
						weight : weight,
						entry : 0.0,
						exit : 0.0,
						dp : null
					};
				npath.push(graph.nodes.create(d));
			}
			npath.push(head);
			// add dummy edges
			for(i in 0...npath.length-1)
			{
				graph.edges.create(npath[i], npath[i+1], weight);
			}
			if(null != edge)
				edge.remove();
		}

		// convert layers
		var layers = map.layers.map(function(layer : Array<String>, _) return layer.map(function(id, _) {
			var n = graph.nodes.getById(id);
			if(null == n)
			{
				n = graph.nodes.create({
					id : id,
					weight : 0.0,
					entry : 0.0,
					exit : 0.0,
					dp : { id : id }
				});
			}
			return n.id;
		}));

		return new GraphLayout(graph, layers);
	}

	function createGraph(data : Array<DataPoint>, idf : NodeData -> String, weightf : DataPoint -> Float, edgesf : DataPoint -> Array<{ head : String, tail : String, weight : Float}>) : Graph<NodeData, Dynamic>
	{
		idf = defaultIdf(idf);
		edgesf = defaultEdgesf(idf, edgesf);
		weightf = defaultWeightf(weightf);
		var graph = new Graph(idf);

		var nodes = extractNodes(data),
			edges = extractEdges(data);

		for(dp in nodes)
		{
			graph.nodes.create({
				dp     : dp,
				id     : idf(dp),
				weight : weightf(dp),
				entry  : 0.0,
				exit   : 0.0
			});
		}

		for(edge in edges)
		{
			var head = graph.nodes.getById(edge.head),
				tail = graph.nodes.getById(edge.tail);

			if(head == null)
			{
				var dp     = { id : edge.head },
					weight = weightf(edge);
				Reflect.setField(dp, dependentVariables[0].type, weight);
				head = graph.nodes.create({
					dp     : dp,
					id     : edge.head,
					weight : weight,
					entry  : 0.0,
					exit   : 0.0
				});
			}
			if(tail == null)
			{
				var dp = { id : edge.tail },
					weight = weightf(edge);
				Reflect.setField(dp, dependentVariables[0].type, weight);
				tail = graph.nodes.create({
					dp     : dp,
					id     : edge.tail,
					weight : weight,
					entry  : 0.0,
					exit   : 0.0
				});
			}

			graph.edges.create(tail, head, weightf(edge));
		}

		for(node in graph.nodes)
		{
			var win  = node.negativeWeight(),
				wout = node.positiveWeight();
			if(node.data.weight == 0)
			{
				node.data.weight = win;
			}
			node.data.entry  = Math.max(0, node.data.weight - win);
			node.data.exit = Math.max(0, node.data.weight - wout);
		}

		return graph;
	}

	function extractNodes(data : Array<DataPoint>)
	{
		var nodes = data.filter(function(dp) {
			return dp.id != null;
		});
		if(nodes.length == 0)
		{
			// try getting nodes from edges
			var type  = dependentVariables[0].type,
				map   = new Hash<{ node : { id : String }, positive : Float, negative : Float }>(),
				edges = data.filter(function(dp) return Reflect.hasField(dp, "head") || Reflect.hasField(dp, "tail"));

			function nodize(name : String, istail : Bool, weight : Float)
			{
				if(null == name)
					return;
				var n = map.get(name);
				if(null == n)
				{
					n = { node : { id : name }, positive : 0.0, negative : 0.0 };
					map.set(name, n);
				}
				if(istail)
					n.positive += weight;
				else
					n.negative += weight;
			}

			edges.each(function(dp, i) {
				var v = Reflect.field(dp, type);
				nodize(dp.tail, true, v);
				nodize(dp.head, false, v);
			});

			nodes = Iterables.array(map).map(function(n, i) {
				var node = n.node;
				Reflect.setField(node, type, Math.max(n.positive, n.negative));
				return node;
			});
		}
		return nodes;
	}

	function extractEdges(data : Array<DataPoint>)
	{
		return data.filter(function(dp) {
			return dp.head != null && dp.tail != null;
		});
	}

	function layoutData(data : Array<DataPoint>, method : String, ?idf : NodeData -> String, ?nodef : GEdge<NodeData, Dynamic> -> DataPoint, ?weightf : DataPoint -> Float, ?edgesf : DataPoint -> Array<{ head : String, tail : String, weight : Float}>) : GraphLayout<NodeData, Dynamic>
	{
		var graph = createGraph(data, idf, weightf, edgesf);

		nodef = defaultNodef(nodef);
		switch(method)
		{
			case "weightbalance":
				return weightBalance(graph, nodef);
			default:
				return sugiyama(graph, nodef);
		}
	}

	function weightBalance(graph : Graph<NodeData, Dynamic>, nodef : GEdge<NodeData, Dynamic> -> DataPoint)
	{
		var layout = new GraphLayout(graph, new HeaviestNodeLayer().lay(graph));
		layout = new EdgeSplitter().split(layout, [], nodef);
		layout = GreedySwitchDecrosser.best().decross(layout);
		return layout;
	}

	function sugiyama(graph : Graph<NodeData, Dynamic>, nodef : GEdge<NodeData, Dynamic> -> DataPoint)
	{
		return new SugiyamaMethod().resolve(graph, nodef);
	}

	static function defaultIdf(?idf : NodeData -> String)
	{
		if(idf == null)
			return function(data : NodeData) return data.id;
		else
			return idf;
	}

	static function defaultNodef(?nodef : GEdge<NodeData, Dynamic> -> DataPoint)
	{
		if(nodef == null)
		{
			var dummynodeid = 0;
			return function(edge : GEdge<NodeData, Dynamic>) {
				return {
					id : "#" + (++dummynodeid),
					weight : edge.weight,
					entry : 0.0,
					exit : 0.0
				};
			};
		} else
			return nodef;
	}

	static function defaultEdgesf(idf : NodeData -> String, ?edgesf : DataPoint -> Array<{ head : String, tail : String, weight : Float}>)
	{
		if(edgesf == null)
		{
			return function(dp : Dynamic) {
				var r = [],
					id = idf(dp);
				for(parent in Reflect.fields(dp.parents))
				{
					r.push(cast {
						head : id,
						tail : parent,
						weight : Reflect.field(dp.parents, parent)
					});
				}
				return r;
			};
		} else
			return edgesf;
	}

	function defaultWeightf(?weightf : DataPoint -> Float)
	{
		if(null == weightf)
		{
			var type = this.dependentVariables[0].type;
			return function(dp) {
				var v = DataPoints.value(dp, type);
				return null != v  ? v : 0.0;
			};
		} else
			return weightf;
	}

	override public function destroy()
	{
		chart.destroy();
		if (null != title)
			title.destroy();
		super.destroy();
	}
}