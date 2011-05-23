package rg.pivottable;
import haxe.Timer;
import thx.js.Selection;
import rg.js.ReportGrid;
import js.Dom;

/**
 * ...
 * @author Franco Ponticelli
 * @todo add order query and limit properties based on that
 */

class PivotTable 
{
	static var nextid = 0;
	
	var container : Selection;
	var id : String;
	public var start : Null<Date>;
	public var end : Null<Date>;
	public var path : String;
	public var event : String;
	public var availableProperties : Array<String>;
	public var queryProperties : Array<QueryProperty>;
	
	public function new(container : Selection) 
	{
		id = "rg-pivottable-" + (++nextid);
		this.container = container;
		start = null;
		end = null;
		path = null;
		availableProperties = [];
		queryProperties = [];
	}

	public function init()
	{
		if (null == availableProperties || 0 == availableProperties.length)
		{
			ReportGrid.children(path + "." + event, { type : "property" }, _loadProperties);
		} else 
			_init();
	}
	
	public function query()
	{
		trace(start);
	}
	
	function _init()
	{
		trace(availableProperties);
		container.node().innerHTML = buildContext(id);
//		Timer.delay(wireDateControls, 1000);
		wireDateControls();
	}
	
	function wireDateControls()
	{
		container.select("input.start-time").onNode("change", startTimeChanged);
		container.select("input.end-time").onNode("change", endTimeChanged);
	}
	
	function startTimeChanged(n : HtmlDom, _ : Int)
	{
		var v : String = untyped n.value;
		if (Dates.canParse(v))
		{
			start = Dates.parse(v);
		} else
		{
			trace("unable to parse date");
			return;
		}
		query();
	}
	
	function endTimeChanged(n : HtmlDom, _ : Int)
	{
		var v : String = untyped n.value;
		if (Dates.canParse(v))
		{
			end = Dates.parse(v);
		} else
		{
			trace("unable to parse date");
			return;
		}
		query();
	}
	
	function _loadProperties(v : Array<String>)
	{
		availableProperties = v;
		_init();
	}
	
	static function buildContext(id : String)
	{
		var b = '<div class="rg" class="pivot-table-container">';
		b += '<form id="' + id + '">';
		b += '<div class="controls">';
		
		// TIME CONTROLS
		b += '<div class="time-controls">';
		b += 'start: <input type="datetime-local" name="start-time" class="start-time"/>';
		b += " ";
		b += 'end: <input type="datetime-local" name="end-time" class="end-time"/>';
		b += '</div>';
		
		// PROPERTIES
		b += '<div class="property-controls">';
		b += '</div>';
		
		// CLOSE FORM
		b += '</div>';
		b += '</form>';
		
		// VISUALIZATION AREA
		b += '<div class="pivot-table"></div>';
		
		// CLOSE CONTEXT
		b += '</div>';
		return b;
	}
}