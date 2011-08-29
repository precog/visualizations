/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoBarChart;
import rg.view.svg.chart.BarChart;
import rg.data.DataPoint;
import rg.data.Segmenter;
import rg.util.DataPoints;
using Arrays;

class VisualizationBarChart extends VisualizationCartesian<Array<Array<Array<DataPoint>>>>
{
	public var infoBar : InfoBarChart;
	
	override function initChart()
	{
		var chart = new BarChart(layout.getPanel(layout.mainPanelName));
		
		chart.stacked = infoBar.stacked;
		switch(infoBar.effect)
		{
			case NoEffect:
				chart.displayGradient = false;
			case Gradient(lightness):
				chart.displayGradient = true;
				chart.gradientLightness = lightness;
		}
		chart.padding = infoBar.barPadding;
		chart.paddingAxis = infoBar.barPaddingAxis;
		chart.paddingDataPoint = infoBar.barPaddingDataPoint;

		this.chart = chart;
	}

	override function transformData(dps : Array<DataPoint>) : Array<Array<Array<DataPoint>>>
	{
		var results = [],
			values = independentVariables[0].range(),
			itype = independentVariables[0].type;
		for (value in values)
		{
			var axisresults = [];
			for (i in 0...dependentVariables.length)
			{
				var dps = DataPoints.filterByDependents(dps, [dependentVariables[i]]);
				axisresults.push(dps.filter(function(d) return Reflect.field(d, itype) == value));
			}
			results.push(axisresults);
		}
		return results;
	}
}