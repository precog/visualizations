/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.DataPoint;
import rg.view.svg.widget.LabelOrientation;
import thx.error.Error;
using rg.controller.info.Info;
using Arrays;

class InfoPieChart 
{
	public var labelradius : Float;
	public var labeldisplay : Bool;
	public var labelorientation : LabelOrientation;
	
	public var innerradius : Float;
	public var outerradius : Float;
	public var overradius : Float;
	public var animation : InfoAnimation;
	public var label : InfoLabel;
	public var gradientlightness : Float;
	public var sortDataPoint : DataPoint -> DataPoint -> Int;
	public var dontfliplabel : Bool;
	
	public var click : DataPoint -> Void;
	
	public function new()
	{
		innerradius = 0.0;
		labelradius = 0.45;
		labeldisplay = true;
		labelorientation = LabelOrientation.Aligned;
		outerradius = 0.9;
		overradius = 0.95;
		animation = new InfoAnimation();
		label = new InfoLabel();
		gradientlightness = 1.5;
		dontfliplabel = true;
	}
	
	static function validateOrientation(s : String)
	{
		var name = s.split("-")[0].toLowerCase();
		return ["fixed", "ortho", "orthogonal", "align", "aligned", "horizontal"].exists(name);
	}
	
	static function filterOrientation(s : String)
	{
		var name = s.split("-")[0].toLowerCase();
		switch(name)
		{
			case "fixed":
				var v = Std.parseFloat(s.split("-")[1]);
				if (null == v || !Math.isFinite(v))
					throw new Error("when 'fixed' is used a number should follow the 'dash' character");
				return LabelOrientation.FixedAngle(v);
			case "ortho", "orthogonal":
				return LabelOrientation.Orthogonal;
			case "align", "aligned":
				return LabelOrientation.Aligned;
			case "horizontal":
				return LabelOrientation.FixedAngle(0);
			default:
				throw new Error("invalid filter orientation '{0}'", s);
		}
	}
	
	public static function filters()
	{
		return [{
			field : "gradientlightness",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "labelradius",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "dontfliplabel",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}, {
			field : "displaylabels",
			validator : function(v) return Std.is(v, Bool),
			filter : function(v) return [{
				field : "labeldisplay",
				value : v
			}]
		}, {
			field : "labelorientation",
			validator : function(v) return Std.is(v, String) && validateOrientation(v),
			filter : function(v) return [{
				field : "labelorientation",
				value : filterOrientation(v)
			}]
		}, {
			field : "innerradius",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "outerradius",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "overradius",
			validator : function(v) return Std.is(v, Float),
			filter : null
		}, {
			field : "animation",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "animation",
				value : new InfoAnimation().feed(v)
			}]
		}, {
			field : "label",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "label",
				value : new InfoLabel().feed(v)
			}]
		}, {
			field : "sort",
			validator : function(v) return Reflect.isFunction(v),
			filter : function(v) return [ {
				field : "sortDataPoint",
				value : v
			}]
		}, {
			field : "click",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}];
	}
}