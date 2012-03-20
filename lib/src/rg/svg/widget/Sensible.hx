package rg.svg.widget;

import dhx.Selection;
import rg.svg.panel.Panel;
import rg.axis.Stats;

class Sensible
{
	public static function sensibleZone(container : Selection, panel : Panel, click : js.Dom.HtmlDom -> Void, datapointover : js.Dom.HtmlDom -> Void, stats : Stats<Dynamic>, radius : Float)
	{
		if(null == click && null == datapointover)
			return;
		var sensible = container
			.append("svg:rect")
				.attr("class").string("sensible")
				.attr("x").float(0)
				.attr("y").float(0)
				.attr("width").float(panel.frame.width)
				.attr("height").float(panel.frame.height)
				.attr("fill").string("#000")
				.style("fill-opacity").float(0.0)
			;

		if(null != datapointover)
		{
			sensible.onNode("mousemove", function(_, _) {
				var p = rg.svg.panel.Panels.absolutePos(panel),
					body = js.Lib.document.body;
				var e = dhx.Dom.event;
				var coords = { x : e.clientX, y : e.clientY };
				var r = findDataNodesNear(coords, container, radius);
				if(r.length > 0)
				{
					datapointover(r[0]);
					if(null != click)
					{
						sensible.classed().add("pointer");
					}
				} else if(null != click)
				{
					sensible.classed().remove("pointer");
				}
			});
		}
		if(null != click)
		{
			sensible.onNode("click", function(_, _) {
				var p = rg.svg.panel.Panels.absolutePos(panel),
					body = js.Lib.document.body;
				var e = dhx.Dom.event;
				var coords = { x : e.clientX, y : e.clientY };
				var r = findDataNodesNear(coords, container, radius);
				if(r.length > 0)
					click(r[0]);
			});
		}
	}

	public static function findDataNodesNear(coords : { x : Int, y : Int }, context : Selection, distance : Float)
	{
		var nodes = context.selectAll(".rgdata"),
			result = [],
			distancep = distance * distance;
		nodes.eachNode(function(n : js.Dom.HtmlDom, i) {
			var rect : Dynamic<Float> = untyped n.getBoundingClientRect();
			var x = coords.x - (rect.left + rect.width / 2),
				y = coords.y - (rect.top + rect.height / 2);
			var dist = x * x + y * y;
			if(dist > distancep)
				return;
			result.push({ node : n, dist : dist });
		});
		result.sort(function(a, b) {
			return Floats.compare(a.dist, b.dist);
		});
		return Arrays.map(result, function(item, _) return item.node);
	}
}