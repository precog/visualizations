package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
import thx.error.NullArgument;
import rg.svg.LineChartData;
import rg.util.Periodicity;

class QueryPropertySeries<TData> extends QueryProperty<Dynamic<Dynamic<Int>>, TData>
{
	override function executeLoad(success : Dynamic<Dynamic<Int>> -> Void, error : String -> Void)
	{
		executor.propertySeries(path, {
			start : time.start,
			end : time.end,
			periodicity : time.periodicity,
			property : event + "." + property
		}, success, error);
	}
	
	public static function forLineChart(executor : IExecutor, path : String, event : String, property : String, ?others : Bool, ?otherslabel : String)
	{
		var query = new QueryPropertySeries<LineChartData>(executor, path, event, property);
		query.transform = function(data : Dynamic<Dynamic<Int>>) : LineChartData
		{
			trace(data);
			var start = null != query.time.start ? query.time.start.getTime() : Periodicity.minForPeriodicityInSeries([data], query.time.periodicity),
				end = null != query.time.end ? query.time.end.getTime() : Periodicity.maxForPeriodicityInSeries([data], query.time.periodicity),
				minx = Math.POSITIVE_INFINITY,
				maxx = Math.NEGATIVE_INFINITY,
				miny = Math.POSITIVE_INFINITY,
				maxy = Math.NEGATIVE_INFINITY;
			
			var range = Periodicity.range(start, end, query.time.periodicity),
				values = [],
				d, y;

			d = Reflect.field(data, query.time.periodicity);

			for (x in range)
			{
				y = Reflect.field(d, "" + x);
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
}