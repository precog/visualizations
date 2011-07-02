package rg.svg;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.math.scale.NumericScale;
import thx.math.scale.Linear;
import thx.math.scale.Ordinal;

class SvgScaleLabel<TData> extends SvgLayer
{
	public static function ofLinear(panel : SvgPanel, anchor : Anchor, scale : NumericScale<Dynamic>)
	{
		return new SvgScaleLabel<Float>(panel, anchor)
			.scale(scale.scale)
			.range(scale.range)
			.ticks(scale.ticks)
			.key(function(d,i) return "" + d)
			.label(scale.tickFormat)
			;
	}
	
	public static function ofOrdinal<TData>(panel : SvgPanel, anchor : Anchor, scale : Ordinal<TData, Dynamic>)
	{
		var _scale = function(d : TData, i : Int)
		{
			var s = scale.rangePoints(0, panel.frame.width, 1);
			return s.scale(d);
		};
		return new SvgScaleLabel<TData>(panel, anchor)
			.scale(_scale)
			.range(scale.range)
			.ticks(scale.getDomain)
			.key(function(d,i) return "" + d)
			.label(function(d,i) return "" + d)
		;
	}
	
	public static function boundsOfLinear<Float>(panel : SvgPanel, anchor : Anchor, scale : Linear)
	{
		return ofLinear(panel, anchor, scale)
			.ticks(function() {
			return scale.getDomain();
		});
	}
	
	public static var defaultTexttextHeight : Float = 12;
	
	var _anchor : Anchor;
	
	var _textTextHeight : Float;
	var _pos : Void -> Float;
	var _t : TData -> Int -> String;
	var _maxRange : Void -> Int;
	var _class : String;
	var _oaxis : String;
	
	var _ticks : Void -> Array<TData>;
	var _range : Array<Float> -> Dynamic;
	var _scale : TData -> Int -> Float;
	var _key : TData -> Int -> String;
	var _label : TData -> Int -> String;
	var _textAnchor : String;
	var _textBaseline : String;
	var _alwaysHorizontal : Bool;
	
	function new(panel : SvgPanel, anchor : Anchor)
	{
		_alwaysHorizontal = true;
		super(panel);
		_textTextHeight = defaultTexttextHeight;
		this.anchor(anchor);
		svg.attr("class").string("scale-ticks");
	}
	
	function translateX(d : TData, i : Int) return "translate(" + _scale(d, i) + ",0) rotate(-90)"
	function translateXH(d : TData, i : Int) return "translate(" + _scale(d, i) + ",0)"
	function translateY(d : TData, i : Int) return "translate(0," + _scale(d, i) + ")"
	
	override public function redraw()
	{
		if (null == _maxRange)
			return;

		_range([0.0, _maxRange()]);
		
		var g = svg.selectAll("g")
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
				.attr("class").string(_class)
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
	public function scale(f : TData -> Int -> Float)
	{
		_scale = f;
		return this;
	}
	
	public function getTicks() return _ticks
	public function ticks(f : Void -> Array<TData>)
	{
		_ticks = f;
		return this;
	}
	
	public function getKey() return _key
	public function key(f : TData -> Int -> String)
	{
		_key = f;
		return this;
	}
	
	public function getLabel() return _label
	public function label(f : TData -> Int -> String)
	{
		_label = f;
		return this;
	}
	
	public function getAnchor() return _anchor
	public function anchor(o : Anchor)
	{
		if (Type.enumEq(o, _anchor))
			return this;
		var me = this;
		
		switch(_anchor = o)
		{
			case Top, Bottom:
				_class = "xaxis";
				_oaxis = "x";
				if(_alwaysHorizontal)
					_t = translateXH;
				else
					_t = translateX;
				_maxRange = function() return me.width;
			case Left, Right:
				_class = "xaxis";
				_oaxis = "x";
				_t = translateY;
				_maxRange = function() return me.height;
		}
		switch(_anchor)
		{
			case Top:
				if (_alwaysHorizontal)
				{
					_textAnchor = "middle";
					_textBaseline = "hanging";
				} else {
					_textAnchor = "end";
					_textBaseline = "middle";
				}
			case Bottom:
				if (_alwaysHorizontal)
				{
					_textAnchor = "middle";
					_textBaseline = "baseline";
				} else {
					_textAnchor = "start";
					_textBaseline = "middle";
				}
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
	
	public function getAlwaysHorizontal() return _alwaysHorizontal
	public function alwaysHorizontal(v : Bool)
	{
		_alwaysHorizontal = v;
		adjustPositionFunction();
		return this;
	}
	
	public function getTextHeight() return _textTextHeight
	public function textHeight(v : Float)
	{
		_textTextHeight = v;
		adjustPositionFunction();
		return this;
	}
	
	function adjustPositionFunction()
	{
		var me = this;
		switch(_anchor)
		{
			case Top:
				_pos = function() return 0;
			case Left:
				_pos = function() return 0;
			case Bottom:
				_pos = function() return me.height;
			case Right:
				_pos = function() return me.width;
		}
	}
}