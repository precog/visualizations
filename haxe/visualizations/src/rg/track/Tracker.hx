/**
 * ...
 * @author Franco Ponticelli
 */

package rg.track;
import haxe.Timer;
import thx.js.ClientHost;
import js.Lib;
import js.LocalStorage;
import js.Storage;
import rg.controller.visualization.Visualization;
import rg.controller.visualization.VisualizationHtml;
import rg.controller.visualization.VisualizationSvg;
import rg.data.source.rgquery.ITrackReportGrid;
import thx.collection.Set;

// TODO: load hash from service if tracking is enabled

class Tracker 
{
	static var PREFIX = "rgv_";
	static var KEY_ENGAGEMENTS = PREFIX + "engagements";
	static var KEY_VISITS = PREFIX + "visits";
	static var KEY_ENGAGEMENT_TIMESTAMP = PREFIX + "engagement_timestamp";
	static var KEY_ENGAGEMENT_TIME = PREFIX + "engagement_time";
	static var DELAY_FIRST_VISIT = 4;
	static var _instance : Tracker;
	static var ENGAGE_PAGE = "engaged_dashboard";
	static var ENGAGE_VIZ = "engaged";
	static var delaypositions = [5, 10, 20, 30, 45, 60, 90, 120, 180, 300, 450, 600, 900, 1200, 1500];
	
	
	var executor : ITrackReportGrid;
	var storage : Storage;
	var paths : Array<String>;
	var token : String;
	var engagements : Set<String>;
	var visualizations : Array<Dynamic>;
	var start : Float;
	var delaypos : Int;
	var visits : Int;
	
	public static function instance(executor : ITrackReportGrid, paths : Array<String>, token : String) 
	{
		if (null == _instance)
			_instance = new Tracker(executor, paths, token);
		return _instance;
	}
	
	function new(executor : ITrackReportGrid, paths : Array<String>, token : String) 
	{
		this.executor = executor;
		this.storage = LocalStorage.instance;
		this.paths = paths;
		this.token = token;
		this.start = Date.now().getTime();
		this.engagements = new Set();
		this.visualizations = [];
		this.delaypos = 0;
		// set visits
		updateVisits();
		// track engagement
		delayedTrackVisits(!trackEngagements());
		addEngagement(null);
		// wire timer for engagement
		updateEngagementTime();
	}
	
	function updateVisits()
	{
		var v = storage.getItem(KEY_VISITS);
		if (null == v)
			storage.setItem(KEY_VISITS, "" + (visits = 1));
		else
			storage.setItem(KEY_VISITS, "" + (visits = Std.parseInt(v)+1));
	}
	
	function addEngagement(visualization : String)
	{
		if (null == visualization)
			visualization = "!dashboard";
		if (engagements.length == 0)
			storage.setItem(KEY_ENGAGEMENT_TIMESTAMP, "" + start);
		engagements.add(visualization);
		storage.setItem(KEY_ENGAGEMENTS, engagements.array().join(","));
	}
	
	public function addVisualization(visualization : Visualization, params : Dynamic)
	{
		visualizations.push(params);
		addEngagement(params.options.visualization);
		trackVisualization(visualization, params);
	}
	
	function trackVisualization(visualization : Visualization, params : Dynamic)
	{
		var event = baseEvent(),
			svgviz = Types.as(visualization, VisualizationSvg),
			vis = params.options.visualization;
		
		Reflect.setField(event, "visualization", vis);
		Reflect.setField(event, "visits", visits);

		
		if (null != svgviz)
		{
			var layout = svgviz.layout;
			Reflect.setField(event, "width", layout.width);
			Reflect.setField(event, "height", layout.height);
		}
		var container = null != svgviz ? svgviz.layout.container : cast(visualization, VisualizationHtml).container;
		
		container.onNode("mouseenter.track", callback(trackInteraction, vis, "over"));
		container.onNode("click.track", callback(trackInteraction, vis, "click"));
		
		execute( { visualization : event } );
	}
	
