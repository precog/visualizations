/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.util;
import thx.js.Dom;
import thx.js.Selection;

class RGCss 
{
	public static function colorsInCss()
	{
		var container = Dom.select("body").append("svg:svg").attr("class").string("rg");
		var first = createBlock(container, 0).style("fill").get(),
			length = 0;
		for (i in 1...1000) // tollerance value
		{
			var other = createBlock(container, i);
			if (first == other.style("fill").get())
			{
				length = i;
				break;
			}
		}
		container.remove();
		return length;
	}
	
	static function createBlock(container : Selection, pos : Int)
	{
		return container.append("svg:rect").attr("class").string("fill-" + pos);
	}
}