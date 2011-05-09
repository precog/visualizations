package examples;

/**
 * ...
 * @author Franco Ponticelli
 */

import haxe.Timer;
import js.Lib;
import thx.color.Colors;
import thx.js.Dom;
import thx.math.EaseMode;
import thx.math.Equations;

class HelloTransition extends Example
{
	var transform : Void -> Void;
	override function runExample()
	{
		var container = this.container;
		var width = this.stageWidth() + "px";
		transform = function()
		{
			container.append("div");
			
			container.select("div")
				.style("width").string("0px")
				.style("background-color").string("steelblue")
				.text().string("hello")
			.transition()
				.ease(Equations.bounce)
				.duration(2000)
				.style("width").string(width)
				.style("background-color").color("brown")
			;
		}
		
		transform();
		untyped Lib.window.addEventListener("keypress", transform, false);
	}
	
	override function destroyExample()
	{
		untyped Lib.window.removeEventListener("keypress", transform, false);
	}
	
	override function description() return "Bounce transition over the width of a Html DIV element and its background color. Press any key to bounce again."
}