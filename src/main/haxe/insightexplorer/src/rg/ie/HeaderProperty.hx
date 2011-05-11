package rg.ie;

import thx.js.Selection;
import thx.translation.ITranslation;
import rg.js.ReportGrid;
import thx.js.Dom;
import thx.js.Access;
import js.Dom;
using Arrays;
using rg.ie.SelectionHelper;

/**
 * ...
 * @author Franco Ponticelli
 */

class HeaderProperty
{
	public var path(default, null) : String;
	public var event(default, null) : String;
	public var properties(default, null) : Array<String>;
	public var property(default, null) : String;
	public var value(default, null) : Dynamic;
	public var values(default, null) : Hash<Array<Dynamic>>;
	
	var _block : Selection;
	var _container : Selection;
	var _t : ITranslation;
	
	public dynamic function propertiesChange() : Void;
	public dynamic function propertyChange() : Void;
	
	public function new(container : Selection, path : String, t : ITranslation)
	{
		this.path = path;
		_t = t;
		init(container);
	}
	
	function init(container : Selection)
	{
		_block = container.append("div").attr("class").string("property hidden");
		var dl = _block.append("dl");
		dl.append("dt").html().string(_t._("properties"));
		_container = dl.append("dd").append("ul");
		setPath(this.path);
	}
	
	public function setPath(path : String)
	{
		this.path = path;
	}
	
	public function setEvent(event : String)
	{
		this.event = event;
		values = new Hash();
		if (null == event)
			_updateProperty([])
		else
			ReportGrid.children(path, { property : event }, _updateProperty);
	}
	
	function _updateProperty(p : Array<String>)
	{
		var t = _t;
		properties = p.map(function(d, i) return Strings.trim(d, "."));
		if (properties.length == 0)
			_block.classed().add("hidden");
		else
			_block.classed().remove("hidden");
		property = null;
		
		propertiesChange();
		propertyChange();
		
		var list = _container.selectAll("li").data([], _key);
		list.exit().remove();
		
		var list = _container.selectAll("li").data(properties, _key);
		var dl = list.enter()
			.append("li")
			.append("dl");
		dl.append("dt")
				.html().stringf(function(d,i) return t._(d))
				.on("click", _clickProperty);
				
		dl.eachNode(_eachPropertyValue);
		list.exit().remove();
	}
	
	function _clickProperty(d, i)
	{
		value = null;
		property = d;
		resetLegend();
		propertyChange();
	}
	
	function _clickValue(p, d, i)
	{
		property = p;
		value = d;
		resetLegend();
		propertyChange();
	}
	
	function resetLegend()
	{
		_container.selectAll(".layer").classed().add("hidden");
		if (null == property || null != value)
			return;
		var index = properties.indexOf(property);
		_container.selectAll("dl").eachNode(function(n, i) {
			if (i != index)
				return;
			var sel = Dom.selectNode(n);
			sel.selectAll(".layer").classed().remove("hidden");
		});
	}
	
	function _eachPropertyValue(n : HtmlDom, i)
	{
		ReportGrid.propertyValues(path, { property  : event + "." + Access.getData(n) }, callback(_propertyValue, n) );
	}
	
	function _propertyValue(n : HtmlDom, values : Array<Dynamic>)
	{
		var t = _t;
		var sel = Dom.selectNode(n);
		this.values.set(Access.getData(n), values);
		if (values.length == 0)
			return;
		if (Std.is(values[0], Float))
		{
			var min = Arrays.min(values);
			var max = Arrays.max(values);
			if (min == max)
				sel.append("dd").html().float(min);
			else
				sel.append("dd").html().string(Strings.format(_t._("between {0} and {1}"), [min, max]));
		} else {
			sel.selectAll("dd").data(values)
				.enter()
					.append("dd")
					.html().stringf(function(d, i) return '<span class="hidden layer layer-' + i + '"> </span> ' + t._(d))
					.on("click", callback(_clickValue, Access.getData(n)))
					.eachNode(callback(_eachPropertyCount, Access.getData(n)))
			;
		}
	}
	
	function _eachPropertyCount(prop : String, n : HtmlDom, i : Int)
	{
		ReportGrid.propertyValueCount(path, { property : event + "." + prop, value : Access.getData(n) }, callback(_propertyCount, n) );
	}
	
	function _propertyCount(n : HtmlDom, count : Int)
	{
		Dom.selectNode(n).appendCount(count);
	}
	
	static function _key(d, i) return d
}