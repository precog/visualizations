/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

import rg.data.DataPoint;
import rg.axis.Stats;
import rg.svg.chart.ColorScaleMode;
import rg.svg.chart.ColorScaleModes;
import thx.color.Colors;
import thx.error.Error;
import thx.geo.Azimuthal;
import rg.RGConst;
import rg.info.filter.TransformResult;
import rg.info.filter.ITransformer;
import rg.info.filter.Pairs;
import thx.util.Message;
using rg.info.filter.FilterDescription;
using rg.info.Info;
using Arrays;

@:keep class InfoMap
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
	public var usejsonp : Bool;
	public var mapping : Dynamic;
	public var mappingurl : String;

	public function new()
	{
		property = "location";
		type = "geojson";
		colorScaleMode = ColorScaleMode.FromCssInterpolation();
		usejsonp = true;
		radius = function(_, _) return 10;
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"url".toStr(),
			"type".toStr(),
			"scale".toFloat(),
			"projection".toStr(),
			"classname".toStr(),
			"translate".toArray(),
			"origin".toArray(),
			"parallels".toArray(),
			"mode".toTry(
				function(v) return Type.createEnum(ProjectionMode, Strings.ucfirst(v.toLowerCase()), []),
				"value is not a valid projection mode '{0}'"
			),
			"property".toStrOrNull(),
			"usejsonp".toBool(),
			"template".simplified(
				fromTemplate,
				(function(v) return Std.is(v, String) && isValidTemplate(v)).make("invalid template value '{0}'")
			),
			"label".toInfo(InfoLabel),
			"click".toFunction(),
			"color".simplified(
				ColorScaleModes.createFromDynamic,
				(function(v) return Std.is(v, String) || Reflect.isFunction(v)).make("invalid template value '{0}'")
			),
			"radius".toFunctionOrFloat(),
			new FilterDescription("mapping", new MapTransformer())
		];
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
/*
	public static function filters() : Array<FieldFilter>
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
			field : "origin",
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
		}, {
			field : "mapping",
			validator : function(v) return Std.is(v, String) || Types.isAnonymous(v),
			filter : function(v) {
				if(Std.is(v, String))
				{
					return [{
						field : "mappingurl",
						value : v
					}];
				} else {
					return [{
						field : "mapping",
						value : v
					}];
				}
			}
		}];
	}
*/
}

class MapTransformer implements ITransformer<Dynamic, Pairs>
{
	public function new() { }

	public function transform(value : Dynamic) : TransformResult<Pairs>
	{
		return if(Std.is(value, String)) {
			TransformResult.Success(new Pairs(["mappingurl"], value));
		} else if(Types.isAnonymous(value)) {
			TransformResult.Success(new Pairs(["mapping"], value));
		} else {
			TransformResult.Failure(new Message("value should be url string or an object", [value]));
		};
	}
}