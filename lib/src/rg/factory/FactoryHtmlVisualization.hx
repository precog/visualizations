/**
 * ...
 * @author Franco Ponticelli
 */

package rg.factory;
import rg.visualization.VisualizationHtml;
import rg.visualization.VisualizationLeaderboard;
import rg.visualization.VisualizationPivotTable;
import thx.error.NotImplemented;
import dhx.Selection;
import rg.info.InfoPivotTable;
import rg.info.InfoLeaderboard;
import thx.error.Error;
using rg.info.Info;

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