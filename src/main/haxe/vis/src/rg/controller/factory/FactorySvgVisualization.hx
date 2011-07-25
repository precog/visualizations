/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoLineChart;
import rg.controller.visualization.VisualizationSvg;
import rg.view.layout.Layout;
import thx.error.Error;
using rg.controller.info.Info;

class FactorySvgVisualization 
{

	public function new() { }
	
	public function create(type : String, layout : Layout, options : Dynamic) : VisualizationSvg
	{
		switch(type)
		{
			case "linechart":
				var info = new InfoLineChart().feed(options);
			case "piechart":
			
			default:
				throw new Error("unsupported visualization type '{0}'", type);
		}
		return null;
	}
	
	public function createLineChart(info : InfoLineChart, layout : Layout)
	{
		return null;
	}
}