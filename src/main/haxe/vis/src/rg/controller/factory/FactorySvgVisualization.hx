/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoLineChart;
import rg.controller.info.InfoPieChart;
import rg.controller.visualization.VisualizationPieChart;
import rg.controller.visualization.VisualizationSvg;
import rg.controller.visualization.VisualizationLineChart;
import rg.view.layout.Layout;
import thx.error.Error;
import thx.error.NotImplemented;
using rg.controller.info.Info;

class FactorySvgVisualization 
{

	public function new() { }
	
	public function create(type : String, layout : Layout, options : Dynamic) : VisualizationSvg
	{
		switch(type)
		{
			case "linechart":
				var chart = new VisualizationLineChart(layout);
				chart.info = new InfoLineChart().feed(options);
				return chart;
			case "piechart":
				var chart = new VisualizationPieChart(layout);
				chart.info = new InfoPieChart().feed(options);
				return chart;
			default:
				throw new Error("unsupported visualization type '{0}'", type);
		}
	}
}