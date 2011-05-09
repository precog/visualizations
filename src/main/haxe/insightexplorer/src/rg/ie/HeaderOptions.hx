package rg.ie;

import thx.js.Selection;
import thx.translation.ITranslation;

/**
 * ...
 * @author Franco Ponticelli
 */

class HeaderOptions
{
	var _container : Selection<Dynamic>;
	var _t : ITranslation;
	var _chart : TimeChart;
	
	public dynamic function toggleStack();
	
	public function new(container : Selection<Dynamic>, t : ITranslation)
	{
		_t = t;
		init(container);
	}
	
	public function setChart(chart : TimeChart)
	{
		this._chart = chart;
		if (null == _chart)
			hide();
		else
			show();
	}
	
	function hide()
	{
		_container.classed().add("hidden");
	}
	
	function show()
	{
		_container.classed().remove("hidden");
	}
	
	function init(container : Selection<Dynamic>)
	{
		_container = container.append("div").attr("class").string("options hidden");
		// path
		var dl = _container.append("dl");
		
		// current
		dl.append("dt").text().string(_t._("options"));
		dl.append("dd")
			.text().string(_t._("toggle stack"))
			.on("click", _toggleStack);
				
		/*
		// children
		dl.append("dt")
			.attr("class").string("children hidden")
			.text().string(_t._("children") + ":");
		dl.append("dd").attr("class").string("children hidden").append("ul");
	
		*/
	}
	
	function _toggleStack(d, i)
	{
		toggleStack();
	}
}