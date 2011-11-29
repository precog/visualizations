/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.html.widget;
import js.Lib;
import thx.js.Dom;
import thx.js.Selection;

class DownloaderMenu 
{
	static var DEFAULT_FORMATS = ["png", "jpg", "pdf"];
	static var DEFAULT_TITLE = "Download";
	var handler : String -> Null<String> -> (Void -> Void) -> Void;
	var formats : Array<String>;
	var title : String;
	var backgroundColor : String;
	var menu : Selection;
	public function new(handler : String -> Null<String> -> (Void -> Void) -> Void, position : DownloaderPosition, formats : Array<String>, container : Selection) 
	{
		this.handler = handler;
		this.formats = null == formats ? DEFAULT_FORMATS : formats;
		this.title = DEFAULT_TITLE;
		build(position, container);
	}
	
	function build(position : DownloaderPosition, container : Selection)
	{
		createMenu(container);
		var el = menu.node();
		switch(position)
		{
			case After:
				container.node().parentNode.insertBefore(el, container.node().nextSibling);
			case Before:
				container.node().parentNode.insertBefore(el, container.node());
			case BottomLeft:
				menu.classed().add("bottom").classed().add("left");
			case BottomRight:
				menu.classed().add("bottom").classed().add("right");
			case ElementSelector(selector):
				Dom.select(selector).node().appendChild(el);
			case TopLeft:
				menu.classed().add("top").classed().add("left");
			case TopRight:
				menu.classed().add("top").classed().add("right");
		}
	}
	
	function createMenu(container : Selection)
	{
		menu = container.append("div")
			.attr("class").string("rg menu")
//			.attr("style").string("border:1px solid red;width:20px;height:20px")
		;
		
		var options = menu.append("div")
			.attr("class").string("options");
		
		var title = options.append("div")
			.attr("class").string("title")
			.html().string(title)
//			.attr("style").string("border:1px solid green;width:20px;height:20px")
			;
		var list = options.append("ul").selectAll("li").data(formats);
		list.enter()
			.append("li")
			.on("click.download", click)
			.html().stringf(function(d, i) return d);
	}
	
	function click(format, _)
	{
		menu.classed().add("downloading");
//		haxe.Timer.delay(function() menu.classed().remove("downloading"), 3000);
		handler(format, backgroundColor, function() menu.classed().remove("downloading"));
	}
}