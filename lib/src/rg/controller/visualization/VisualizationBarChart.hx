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
import rg.data.Variable;
import rg.data.IAxis;
using Arrays;

class VisualizationBarChart extends VisualizationCartesian<Array<Array<Array<DataPoint>>>>
{
	public var infoBar : InfoBarChart;

	override function initAxes()
	{
		if(infoBar.horizontal)
		{
			xvariable = cast dependentVariables.map(function(d,_) : Variable<Dynamic, IAxis<Dynamic>> return d)[0];
			yvariables = cast [independentVariables[0]];
		} else {
			yvariables = cast dependentVariables.map(function(d,_) : Variable<Dynamic, IAxis<Dynamic>> return d);
			xvariable = cast independentVariables[0];
		}
	}

	override function initChart()
	{
		var chart = new BarChart(layout.getPanel(layout.mainPanelName));
		chart.ready.add(function() ready.dispatch());

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
		chart.horizontal = infoBar.horizontal;


		this.chart = chart;
	}

	override function transformData(dps : Array<DataPoint>) : Array<Array<Array<DataPoint>>>
	{
		var results = [],
			variable = independentVariables[0],
			values = variable.axis.range(variable.min(), variable.max());
		for (value in values)
		{
			var axisresults = [];
			for (i in 0...dependentVariables.length)
			{
				var dps = DataPoints.filterByDependents(dps, [dependentVariables[i]]);
				axisresults.push(dps.filter(function(d) return Reflect.field(d, variable.type) == value));
			}
			results.push(axisresults);
		}
		return results;
	}
}