package rg.controller.visualization;
import rg.controller.info.InfoSankey;
import rg.view.layout.Layout;
import rg.view.svg.layer.Title;
import rg.view.svg.chart.Sankey;
import rg.data.DataPoint;
using Arrays;
using Iterators;

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
		chart.ready.add(function() ready.dispatch());
	}

	override function feedData(data : Array<DataPoint>)
	{
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
		var map = mapData(data),
			layout = layoutMap(map);

		chart.init();
		chart.data(layout);
	}

	function layoutMap(map : Hash<Node>) : Array<Array<Node>>
	{
		var result = [],
			i = -1,
			keys = map.keys().order(function(a, b) {
				return Floats.compare(map.get(b).weight, map.get(a).weight);
			});

		function addAt(id : String, lvl) 
		{
			var node = map.get(id);
			if(!keys.remove(id))
				return;
			var level = result[lvl];
			if(null == level)
				level = result[lvl] = [];
			level.push(node);
			node.pos = level.length - 1;
			node.level = lvl;
			for(child in node.children)
			{
				addAt(child.id, lvl+1);
			}
		}

		while(keys.length > 0)
		{
			addAt(keys[0], 0);
		}

		for(key in map.keys())
		{
			var n = map.get(key);
			n.parents.sort(function(a, b) {
				var c = Ints.compare(map.get(a.id).level, map.get(b.id).level);
				if(c > 0)
					return c;
				return Floats.compare(b.weight, a.weight);
			});
		}

/*

		for(node in map.iterator())
		{
			node.level = i++;
			result.push([node]);
		}
		*/
		return result;
	}

	function mapData(data : Array<DataPoint>)
	{
		var map          = new Hash(),
			idfield      = info.idproperty,
			weightfield   = info.weightproperty,
			parentsfield = info.parentsproperty,
			id : String, weight : Float, o, Dynamic, parents : Array<{ id : String, weight : Float }>;
		for(dp in data)
		{
			id = Reflect.field(dp, idfield);
			if(null == id) continue;
			o = Reflect.field(dp, parentsfield);
			parents = Reflect.fields(o).map(function(field, _) : { id : String, weight : Float } {
				return { id : field, weight : Reflect.field(o, field) };
			});
			var derivedweight = parents.reduce(function(tot, cur, _) {
				return tot + cur.weight;
			}, 0.0);
			weight = Reflect.field(dp, weightfield);
			if(null == weight)
				weight = derivedweight;
			map.set(id, {
				dp : dp,
				id : id,
				weight : weight,
				extraweight : weight - derivedweight,
				falloffweight : 0.0,
				parents : parents,
				children : [],
				level : 0,
				pos : 0
			});
		}

		for(key in map.keys())
		{
			var n = map.get(key);
			for(p in n.parents)
			{
				var pn = map.get(p.id);
				pn.children.add({ id : n.id, weight : p.weight });
				pn.children.sort(function(a,b) return Floats.compare(b.weight, a.weight));
			}
		}

		for(key in map.keys())
		{
			var n = map.get(key),
				falloff = n.weight;
			for(child in n.children)
			{
				falloff -= child.weight;
			}
			n.falloffweight = falloff;
		}
		return map;
	}

	override public function destroy()
	{
		chart.destroy();
		if (null != title)
			title.destroy();
		super.destroy();
	}
}