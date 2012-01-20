/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.reportgrid.transform;
import rg.data.DataPoint;
import rg.util.Properties;
import rg.data.reportgrid.IExecutorReportGrid;
using Arrays;

class TransformTimeSeriesValues implements ITransform<Array<{ value : Dynamic, count : Array<Dynamic> }>>
{
	var properties : Dynamic;
	var unit : String;
	var periodicity : String;
	var event : String;
	var unitvalue : String;
	public function new(properties : Dynamic, event : String, periodicity : String, unit : String, unitvalue = "value")
	{
		this.properties = properties;
		this.unit = unit;
		this.periodicity = periodicity;
		this.event = event;
		this.unitvalue = unitvalue;
	}

	public function transform(data : Array<{ value : Dynamic, count : Array<Dynamic> }>) : Array<DataPoint>
	{
		var properties = this.properties,
			unit = this.unit,
			event = this.event,
			periodicity = this.periodicity;
		var result = data.map(function(d, _) {
//			var dp = Objects.clone(properties);
			var p : DataPoint = cast Objects.addFields(
				Dynamics.clone(properties),
				[Properties.timeProperty(periodicity), unit, "event", unitvalue],
				[TransformTimeSeries.snapTimestamp(periodicity, d.count[0].timestamp), d.count[1], event, d.value]);
			return p;
		});

		return result;
	}
}