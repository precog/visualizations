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
		var node = htmlContainer(panel);

		var pos = node != null ? rg.util.Js.findPosition(node) : { x : 0, y : 0 };

		pos.x += x;
		pos.y += y;
		return pos;
	}

	public static function htmlContainer(panel : Panel)
	{
		var node = panel.g.node();
		do { } while(null != Reflect.field(node = untyped node.ownerSVGElement, "ownerSVGElement"));
		return null == node ? null : node.parentNode;
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