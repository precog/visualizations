package rg.ie;

import thx.js.Selection;
import thx.translation.ITranslation;
import rg.js.ReportGrid;
using Arrays;


/**
 * ...
 * @author Franco Ponticelli
 */

class HeaderPath
{
	public var path(default, null) : String;
	public var children(default, null) : Array<{ path : String, name : String }>;
	var _container : Selection<Dynamic>;
	var _t : ITranslation;
	
	public function new(container : Selection<Dynamic>, path : String, t : ITranslation)
	{
		this.path = path;
		_t = t;
		init(container);
	}
	
	public dynamic function pathChange() : Void;
	public dynamic function childrenChange() : Void;
	
	function init(container : Selection<Dynamic>)
	{
		_container = container.append("div").attr("class").string("path");
		// path
		var dl = _container.append("dl");
		
		// current
		dl.append("dt").text().string(_t._("path"));
		dl.append("dd").attr("class").string("current").append("ul");
				
		// children
		dl.append("dt")
			.attr("class").string("children hidden")
			.text().string(_t._("children"));
		dl.append("dd").attr("class").string("children hidden").append("ul");
	
		setPath(this.path);
	}

	function _clickPath(d : { path : String, name : String }, i)
	{
		setPath(d.path);
	}
	
	public function setPath(path : String)
	{
		this.path = path;
		pathChange();
		ReportGrid.children(path, { type : "path" }, _updatePath);
	}
	
	function _updatePath(c : Array<String>)
	{
		// current
		var list = _container.select("dd.current ul").selectAll("li").data(currentPathParts(path), function(d,i) return d.path);
		list.enter()
			.append("li")
			.text().stringf(function(d, i) return d.name)
			.on("click", _clickPath)
		;
		list.exit().remove();
			
		// children
		this.children = childrenPath(path, c);
		childrenChange();
		var list = _container.select("dd.children ul").selectAll("li").data(this.children, function(d, i) return d.path);
		list.exit().remove();
		if (children.length == 0)
		{
			_container.selectAll(".children").classed().add("hidden");
		} else {
			_container.selectAll(".children").classed().remove("hidden");
			list.enter()
				.append("li")
				.text().stringf(function(d,i) return d.name)
				.on("click", _clickPath);
		}
	}
	
	static function childrenPath(path : String, c : Array<String>)
	{
		return c.map(function(d, i) {
			return {
				path : path + d,
				name : d
			};
		});
	}
	
	static function currentPathParts(path : String)
	{
		return Strings.trim(path, "/").split("/").reduce(function(arr : Array<{ path : String, name : String }>, cur, i) {
			if (cur == "")
				return arr;
			var last = arr[arr.length - 1].path;
			cur += "/";
			arr.push({
				path : last + cur,
				name : cur
			});
			return arr;
		}, [{ path : "/", name : "/" }]);
	}
	
	static function pathName(path : String)
	{
		path = Strings.trim(path, "/");
		var parts = path.split("/");
		return parts.pop();
	}
	
	static function getParent(path : String)
	{
		path = Strings.trim(path, "/");
		var parts = path.split("/");
		parts.pop();
		return "/" + parts.join("/");
	}
}