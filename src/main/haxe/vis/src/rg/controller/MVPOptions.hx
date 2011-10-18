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
	
	public static function complete(executor : IExecutorReportGrid, params : Dynamic, handler : Dynamic -> Void) 
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

		if (null == params.options)
			params.options = { };
		// capture defaults
		// grouping
		if (null != params.groupby)
		{
			groupby = params.groupby;
			Reflect.deleteField(params, "groupby");
			if (null != params.groupfilter)
			{
				groupfilter = params.groupfilter;
				Reflect.deleteField(params, "groupfilter");
			}
		}
		// property
		if (null != params.property)
		{
			property = (params.property.substr(0, 1) == '.' ? '' : '.') + params.property;
			Reflect.deleteField(params, "property");
		}
		
		// start/end
		if (null != params.start)
		{
			start = timestamp(params.start);
			Reflect.deleteField(params, "start");
		}
		if (null != params.end)
		{
			end = timestamp(params.end);
			Reflect.deleteField(params, "end");
		}
		
		if (null != params.periodicity)
		{
			periodicity = params.periodicity;
			Reflect.deleteField(params, "periodicity");
		} else if (null != start) {
			periodicity = Periodicity.defaultPeriodicity(end - start);
		} else {
			periodicity = switch(params.options.visualization) { case "piechart": "eternity"; default: "day"; };
		}
		
		if (null == start && "eternity" != periodicity)
		{
			var range = Periodicity.defaultRange(periodicity);
			start = range[0];
			end = range[1];
		}

		// path
		if (null != params.path)
		{
			path = params.path;
			Reflect.deleteField(params, "path");
		}
		
		// event/events
		if (null != params.events)
		{
			events = Std.is(params.events, Array) ? params.events : [params.events];
			Reflect.deleteField(params, "events");
		}
		if (null != params.event)
		{
			events = [params.event];
			Reflect.deleteField(params, "event");
		}
		
		// query
		if (null != params.query)
		{
			query = params.query;
			Reflect.deleteField(params, "query");
			// TODO this may not work correctly if time is not the last condition in the query
			if (Properties.isTime(query))
				periodicity = Properties.periodicity(query);
		} else
			query = buildQuery(params.options.visualization, property, periodicity);

		// ensure hash for tracking
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			var opt : Dynamic = params.options;
			if (null == opt.track)
				opt.track = { enabled : true };
			trace(params);
			if (opt.track.enabled)
			{
				opt.track = {
					enabled : true,
					hash : "FAKEHASH"
				};
				handler(params);
			} else {
				handler(params);
			}
		});
			
		// ensure events
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			if (null == params.data && events.length == 0)
			{
				executor.children(path, { type : "property" }, function(arr) {
					events = arr;
					handler(params);
				});
			} else
				handler(params);
		});
		
		// ensure data
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			if (null == params.data)
			{
				var src = [];
				params.data = [{ src : src }];
				for (event in events)
				{
					var params = { path : path, event : event, query : query };
					if (null != start)
					{
						Reflect.setField(params, "start", start);
						Reflect.setField(params, "end", end);
					}
					if (null != groupby)
					{
						Reflect.setField(params, "groupby", groupby);
						if (null != groupfilter)
						{
							Reflect.setField(params, "groupfilter", groupfilter);
						}
					}
					src.push( params );
				}
				if (null == params.options.segmenton)
					params.options.segmenton = null == property ? "event" : property;
			}
			handler(params);
		});
		
		// ensure axes
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			if (null == params.axes)
			{
				switch(params.options.visualization)
				{
					default:
						var axis : Dynamic = if (null != groupby)
							{ type : ".#time:" + periodicity, groupby : groupby }
						else {
							cast { type : ".#time:" + periodicity };
						}
						switch(params.options.visualization)
						{
							case "barchart":
								axis.scalemode = "fit";
						}
						params.axes = [axis];
				}
			}
			handler(params);
		});
		
		// ensure axes have an dependent variable
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			var axes : Array<Dynamic> = params.axes,
				hasdependent = false;
			for (axis in axes)
			{
				if (query.indexOf(axis.type) < 0)
					hasdependent = true;
			}
			if (!hasdependent)
				params.axes.push({ type : "count" });
			handler(params);
		});
		
		// ensure labels
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			if (null == params.options.label)
			{
				switch(params.options.visualization)
				{
					case "linechart", "barchart":
						var axes : Array<Dynamic> = params.axes,
							type = axes[axes.length - 1].type;
						params.options.label = {
							datapointover : function(dp, stats) {
								return
									Properties.humanize(
										null != property 
										? DataPoints.value(dp, property)
										: null != params.options.segmenton
										? DataPoints.value(dp, params.options.segmenton)
										: type
									) + ": " + 
									RGStrings.humanize(DataPoints.value(dp, type))
								;
							}
						};
					case "piechart":
						var axes : Array<Dynamic> = params.axes,
							type = axes[axes.length - 1].type;
						params.options.label = {
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
						var axes : Array<Dynamic> = params.axes,
							type = axes[axes.length - 1].type;
						params.options.label = {
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
			
			handler(params);
		});

		chain.execute(params);
	}
}