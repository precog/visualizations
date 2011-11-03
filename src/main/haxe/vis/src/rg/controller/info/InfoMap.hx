/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

import rg.data.DataPoint;
import rg.data.Stats;
import rg.view.svg.chart.ColorScaleMode;
import rg.view.svg.chart.ColorScaleModes;
import thx.color.Colors;
import thx.error.Error;
import thx.geo.Azimuthal;
import rg.RGConst;
using rg.controller.info.Info;
using Arrays;

class InfoMap 
{
	public var url : String;
	public var type : String;
	public var scale : Float;
	public var projection : String;
	public var classname : String;
	public var translate : Array<Float>;
	public var origin : Array<Float>;
	public var parallels : Array<Float>;
	public var mode : ProjectionMode;
	public var property : Null<String>;
	public var label : InfoLabel;
	public var click : DataPoint -> Stats<Dynamic> -> Void;
	public var radius : Null<DataPoint -> Stats<Dynamic> -> Float>;
	public var colorScaleMode : ColorScaleMode;
	public var usejson : Bool;
	
	public function new() 
	{
		property = "#location";
		type = "geojson";
		colorScaleMode = ColorScaleMode.FromCss();
		usejson = true;
		radius = function(_, _) return 10;
	}
	
	public static function filters()
	{
		return [{
			field : "url",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "type",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "scale",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "projection",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "classname",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "translate",
			validator : function(v) return Std.is(v, Array),
			filter : null
		}, {
			field : "original",
			validator : function(v) return Std.is(v, Array),
			filter : null
		}, {
			field : "parallels",
			validator : function(v) return Std.is(v, Array),
			filter : null
		}, {
			field : "mode",
			validator : function(v) return Std.is(v, String),
			filter : function(v) {
				return [{
					field : "mode",
					value : Type.createEnum(ProjectionMode, Strings.ucfirst(v.toLowerCase()), [])
				}];
			}
		}, {
			field : "property",
			validator : function(v) return v == null || Std.is(v, String),
			filter : null
		}, {
			field : "usejsonp",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}, {
			field : "template",
			validator : function(v) return Std.is(v, String) && isValidTemplate(v),
			filter : fromTemplate
		}, {
			field : "label",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "label",
				value : new InfoLabel().feed(v)
			}]
		}, {
			field : "click",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}, {
			field : "color",
			validator : function(v) return Std.is(v, String) || Reflect.isFunction(v),
			filter : function(v) {
				return [{
					field : "colorScaleMode",
					value : ColorScaleModes.createFromDynamic(v)
				}];
			}
		}, {
			field : "radius",
			validator : function(v) return Std.is(v, Float) || Reflect.isFunction(v),
			filter : function(v) {
				return [{
					field : "radius",
					value : Std.is(v, Float) ? cast function(_, _) return v : v
				}];
			}
		}];
	}
	
	static function isValidTemplate(t : String)
	{
		return ["world", "world-countries", "usa-states", "usa-state-centroids", "usa-counties"].exists(t.toLowerCase());
	}
	
	static function fromTemplate(t : String)
	{
		switch(t.toLowerCase())
		{
			case "world", "world-countries":
				return [{
					field : "projection",
					value : "mercator"
				}, {
					field : "url",
					value : RGConst.BASE_URL_GEOJSON + "world-countries.json.js"
				}];
			case "usa-states":
				return [{
					field : "projection",
					value : "albersusa"
				}, {
					field : "url",
					value : RGConst.BASE_URL_GEOJSON + "usa-states.json.js"
				}];
			case "usa-state-centroids":
				return [{
					field : "projection",
					value : "albersusa"
				}, {
					field : "url",
					value : RGConst.BASE_URL_GEOJSON + "usa-state-centroids.json.js"
				}];
			case "usa-counties":
				return [{
					field : "projection",
					value : "albersusa"
				}, {
					field : "url",
					value : RGConst.BASE_URL_GEOJSON + "usa-counties.json.js"
				}];
			default:
				return throw new Error("invalid template");
		}
	}
}