/**
 * ...
 * @author Franco Ponticelli
 */

package rg.query;
import rg.query.Query;
import rg.svg.LineChartData;
import rg.util.Periodicity;
import rg.util.TimeSeriesType;

class QueryEventSeries<TData> extends QueryEvent<TimeSeriesType, TData>
{
	override function executeLoad(success : TimeSeriesType -> Void, error : String -> Void)
	{
		var query = queryObject();
		query.property = event;
		executor.propertySeries(path, query, success, error);
	}
	
	public static function forLineChart(executor : IExecutor, path : String, event : String)
	{
		var query = new QueryEventSeries<LineChartData>(executor, path, event);
		query.transform = Transform.timeSeries(query, event);
		return query;
	}
/*
	public static function forLineChart(executor : IExecutor, path : String, event : String)
	{
		var query = new QueryEventSeries<LineChartData>(executor, path, event);
		query.transform = function(data : TimeSeriesType) : LineChartData
		{
			var start = null != query.time.start ? query.time.start.getTime() : Periodicity.minForPeriodicityInSeries([data], query.time.periodicity),
				end = null != query.time.end ? query.time.end.getTime() : Periodicity.maxForPeriodicityInSeries([data], query.time.periodicity),
				minx = Math.POSITIVE_INFINITY,
				maxx = Math.NEGATIVE_INFINITY,
				miny = Math.POSITIVE_INFINITY,
				maxy = Math.NEGATIVE_INFINITY;
			
			var range = Periodicity.range(start, end, query.time.periodicity),
				values = [],
				d : Array<Array<Dynamic>>, y;
			d = Reflect.field(data, query.time.periodicity);
			if (null == d)
			{
				return {
					minx : 0.0,
					maxx : 0.0,
					miny : 0.0,
					maxy : 0.0,
					data : [{
						label  : event,
						values : []
					}]
				};
			}
			var map = new Hash();
			for (v in d)
			{
				map.set("" + v[0], v[1]);
			}
			for (x in range)
			{
				y = map.get("" + x);
				if (null == y)
					y = 0.0;
				if (x < minx)
					minx = x;
				if (x > maxx)
					maxx = x;
				if (y < miny)
					miny = y;
				if (y > maxy)
					maxy = y;
				values.push( {
					x : x,
					y : y
				} );
			}
			return {
				minx : minx,
				maxx : maxx,
				miny : miny,
				maxy : maxy,
				data : [{
					label  : event,
					values : values
				}]
			};
		};
		return query;
	}
*/
}