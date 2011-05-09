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

class SelectAllEnterAdd extends Example
{
	override function runExample()
	{
		container
			.append("span");
			
		container.selectAll("span")
			.data(["Test", " passed."])
				.text().data()
			.enter().append("span")
				.text().data();
	}

	override function destroyExample()
	{
		
	}
	
	override function description() return "Select an existing span and add a new one from data. Not interactive."
}