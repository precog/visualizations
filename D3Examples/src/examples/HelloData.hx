package examples;
import js.Lib;

/**
 * ...
 * @author Franco Ponticelli
 */

using Arrays;

class HelloData extends Example
{
	var _refresh : Dynamic -> Void;
	override function runExample()
	{
		var data = [4, 8, 15, 16, 23, 42];
		
		var container = this.container;
		
		data.each(function(_, _) container.append("span"));
		
		container.selectAll("span")
			.data(data)
			.append("svg:svg")
				.attr("width").float(100)
				.attr("height").float(100)
			.append("svg:text")
				.attr("x").string("50%")
				.attr("y").string("50%")
				.attr("dy").string(".35em")
				.attr("text-anchor").string("middle")
				.attr("fill").string("white")
				.attr("stroke").string("black")
				.attr("stroke-width").float(1.5)
				.style("font").string("36pt Comic Sans MS")
				.style("text-shadow").string("3px 3px 3px rgba(0,0,0,.4)")
				.text().data();
				
		_refresh = function(_)
		{
			for (i in 0...data.length)
				data[i] = (data[i] + 1) % 100;

			container.selectAll("text")
				.data(data)
				.text().data();
		};

		untyped Lib.window.addEventListener("keypress", _refresh, false);
	}

	override function destroyExample()
	{
		untyped Lib.window.removeEventListener("keypress", _refresh, false);
	}
	
	override function description() return "Styled SVG texts. Press any key to increment the values."
}