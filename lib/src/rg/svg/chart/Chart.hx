/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.chart;
import rg.svg.panel.Panel;
import rg.svg.panel.Layer;
import rg.data.DataPoint;
import rg.axis.Stats;
import rg.html.widget.Tooltip;
import thx.math.Equations;
import rg.svg.panel.Panels;
import hxevents.Notifier;

class Chart extends Layer
{
	public var animated : Bool;
	public var animationDuration : Int;
	public var animationEase : Float -> Float;
	public var click : DataPoint -> Stats<Dynamic> -> Void;
	public var labelDataPoint : DataPoint -> Stats<Dynamic> -> String;
	public var labelDataPointOver : DataPoint -> Stats<Dynamic> -> String;
	public var ready(default, null) : Notifier;
	var verticalChartOffset : Int;

	var panelx : Float;
	var panely : Float;
	var tooltip : Tooltip;

	public function new(panel : Panel)
	{
		super(panel);
		animated = true;
		animationDuration = 1500;
		animationEase = Equations.linear;
		ready = new Notifier();
		verticalChartOffset = 0;
	}

	override function resize()
	{
		var coords = Panels.absolutePos(panel);
		panelx = coords.x;
		panely = coords.y;
	}

	public function init()
	{
		Tooltip.instance.hide();
		if (null != labelDataPointOver)
		{
			tooltip = Tooltip.instance;
		}
		resize();
	}

	public function setVerticalChartOffset(offset : Int)
	{
		verticalChartOffset = offset;
	}

	function moveTooltip(x : Float, y : Float, color : Null<String>)
	{
//		var coords = Panels.absolutePos(panel);
//		panelx = coords.x;
//		panely = coords.y;
		var coords = Panels.absolutePos(panel);
		panelx = coords.x;
		panely = coords.y;


		tooltip.setAnchorColor(color);
		tooltip.showAt(Std.int(panelx + x), Std.int(panely + y + verticalChartOffset));
/*
		if(0 == tooltip.x && 0 == tooltip.y)
		{
			tooltip.hide();
			tooltip.moveTo(panelx + x, panely + y, false);
			tooltip.show(animated);
		} else if(!tooltip.visible)
		{
			tooltip.moveTo(panelx + x, panely + y, false);
			tooltip.show(animated);
		} else
			tooltip.moveTo(panelx + x, panely + y, animated);
*/
	}
}