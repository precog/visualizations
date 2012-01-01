package rg.view.html.widget;

import thx.js.Selection;

class Logo
{
	var darkbackground : Bool;
	var position : LogoPosition;
	var container : Selection;
	public function new(container : Selection, darkbackground : Bool, position : LogoPosition)
	{
		this.darkbackground = darkbackground;
		this.container = container;
	//	container.style("position").string("relative");
		this.position = position;
		/*
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
		switch(position)
		{
			case TopLeft:		img.style("left").float(0).style("top").float(0);
			case TopRight:		img.style("right").float(0).style("top").float(0);
			case BottomLeft:	img.style("left").float(0).style("bottom").float(0);
			case BottomRight:	img.style("right").float(0).style("bottom").float(0);
			case Before:		container.node().insertBefore(img.node(), container.node().firstChild);
			case After:  // do nothing
		}
		*/
	}

	function getLogo()
	{
		var type = darkbackground ? 'dark' : 'clear';
		return 'http://api.reportgrid.com/css/images/reportgrid-'+type+'.png';
	}
}