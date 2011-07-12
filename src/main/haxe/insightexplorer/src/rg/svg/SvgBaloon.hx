/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg;
import js.Dom;
import thx.js.Selection;
import thx.js.Timer;
import thx.math.Equations;
import thx.math.Ease;
import thx.math.EaseMode;
import thx.svg.Diagonal;
import thx.svg.Symbol;

class SvgBaloon
{
	public var text(default, setText) : Array<String>;
	public var x(default, null) : Float;
	public var y(default, null) : Float;
	public var boxWidth(default, null) : Float;
	public var boxHeight(default, null) : Float;
	public var visible(default, null) : Bool;
	public var textHeight(default, setTextHeight) : Float;
	public var roundedCorner(default, setRoundedCorner) : Float;
	public var padding(default, setPadding) : Float;
	public var preferredSide(default, setPreferredSide) : Int;
	public var minwidth : Float;
	var container : Selection;
	var baloon : Selection;
	var frame : Selection;
	var connector : Selection;
	var _duration : Int;
	var _ease : Float -> Float;
	var _strokeWidth : Float;
	var _connectorShapeV : Diagonal<{ x0 : Float, y0 : Float, x1 : Float, y1 : Float }>;
	var _connectorShapeH : Diagonal<{ x0 : Float, y0 : Float, x1 : Float, y1 : Float }>;
	public var boundingBox(getBoundingBox, setBoundingBox) : { x : Float, y : Float, width : Float, height : Float }; 
	public function new(container : Selection) 
	{
		this.container = container;
		visible = true;
		_duration = 500;
		minwidth = 30;
		preferredSide = 2;
		_ease = Ease.mode(EaseMode.EaseInEaseOut, Equations.cubic);
		_strokeWidth = 1;
		roundedCorner = 6;
		padding = 5;
		_transition_id = 0;

		this.baloon = container
			.append("svg:g")
			.attr("class").string("baloon")
			.attr("transform").string("translate(" + (this.x = 0) + ", " + (this.y = 0) + ")");
		frame = baloon.append("svg:g")
			.attr("transform").string("translate(0, 0)")
			.attr("class").string("frame");
		frame.append("svg:path")
			.attr("class").string("shadow")
			.attr("transform").string("translate(1, 1)")
			.style("opacity").float(0.25)
			.style("fill").string("none")
			.style("stroke").string("#000")
			.style("stroke-width").float(_strokeWidth+2)
		;
		
		_connectorShapeV = Diagonal.forObject();
		_connectorShapeH = Diagonal.forObject().projection(function(d,i) return [d[1], d[0]]);
		connector = baloon.append("svg:path")
			.attr("class").string("baloon-connector")
			.style("fill").string("none")
			.style("display").string("none")
			.attr("transform").string("translate(0, 0)")
		;
		frame.append("svg:path")
			.attr("class").string("bg")
			.style("fill").string("#ff9")
			.style("stroke").string("#fa0")
			.style("fill-opacity").float(0.9)
			.style("stroke-width").float(_strokeWidth)
		;
		
		var r = Math.min(10, Math.max(3, roundedCorner));		
		textHeight = 11;
	}
	
	function setPreferredSide(v : Int)
	{
		preferredSide = Ints.clamp(v, 0, 3);
		redraw();
		return v;
	}
	
	function setText(v : Array<String>)
	{
		text = v;
		redraw();
		return v;
	}
	
	function setTextHeight(v : Float)
	{
		textHeight = v;
		redraw();
		return v;
	}
	
	function setPadding(v : Float)
	{
		padding = v;
		redraw();
		return v;
	}
	
	function setRoundedCorner(v : Float)
	{
		roundedCorner = v;
		redraw();
		return v;
	}
	
	// TODO when null is passed remove the onresize event listener
	function setBoundingBox(v : { x : Float, y : Float, width : Float, height : Float })
	{
		boundingBox = v;
		redraw();
		return v;
	}
	
	// TODO add onresize event on container to rescale bounds dinamically
	function getBoundingBox()
	{
		if (null == boundingBox)
			boundingBox = untyped container.node().getBBox();
		return boundingBox;
	}
	
	var _transition_id : Int;
	public function moveTo(x : Float, y : Float, animate = true)
	{
		if (animate)
		{
			var int = Equations.elasticf(),
				tid = ++_transition_id,
				ix = Floats.interpolatef(this.x, x, _ease),
				iy = Floats.interpolatef(this.y, y, _ease),
				duration = _duration,
				mt = _moveTo,
				me = this;

			Timer.timer(function(t) {
				if (tid != me._transition_id)
					return true;
				if (t > duration)
				{
					mt(x, y);
					return true;
				}
				mt(ix(t / duration), iy(t / duration) );
				return false;
			}, 0);
		} else {
			_moveTo(x, y);
		}
	}
	
