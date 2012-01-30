/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;
import rg.view.svg.panel.Panel;
import rg.view.svg.panel.Layer;
import rg.data.DataPoint;
import rg.data.Stats;
import rg.view.svg.widget.Balloon;
import thx.math.Equations;
import rg.view.svg.panel.Panels;
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

	var panelx : Float;
	var panely : Float;
	var tooltip : Balloon;

	public function new(panel : Panel)
	{
		super(panel);
		animated = true;
		animationDuration = 1500;
		animationEase = Equations.linear;
		ready = new Notifier();
	}

	override function resize()
	{
		var coords = Panels.boundingBox(panel);
		panelx = coords.x;
		panely = coords.y;
	}

	public function init()
	{
		if (null != labelDataPointOver)
		{
			tooltip = new Balloon(g);
		}
		resize();
	}

	function moveTooltip(x : Float, y : Float, ?animated : Bool)
	{
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
	}
}