package rg.ie;

import rg.js.ReportGrid;
import thx.js.Dom;
import thx.js.Selection;
import thx.translation.ITranslation;
import thx.js.Node;
using Arrays;
using rg.ie.SelectionHelper;

/**
 * ...
 * @author Franco Ponticelli
 */

class HeaderEvent
{
	public var events(default, null) : Array<String>;
	public var event(default, null) : String;
	
	var _block : Selection<Dynamic>;
	var _container : Selection<Dynamic>;
	var _t : ITranslation;
	public var path(default, null) : String;
	
	public dynamic function eventsChange() : Void;
	public dynamic function eventChange() : Void;
	
	public function new(container : Selection<Dynamic>, path : String, t : ITranslation)
	{
		this.path = path;
		_t = t;
		init(container);
	}
	
	function init(container : Selection<Dynamic>)
	{
		_block = container.append("div").attr("class").string("event hidden");
		var dl = _block.append("dl");
		dl.append("dt").text().string(_t._("events"));
		_container = dl.append("dd").append("ul");
		setPath(this.path);
	}
	
	public function setPath(path : String)
	{
		this.path = path;
		ReportGrid.children(path, { type : "property" }, _updateEvent);
	}
	
	function _updateEvent(events : Array<String>)
	{
		var t = _t;
		// reset
		events = events.map(function(d, i) return Strings.trim(d, "."));
		if (events.length == 0)
			_block.classed().add("hidden");
		else
			_block.classed().remove("hidden");
		event = null;
		eventsChange();
		eventChange();
		
		var list = _container.selectAll("li").data([], _key);
		list.exit().remove();
		
		var list = _container.selectAll("li").data(events, _key);
		list.enter()
			.append("li")
			.text().stringf(function(d,i) return t._(d))
			.on("click", _click)
			.eachNode(_eachEventCount)
		;
		list.exit().remove();
	}
	
	function _click(d, i)
	{
		event = d;
		eventChange();
	}
	
	function _eachEventCount(n : Node<Dynamic>, i)
	{
		ReportGrid.propertyCount(path, { property  : n.data }, callback(_eventCount, n) );
	}
	
	function _eventCount(n : Node<Dynamic>, count : Int)
	{
		Dom.selectNode(n).appendCount(count);
	}
	
	static function _key(d, i) return d
}