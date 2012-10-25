/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.layout.ScalePattern;
import rg.visualization.Visualizations;
import thx.util.Message;
using rg.info.filter.FilterDescription;
using rg.info.filter.TransformResult;
using rg.info.Info;

@:keep class InfoLayout
{
	public var layout : Null<String>;
	public var width  : Null<Int>;
	public var height : Null<Int>;
	public var type : Null<String>;
	public var main : String;
	public var titleOnTop : Bool;
	public var scalePattern : ScalePattern;
	public var padding : InfoPadding;

	public function new()
	{
		main = "main";
		titleOnTop = true;
		scalePattern = ScalesAlternating;
		padding = new InfoPadding();
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"layout".custom(function(value : Dynamic) {
				var v = null == value ? null : (""+value).toLowerCase();
				if(!Arrays.exists(Visualizations.layouts, v))
					return TransformResult.Failure(new Message("value '{0}' is not a valid visualization layout", [value]));
				else
					return TransformResult.Success(v);
			}),
			"width".toFloat(),
			"height".toFloat(),
			"visualization".custom(["type"], function(value : Dynamic) {
				var v = null == value ? null : (""+value).toLowerCase();
				if(!Arrays.exists(Visualizations.svg, v))
					return TransformResult.Failure(new Message("value '{0}' is not a valid visualization type", [value]));
				else
					return TransformResult.Success(v);
			}),
			"main".toStr(),
			"titleontop".toBool(["titleOnTop"]),
			"yscaleposition".custom(['scalePattern'], function(value : Dynamic) {
				if(!Std.is(value, String))
					return TransformResult.Failure(new Message("value '{0}' must be a string", [value]));
				return TransformResult.Success(switch(value) {
					case "alt", "alternate", "alternating": ScalePattern.ScalesAlternating;
					case "right": ScalePattern.ScalesAfter;
					default: ScalePattern.ScalesBefore;
				});
			}),
			"padding".toInfo(InfoPadding)
		];
	}
}