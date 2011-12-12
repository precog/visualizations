/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller;
import rg.data.source.rgquery.IExecutorReportGrid;
import rg.util.ChainedExecutor;
import rg.util.Jsonp;
import rg.util.Properties;
import rg.util.DataPoints;
import rg.util.RGStrings;
import thx.date.DateParser;
import rg.util.Periodicity;
import thx.error.Error;
import rg.util.RG;
using Arrays;

// TODO add property options
// TODO add value options
// TODO default labeling
class MVPOptions
{
	static var defaultHash : String;
	static function timestamp(d : Dynamic) : Float
	{
		if (Std.is(d, String))
			return DateParser.parse(d).getTime();
		else if (Std.is(d, Date))
			return d.getTime();
		else
			return d;
	}

	static function quote(v : String, ?_)
	{
		return '"' + StringTools.replace(v, '"', '\\"') + '"';
	}

	static function buildQuery(type : String, property : Null<String>, values : Null<Array<String>>, periodicity : String)
	{
		var p = null;
		if (null != property)
		{
			p = property;
			if (null != values)
			{
				p += " = " + values.map(quote).join(",");
			}
		}

		var q = switch(type)
		{
			default: (null != p ? p + " * " : "") + ".#time:" + periodicity;
		}

		return q;
	}

