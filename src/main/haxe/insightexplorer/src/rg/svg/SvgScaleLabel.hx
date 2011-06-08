package rg.svg;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.math.scale.Linear;

class SvgScaleLabel extends SvgLayer
{
	public static function ofLinear(panel : SvgPanel, anchor : Anchor, scale : Linear)
	{
		return new SvgScaleLabel(panel, anchor)
			.scale(scale.scale)
			.range(scale.range)
			.ticks(scale.ticks)
			.key(scale.tickFormat)
			.label(scale.tickFormat)
			;
	}
	
	public static var defaultTextHeight : Float = 12;
	public static var defaultTextPadding : Float = 2;
	
	var _anchor : Anchor;
	
	var _padding : Float;
	var _height : Float;
	var _pos : Void -> Float;
	var _t : Float -> Int -> String;
	var _maxRange : Void -> Int;
	var _axis : String;
	var _oaxis : String;
	
	var _ticks : Void -> Array<Float>;
	var _range : Array<Float> -> Dynamic;
	var _scale : Float -> Int -> Float;
	var _key : Float -> Int -> String;
	var _label : Float -> Int -> String;
	var _textAnchor : String;
	var _textBaseline : String;
	
	public function new(panel : SvgPanel, anchor : Anchor)
	{
		super(panel);
		_height = defaultTextHeight;
		_padding = defaultTextPadding;
		this.anchor(anchor);
		svg.attr("class").string("scale-ticks");
	}
	
	function translateX(d : Float, i : Int) return "translate(" + _scale(d, i) + ",0) rotate(-90)"
	function translateY(d : Float, i : Int) return "translate(0," + _scale(d, i) + ")"
	
	override public function redraw()
	{
		_range([0.0, _maxRange()]);
		
		var g = svg.selectAll("g." + _axis)
			.data(_ticks(), _key)
			.update()
			.attr("transform").stringf(_t);

		// REGEN
		g.selectAll("text.label")
			.attr(_oaxis).float(_pos())
			.attr("text-anchor").string(_textAnchor)
			.attr("dominant-baseline").string(_textBaseline)
			.text().stringf(_label)
		;
			
		// ENTER
		g.enter()
			.append("svg:g")
				.attr("class").string(_axis)
				.attr("transform").stringf(_t)
			.append("svg:text")
				.attr("class").string("label")
				.attr(_oaxis).float(_pos())
				.attr("text-anchor").string(_textAnchor)
				.attr("dominant-baseline").string(_textBaseline)
				.text().stringf(_label);

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
	
	public function getLabel() return _label
	public function label(f : Float -> Int -> String)
	{
		_label = f;
		return this;
	}
	
	public function getAnchor() return _anchor
	public function anchor(o : Anchor)
	{
		if (Type.enumEq(o, _anchor))
			return this;
		var panel = this.panel;
		
		switch(_anchor = o)
		{
			case Top, Bottom:
				_axis = "x";
				_oaxis = "x";
				_t = translateX;
				_maxRange = function() return panel.frame.width;
			case Left, Right:
				_axis = "y";
				_oaxis = "x";
				_t = translateY;
				_maxRange = function() return panel.frame.height;
		}
		switch(_anchor)
		{
			case Top:
				_textAnchor = "end";
				_textBaseline = "middle";
			case Bottom:
				_textAnchor = "start";
				_textBaseline = "middle";
			case Left:
				_textAnchor = "start";
				_textBaseline = "middle";
			case Right:
				_textAnchor = "end";
				_textBaseline = "middle";
		}
		adjustPositionFunction();
		return this;
	}
	
	public function getHeight() return _height
	public function height(v : Float)
	{
		_height = v;
		adjustPositionFunction();
		return this;
	}
	
	public function getPadding() return _padding
	public function padding(v : Float)
	{
		_padding = v;
		adjustPositionFunction();
		return this;
	}
	
	function adjustPositionFunction()
	{
		var me = this;
		switch(_anchor)
		{
			case Top:
				_pos = function() return - me._padding;
			case Left:
				_pos = function() return me._padding;
			case Bottom:
				_pos = function() return me.panel.frame.height - me._padding;
			case Right:
				_pos = function() return me.panel.frame.width - me._padding;
		}
	}
}