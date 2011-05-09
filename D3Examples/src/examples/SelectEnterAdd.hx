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

class SelectEnterAdd extends Example
{
	override function runExample()
	{
		container
			.append("span")
			.append("span");
			
		var s = container.selectAll("span")
			.data((~/\b/).split("The test passed, hooray!"));
		
		s.enter()
			.append("span")
			.append("b")
				.text().data();
				
		s.selectAll("b")
			.dataf(function(d, i) return [d])
			.enter().append("b")
				.text().data();
	}

	override function destroyExample()
	{
		
	}
	
	override function description() return "Select some existing spans and add new ones from data. Not interactive."
}