	public static function complete(executor : IExecutorReportGrid, parameters : Dynamic, handler : Dynamic -> Void)
	{
		var start       = null,
			end         = null,
			path        = "/",
			events : Array<String> = [],
			property    = null,
			values : Array<String> = null,
			chain       = new ChainedExecutor(handler),
			query,
			periodicity,
			groupby     = null,
			groupfilter = null,
			statistic   = null,
			tag         = null,
			location    = null;

		if (null == parameters.options)
			parameters.options = { };
		var options : Dynamic = parameters.options;
		// capture defaults
		// statistic
		if (null != parameters.statistic)
		{
			statistic = parameters.statistic;
			Reflect.deleteField(parameters, "statistic");
		}
		// tag and location
		if (null != parameters.tag)
		{
			tag = parameters.tag;
			Reflect.deleteField(parameters, "tag");
		}
		if (null != parameters.location)
		{
			location = parameters.location;
			Reflect.deleteField(parameters, "location");
		}
		// grouping
		if (null != parameters.groupby)
		{
			groupby = parameters.groupby;
			Reflect.deleteField(parameters, "groupby");
			if (null != parameters.groupfilter)
			{
				groupfilter = parameters.groupfilter;
				Reflect.deleteField(parameters, "groupfilter");
			}
		}
		// property
		if (null != parameters.property)
		{
			property = (parameters.property.substr(0, 1) == '.' ? '' : '.') + parameters.property;
			Reflect.deleteField(parameters, "property");
		}

		// start/end
		if (null != parameters.start)
		{
			start = timestamp(parameters.start);
			Reflect.deleteField(parameters, "start");
		}
		if (null != parameters.end)
		{
			end = timestamp(parameters.end);
			Reflect.deleteField(parameters, "end");
		}

		if (null != parameters.periodicity)
		{
			periodicity = parameters.periodicity;
			Reflect.deleteField(parameters, "periodicity");
		} else if (null != start) {
			periodicity = Periodicity.defaultPeriodicity(end - start);
		} else {
			periodicity = switch(options.visualization) { case "piechart", "funnelchart": "eternity"; default: "day"; };
		}

		if (null == start && "eternity" != periodicity && null != periodicity)
		{
			var range = Periodicity.defaultRange(periodicity);
			start = range[0];
			end = range[1];
		}

		// path
		if (null != parameters.path)
		{
			path = parameters.path;
			Reflect.deleteField(parameters, "path");
		}

		// event/events
		if (null != parameters.events)
		{
			events = Std.is(parameters.events, Array) ? parameters.events : [cast parameters.events];
			Reflect.deleteField(parameters, "events");
		}
		if (null != parameters.event)
		{
			events = [cast parameters.event];
			Reflect.deleteField(parameters, "event");
		}

		// value/values
		if (null != parameters.values)
		{
			values = Std.is(parameters.values, Array) ? parameters.values : [cast parameters.values];
			Reflect.deleteField(parameters, "values");
		}
		if (null != parameters.value)
		{
			values = [cast parameters.value];
			Reflect.deleteField(parameters, "value");
		}

		// query
		if (null != parameters.query)
		{
			query = parameters.query;
			Reflect.deleteField(parameters, "query");
			// TODO this may not work correctly if time is not the last condition in the query
			if (Properties.isTime(query))
				periodicity = Properties.periodicity(query);
		} else
			query = buildQuery(options.visualization, property, values, periodicity);

		// misc options
		if (null != options.download && !Types.isAnonymous(options.download))
		{
			var v : Dynamic = options.download;
			Reflect.deleteField(options, "download");
			if (v == true)
				options.download = { position : "auto" };
			else if (Std.is(v, String))
				options.download = { position : v };
			else
				throw new Error("invalid value for download '{0}'", [v]);
		}

		// ensure hash for tracking
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			var opt : Dynamic = params.options;

			if (null == opt.track)
				opt.track = { enabled : false };
			if (null == opt.track.hash)
				opt.track.hash = defaultHash;
			if ("" == opt.track.hash)
				opt.track.enabled = false;
			if (opt.track.enabled && null == opt.track.hash)
			{
				var tokenid = RG.getTokenId(),
					service = null != opt.track.hashService ? opt.track.hashService : RGConst.SERVICE_VISTRACK_HASH;
				service = StringTools.replace(service, "{$token}", tokenid);
				Jsonp.get(service, function(hash) {
					opt.track = {
						enabled : hash != "",
						hash : defaultHash = hash
					};
					handler(params);
				}, function(_, e) {
					opt.track.enabled = false;
					handler(params);
				}, null, null);
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
					if (null != statistic)
					{
						Reflect.setField(params, "statistic", statistic);
					}
					if (null != tag)
					{
						Reflect.setField(params, "tag", tag);
					}
					if (null != location)
					{
						Reflect.setField(params, "location", location);
					}
					src.push( params );
				}
				if (null == params.options.segmenton)
					params.options.segmenton = null != values ? "value" : null == property ? "event" : property;
			}
			handler(params);
		});

		function timeAxis(?o : Dynamic) : Dynamic {
			if(null == o)
				o = {};
			Reflect.setField(o, "type", ".#time:" + periodicity);
			if (null != groupby)
				return Reflect.setField(o, "groupby", groupby);
			return o;
		}

		function defaultStatistic() {
			if(null == statistic) return "count";
			return switch((""+statistic).toLowerCase())
			{
				case "standarddeviation", "stddeviation", "deviation":
					"standardDeviation";
				case "mean":
					"mean";
				default:
					"count";
			}
		}

		// ensure axes
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			if (null == params.axes)
			{
				switch(params.options.visualization)
				{
					case "funnelchart":
						params.axes = [{ type : "event", variable : "independent" }, { type : defaultStatistic()}];
					case "barchart":
						var axis : Dynamic = { scalemode : "fit" };
						params.axes = [];
						if(periodicity == "eternity") {
							Objects.copyTo({ type : null == params.options.segmenton ? "event" : params.options.segmenton, variable : "independent" }, axis);
							params.axes.push({ type : defaultStatistic() });
						} else
							axis = timeAxis(axis);
						params.axes.insert(0, axis);
					default:
						params.axes = [timeAxis()];
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
				params.axes.push({ type : defaultStatistic() });
			handler(params);
		});

		// ensure labels
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			if (null == params.options.label)
			{
				switch(params.options.visualization)
				{
//					case "funnelchart":

					case "linechart", "barchart", "streamgraph":
						var axes : Array<Dynamic> = params.axes,
							type = axes[axes.length - 1].type;
						params.options.label = {
							datapointover : function(dp, stats) {
								return
									Properties.humanize(
										null != values
										? DataPoints.value(dp, "value")
										: (null != property && type == 'count')
										? DataPoints.value(dp, property)
										: (null != params.options.segmenton && type == 'count')
										? DataPoints.value(dp, params.options.segmenton)
										: type != 'count' && null != property
										? type + " over " + Properties.humanize(property)
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
										null != values
										? DataPoints.value(dp, "value")
										: null != property
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
//trace(Dynamics.string(params));
			handler(params);
		});

		chain.execute(parameters);
	}
}