	public function _moveTo(x : Float, y : Float)
	{	
		var bb = getBoundingBox(),
			left = bb.x,
			right = bb.x + bb.width,
			top = bb.y,
			bottom = bb.y + bb.height,
			limit = roundedCorner * 2,
			offset = 0.0,
			diagonal = 0; // 0: don't show, 1: vertical, 2: horizontal
		
		var	tx = 0.0, ty = 0.0, side = preferredSide, found = 1;

		while (found > 0 && found < 5)
		{
			if (x >= right - limit)
			{
				if (y <= top + limit)
				{	
					if (x - right < top - y)
					{
						tx = - boxWidth + right - x;
						ty = top - y + roundedCorner;
						side = 0;
						offset = boxWidth - 4 * roundedCorner;
					} else {
						tx = - boxWidth + right - x - roundedCorner;
						ty = top - y;
						side = 1;
						offset = roundedCorner;
					}
					found = 0;
					diagonal = 1;
					break;
				} else if (y >= bottom - limit)
				{
					if (x - right < y - bottom)
					{
						tx = - boxWidth + right - x;
						ty = bottom - y - boxHeight - roundedCorner;
						side = 2;
						offset = boxWidth - 4 * roundedCorner;
					} else {
						tx = - boxWidth + right - x - roundedCorner;
						ty = bottom - y - boxHeight;
						side = 1;
						offset = boxHeight - 3 * roundedCorner;
					}
					found = 0;
					diagonal = 1;
					break;
				}
			} else if (x <= left + limit)
			{
				if (y <= top + limit)
				{
					if (left - x < top - y)
					{
						tx = left - x;
						ty = top - y + roundedCorner;
						side = 0;
						offset = 0;
					} else {
						tx = left - x + roundedCorner;
						ty = top - y;
						side = 3;
						offset = roundedCorner;
					}
					found = 0;
					diagonal = 1;
					break;
				} else if (y >= bottom - limit)
				{
					if (left - x < y - bottom)
					{
						tx = left - x;
						ty = bottom - y - boxHeight - roundedCorner;
						side = 2;
						offset = 0;
					} else {
						tx = left - x + roundedCorner;
						ty = bottom - y - boxHeight;
						side = 3;
						offset = boxHeight - 3 * roundedCorner;
					}
					found = 0;
					diagonal = 1;
					break;
				}
			}
			switch(side)
			{
				case 0:
					if (y + boxHeight + roundedCorner >= bottom)
					{
						side = 2;
						found++;
						continue;
					} else if (x <= left + limit)
					{
						side = 3;
						found++;
						continue;
					} else if (x >= right - limit)
					{
						side = 1;
						found++;
						continue;
					}
					tx = - boxWidth / 2;
					ty = roundedCorner;
					offset = boxWidth / 2 - roundedCorner * 2;
					if (x - boxWidth / 2 <= left)
					{
						var d = left - x + boxWidth / 2;
						offset = Math.max(0, offset - d);
						tx += d;
					} else if (x + boxWidth / 2 >= right)
					{
						var d = right - x - boxWidth / 2;
						offset = Math.min(boxWidth - roundedCorner * 3, offset - d);
						tx += d;
					}
					if (y < top)
					{
						diagonal = 1;
						ty = top - y + roundedCorner;
					}
				case 1:
					if (x - boxWidth - roundedCorner <= left)
					{
						side = 3;
						found++;
						continue;
					} else if (y <= top + limit)
					{
						side = 2;
						found++;
						continue;
					} else if (y >= bottom - limit)
					{
						side = 0;
						found++;
						continue;
					}
					tx = - boxWidth - roundedCorner;
					ty = - boxHeight / 2;
					offset = (boxHeight - roundedCorner * 2) / 2;
					if (y - boxHeight / 2 <= top)
					{
						var d = top - y + boxHeight / 2;
						offset = Math.max(0, offset - d);
						ty += d;
					} else if (y + boxHeight / 2 >= bottom)
					{
						var d = bottom - y - boxHeight / 2;
						offset = Math.min(boxHeight - roundedCorner * 3, offset - d);
						ty += d;
					}
					if (x > right)
					{
						diagonal = 2;
						tx = right - x - boxWidth - roundedCorner;
					}
				case 2:
					if (y - boxHeight - roundedCorner <= top)
					{
						side = 0;
						found++;
						continue;
					} else if (x <= left + limit)
					{
						side = 3;
						found++;
						continue;
					} else if (x >= right - limit)
					{
						side = 1;
						found++;
						continue;
					}
					tx = - boxWidth / 2;
					ty = - boxHeight - roundedCorner;
					offset = boxWidth / 2 - roundedCorner * 2;
					if (x - boxWidth / 2 <= left)
					{
						var d = left - x + boxWidth / 2;
						offset = Math.max(roundedCorner, offset - d);
						tx += d;
					} else if (x + boxWidth / 2 >= right)
					{
						var d = right - x - boxWidth / 2;
						offset = Math.min(boxWidth - roundedCorner * 3, offset - d);
						tx += d;
					}
					if (y > bottom)
					{
						diagonal = 1;
						ty = bottom - y - boxHeight - roundedCorner;
					}
				case 3:
					if (x + boxWidth + roundedCorner >= right)
					{
						side = 1;
						found++;
						continue;
					} else if (y <= top + limit)
					{
						side = 2;
						found++;
						continue;
					} else if (y >= bottom - limit)
					{
						side = 0;
						found++;
						continue;
					}
					tx = roundedCorner;
					ty = - boxHeight / 2;
					offset = (boxHeight - roundedCorner * 2) / 2;
					if (y - boxHeight / 2 <= top)
					{
						var d = top - y + boxHeight / 2;
						offset = Math.max(roundedCorner, offset - d);
						ty += d;
					} else if (y + boxHeight / 2 >= bottom)
					{
						var d = bottom - y - boxHeight / 2;
						offset = Math.min(boxHeight - roundedCorner * 3, offset - d);
						ty += d;
					}
					if (x < left)
					{
						diagonal = 2;
						tx = left - x + roundedCorner;
					}
			}
			found = 0;
		}

		var o = null;
		if (0 == diagonal)
		{
			connector.style("display").string("none");
		} else {
			connector.style("display").string("block");
			o = {
				x0 : 0.0, y0 : 0.0, x1 : 0.0, y1 : 0.0
			};
			switch(side)
			{
				case 0:
					o.x1 = tx + 0.5 + offset + 2 * roundedCorner;
					o.y1 = ty + 0.5 - roundedCorner;
				case 1:
					o.y1 = tx + 0.5 + boxWidth + roundedCorner;
					o.x1 = ty + 0.5 + offset + roundedCorner;
				case 2:
					o.x1 = tx + 0.5 + offset + 2 * roundedCorner;
					o.y1 = ty + 0.5 + boxHeight + roundedCorner;
				case 3:
					o.y1 = tx + 0.5 + - roundedCorner;
					o.x1 = ty + 0.5 + offset + roundedCorner;
			}
		}
		
		baloon
			.attr("transform").string("translate(" + (this.x = x) + ", " + (this.y = y) + ")");
		frame.attr("transform").string("translate(" + tx + ", " + ty + ")")
			.selectAll("path").attr("d").string(SvgBaloonShape.shape(boxWidth, boxHeight, roundedCorner, roundedCorner, side, offset));
		
		if (0 != diagonal)
			connector.attr("d").string(side % 2 == 0 ? _connectorShapeV.diagonal(o) : _connectorShapeH.diagonal(o));
	}
	
