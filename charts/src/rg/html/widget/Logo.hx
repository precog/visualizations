package rg.html.widget;

import haxe.Timer;
import dhx.Dom;
import dhx.Selection;
import js.Dom;

class Logo
{
	static var registry = new Hash();
	public static function createLogo(container : Selection, padright : Int)
	{
		var id   = container.attr("id").get(),
			logo = registry.get(id);
		trace(id);
		if(null == logo)
		{
			registry.set(id, logo = new Logo(container, padright));
		} else {
			logo.live();
		}
		return logo;
	}

	public var chartContainer(default, null) : Selection;
	static var _id = 0;
	static inline var LOGO_WIDTH = 194;
	static inline var LOGO_HEIGHT = 29;
	var container : Selection;
	var frame : Selection;
	var anchor : Selection;
	var image : Selection;
	var id : Int;
	var mapvalues : Hash<Dynamic>;
	var padRight : Int;
	function new(container : Selection, padright : Int)
	{
		mapvalues = new Hash();
		this.padRight = padright;
		id = ++_id;
		this.container = container;
		create();
		var timer = new Timer(5000);
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
		chartContainer = container.select('*');
		frame = container.insert('div', chartContainer.node())
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
		setStyle(frame, 'display', 'block');
		setStyle(frame, 'opacity', '1');
		setStyle(frame, 'width', '100%');
		setStyle(frame, 'height', LOGO_HEIGHT+'px');
		setStyle(frame, 'position', 'relative');
	}

	function setStyle(s : Selection, name : String, value : String)
	{
		var key = "style:"+name+":"+value,
			v : Dynamic;
		if(null != (v = mapvalues.get(key)) && v != s.style(name).get())
		{
			s.style(name).string(v, 'important');
		} else if(null == v) {
			s.style(name).string(value, 'important');
			mapvalues.set(key, s.style(name).get());
		}
	}

	function setAttr(s : Selection, name : String, value : String)
	{
		var key = "attr:"+name+":"+value,
			v : Dynamic;
		if(null != (v = mapvalues.get(key)) && v != s.attr(name).get())
		{
			s.attr(name).string(v);
		} else if(null == v) {
			s.attr(name).string(value);
			mapvalues.set(key, s.attr(name).get());
		}
	}

	function updateAnchor()
	{
		var body = js.Lib.document.body,
			len = body.childNodes.length;
		if(Dom.select("body > :last").node() != anchor.node())
		{
			body.appendChild(anchor.node());
		}
		var pos = position(frame.node()),
			width = frame.style('width').getFloat();
		setAttr(anchor, 'title', 'Powered by ReportGrid');
		setAttr(anchor, 'href', 'http://www.reportgrid.com/charts/');
		setStyle(anchor, 'z-index', '2147483647');
		setStyle(anchor, 'display', 'block');
		setStyle(anchor, 'opacity', '1');
		setStyle(anchor, 'position', 'absolute');
		setStyle(anchor, 'height', LOGO_HEIGHT+'px');
		setStyle(anchor, 'width', LOGO_WIDTH+'px');
		setStyle(anchor, 'top', pos.y + 'px');
		setStyle(anchor, 'left', (pos.x - LOGO_WIDTH + width-padRight) + 'px');
	}

	function updateImage()
	{
		setAttr(image, 'src', getLogo());
		setAttr(image, 'title', 'Powered by ReportGrid');
		setAttr(image, 'height', ''+LOGO_HEIGHT);
		setAttr(image, 'width', ''+LOGO_WIDTH);
		setStyle(image, 'opacity', '1');
		setStyle(image, 'border', 'none');
		setStyle(image, 'height', LOGO_HEIGHT+'px');
		setStyle(image, 'width', LOGO_WIDTH+'px');
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