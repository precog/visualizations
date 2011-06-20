package rg.svg;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.layout.Orientation;
import thx.math.scale.Linear;
import thx.math.scale.LinearTime;

class SvgScaleRule extends SvgLayer
{
	public static function ofLinearTime(panel : SvgPanel, orientation : Orientation, scale : LinearTime)
	{
		return new SvgScaleRule(panel, orientation)
			.scale(scale.scale)
			.range(scale.range)
			.ticks(scale.timeTicks)
			.key(function(d, i) return "" + d)
		;
	}
	
	public static function ofLinear(panel : SvgPanel, orientation : Orientation, scale : Linear)
	{
		return new SvgScaleRule(panel, orientation)
			.scale(scale.scale)
			.range(scale.range)
			.ticks(scale.ticks)
			.key(function(d, i) return "" + d)
		;
	}
	
	public static function boundsOfLinear(panel : SvgPanel, orientation : Orientation, scale : Linear)
	{
		return ofLinear(panel, orientation, scale)
			.ticks(function() {
			return scale.getDomain();
		});
	}
	
	var _orientation : Orientation;
	
	var _pos : Void -> Float;
	var _t : Float -> Int -> String;
	var _maxRange : Void -> Int;
	var _axis : String;
	var _oaxis : String;
	
	var _ticks : Void -> Array<Float>;
	var _range : Array<Float> -> Dynamic;
	var _scale : Float -> Int -> Float;
	var _key : Float -> Int -> String;
	var _length : Void -> Float;
	
	public function new(panel : SvgPanel, orientation : Orientation)
	{
		super(panel);
		this.orientation(orientation);
		svg.attr("class").string("scale-rules");
	}
	
	function translateX(d : Float, i : Int) return "translate(" + _scale(d, i) + ",0)"
	function translateY(d : Float, i : Int) return "translate(0," + _scale(d, i) + ")"
	
	override public function redraw()
	{
		if (null == _maxRange)
			return;
		_range([0.0, _maxRange()]);
		
		var g = svg.selectAll("g." + _axis)
			.data(_ticks(), _key);

		// REGEN
		g.update()
			.attr("transform").stringf(_t)
				.selectAll("line.rule")
					.attr(_oaxis + "1").float(0)
					.attr(_oaxis + "2").float(_length());
			
		// ENTER
		g.enter()
			.append("svg:g")
				.attr("class").string(_axis)
				.attr("transform").stringf(_t)
			.append("svg:line")
				.attr("class").string("rule")
				.attr(_oaxis + "1").float(0)
				.attr(_oaxis + "2").float(_length());

		// EXIT
		g.exit().remove();
	}
	
	public function getRange() return _range
	public function range(f : Array<Float> -> Dynamic)
	{
		_range = f;
		return this;
	}
	
	public function getScale() return _scale
	public function scale(f : Float -> Int -> Float)
	{
		_scale = f;
		return this;
	}
	
	public function getTicks() return _ticks
	public function ticks(f : Void -> Array<Float>)
	{
		_ticks = f;
		return this;
	}
	
	public function getKey() return _key
	public function key(f : Float -> Int -> String)
	{
		_key = f;
		return this;
	}
	
	public function getOrientation() return _orientation
	public function orientation(o : Orientation)
	{
		if (Type.enumEq(o, _orientation))
			return this;
		var me = this;
		
		switch(_orientation = o)
		{
			case Vertical:
				_axis = "x";
				_oaxis = "y";
				_t = translateX;
				_maxRange = function() return me.width;
				_length = function() return me.height;
			case Horizontal:
				_axis = "y";
				_oaxis = "x";
				_t = translateY;
				_maxRange = function() return me.height;
				_length = function() return me.width;
		}
		return this;
	}
}