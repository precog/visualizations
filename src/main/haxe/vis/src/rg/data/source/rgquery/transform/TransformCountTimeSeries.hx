/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
import rg.data.DataPoint;
import rg.util.Properties;
import rg.data.source.rgquery.IExecutorReportGrid;
using Arrays;

class TransformCountTimeSeries implements ITransform<TimeSeriesType>
{
	var properties : Dynamic;
	var unit : String;
	var periodicity : String;
	var event : String;
	public function new(properties : Dynamic, event : String, periodicity : String, unit : String) 
	{
		this.properties = properties;
		this.unit = unit;
		this.periodicity = periodicity;
		this.event = event;
	}
	
	public function transform(data : TimeSeriesType) : Array<DataPoint>
	{
		var properties = this.properties,
			unit = this.unit,
			event = this.event,
			periodicity = this.periodicity;
		if (null == data.data)
			return [];
		return data.data.map(function(d, _) {
			var p = Objects.addFields(
				Dynamics.clone(properties), 
				[Properties.timeProperty(periodicity), unit], 
				[d[0], d[1]]);
			return {
				properties : p,
				event : event,
				segment : null
			}
		});
	}
}