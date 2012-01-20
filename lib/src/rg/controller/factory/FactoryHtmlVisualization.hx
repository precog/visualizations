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
				var chart = new VisualizationPivotTable(container);
				chart.info = new InfoPivotTable().feed(options);
				return chart;
			case "leaderboard":
				var chart = new VisualizationLeaderboard(container);
				chart.info = new InfoLeaderboard().feed(options);
				return chart;
			default:
				throw new Error("unsupported visualization '{0}'", type);
		}
		return null;
	}
}