	public function show()
	{
		if (!visible)
			return;
		visible = true;
		baloon.style("display").string("block");
	}
	
	public function hide()
	{
		if (visible)
			return;
		visible = false;
		baloon.style("display").string("none");
	}
	
	function redraw()
	{
		if (null == text || text.length == 0)
			return;

		function key(d : String, i : Int)
		{
			return d + ":" + i;
		}
		
		var choice = frame
			.selectAll("text")
			.data(text, key),
			th = textHeight,
			linewidth = minwidth,
			pad = padding;
		
		function calculateLineWidth(n : HtmlDom, i : Int)
		{
			var v : Float = untyped n.getBBox().width;
			if (v > linewidth)
				linewidth = v;
		}

		choice.enter()
			.append("svg:text")
			.style("font-size").string(th + "px")
			.style("font-weight").string("bold")
			.style("fill").string("#000")
			.text().stringf(function(d, i) return d)
			.eachNode(calculateLineWidth)
			.attr("x").float(pad)
			.attr("y").floatf(function(_, i) return Math.round((0.6+i) * 1.2 * th + pad))
			.attr("opacity").float(0)
			.transition()
				.duration(_duration).ease(_ease)
				.delay(_duration / 3)
				.attr("opacity").float(1)
		;

		choice.update()
			.text().stringf(function(d, i) return d)
			.eachNode(calculateLineWidth)
			.transition()
				.duration(_duration).ease(_ease)
				.attr("opacity").float(1)
				.attr("x").float(pad)
				.attr("y").floatf(function(_, i) return Math.round((0.6+i) * 1.2 * th + pad))
				.style("font-size").string(th + "px")
				.style("font-weight").string("bold")
		;

		choice.exit()
			.transition().ease(_ease)
			.duration(_duration / 3)
			.attr("opacity").float(0)
			.remove()
		;
		
		boxWidth = linewidth + padding * 2;
		boxHeight = th * text.length + padding * 2;

		frame.selectAll(".bg")
			.transition().ease(_ease)
			.delay(_duration)
		;
	}
}