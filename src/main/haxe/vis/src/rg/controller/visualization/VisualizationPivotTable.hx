/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoPivotTable;
import rg.view.html.widget.PivotTable;
import thx.error.NotImplemented;
import thx.js.Selection;
import rg.data.DataPoint;

// TODO wire color paramaters
// TODO wire label functions

class VisualizationPivotTable extends VisualizationHtml
{
	public var info : InfoPivotTable;
	var chart : PivotTable;
	
	public function new(container : Selection) 
	{
		super(container);
	}
	
	override function init()
	{
		chart = new PivotTable(container);
		
		chart.displayColumnTotal = info.displayColumnTotal;
		chart.displayHeatMap = info.displayHeatmap;
		chart.displayRowTotal = info.displayRowTotal;
		
		chart.colorStart = info.heatmapColorStart;
		chart.colorEnd = info.heatmapColorEnd;
		
		var incolumns = Ints.min(info.columnAxes, independentVariables.length);
		
		chart.columnVariables = independentVariables.slice(0, incolumns);
		chart.rowVariables = independentVariables.slice(incolumns);
		chart.cellVariable = dependentVariables[0];
		
		chart.init();
	}
	
	override function feedData(data : Array<DataPoint>)
	{
		chart.data(data);
	}
	
	override public function destroy()
	{
		chart.destroy();
	}
}