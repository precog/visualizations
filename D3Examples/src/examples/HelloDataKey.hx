package examples;
import js.Lib;

/**
 * ...
 * @author Franco Ponticelli
 */

// TODO: THIS NEED JOIN ... this will happen only after selection.data() is refactored

using Arrays;

class HelloDataKey extends Example
{
	var _refresh : Dynamic -> Void;
	override function runExample()
	{
		var i = 0, data = [
			{id: i++, value: 4},
			{id: i++, value: 8},
			{id: i++, value: 15},
			{id: i++, value: 16},
			{id: i++, value: 23},
			{id: i++, value: 42}
		];
		
		var container = this.container;
		
		function transform()
		{
			var t = container.selectAll("span")
				.data(data, function(d,i) return d.id);
				
			t.enter()
				.append("span")
					.attr("id").stringf(function(d,i) return "span-" + d.id)
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
					.text().stringf(function(d, i) return d.value);

			t.exit().remove();

			t.select("text")
				.text().stringf(function(d,i) return d.value);
		}
		
		// it is already in the HTML in the original example
		container.append("div").text().string("Yout lucky numbers are:");
		
		_refresh = function(_)
		{
			data.shift();
			data.push( { id : i++ % 7, value : Std.random(100) } );
			transform();
		};
		
		transform();

		untyped Lib.window.addEventListener("keypress", _refresh, false);
	}

	override function destroyExample()
	{
		untyped Lib.window.removeEventListener("keypress", _refresh, false);
	}
}