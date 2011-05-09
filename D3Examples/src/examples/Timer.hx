package examples;
import thx.js.Timer;

/**
 * ...
 * @author Franco Ponticelli
 */

class Timer extends Example
{

	override function runExample()
	{
		var container = this.container;
		var f = Floats.formatf();
		container
			.append("span")
			.attr("id").string("countdown")
			.html().string(f(10.0));
		thx.js.Timer.timer(function(d) {
			var s = container.select("#countdown");
			if (s.empty())
				return true;

			var v = 10 - d/1000;
			if (v <= 0 )
			{
				s.html().string(f(0.0));
				return false;
			} else {
				s.html().string(f(v));
				return false;
			}
		});
	}
	
	override function description() return "Counter sample. Not interactive."
	
}