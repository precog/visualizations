/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.axis.Stats;
using rg.info.filter.FilterDescription;
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
	public var imagePath : Dynamic -> String;
	public var layoutmap : { layers : Array<Array<String>>, dummies : Array<Array<String>> };
	public var click : Dynamic -> Stats<Dynamic> -> Void;
	public var clickEdge : { head : Dynamic, tail : Dynamic, edgeweight : Float, nodeweight : Float } -> Stats<Dynamic> -> Void;
	public var layoutmethod : String;

	public var nodeclass : Null<Dynamic -> Stats<Dynamic> -> String>;
	public var edgeclass : Null<Dynamic -> Stats<Dynamic> -> String>;
	public var displayentry : Null<Dynamic -> Stats<Dynamic> -> Bool>;
	public var displayexit : Null<Dynamic -> Stats<Dynamic> -> Bool>;

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

	public static function filters() : Array<FilterDescription>
	{
		return [
			"label".toInfo(InfoLabelSankey),
			"layerwidth".toFloat(["layerWidth"]),
			"nodespacing".toFloat(["nodeSpacing"]),
			"dummyspacing".toFloat(["dummySpacing"]),
			"extrawidth".toFloat(["extraWidth"]),
			"backedgespacing".toFloat(["backEdgeSpacing"]),
			"extraheight".toFloat(["extraHeight"]),
			"extraradius".toFloat(["extraRadius"]),
			"imagewidth".toFloat(["imageWidth"]),
			"imageheight".toFloat(["imageHeight"]),
			"imagespacing".toFloat(["imageSpacing"]),
			"labelnodespacing".toFloat(["labelNodeSpacing"]),
			"imagepath".toExpressionFunction([null], ["imagePath"]),
			"click".toFunction(["click"]),
			"clickedge".toFunction(["clickEdge"]),
			"layoutmap".toObject(),
			"layoutmethod".toStr(),
			"nodeclass".toExpressionFunctionOrString([null, "stats"]),
			"edgeclass".toExpressionFunctionOrString([null, "stats"]),
			"displayentry".toExpressionFunctionOrBool([null, "stats"]),
			"displayexit".toExpressionFunctionOrBool([null, "stats"]),
			"stackbackedges".toBool(),
			"thinbackedges".toBool()
		];
	}
}