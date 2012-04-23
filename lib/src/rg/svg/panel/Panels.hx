/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.panel;

class Panels
{
	public static function rootSize(panel : Panel)
	{
		var p = panel.parent;
		while (p != null)
		{
			var t = p;
			p = panel.parent;
			panel = t;
		}
		return { width : panel.frame.width, height : panel.frame.height };
	}

	public static function absolutePos(panel : Panel)
	{
		var p = panel, x = 0, y = 0;
		while (null != p)
		{
			panel = p;
			x += p.frame.x;
			y += p.frame.y;
			p = p.parent;
		}
		var node = htmlContainer(panel),
			left = js.Scroll.getLeft(),
			top  = js.Scroll.getTop();
		if(null == node)
		{
			return {
				x : left,
				y : top
			}
		}
		var rect : Dynamic<Int> = untyped node.getBoundingClientRect();
		return {
			x : rect.left + x + left,
			y : rect.top + y + top
		};
	}
	public static function svgContainer(panel : Panel)
	{
		var node = panel.g.node();
		do {
			node = untyped node.ownerSVGElement;
		} while(null != node && null != Reflect.field(untyped node.ownerSVGElement, "ownerSVGElement"));
		return null == node ? null : node;
	}

	public static function htmlContainer(panel : Panel)
	{
		var svg = svgContainer(panel);
		if(null == svg)
			return null;
		else
			return svg.parentNode;
	}

	public static function boundingBox(panel : Panel, ?ancestor : Panel)
	{
		var p = panel, x = 0, y = 0;
		while (ancestor != p)
		{
			x += p.frame.x;
			y += p.frame.y;
			p = p.parent;
		}
		return {
			x : x,
			y : y,
			width : panel.frame.width,
			height : panel.frame.height
		};
	}

	public static function ancestorBoundingBox(panel : Panel, ?ancestor : Panel)
	{
		var p = panel, x = 0, y = 0, w = 0, h = 0;
		while (ancestor != p)
		{
			x += p.frame.x;
			y += p.frame.y;
			w = p.frame.width;
			h = p.frame.height;
			p = p.parent;
		}
		return {
			x : -x,
			y : -y,
			width : w,
			height : h
		};
	}
}