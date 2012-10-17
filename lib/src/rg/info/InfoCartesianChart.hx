/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.axis.Stats;
import thx.util.Message;

using rg.info.filter.FilterDescription;
using rg.info.filter.TransformResult;

using rg.info.Info;

@:keep class InfoCartesianChart
{
	public var animation : InfoAnimation;
	public var click : Dynamic -> Stats<Dynamic> -> Void;
	public var label : InfoLabelAxis;

	public var displayMinorTick : String -> Bool;
	public var displayMajorTick : String -> Bool;
	public var displayLabelTick : String -> Bool;
	public var displayAnchorLineTick : String -> Bool;

	public var displayMinorRule : String -> Bool;
	public var displayMajorRule : String -> Bool;
	public var displayAnchorLineRule : String -> Bool;

	public var labelOrientation : String -> Null<String>;
	public var labelAnchor : String -> Null<String>;
	public var labelAngle : String -> Null<Float>;

	public var lengthTickMinor : Float;
	public var lengthTickMajor : Float;
	public var paddingTickMinor : Float;
	public var paddingTickMajor : Float;
	public var paddingLabel : Float;

	public function new()
	{
		animation = new InfoAnimation();
		label = new InfoLabelAxis();
		displayMinorTick = function(_) return true;
		displayMajorTick = function(_) return true;
		displayLabelTick = function(_) return true;
		displayAnchorLineTick = function(_) return false;

		displayMinorRule = function(_) return false;
		displayMajorRule = function(_) return false;
		displayAnchorLineRule = function(_) return false;

		labelOrientation = function(_) return null;
		labelAnchor = function(_) return null;
		labelAngle = function(_) return null;

		lengthTickMinor = 2;
		lengthTickMajor = 5;
		paddingTickMinor = 1;
		paddingTickMajor = 1;
		paddingLabel = 10;
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"animation".toInfo(InfoAnimation),
			"click".toFunction(),
			"label".toInfo(InfoLabelAxis),
			"displaytickmarks".toFunctionOrBool(["displayMinorTick", "displayMajorTick", "displayLabelTick"]),
			"displaytickminor".toFunctionOrBool(["displayMinorTick"]),
			"displaytickmajor".toFunctionOrBool(["displayMajorTick"]),
			"displayticklabel".toFunctionOrBool(["displayLabelTick"]),
			"displayanchorlinetick".toFunctionOrBool(["displayAnchorLineTick"]),
			"displayrules".toFunctionOrBool(["displayMinorRule", "displayMajorRule"]),
			"displayruleminor".toFunctionOrBool(["displayMinorRule"]),
			"displayrulemajor".toFunctionOrBool(["displayMajorRule"]),
			"displayanchorlinerule".toFunctionOrBool(["displayAnchorLineRule"]),
			"lengthtick".toFloat(["lengthTickMajor", "lengthTickMinor"]),
			"lengthtickminor".toFloat(["lengthTickMinor"]),
			"lengthtickmajor".toFloat(["lengthTickMajor"]),
			"paddingtick".toFloat(["paddingTickMajor", "paddingTickMinor"]),
			"paddingtickminor".toFloat(["paddingTickMinor"]),
			"paddingtickmajor".toFloat(["paddingTickMajor"]),
			"paddingticklabel".toFloat(["paddingLabel"]),
			"labelorientation".toFunctionOrString(["labelOrientation"]),
			"labelanchor".toFunctionOrString(["labelAnchor"]),
			"labelangle".toFunctionOrFloat(["labelAngle"]),
		];
	}
}