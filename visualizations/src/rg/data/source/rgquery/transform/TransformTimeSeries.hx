/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery.transform;
import rg.data.DataPoint;
import rg.util.Properties;
import rg.data.source.rgquery.IExecutorReportGrid;
using Arrays;

class TransformTimeSeries implements ITransform<TimeSeriesType>
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
		var result = data.map(function(d, _) {
//			var dp = Objects.clone(properties);
			var p : DataPoint = cast Objects.addFields(
				Dynamics.clone(properties), 
				[Properties.timeProperty(periodicity), unit, "event"], 
				[d[0].timestamp, d[1], event]);
			return p;
		});
		return result;
	}
}