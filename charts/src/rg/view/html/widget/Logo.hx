package rg.view.html.widget;

import thx.js.Selection;
import rg.view.html.widget.LogoPosition;

class Logo
{
	var darkbackground : Bool;
	var position : LogoPosition;
	var container : Selection;
	public function new(container : Selection, darkbackground : Bool, p : LogoPosition)
	{
		this.darkbackground = darkbackground;
		this.container = container;
		container.style("position").string("relative");
		this.position = p;
		var img = container.append('img')
			.attr('src').string(getLogo())
			.onNode('click', function(_,_) {
				js.Lib.window.location.href = 'http://www.reportgrid.com/charts/';
			})
			.attr('title').string('Powered by ReportGrid')
			.style('display').string('block')
			.style('z-index').float(1000000)
			.style('position').string('absolute')
			.style('cursor').string('pointer')
		;
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
	}

	function getWidth()
	{
		return useSmall() ? 100 : 200;
	}

	function useSmall()
	{
		return Math.min(container.style("width").getFloat(), container.style("height").getFloat()) < 300;
	}

	function getLogo()
	{
		var type = darkbackground ? 'dark' : 'clear';
		var size = useSmall() ? "-s" : "";
		return 'http://api.reportgrid.com/css/images/reportgrid-'+type+size+'.png';
	}
}