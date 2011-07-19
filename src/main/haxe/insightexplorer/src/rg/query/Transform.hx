/**
 * ...
 * @author Franco Ponticelli
 */

package rg.query;

import rg.query.Query;
import rg.svg.LineChartData;
import rg.util.Periodicity;
import rg.util.TimeSeriesType;

class Transform 
{
	public static function timeSeries(query : QueryExecutor<Dynamic, LineChartData>, label : String)
	{
		var t = Transform.arrayTimeSeries(query, function() return [label]);
		return function(data : TimeSeriesType) : LineChartData
		{
			return t([data]);
		}
	}

	public static function arrayTimeSeries(query : QueryExecutor<Dynamic, LineChartData>, labels : Void -> Array<String>)
	{
		return function(data : Array<TimeSeriesType>) : LineChartData
		{
			trace(data);
			var start = null != query.time.start ? query.time.start.getTime() : Periodicity.minForPeriodicityInSeries(data),
					end = null != query.time.end ? query.time.end.getTime() : Periodicity.maxForPeriodicityInSeries(data),
					minx = Math.POSITIVE_INFINITY,
					maxx = Math.NEGATIVE_INFINITY,
					miny = Math.POSITIVE_INFINITY,
					maxy = Math.NEGATIVE_INFINITY;
				
			var labels = labels(),
				result = [],
				range = Periodicity.range(start, end, query.time.periodicity),
				values, d : Array<Array<Float>>, y : Float;
			for (i in 0...labels.length)
			{
				values = [];
				d = null == data[i] ? [] : data[i].data;
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
				
				result.push({
					label  : labels[i],
					values : values
				});
			}
			return {
				minx : minx,
				maxx : maxx,
				miny : miny,
				maxy : maxy,
				data : result
			};
		}
	}
}