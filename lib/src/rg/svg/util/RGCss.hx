/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.util;
import js.Lib;
import thx.js.Dom;
import thx.js.Selection;

class RGCss
{
	static var cache : Array<String>;
	public static function cssSources()
	{
		var sources = [];
		Dom.selectAll('link[rel="stylesheet"]').eachNode(function(n, _) {
			sources.push(untyped n.href);
		});
		return sources;
	}

	public static function colorsInCss()
	{
		if (null != cache)
			return cache;
		var container = Dom.select("body").append("svg:svg").attr("class").string("rg"),
			first = createBlock(container, 0).style("fill").get();
		cache = [first];
		for (i in 1...1000) // tollerance value
		{
			var other = createBlock(container, i).style("fill").get();
			if (first == other)
			{
				break;
			} else
				cache.push(other);
		}
		container.remove();
		return cache;
	}

	public static function numberOfColorsInCss()
	{
		return colorsInCss().length;
	}

	static function createBlock(container : Selection, pos : Int)
	{
		return container.append("svg:rect").attr("class").string("fill-" + pos);
	}
}