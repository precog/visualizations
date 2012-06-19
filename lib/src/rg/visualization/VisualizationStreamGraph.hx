/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;
import rg.data.Segmenter;
import rg.svg.chart.StreamGraph;
import rg.info.InfoStreamGraph;
import rg.data.DataPoint;
import rg.axis.IAxis;
import rg.data.Variable;
using Arrays;

class VisualizationStreamGraph extends VisualizationCartesian<Array<Array<DataPoint>>>
{
	public var infoStream : InfoStreamGraph;

	override function initAxes()
	{
		xvariable = cast independentVariables[0];
		yvariables = cast dependentVariables.map(function(d,_) : Variable<Dynamic, IAxis<Dynamic>> return d);
	}

	override function initChart()
	{
		var chart = new StreamGraph(layout.getPanel(layout.mainPanelName));
		baseChart = chart;
		chart.ready.add(function() ready.dispatch());

		chart.interpolator = infoStream.interpolation;
		switch(infoStream.effect)
		{
			case NoEffect:
				chart.gradientStyle = 0;
			case GradientVertical(lightness):
				chart.gradientStyle = 1;
				chart.gradientLightness = lightness;
			case GradientHorizontal(lightness):
				chart.gradientStyle = 2;
				chart.gradientLightness = lightness;
		}

		this.chart = chart;
	}

	override function transformData(dps : Array<DataPoint>) : Array<Array<DataPoint>>
	{
		var segmenter = new Segmenter(infoStream.segment.on, infoStream.segment.transform, infoStream.segment.scale, infoStream.segment.values);
		return segmenter.segment(dps);
	}
}