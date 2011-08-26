/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.widget;
import rg.view.svg.panel.Layer;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.view.svg.panel.Panel;
import thx.error.AbstractMethod;
import rg.data.DataPoint;
import rg.data.Stats;
import rg.view.svg.widget.Baloon;
import thx.math.Equations;
import rg.view.svg.panel.Panels;

class ChartCartesian<T> extends Layer
{
	public var variableDependents : Array<VariableDependent<Dynamic>>;
	public var variableIndependent : VariableIndependent<Dynamic>;
	public var animated : Bool;
	public var animationDuration : Int;
	public var animationEase : Float -> Float;
	public var click : DataPoint -> Stats -> Void;
	public var labelDataPoint : DataPoint -> Stats -> String;
	public var labelDataPointOver : DataPoint -> Stats -> String;
	
	var panelx : Float;
	var panely : Float;
	var tooltip : Baloon;
	
	public function new(panel : Panel)
	{
		super(panel);
		animated = true;
		animationDuration = 1500;
		animationEase = Equations.linear;
	}
	
	public function setVariables(variableIndependents : Array<VariableIndependent<Dynamic>>, variableDependents : Array<VariableDependent<Dynamic>>)
	{
		this.variableIndependent = variableIndependents[0];
		this.variableDependents = variableDependents;
	}
	
	public function data(dps : T)
	{
		throw new AbstractMethod();
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
			tooltip = new Baloon(g);
			resize();
		}
	}
}