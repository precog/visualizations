/**
 * ...
 * @author Franco Ponticelli
 */

package rg.query;

import rg.query.Query;
import rg.util.TimeSeriesType;
import rg.svg.LineChartData;
using Arrays;

class QueryEventsSeries<TData> extends QueryPath<Array<TimeSeriesType>, TData>
{
	public static function forLineChart(executor : IExecutor, path : String)
	{
		var query = new QueryEventsSeries<LineChartData>(executor, path);
		query.transform = Transform.arrayTimeSeries(query, function() return query.events); 
//		var query = new QueryValuesSeries<Dynamic, LineChartData>(executor, path, event, property, values, others, otherslabel);
//		query.transform = Transform.arrayTimeSeries(query, query.formattedValues);
		return query;
	}
	
	public var events : Array<String>;

	public function new(executor : IExecutor, path : String, ?events : Array<String>)
	{
		super(executor, path);
		this.events = events;
	}
	
	override function load()
	{
		if (null == events)
		{
			var loader = new QueryEventNames(executor, path),
				me = this;
			loader.onData.add(function(d : Array<String>) {
				if (null == d)
					d = [];
				me.events = d.map(function(d,i) return Strings.ltrim(d, "."));
				loader.close();
				me.load();
			});
			loader.load();
		} else {
			super.load();
		}
	}

	override function executeLoad(success : Array<TimeSeriesType> -> Void, error : String -> Void)
	{
		var count = 0,
			total = events.length,
			result = [],
			totalcount = 0;

		function _success(pos : Int, p : String, v : TimeSeriesType)
		{
			result[pos] = v;
			if (++count == total)
				success(result);
		}
		var query = queryObject();
		for (i in 0...events.length)
		{
			var event = events[i];
			query.property = event;
			executor.propertySeries(path, query, callback(_success, i, event), error);
		}
	}
}