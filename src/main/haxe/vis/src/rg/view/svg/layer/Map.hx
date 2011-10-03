/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.layer;
import haxe.Http;
import hxevents.Notifier;
import rg.view.svg.chart.ColorScaleMode;
import thx.error.Error;
import thx.geo.Albers;
import thx.geo.IProjection;
import thx.geo.Mercator;
import thx.geo.Azimuthal;
import thx.js.Selection;
import thx.json.GeoJson;
import thx.svg.PathGeoJson;
import thx.json.Json;
import rg.controller.info.InfoMap;
import rg.data.DataPoint;
import rg.data.Stats;
using Arrays;

class Map
{
	public var className(null, setClassName) : String;
	public var map(default, null) : Hash<{ svg : Selection, dp : DataPoint }>;
	public var onReady(default, null) : Notifier;
	
	public var click : DataPoint -> Stats<Dynamic> -> Void;
	public var labelDataPoint : DataPoint -> Stats<Dynamic> -> String;
	public var labelDataPointOver : DataPoint -> Stats<Dynamic> -> String;
	public var radius : DataPoint -> Stats<Dynamic> -> Float;
	public var colorMode : ColorScaleMode;
	
	var projection : IProjection;
	var g : Selection;
	public function new(container : Selection, projection : IProjection) 
	{
		g = container.append("svg:g").attr("class").string("map");
		this.projection = projection;
		map = new Hash();
		onReady = new Notifier();
	}
	
	public function load(path : String, type : String)
	{
		switch(type)
		{
			case "geojson":
				loadGeoJson(path);
			default:
				new Error("unsupported geographic format '{0}'", type);
		}
	}
	
	function loadGeoJson(path)
	{
		var http = new Http(path);
		http.onData = function(data)
		{
			var json = Json.decode(data);
			draw(json);
		}
		http.onError = function(err) throw new Error("unable to load GeoJSON file '{0}': {1}", [path, err]);
		http.request(false);
	}
	
	function draw(json : GeoJson)
	{
		var path = new PathGeoJson();
		path.projection = projection;
		switch(json.type)
		{
			case "FeatureCollection":
				for(i in 0...json.features.length)
				{
					var feature = json.features[i],
						centroid = path.centroid(feature.geometry),
						p = feature.geometry.type == "Point" 
							? g.append("svg:circle")
								.attr("cx").float(centroid[0])
								.attr("cy").float(centroid[1])
								.attr("r").float(5)
							: g.append("svg:path")
								.attr("d").string(path.path(feature.geometry))
						;
					var dp = { };
					Reflect.setField(dp, "#centroid", centroid);
					Reflect.setField(dp, "#data", feature.properties);
					if (null != feature.id)
					{
						map.set(feature.id, { 
							svg : p,
							dp : dp
						} );
					}
					if (null != labelDataPointOver)
						p.onNode("mouseover", callback(onMouseOver, dp));
					
					if (null != click)
						p.onNode("click", callback(onClick, dp));
				}
			case "MultiPoint", "MultiLineString", "MultiPolygon", "GeometryCollection":
				throw new Error("the type '{0}' is not implemented yet", [json.type]);
			default:
				g.append("svg:path").attr("d").string(path.path(json));
		}
		onReady.dispatch();
	}
	
	function onMouseOver(dp : DataPoint, ?_, ?_) handlerDataPointOver(dp, labelDataPointOver)
	function onClick(dp : DataPoint, ?_, ?_) handlerClick(dp, click)
	
	public var handlerDataPointOver : DataPoint -> (DataPoint -> Stats<Dynamic> -> String) -> Void;
	public var handlerClick : DataPoint -> (DataPoint -> Stats<Dynamic> -> Void) -> Void;
	
	function setClassName(cls : String)
	{
		g.attr("class").string("map" + (null == cls ? "" : " "  + cls));
		return cls;
	}
}