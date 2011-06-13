/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.effects;
import rg.svg.ISvgEffect;
import thx.color.Rgb;
import thx.color.NamedColors;
import thx.js.Selection;

class DropShadow implements ISvgEffect
{
	static inline var AR = 3.0 / 4;
//	public var color(default, null) : Rgb;
	public var opacity(default, null) : Float;
	public var dx(default, null) : Float;
	public var dy(default, null) : Float;
	public var blur(default, null) : Float;
	public function new(/*?color : Rgb, */opacity = 0.4, dx = 1.5, ?dy : Float, blur = 1.0 ) 
	{
//		this.color = null == color ? NamedColors.pink : color;
		this.opacity = opacity;
		this.dx = dx;
		this.dy = null == dy ? AR * dx : dy;
		this.blur = blur;
	}
	
	public function appendTo(container : Selection, id : String)
	{
		var filter = container
			.append("svg:filter")
			/*
			.attr("x").string("-20%")
			.attr("y").string("-20%")
			.attr("width").string("140%")
			.attr("height").string("140%")
			*/
			.attr("id").string(id)
		;

		filter.append("svg:feGaussianBlur")
			.attr("in").string("SourceAlpha")
			.attr("stdDeviation").float(blur)
			.attr("result").string("dsblur")
		;
		
		filter.append("svg:feColorMatrix")
			.attr("in").string("dsblur")
			.attr("type").string("matrix")
			.attr("values").string(
"1 0 0 0 0 " +
"0 1 0 0 0 " +
"0 0 1 0 0 " +
"0 0 0 " + opacity + " 0")
			.attr("result").string("dscolor")
		;
		
		filter.append("svg:feOffset")
			.attr("in").string("dscolor")
			.attr("dx").float(dx)
			.attr("dy").float(dy)
			.attr("result").string("dsoffset")
		;
		
		var merge = filter.append("svg:feMerge");
		merge.append("svg:feMergeNode")
			.attr("in").string("dsoffset");
		merge.append("svg:feMergeNode")
			.attr("in").string("SourceGraphic");
/*
		filter.append("svg:feBlend")
			.attr("in").string("SourceGraphic")
			.attr("in2").string("dsshadow")
			.attr("mode").string("normal")
		;
*/
	}
}