package examples;
import js.Lib;
import thx.js.Selection;
import thx.color.Hsl;
import thx.js.Dom;
import thx.js.Node;

/**
 * ...
 * @author Franco Ponticelli
 */

using Arrays;

class HelloEvent extends Example
{
	var text : Selection<Dynamic>;
	override function runExample()
	{
		var data = [4, 8, 15, 16, 23, 42],
			container = this.container;
		
		function click(d : Node<Dynamic>, i : Int) {
			trace("click", d, i);
		}

		function mouseover(n : Node<Dynamic>, i : Int) {
			Dom.selectNode(n)
				.attr("fill").string("brown")
				.attr("stroke").string("grey");
		}

		function mouseout(n : Node<Dynamic>, i : Int) {
			Dom.selectNode(n)
				.attr("fill").string("orange");
		}
			
		container
			.selectAll("svg")
				.data(data)
			.enter().append("svg:svg")
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
				.attr("cursor").string("pointer")
				.style("font").string("36pt Comic Sans MS")
				.style("text-shadow").string("3px 3px 3px rgba(0,0,0,.4)")
				.text().data()
				.onNode("click", click)
				.onNode("mouseover", mouseover)
				.onNode("mouseout", mouseout);
	}

	override function destroyExample()
	{
		container
			.selectAll("text")
				.on("click", null)
				.on("mouseover", null)
				.on("mouseout", null);
	}
	
	override function description() return "Event sample. Reacts to mouseover, mouseout and click."
}