/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller;
import rg.data.source.rgquery.IExecutorReportGrid;
import rg.util.ChainedExecutor;
import rg.util.Properties;
import rg.util.DataPoints;
import rg.util.RGStrings;
import thx.date.DateParser;
import rg.util.Periodicity;

// TODO add property options
// TODO add value options
// TODO default labeling
class MVPOptions 
{
	static function timestamp(d : Dynamic) : Float
	{
		if (Std.is(d, String))
			return DateParser.parse(d).getTime();
		else if (Std.is(d, Date))
			return d.getTime();
		else
			return d;
	}
	
	static function buildQuery(type : String, property : Null<String>, periodicity : String)
	{
		switch(type)
		{
//			case "piechart":
//				return null != property ? property : ".#time:" + periodicity;
			default:
				return (null != property ? property + " * " : "") + ".#time:" + periodicity;
		}
	}
	
	public static function complete(executor : IExecutorReportGrid, o : Dynamic, handler : Dynamic -> Void) 
	{
		var start = null,
			end = null,
			path = "/",
			events : Array<String> = [],
			property = null,
			chain = new ChainedExecutor(handler),
			query,
			periodicity,
			groupby = null,
			groupfilter = null;

		// capture defaults
		// grouping
		if (null != o.groupby)
		{
			groupby = o.groupby;
			Reflect.deleteField(o, "groupby");
			if (null != o.groupfilter)
			{
				groupfilter = o.groupfilter;
				Reflect.deleteField(o, "groupfilter");
			}
		}
		// property
		if (null != o.property)
		{
			property = (o.property.substr(0, 1) == '.' ? '' : '.') + o.property;
			Reflect.deleteField(o, "property");
		}
		
		// start/end
		if (null != o.start)
		{
			start = timestamp(o.start);
			Reflect.deleteField(o, "start");
		}
		if (null != o.end)
		{
			end = timestamp(o.end);
			Reflect.deleteField(o, "end");
		}
		
		if (null != o.periodicity)
		{
			periodicity = o.periodicity;
			Reflect.deleteField(o, "periodicity");
		} else if (null != start) {
			periodicity = Periodicity.defaultPeriodicity(end - start);
		} else {
			periodicity = switch(o.options.visualization) { case "piechart": "eternity"; default: "day"; };
		}
		
		if (null == start && "eternity" != periodicity)
		{
			var range = Periodicity.defaultRange(periodicity);
			start = range[0];
			end = range[1];
		}

		// path
		if (null != o.path)
		{
			path = o.path;
			Reflect.deleteField(o, "path");
		}
		
		// event/events
		if (null != o.events)
		{
			events = o.events;
			Reflect.deleteField(o, "events");
		}
		if (null != o.event)
		{
			events = [o.event];
			Reflect.deleteField(o, "event");
		}
		
		// query
		if (null != o.query)
		{
			query = o.query;
			Reflect.deleteField(o, "query");
			// TODO this may not work correctly if time is not the last condition in the query
			if (Properties.isTime(query))
				periodicity = Properties.periodicity(query);
		} else
			query = buildQuery(o.options.visualization, property, periodicity);

		// ensure events
		chain.addAction(function(o : Dynamic, handler : Dynamic -> Void)
		{
			if (null == o.data && events.length == 0)
			{
				executor.children(path, { type : "property" }, function(arr) {
					events = arr;
					handler(o);
				});
			} else
				handler(o);
		});
		
		// ensure data
		chain.addAction(function(o : Dynamic, handler : Dynamic -> Void)
		{
			if (null == o.data)
			{
				var src = [];
				o.data = [{ src : src }];
				for (event in events)
				{
					var o = { path : path, event : event, query : query };
					if (null != start)
					{
						Reflect.setField(o, "start", start);
						Reflect.setField(o, "end", end);
					}
					if (null != groupby)
					{
						Reflect.setField(o, "groupby", groupby);
						if (null != groupfilter)
						{
							Reflect.setField(o, "groupfilter", groupfilter);
						}
					}
					src.push( o );
				}
				if (null == o.options.segmenton)
					o.options.segmenton = null == property ? "event" : property;
			}
			handler(o);
		});
		
		// ensure axes
		chain.addAction(function(o : Dynamic, handler : Dynamic -> Void)
		{
			if (null == o.axes)
			{
				switch(o.options.visualization)
				{
/*					case "piechart":
						if (null != property)
						{
							o.axes = [{ type : property }];
						} else {
							o.axes = [{ type : ".#time:" + periodicity, view : [start, end] }];
						}*/
					default:
						var axis = if (null != groupby)
							{ type : ".#time:" + periodicity, groupby : groupby }
						else
							cast { type : ".#time:" + periodicity, view : [start, end] };
						o.axes = [axis];
				}
			}
			handler(o);
		});
		
		// ensure axes have an dependent variable
		chain.addAction(function(o : Dynamic, handler : Dynamic -> Void)
		{
			var axes : Array<Dynamic> = o.axes,
				hasdependent = false;
			for (axis in axes)
			{
				if (query.indexOf(axis.type) < 0)
					hasdependent = true;
			}
			if (!hasdependent)
				o.axes.push({ type : "count" });
			handler(o);
		});
		
		// ensure labels
		chain.addAction(function(o : Dynamic, handler : Dynamic -> Void)
		{
			if (null == o.options.label)
			{
				switch(o.options.visualization)
				{
					case "linechart", "barchart":
						var axes : Array<Dynamic> = o.axes,
							type = axes[axes.length - 1].type;
						o.options.label = {
							datapointover : function(dp, stats) {
								return
									Properties.humanize(
										null != property 
										? DataPoints.value(dp, property)
										: null != o.options.segmenton
										? DataPoints.value(dp, o.options.segmenton)
										: type
									) + ": " + 
									RGStrings.humanize(DataPoints.value(dp, type))
								;
							}
						};
					case "piechart":
						var axes : Array<Dynamic> = o.axes,
							type = axes[axes.length - 1].type;
						o.options.label = {
							datapoint : function(dp, stats) {
								var v = DataPoints.value(dp, type);
								return
									stats.tot != 0.0 
									? Floats.format(Math.round(1000 * v / stats.tot)/10, "P:1")
									: RGStrings.humanize(v)
								;
							},

							datapointover : function(dp, stats) {
								return
									Properties.humanize(
										null != property 
										? DataPoints.value(dp, property)
										: type
									) + ": " + 
									RGStrings.humanize(DataPoints.value(dp, type))
								;
							}
						};
					case "leaderboard":
						var axes : Array<Dynamic> = o.axes,
							type = axes[axes.length - 1].type;
						o.options.label = {
							datapointover : function(dp, stats) {
								var v = DataPoints.value(dp, type);
								return
									stats.tot != 0.0 
									? Floats.format(Math.round(1000 * v / stats.tot)/10, "P:1")
									: RGStrings.humanize(v)
								;
							},

							datapoint : function(dp, stats) {
								return
									Properties.humanize(
										null != property 
										? DataPoints.value(dp, property)
										: type
									) + ": " + 
									RGStrings.humanize(DataPoints.value(dp, type))
								;
							}
						};
				}
			}
			handler(o);
		});

		chain.execute(o);
	}
}