/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.visualization.VisualizationHtml;
import rg.controller.visualization.VisualizationLeaderboard;
import rg.controller.visualization.VisualizationPivotTable;
import thx.error.NotImplemented;
import thx.js.Selection;
import rg.controller.info.InfoPivotTable;
import rg.controller.info.InfoLeaderboard;
import thx.error.Error;
using rg.controller.info.Info;

class FactoryHtmlVisualization 
{

	public function new() { }
	
	public function create(type : String, container : Selection, options : Dynamic) : VisualizationHtml
	{
		switch(type)
		{
			case "pivottable":
				return createPivotTable(new InfoPivotTable().feed(options), container);
			case "leaderboard":
				return createLeaderboard(new InfoLeaderboard().feed(options), container);
			default:
				throw new Error("unsupported visualization '{0}'", type);
		}
		return null;
	}
	
	public function createPivotTable(info : InfoPivotTable, container : Selection)
	{
		var chart = new VisualizationPivotTable(container);
		chart.info = info;
		return chart;
	}
	
	public function createLeaderboard(info : InfoLeaderboard, container : Selection)
	{
		var chart = new VisualizationLeaderboard(container);
		chart.info = info;
		return chart;
	}
}