package rg;
import rg.ie.HeaderPath;
import rg.ie.HeaderEvent;
import rg.ie.HeaderProperty;
import rg.ie.HeaderOptions;
import rg.ie.Visualization;
import rg.js.ReportGrid;
import thx.error.Error;
import thx.error.NullArgument;
import thx.js.Dom;
import thx.translation.EmptyTranslation;
import thx.translation.ITranslation;
import thx.js.Selection;
import thx.math.scale.LinearTime;
using Objects;
/**
 * ...
 * @author Franco Ponticelli
 */

class InsightExplorer
{
	public static function insight(target : String, options : { } )
	{
		var path = options.field("path"),
			translator = options.field("translator"),
			width = options.field("width"),
			height = options.field("height"),
			start = options.field("start"),
			end = options.field("end"),
			startd : Date = (Std.is(start, Float) ? Date.fromTime(start) : (Std.is(start, Date) ? cast start : null)),
			endd : Date = (Std.is(end, Float) ? Date.fromTime(end) : (Std.is(end, Date) ? cast end : null))
			;
		return new InsightExplorer(target, path, translator, width, height, startd, endd);
	}
	var _container : thx.js.Selection;
	var _t : ITranslation;
	var _hpath : HeaderPath;
	var _hevent : HeaderEvent;
	var _hproperty : HeaderProperty;
	var _hoptions : HeaderOptions;
	var _header : Selection;
	var _visualization : Selection;
	var _vis : Visualization;
	
	public var width(default, null) : Int;
	public var height(default, null) : Int;
	public var time(default, null) : LinearTime;
	
	public function new(target : String, ?path = "/", ?translator : ITranslation, ?width = 720, ?height = 400, ?start : Date, ?end : Date)
	{
		_container = Dom.select(target).attr("class").string("rgviz");
		if (_container.empty())
			throw new Error("invalid container selector '{0}'", target);
		NullArgument.throwIfNull(path, "path");
		_t = null == translator ? new EmptyTranslation() : translator;
		
		this.width = width;
		this.height = height;
		
		start = null == start ? DateTools.delta(Date.now(), DateTools.days( -7)) : start;
		end = null == end ? Date.now() : end;
		
		time = new LinearTime();
		time.useTimeTicks(true);
		time.domain(start.getTime(), end.getTime());
		
		buildHeader(path);
		buildVisualization(path);
	}
	
	public function resize(width : Int, height : Int)
	{
		_vis.resize(width, height);
	}
	
	function buildVisualization(path : String)
	{
		_visualization = _container
			.append("div").attr("class").string("visualization");
		_vis = new Visualization(path, _visualization, time);
		_vis.resize(width, height);
		_vis.chartChange = _chartChange;
	}
	
	
	function buildHeader(path : String)
	{
		_header = _container.append("div").attr("class").string("header");
		_hpath = new HeaderPath(_header, path, _t);
		_hpath.pathChange = _pathChange;
		
		_hevent = new HeaderEvent(_header, path, _t);
		_hevent.eventChange = _eventChange;
		
		_hproperty = new HeaderProperty(_header, path, _t);
		_hproperty.propertyChange = _propertyChange;
		
		_hoptions = new HeaderOptions(_header, _t);
		_hoptions.toggleStack = _toggleStack;
	}
	
	function _toggleStack()
	{
		_vis.toggleStack();
	}
	
	function _chartChange()
	{
		_hoptions.setChart(_vis.chart);
	}
	
	function _pathChange()
	{
		_hevent.setPath(_hpath.path);
		_hproperty.setPath(_hpath.path);
		_vis.setPath(_hpath.path);
	}
	
	function _eventChange()
	{
		_hproperty.setEvent(_hevent.event);
		_vis.setEvent(_hevent.event);
	}
	
	function _propertyChange()
	{
		_vis.setProperty(_hproperty.property, _hproperty.values.get(_hproperty.property), _hproperty.value);
	}
	
	static function __init__()
	{
		untyped __js__("ReportGrid.insight = rg.InsightExplorer.insight");
	}
}