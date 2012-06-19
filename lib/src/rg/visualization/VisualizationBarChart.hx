/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;
import rg.info.InfoBarChart;
import rg.svg.chart.BarChart;
import rg.data.DataPoint;
import rg.data.Segmenter;
import rg.util.DataPoints;
import rg.util.Properties;
import rg.data.Variable;
import rg.axis.IAxis;
import thx.collection.Set;
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
		baseChart = chart;
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

		if(Properties.isTime(variable.type))
		{
			var periodicity = Properties.periodicity(variable.type);
			for (value in values)
			{
				var axisresults = [];
				for (i in 0...dependentVariables.length)
				{
					var dps = DataPoints.filterByDependents(dps, [dependentVariables[i]]);
					axisresults.push(dps.filter(function(d) return Dates.snap(Reflect.field(d, variable.type), periodicity) == value));
				}
				results.push(axisresults);
			}
		} else {
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
		}

		if(null != infoBar.segment.on)
		{
			var segmenton = infoBar.segment.on,
				svalues = new Set();
			if(infoBar.segment.values.length != 0) {
				for(value in infoBar.segment.values)
					svalues.add(value);
			} else {
				dps.each(function(dp, _) { svalues.add(Reflect.field(dp, segmenton)); });
			}
			for (i in 0...values.length)
			{
				for (j in 0...dependentVariables.length)
				{
					var segment = results[i][j],
						replace = [],
						pos     = 0;
					for(svalue in svalues)
					{
						if(svalue == Reflect.field(segment[pos], segmenton))
						{
							replace.push(segment[pos++]);
						} else {
							var ob : Dynamic = {};
							Reflect.setField(ob, segmenton, svalue);
							Reflect.setField(ob, variable.type, values[i]);
							Reflect.setField(ob, dependentVariables[j].type, 0);
							replace.push(ob);
						}
					}
					results[i][j] = replace;
				}
			}
		}
		return results;
	}
}