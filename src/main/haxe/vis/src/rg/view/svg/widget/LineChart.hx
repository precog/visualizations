/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.widget;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.view.svg.panel.Layer;
import rg.view.svg.panel.Panel;
import rg.data.DataPoint;
import thx.math.Equations;
import rg.util.Properties;
import rg.util.DataPoints;
using Arrays;

class LineChart extends Layer
{
	public var variableDependent : VariableDependent<Dynamic>;
	public var variableIndependents : Array<VariableIndependent<Dynamic>>;
	
	public var animated : Bool;
	public var animationDuration : Int;
	public var animationEase : Float -> Float;
	
	public var segmenton : Null<String>;
	
	public function new(panel : Panel) 
	{
		super(panel);
		addClass("line-chart");
//		g.append("svg:defs");

		animated = true;
		animationDuration = 1500;
		animationEase = Equations.linear;
	}
	
	public function init()
	{
		
	}
	
	public function data(input : Array<DataPoint>)
	{
		var dps = transformData(input);
		// axis
		var axisgroup = g.selectAll("g.axis-group").data(dps);
		
		axisgroup.enter()
			.append("g").attr("class").stringf(function(_, i) return "axis-group group-" + i);
		
		trace(dps);
	}
	
	function transformData(dps : Array<DataPoint>) : Array<Hash<Array<DataPoint>>>
	{
		var results = [];
		if (variableIndependents.length == 1)
		{
			var map = DataPoints.partition(dps, segmenton);
			results.push(map);
		} else {
			for (i in 1...variableIndependents.length)
			{
				var variable = variableIndependents[i];
				var values = DataPoints.filterByIndependents(dps, [variable]);
				var map = DataPoints.partition(values, segmenton);
				results.push(map);
			}
		}
		return results;
	}
}