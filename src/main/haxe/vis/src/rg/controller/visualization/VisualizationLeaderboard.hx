/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoLeaderboard;
import rg.view.html.widget.Leadeboard;
import thx.js.Selection;
import rg.data.DataPoint;

class VisualizationLeaderboard extends VisualizationHtml
{
	public var info : InfoLeaderboard;
	var chart : Leadeboard;
	public function new(container : Selection) 
	{
		super(container);
	}
	
	override function init()
	{
		chart = new Leadeboard(container);
		chart.variableIndependent = independentVariables[0];
		chart.variableDependent = dependentVariables[0];
		
		chart.init();
	}
	
	override function feedData(data : Array<DataPoint>)
	{
		chart.data(data);
	}
}