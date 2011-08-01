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
		
		if (null != info.click)
			chart.click = info.click;
		
		if (null != info.label.datapoint)
			chart.labelDataPoint = info.label.datapoint;
		
		if (null != info.label.datapointover)
			chart.labelDataPointOver = info.label.datapointover;
			
		if (null != info.label.axis)
			chart.labelAxis = info.label.axis;
			
		if (null != info.label.axisvalue)
			chart.labelAxisValue = info.label.axisvalue;
			
			
		if (null != info.label.total)
			chart.labelTotal = info.label.total;
			
		if (null != info.label.totalover)
			chart.labelTotalOver = info.label.totalover;
		
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