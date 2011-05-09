package examples;

/**
 * ...
 * @author Franco Ponticelli
 */

using Arrays;

class HelloSort extends Example
{

	override function runExample()
	{
		container.html().string("<div><input id='sort' type='checkbox' checked><label for='sort'>Ascending</label></div>");
		
		container
			.append("svg:svg")
			.attr("viewBox").string("0 0 1000 1000");
		
		container.select("#sort")
			.on("change", sort);
			
		transform();
	}
	
	function transform()
	{
		var width = this.stageWidth();
		var circle = container.select("svg")
			.style("width").string(width + "px")
			.style("height").string("100%")
			.selectAll("circle")
				.data(Ints.range(400).map(function(d, i) return Math.random()));

		circle.enter().append("svg:circle")
			.attr("cx").floatf(function(d, i) return 100 + Math.random() * 800)
			.attr("cy").floatf(function(d, i) return 100 + Math.random() * 800)
			.attr("r").float(0);
		
		container.selectAll("circle")
			.transition()
				.duration(750)
				.attr("r").floatf(function(d, i) return 50 * d);
				
		sort();
	}
	
	function sort(?_,?_)
	{
		container.selectAll("circle")
			.sort(
				container.select("#sort").property("checked").get()
				? Floats.descending
				: Floats.ascending
			);
	}
	
	override function destroyExample()
	{
		container.select("#sort").on("change", null);
	}
	
	override function description() return "Random sized circles with transition. The checkbox forces the circles to be sorted on the z-index according to their size."
}