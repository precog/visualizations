/**
 * ...
 * @author Franco Ponticelli
 */

package rg.html;

import thx.culture.FormatNumber;
import thx.js.Dom;
import thx.js.Selection;
import thx.math.Equations;

class HtmlLeaderBoard 
{
	
	var container : Selection;
	var list : Selection;
	var _data : Array<{ label : String, value : Float }>;
	var _total : Float;
	var _ease : Float -> Float;
	var _duration : Int;
	var _created : Int;
	
	public function new(container : Selection) 
	{
		this.container = container;
		list = container.append("ul")
			.classed().add("leaderboard");
		_created = 0;
		_ease = Equations.elasticf();
		_duration = 1500;
	}
	
	public function data(d : Array<{ label : String, value : Float }>)
	{
		_data = d;
		_total = 0;
		for (item in _data)
			_total += item.value;
		_redraw();
	}
	
	public function _redraw()
	{
		if (null == _data)
			return;
		
		var choice = list.selectAll("li").data(_data, function(d, i) return d.label),
			total = this._total;
		choice.enter()
			.append("li")
				.style("background-size").stringf(function(d, i) return (100*d.value/total)+"%")
				.text().stringf(_description)
				.attr("title").stringf(_title)
				.style("opacity").float(0)
					.eachNode(_fadeIn)
		;

		choice.update()
			.select("li")
				.style("background-size").stringf(function(d, i) return (100*d.value/total)+"%")
				.text().stringf(_description)
				.attr("title").stringf(_title);
		
		choice.exit()
			.transition().ease(_ease).duration(_duration)
			.style("opacity").float(1)
			.remove()
		;
	}
	
	function _fadeIn(n, i)
	{
		var me = this;
		Dom.selectNodeData(n)
			.transition().ease(_ease).duration(_duration)
			.delay(150 * (i - _created))
			.style("opacity").float(1)
			.endNode(function(_, _) {
				me._created++;
			})
		;
	}
	
	public function _description(o : { label : String, value : Float }, i : Int)
	{
		return description(o.label, o.value, _total, i);
	}
	
	public function _title(o : { label : String, value : Float }, i : Int)
	{
		return title(o.label, o.value, _total, i);
	}
	
	public dynamic function description(label : String, value : Float, total : Float, pos : Int)
	{
		return label + ": " + FormatNumber.percent(100 * value / total);
	}
	
	public dynamic function title(label : String, value : Float, total : Float, pos : Int)
	{
		return "total: " + Floats.format(value, "I");
	}
}