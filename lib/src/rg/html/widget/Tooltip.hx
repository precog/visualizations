package rg.html.widget;

import js.Dom;
import thx.js.Selection;

class Tooltip
{
	static inline var DEFAULT_DISTANCE = 5;
	var tooltip : Selection;
	var _anchor : Selection;
	var container : Selection;
	var background : Selection;
	var content : Selection;

	var anchortype : String;
	var anchordistance : Int;

	public var visible(default, null) : Bool;
	public function new(?el : HtmlDom)
	{
		visible = false;
		el = null == el ? js.Lib.document.body : el;
		tooltip = thx.js.Dom.selectNode(el).append("div")
			.style("display").string("none")
			.style("position").string("absolute")
			.style("opacity").float(0)
			.style("left").string("0px")
			.style("top").string("0px")
			.attr("class").string("rg tooltip")
			.style("z-index").string("1000000")
		;

		_anchor = tooltip.append("div")
			.style("display").string("block")
			.style("position").string("absolute")
			.attr("class").string("anchor");

		container = tooltip.append("div")
			.style("position").string("relative")
			.attr("class").string("container")
		;

		background = container.append("div")
			.style("position").string("relatve")
			.style("display").string("block")
			.append("div")
				.style("z-index").string("-1")
				.attr("class").string("background")
				.style("position").string("absolute")
				.style("left").string("0")
				.style("right").string("0")
				.style("top").string("0")
				.style("bottom").string("0");
		content = container.append("div")
			.attr("class").string("content");

		anchortype = "bottom";
		anchordistance = DEFAULT_DISTANCE;
	}

	public function html(value : String)
	{
		content.node().innerHTML = value;
		reanchor();
	}

	public function show()
	{
		if(visible)
			return;
		tooltip.style("display").string("block");
		visible = true;
		reanchor();
		tooltip.style("opacity").float(1);
	}

	public function hide()
	{
		if(!visible)
			return;
		visible = false;
		tooltip
			.style("opacity").float(0)
			.style("display").string("none");
	}

	public function showAt(x : Int, y : Int)
	{
		moveAt(x, y);
		show();
	}

	public function moveAt(x : Int, y : Int)
	{
		tooltip
			.style("left").string(x+"px")
			.style("top").string(y+"px");
	}

	public function anchor(type : String, ?distance : Int)
	{
		if(null == distance)
			distance = DEFAULT_DISTANCE;
		if(anchortype == type && anchordistance == distance)
			return;
		anchortype = type;
		anchordistance = distance;
		reanchor();
	}

	function reanchor()
	{
		if(!visible)
			return;
		var width  = container.style("width").getFloat(),
			height = container.style("height").getFloat();

		var type = anchortype;
		// x
		switch (type)
		{
			case 'top', 'bottom', 'center':
				container.style("left").string((-width/2) +"px");
			case 'left', 'topleft', 'bottomleft':
				container.style("left").string((anchordistance) +"px");
			case 'right', 'topright', 'bottomright':
				container.style("left").string((-anchordistance-width) +"px");
			default:
				throw new thx.error.Error(Std.format("invalid anchor point: {$anchortype}"));
		}

		// y
		switch (type)
		{
			case 'top', 'topleft', 'topright':
				container.style("top").string((anchordistance) +"px");
			case 'left', 'center', 'right':
				container.style("top").string((-height/2) +"px");
			case 'bottom', 'bottomleft', 'bottomright':
				container.style("top").string((-anchordistance-height) +"px");
		}
	}
}