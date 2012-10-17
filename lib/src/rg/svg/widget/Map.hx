/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.widget;
import haxe.Http;
import hxevents.Notifier;
import rg.util.Jsonp;
import rg.svg.chart.ColorScaleMode;
import rg.util.RGColors;
import thx.error.Error;
import thx.geo.Albers;
import thx.geo.IProjection;
import thx.geo.Mercator;
import thx.geo.Azimuthal;
import dhx.Selection;
import thx.json.GeoJson;
import thx.svg.PathGeoJson;
import thx.json.Json;
import rg.info.InfoMap;
import rg.axis.Stats;
import js.Dom;
using Arrays;

class Map
{
	public var className(null, setClassName) : String;
	public var map(default, null) : Hash<{ svg : Selection, dp : Dynamic }>;
	public var onReady(default, null) : Notifier;

	public var click : Dynamic -> Stats<Dynamic> -> Void;
	public var labelDataPoint : Dynamic -> Stats<Dynamic> -> String;
	public var labelDataPointOver : Dynamic -> Stats<Dynamic> -> String;
	public var radius : Dynamic -> Stats<Dynamic> -> Float;
	public var colorMode : ColorScaleMode;
	public var ready(default, null) : Bool;
	public var mapping : Dynamic;

	var projection : IProjection;
	var g : Selection;
	public function new(container : Selection, projection : IProjection)
	{
		g = container.append("svg:g").attr("class").string("map");
		this.projection = projection;
		map = new Hash();
		ready = false;
		onReady = new Notifier();
		onReady.addOnce(function() ready = true);
	}

	public function load(path : String, type : String, mappingurl : String, usejsonp : Bool)
	{
		switch(type)
		{
			case "geojson":
				loadGeoJson(path, mappingurl, usejsonp);
			default:
				new Error("unsupported geographic format '{0}'", type);
		}
	}

	function loadGeoJson(geourl : String, mappingurl : String, usejsonp : Bool)
	{
		var load = usejsonp ? loadJsonp : loadJsonAjax;
		if(null == mappingurl)
			load(geourl, draw);
		else
		{
			load(mappingurl, function(m) {
				mapping = m;
				load(geourl, draw);
			});
		}
	}

	static function loadJsonp<T>(url : String, handler : T -> Void)
	{
		Jsonp.get(url, handler, null, null, null);
	}

	static function loadJsonAjax<T>(url : String, handler : T -> Void)
	{
		var http = new Http(url);
		http.onData = function(data)
		{
			var json = Json.decode(data);
			handler(json);
		}
		http.onError = function(err) throw new Error("unable to load JSON file '{0}': {1}", [url, err]);
		http.request(false);
	}

	function draw(json : GeoJson)
	{
		var id = null != mapping
				? function(s) return Reflect.hasField(mapping, s) ? Reflect.field(mapping, s) : s
				: function(s) return s;

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
					Reflect.setField(dp, "$centroid", centroid);
					Reflect.setField(dp, "$data", feature.properties);
					if (null != feature.id)
					{
						map.set(id(feature.id), {
							svg : p,
							dp : dp
						} );
					}
					if (null != labelDataPointOver)
					{
						p.onNode("mouseover", callback(onMouseOver, dp));
					}

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
//	var currentNode : js.Dom.HtmlDom;
	function onMouseOver(dp : Dynamic, n, i : Int)
	{
//		currentNode = n;
		handlerDataPointOver(n, dp, labelDataPointOver);
	}
	function onClick(dp : Dynamic, _, i) handlerClick(dp, click)

	public var handlerDataPointOver : HtmlDom -> Dynamic -> (Dynamic -> Stats<Dynamic> -> String) -> Void;
	public var handlerClick : Dynamic -> (Dynamic -> Stats<Dynamic> -> Void) -> Void;

	function setClassName(cls : String)
	{
		g.attr("class").string("map" + (null == cls ? "" : " "  + cls));
		return cls;
	}
}