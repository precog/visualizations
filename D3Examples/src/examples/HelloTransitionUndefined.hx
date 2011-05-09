package examples;

/**
 * ...
 * @author Franco Ponticelli
 */

import haxe.Timer;
import js.Lib;
import thx.color.Colors;
import thx.color.Hsl;
import thx.js.Dom;
import thx.math.EaseMode;
import thx.math.Equations;

class HelloTransitionUndefined extends Example
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
//				.style("background-color").string("steelblue")
				.text().string("hello")
			.transition()
				.ease(Equations.bounce)
				.duration(2000)
				.style("width").string(width)
				.style("background-color").colorf(function(d,i) return new Hsl(Std.random(360), Math.random(), .5))
			;
		}
		
		transform();
		untyped Lib.window.addEventListener("keypress", transform, false);
	}
	
	override function destroyExample()
	{
		untyped Lib.window.removeEventListener("keypress", transform, false);
	}
	
	override function description() return "Bounce transition over the width of a Html DIV element and its background color. Press any key to bounce again. Starting color is undefined."
}