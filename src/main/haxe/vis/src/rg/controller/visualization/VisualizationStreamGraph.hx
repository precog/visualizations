/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.data.Segmenter;
import rg.view.svg.chart.StreamGraph;
import rg.controller.info.InfoStreamGraph;
import rg.data.DataPoint;

class VisualizationStreamGraph extends VisualizationCartesian<Array<Array<DataPoint>>>
{
	public var infoStream : InfoStreamGraph;
	
	override function initChart()
	{
		var chart = new StreamGraph(layout.getPanel(layout.mainPanelName));
		
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
		var segmenter = new Segmenter(info.segment.on, info.segment.transform, info.segment.scale);
		return segmenter.segment(dps);
	}
}