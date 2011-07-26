/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoLineChart;
import rg.controller.info.InfoPieChart;
import rg.controller.visualization.VisualizationPieChart;
import rg.controller.visualization.VisualizationSvg;
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
				return createLineChart(new InfoLineChart().feed(options), layout);
			case "piechart":
				return createPieChart(new InfoPieChart().feed(options), layout);
			default:
				throw new Error("unsupported visualization type '{0}'", type);
		}
	}
	
	public function createLineChart(info : InfoLineChart, layout : Layout)
	{
		return throw new NotImplemented();
	}
	
	public function createPieChart(info : InfoPieChart, layout : Layout)
	{
		var chart = new VisualizationPieChart(layout);
		chart.info = info;
		return chart;
	}
}