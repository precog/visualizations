/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

import rg.data.DataPoint;
import rg.axis.Stats;
using rg.info.Info;

@:keep class InfoSankey
{
	public var label : InfoLabelSankey;
	public var idproperty : String;
	public var weightproperty : String;
	public var parentsproperty : String;
	public var layerWidth : Null<Float>;
	public var nodeSpacing : Null<Float>;
	public var dummySpacing : Null<Float>;
	public var extraWidth : Null<Float>;
	public var backEdgeSpacing : Null<Float>;
	public var extraHeight : Null<Float>;
	public var extraRadius : Null<Float>;
	public var imageWidth : Null<Float>;
	public var imageHeight : Null<Float>;
	public var imageSpacing : Null<Float>;
	public var labelNodeSpacing : Null<Float>;
	public var imagePath : DataPoint -> String;
	public var layoutmap : { layers : Array<Array<String>>, dummies : Array<Array<String>> };
	public var click : DataPoint -> Stats<Dynamic> -> Void;
	public var clickEdge : { head : DataPoint, tail : DataPoint, edgeweight : Float, nodeweight : Float } -> Stats<Dynamic> -> Void;
	public var layoutmethod : String;

	public var nodeclass : Null<DataPoint -> Stats<Dynamic> -> String>;
	public var edgeclass : Null<DataPoint -> Stats<Dynamic> -> String>;
	public var displayentry : Null<DataPoint -> Stats<Dynamic> -> Bool>;
	public var displayexit : Null<DataPoint -> Stats<Dynamic> -> Bool>;

	public var stackbackedges : Bool;
	public var thinbackedges : Bool;

	public function new()
	{
		label = new InfoLabelSankey();
		idproperty = "id";
		weightproperty = "count";
		parentsproperty = "parents";
		stackbackedges = true;
		thinbackedges = false;
	}

	public static function filters()
	{
		return [{
				field : "label",
				validator : function(v) return Types.isAnonymous(v),
				filter : function(v) return [{
					field : "label",
					value : new InfoLabelSankey().feed(v)
				}]
			}, {
				field : "layerwidth",
				validator : function(v) return Std.is(v, Float),
				filter : function(v) return [{
					field : "layerWidth",
					value : v
				}]
			}, {
				field : "nodespacing",
				validator : function(v) return Std.is(v, Float),
				filter : function(v) return [{
					field : "nodeSpacing",
					value : v
				}]
			}, {
				field : "dummyspacing",
				validator : function(v) return Std.is(v, Float),
				filter : function(v) return [{
					field : "dummySpacing",
					value : v
				}]
			}, {
				field : "extrawidth",
				validator : function(v) return Std.is(v, Float),
				filter : function(v) return [{
					field : "extraWidth",
					value : v
				}]
			}, {
				field : "backedgespacing",
				validator : function(v) return Std.is(v, Float),
				filter : function(v) return [{
					field : "backEdgeSpacing",
					value : v
				}]
			}, {
				field : "extraheight",
				validator : function(v) return Std.is(v, Float),
				filter : function(v) return [{
					field : "extraHeight",
					value : v
				}]
			}, {
				field : "extraradius",
				validator : function(v) return Std.is(v, Float),
				filter : function(v) return [{
					field : "extraRadius",
					value : v
				}]
			}, {
				field : "imagewidth",
				validator : function(v) return Std.is(v, Float),
				filter : function(v) return [{
					field : "imageWidth",
					value : v
				}]
			}, {
				field : "imageheight",
				validator : function(v) return Std.is(v, Float),
				filter : function(v) return [{
					field : "imageHeight",
					value : v
				}]
			}, {
				field : "imagespacing",
				validator : function(v) return Std.is(v, Float),
				filter : function(v) return [{
					field : "imageSpacing",
					value : v
				}]
			}, {
				field : "labelnodespacing",
				validator : function(v) return Std.is(v, Float),
				filter : function(v) return [{
					field : "labelNodeSpacing",
					value : v
				}]
			}, {
				field : "imagepath",
				validator : function(v) return Reflect.isFunction(v),
				filter : function(v) return [{
					field : "imagePath",
					value : v
				}]
			}, {
				field : "click",
				validator : function(v) return Reflect.isFunction(v),
				filter : function(v) return [{
					field : "click",
					value : v
				}]
			}, {
				field : "clickedge",
				validator : function(v) return Reflect.isFunction(v),
				filter : function(v) return [{
					field : "clickEdge",
					value : v
				}]
			}, {
				field : "layoutmap",
				validator : function(v) return Types.isAnonymous(v),
				filter : function(v) return [{
					field : "layoutmap",
					value : v
				}]
			}, {
				field : "layoutmethod",
				validator : function(v) return Std.is(v, String),
				filter : null
			}, {
				field : "nodeclass",
				validator : function(v) return Std.is(v, String) || Reflect.isFunction(v),
				filter : function(v) return [{
					field : "nodeclass",
					value : Std.is(v, String) ? function(_,_) return v : cast v
				}]
			}, {
				field : "edgeclass",
				validator : function(v) return Std.is(v, String) || Reflect.isFunction(v),
				filter : function(v) return [{
					field : "edgeclass",
					value : Std.is(v, String) ? function(_,_) return v : cast v
				}]
			}, {
				field : "displayentry",
				validator : function(v) return Std.is(v, Bool) || Reflect.isFunction(v),
				filter : function(v) return [{
					field : "displayentry",
					value : Std.is(v, Bool) ? function(_,_) return v : cast v
				}]
			}, {
				field : "displayexit",
				validator : function(v) return Std.is(v, Bool) || Reflect.isFunction(v),
				filter : function(v) return [{
					field : "displayexit",
					value : Std.is(v, Bool) ? function(_,_) return v : cast v
				}]
			}, {
				field : "stackbackedges",
				validator : function(v) return Std.is(v, Bool),
				filter : null
			}, {
				field : "thinbackedges",
				validator : function(v) return Std.is(v, Bool),
				filter : null
			}];
	}
}