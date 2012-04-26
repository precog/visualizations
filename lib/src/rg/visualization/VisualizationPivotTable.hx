/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;
import rg.info.InfoPivotTable;
import rg.html.chart.PivotTable;
import thx.error.NotImplemented;
import dhx.Selection;
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
		chart.ready.add(function() ready.dispatch());

		chart.displayColumnTotal = info.displayColumnTotal;
		chart.displayHeatMap = info.displayHeatmap;
		chart.displayRowTotal = info.displayRowTotal;

		chart.colorStart = info.heatmapColorStart;
		chart.colorEnd = info.heatmapColorEnd;

		chart.cellclass = info.cellclass;
		chart.valueclass = info.valueclass;
		chart.headerclass = info.headerclass;
		chart.totalclass = info.totalclass;

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
		chart.incolumns = Ints.min(info.columnAxes, independentVariables.length);
		chart.init();
	}

	override function feedData(data : Array<DataPoint>)
	{
		chart.setVariables(independentVariables, dependentVariables);
		chart.data(data);
	}

	override public function destroy()
	{
		chart.destroy();
	}
}