	function createEngagementDelay()
	{
		if (delaypos == delaypositions.length)
			return;
		var delay = delaypos == 0 ? delaypositions[0] : delaypositions[delaypos] - delaypositions[delaypos - 1];
		Timer.delay(updateEngagementTime, 1000 * delay);
		delaypos++;
	}
	
	function trackInteraction(visualization : String, action : String, ?_, ?_)
	{
		var event = baseEvent();
		Reflect.setField(event, "visits", visits);
		Reflect.setField(event, "visualization", visualization);
		Reflect.setField(event, "action", action);

		execute({ interaction : event });
	}
	
	function trackEngagements()
	{
		var list = extractEngagements();
		if (null == list)
			return false;
		for (item in list)
		{
			var field = null == item.visualization ? ENGAGE_PAGE : ENGAGE_VIZ,
				events = { };
			Reflect.setField(events, field, item);
			execute(events);
		}
		return true;
	}
	
	function delayedTrackVisits(isfirstvisit)
	{
		Timer.delay(function() {
			if(isfirstvisit)
				trackFirstVisit();
			trackVisit();
		}, 1000 * DELAY_FIRST_VISIT);
	}
	
	function trackFirstVisit()
	{
		var event = visitEvent();
		execute( { first_visit : event } );
	}
	
	function trackVisit()
	{
		var event = visitEvent();
		Reflect.setField(event, "visits", visits);
		execute( { visit : event } );
	}
	
	function updateEngagementTime()
	{
		storage.setItem(KEY_ENGAGEMENT_TIME, "" + delaypos);
		createEngagementDelay();
	}
	
	function extractEngagements()
	{
		var list = storage.getItem(KEY_ENGAGEMENTS);
		if (null == list)
			return null;
		var events = [],
			timestamp = Std.parseFloat(storage.getItem(KEY_ENGAGEMENT_TIMESTAMP)),
			time = bucketTime(Std.parseInt(storage.getItem(KEY_ENGAGEMENT_TIME)));
		for (key in list.split(","))
		{
			var event = baseEvent();
			Reflect.setField(event, "#location", true);
			Reflect.setField(event, "#timestamp", timestamp);
			Reflect.setField(event, "viewtime", time);
			Reflect.setField(event, "visits", visits - 1);
			if ("!dashboard" != key)
				Reflect.setField(event, "visualization", key);
			
			events.push(event);
		}
		return events;
	}
	
	function bucketTime(pos : Int)
	{
		if (pos == 0)
			return "0-" + (delaypositions[0] - 1);
		else if (pos == delaypositions.length - 1)
			return delaypositions[pos] + "+";
		return (delaypositions[pos-1]) + "-" + (delaypositions[pos]-1);
	}
	
	function engKey(key) return PREFIX + "eng_" + key
	
	function remove(key : String)
	{
		var v = storage.getItem(key);
		storage.removeItem(key);
		return v;
	}
	
	function execute(params : {})
	{
		if (Reflect.fields(params).length == 0)
			return;
		for(path in paths)
			executor.track(path, params, token);
	}
	
	function baseEvent() : Dynamic
	{
		var event = {
			browser : ClientHost.hostString(),
			os : ClientHost.osString(),
			env : ClientHost.environmentString()
		};
		Reflect.setField(event, "#timestamp", Date.now().getTime());
		return event;
	}
	
	function visitEvent() : Dynamic
	{
		var event = baseEvent(),
			viscount = 0,
			map = new Hash<Int>();
		for (vis in visualizations)
		{
			var visualization = vis.options.visualization;
			if (map.exists(visualization))
				map.set(visualization, map.get(visualization) + 1);
			else
				map.set(visualization, 1);
			viscount++;
		}
		Reflect.setField(event, "visualizationcount", viscount);
		Reflect.setField(event, "visualizations", Hashes.toDynamic(map));
		return event;
	}
}