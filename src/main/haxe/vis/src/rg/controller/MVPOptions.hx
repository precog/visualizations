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
			default:
				return (null != property ? property + " * " : "") + ".#time:" + periodicity;
		}
	}
	
	public static function complete(executor : IExecutorReportGrid, opt : Dynamic, handler : Dynamic -> Void) 
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
		if (null != opt.groupby)
		{
			groupby = opt.groupby;
			Reflect.deleteField(opt, "groupby");
			if (null != opt.groupfilter)
			{
				groupfilter = opt.groupfilter;
				Reflect.deleteField(opt, "groupfilter");
			}
		}
		// property
		if (null != opt.property)
		{
			property = (opt.property.substr(0, 1) == '.' ? '' : '.') + opt.property;
			Reflect.deleteField(opt, "property");
		}
		
		// start/end
		if (null != opt.start)
		{
			start = timestamp(opt.start);
			Reflect.deleteField(opt, "start");
		}
		if (null != opt.end)
		{
			end = timestamp(opt.end);
			Reflect.deleteField(opt, "end");
		}
		
		if (null != opt.periodicity)
		{
			periodicity = opt.periodicity;
			Reflect.deleteField(opt, "periodicity");
		} else if (null != start) {
			periodicity = Periodicity.defaultPeriodicity(end - start);
		} else {
			periodicity = switch(opt.options.visualization) { case "piechart": "eternity"; default: "day"; };
		}
		
		if (null == start && "eternity" != periodicity)
		{
			var range = Periodicity.defaultRange(periodicity);
			start = range[0];
			end = range[1];
		}

		// path
		if (null != opt.path)
		{
			path = opt.path;
			Reflect.deleteField(opt, "path");
		}
		
		// event/events
		if (null != opt.events)
		{
			events = opt.events;
			Reflect.deleteField(opt, "events");
		}
		if (null != opt.event)
		{
			events = [opt.event];
			Reflect.deleteField(opt, "event");
		}
		
		// query
		if (null != opt.query)
		{
			query = opt.query;
			Reflect.deleteField(opt, "query");
			// TODO this may not work correctly if time is not the last condition in the query
			if (Properties.isTime(query))
				periodicity = Properties.periodicity(query);
		} else
			query = buildQuery(opt.options.visualization, property, periodicity);

		// ensure events
		chain.addAction(function(opt : Dynamic, handler : Dynamic -> Void)
		{
			if (null == opt.data && events.length == 0)
			{
				executor.children(path, { type : "property" }, function(arr) {
					events = arr;
					handler(opt);
				});
			} else
				handler(opt);
		});
		
		// ensure data
		chain.addAction(function(opt : Dynamic, handler : Dynamic -> Void)
		{
			if (null == opt.data)
			{
				var src = [];
				opt.data = [{ src : src }];
				for (event in events)
				{
					var opt = { path : path, event : event, query : query };
					if (null != start)
					{
						Reflect.setField(opt, "start", start);
						Reflect.setField(opt, "end", end);
					}
					if (null != groupby)
					{
						Reflect.setField(opt, "groupby", groupby);
						if (null != groupfilter)
						{
							Reflect.setField(opt, "groupfilter", groupfilter);
						}
					}
					src.push( opt );
				}
				if (null == opt.options.segmenton)
					opt.options.segmenton = null == property ? "event" : property;
			}
			handler(opt);
		});
		
		// ensure axes
		chain.addAction(function(opt : Dynamic, handler : Dynamic -> Void)
		{
			if (null == opt.axes)
			{
				switch(opt.options.visualization)
				{
					default:
						var axis : Dynamic = if (null != groupby)
							{ type : ".#time:" + periodicity, groupby : groupby }
						else {
							cast { type : ".#time:" + periodicity };
						}
						switch(opt.options.visualization)
						{
							case "barchart":
								axis.scalemode = "fit";
						}
						opt.axes = [axis];
				}
			}
			handler(opt);
		});
		
		// ensure axes have an dependent variable
		chain.addAction(function(opt : Dynamic, handler : Dynamic -> Void)
		{
			var axes : Array<Dynamic> = opt.axes,
				hasdependent = false;
			for (axis in axes)
			{
				if (query.indexOf(axis.type) < 0)
					hasdependent = true;
			}
			if (!hasdependent)
				opt.axes.push({ type : "count" });
			handler(opt);
		});
		
		// ensure labels
		chain.addAction(function(opt : Dynamic, handler : Dynamic -> Void)
		{
			if (null == opt.options.label)
			{
				switch(opt.options.visualization)
				{
					case "linechart", "barchart":
						var axes : Array<Dynamic> = opt.axes,
							type = axes[axes.length - 1].type;
						opt.options.label = {
							datapointover : function(dp, stats) {
								return
									Properties.humanize(
										null != property 
										? DataPoints.value(dp, property)
										: null != opt.options.segmenton
										? DataPoints.value(dp, opt.options.segmenton)
										: type
									) + ": " + 
									RGStrings.humanize(DataPoints.value(dp, type))
								;
							}
						};
					case "piechart":
						var axes : Array<Dynamic> = opt.axes,
							type = axes[axes.length - 1].type;
						opt.options.label = {
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
						var axes : Array<Dynamic> = opt.axes,
							type = axes[axes.length - 1].type;
						opt.options.label = {
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
			
			handler(opt);
		});

		chain.execute(opt);
	}
}