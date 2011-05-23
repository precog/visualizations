package rg.chart;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.js.ReportGrid;
import rg.svg.SvgPieChart;

class PieChart extends BaseChart
{
	var data : Array<Float>;
	var loading : Bool;
	var chart : SvgPieChart;
	
	override function initScales(options : ChartOptions)
	{
		loading = false;
	}
	
	override function initChart(options : ChartOptions)
	{
		data = [];
		onDataStep();
	}
	
	override function onAnimationStep() { }
	override function onDataStep()
	{
		if (loading)
			return;

		loading = true;
		counter = 0;
		
		for (i in 0...query.values.length)
		{
			var o = { periodicity: "eternity", property : query.event + "." + query.property, value : query.values[i] };
			ReportGrid.propertyValueCount(query.path, o, callback(updateData, i));
		}
	}
	
	var counter : Int;
	function updateData(pos : Int, v : Int)
	{
		data[pos] = v;
		if (++counter < query.values.length)
			return;
		loading = false;
		updateChart();
	}
	
	function updateChart()
	{
		if (null == chart)
		{
			chart = new SvgPieChart(space.center, data);
			var v = query.values;
			chart.setTooltip(
				function(d, i) ToolTip.display('<span class="title">' + v[i] + '</span><br/><span class="count">' + Ints.format(d) + "</span>"),
				function(d, i) ToolTip.display()
			);
		} else
			chart.data(data);
	}
}