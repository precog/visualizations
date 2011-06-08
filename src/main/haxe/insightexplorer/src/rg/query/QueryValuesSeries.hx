package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
import rg.svg.LineChartData;
import thx.error.NullArgument;
import rg.util.Periodicity;

class QueryValuesSeries<TValue, TData> extends QueryValuesPeridocity<TValue, Array<Dynamic<Dynamic<Int>>>, TData>
{
	override function executeLoad(success : Array<Dynamic<Dynamic<Int>>> -> Void, error : String -> Void)
	{
		var count = 0,
			total = values.length + (others ? 1 : 0),
			data = [],
			others = this.others;

		function _end()
		{
			if (others)
			{
				var tot = data[total - 1];
				for (i in 0...total - 1)
				{
					var cur = data[i];
					for (field in Reflect.fields(cur))
					{
						Reflect.setField(tot, field, Reflect.field(tot, field) - Reflect.field(cur, field));
					}
				}
			}
			success(data);
		}
		
		function _total(value : Dynamic<Dynamic<Int>>)
		{
			trace(value);
			data[total - 1] = value;
			if (++count == total)
				_end();
		}
		
		function _collect(pos : Int, value : Dynamic<Dynamic<Int>>)
		{
//			trace(value);
			data[pos] = value;
			if (++count == total)
				_end();
		}		
		
		for (i in 0...values.length)
			executor.propertyValueSeries(path, cast {
				start : time.start,
				end : time.end,
				periodicity : time.periodicity,
				property : event + "." + property,
				value : values[i]
			}, callback(_collect, i), error);
		
		if(others)
			executor.propertySeries(path, {
				start : time.start,
				end : time.end,
				periodicity : time.periodicity,
				property : event + "." + property
			}, _total, error);
	}
	
	public static function forLineChart(executor : IExecutor, path : String, event : String, property : String, values : Array<String>, ?others : Bool, ?otherslabel : String)
	{
		var query = new QueryValuesSeries<Dynamic, LineChartData>(executor, path, event, property, values, others, otherslabel);
		query.transform = function(data : Array<Dynamic<Dynamic<Int>>>) : LineChartData
		{
			var start = null != query.time.start ? query.time.start.getTime() : Periodicity.minForPeriodicityInSeries(data, query.time.periodicity),
				end = null != query.time.end ? query.time.end.getTime() : Periodicity.maxForPeriodicityInSeries(data, query.time.periodicity),
				minx = Math.POSITIVE_INFINITY,
				maxx = Math.NEGATIVE_INFINITY,
				miny = Math.POSITIVE_INFINITY,
				maxy = Math.NEGATIVE_INFINITY;
			
			var labels = query.formattedValues(),
				result = [],
				range = Periodicity.range(start, end, query.time.periodicity),
				values, d, y;
			for (i in 0...labels.length)
			{
				values = [];
				d = Reflect.field(data[i], query.time.periodicity);
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
		};
		return query;
	}
}