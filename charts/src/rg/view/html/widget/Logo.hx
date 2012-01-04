package rg.view.html.widget;

import thx.js.Selection;

class Logo
{
	var container : Selection;
	public function new(container : Selection)
	{
		this.container = container;
		create();
	}

	function create()
	{
		var chart = container.select("*").node();
		container.insert("a", chart)
			.attr("href").string('http://www.reportgrid.com/charts/')
			.attr('title').string('Powered by ReportGrid')
			.attr('target').string('_blank')
			.style('display').string('block')
			.style('z-index').float(1000000)
			.style('text-align').string("right")
//			.style('position').string('absolute')
//			.style('right').string('0px')
				.append('img')
				.attr('src').string(getLogo())
				.attr('title').string('Powered by ReportGrid')
		;
	}
/*
		// haxe quirks
		switch(position)
		{
			case Top:
				img
					.style("top").string("0px")
					.style("left").string((container.style("width").getFloat()-getWidth())/2+"px");
			case TopLeft:
				img.style("left") .string("0px").style("top")   .string("0px");
			case TopRight:
				img.style("right").string("0px").style("top")   .string("0px");
			case BottomLeft:
				img.style("left") .string("0px").style("bottom").string("0px");
			case BottomRight:
				img.style("right").string("0px").style("bottom").string("0px");
			case Before:
				container.node().insertBefore(img.node(), container.node().firstChild);
			case After:  // do nothing
		}
*/


	function getLogo()
	{
		return 'http://api.reportgrid.com/css/images/reportgrid-clear.png';
	}
}