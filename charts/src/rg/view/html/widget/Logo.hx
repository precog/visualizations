package rg.view.html.widget;

import haxe.Timer;
import thx.js.Dom;
import js.Dom;
import thx.js.Selection;

class Logo
{
	static var _id = 0;
	static inline var LOGO_WIDTH = 194;
	static inline var LOGO_HEIGHT = 29;
	var container : Selection;
	var frame : Selection;
	var anchor : Selection;
	var image : Selection;
	var id : Int;
	public function new(container : Selection)
	{
		id = ++_id;
		this.container = container;
		create();
		var timer = new Timer(1000);
		timer.run = live;
	}

	function live()
	{
		if(container.select('div.reportgridbrandcontainer').empty())
			createFrame();
		else
			updateFrame();
		if(Dom.select("body").select('a.reportgridbrandanchor'+id).empty())
			createAnchor();
		else
			updateAnchor();
		if(anchor.select('img').empty())
			createImage();
		else
			updateImage();
	}

	function create()
	{
		createFrame();
		createAnchor();
		createImage();
	}

	function createFrame()
	{
		var chart = container.select('*').node();
		frame = container.insert('div', chart)
			.attr('class').string('reportgridbrandcontainer')
		;
		updateFrame();
	}

	function createAnchor()
	{
		anchor = Dom.select("body")
			.append('a')
			.attr('class').string('reportgridbrandanchor'+id)
			.attr('target').string('_blank');
		updateAnchor();
	}

	function createImage()
	{
		image = anchor.append('img');
		updateImage();
	}

	function updateFrame()
	{
		frame
			.style('display').string('block', 'important')
			.style('opacity').string('1', 'important')
			.style('width').string('100%', 'important')
			.style('height').string(LOGO_HEIGHT+'px', 'important')
			.style('position').string('relative', 'important')
		;
	}

	function updateAnchor()
	{
		js.Lib.document.body.appendChild(anchor.node());
		var pos = position(frame.node()),
			width = frame.style('width').getFloat();
		trace(width);
		anchor
			.attr('title').string('Powered by ReportGrid')
			.attr('href').string('http://www.reportgrid.com/charts/')
			.style('z-index').string('2147483647', 'important')
			.style('display').string('block', 'important')
			.style('opacity').string('1', 'important')
			.style('position').string('absolute', 'important')
			.style('height').string(LOGO_HEIGHT+'px', 'important')
			.style('width').string(LOGO_WIDTH+'px', 'important')
			.style('top').string(pos.y + 'px', 'important')
			.style('left').string((pos.x - LOGO_WIDTH + width) + 'px', 'important')
		;
	}

	function updateImage()
	{
		image
			.attr('src').string(getLogo())
			.attr('title').string('Powered by ReportGrid')
			.attr('height').string(''+LOGO_HEIGHT)
			.attr('width').string(''+LOGO_WIDTH)
			.style('opacity').string('1', 'important')
			.style('border').string('none', 'important')
			.style('height').string(LOGO_HEIGHT+'px', 'important')
			.style('width').string(LOGO_WIDTH+'px', 'important')
		;
	}

	function getLogo()
	{
		return 'http://api.reportgrid.com/css/images/reportgrid-clear.png';
	}

	static function position(el : HtmlDom)
	{
		var p = { x : untyped el.offsetLeft || 0, y : untyped el.offsetTop || 0 };
        while (null != (el = el.offsetParent)) {
            p.x += el.offsetLeft;
            p.y += el.offsetTop;
        }
        return p;
	}
}