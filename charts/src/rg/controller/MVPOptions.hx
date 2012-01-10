/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller;
import rg.util.Auth;
import rg.util.ChainedExecutor;
import rg.util.Jsonp;
import rg.util.Properties;
import rg.util.DataPoints;
import rg.util.RGStrings;
import rg.util.Urls;
import thx.date.DateParser;
import rg.util.Periodicity;
import thx.error.Error;
import rg.util.RG;
using Arrays;

class MVPOptions
{
	public static function complete(parameters : Dynamic, handler : Dynamic -> Void)
	{
		var chain      = new ChainedExecutor(handler),
			datapoints = null;

		if (null == parameters.options)
			parameters.options = { };
		var options : Dynamic = parameters.options;
		// capture defaults
		// datapoints option
		if(null != parameters.datapoints)
		{
			datapoints = parameters.datapoints;
			Reflect.deleteField(parameters, "datapoints");
		}

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

		// ensure map is array
		if(null != options.map && Types.isAnonymous(options.map))
		{
			options.map = [options.map];
		}

		// best default logo position
		if(null == options.logoposition)
		{
			options.logoposition = switch(options.visualization)
			{
				case "barchart", "linechart", "streamgraph", "scattergraph":
					"top";
				case "heatgrid", "funnelchart":
					"bottomleft";
				case "geo", "sankey":
					"topright";
				case "piechart":
					"bottomright";
				case "leaderboard", "pivottable":
					"after";
				default:
					"top";
			}
		}

		// TODO test with multiple charts in one page
		// TODO move to a function that is called only once for many viz
		// check authorization
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			var authcode = untyped __js__("ReportGrid.authCode"),
				authorized = false;
			if(null == authcode)
			{
				var script = rg.util.Js.findScript("reportgrid-charts.js");
				var args = Urls.parseQueryParameters(untyped script.src);
				authcode = Reflect.field(args, "authCode");
			}
			if(null != authcode)
			{
				var auth  = new Auth(authcode),
					hosts = [],
					host = js.Lib.window.location.hostname;
				if((~/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/).match(host))
				{
					hosts.push(host);
				} else {
					var parts = host.split('.');
					if(parts.length == 3 && parts[0] == 'www')
					{
						parts.shift();
					}
					hosts.push(parts.join('.'));
					while(parts.length > 2)
					{
						parts.shift();
					}
					hosts.push("*."+parts.join('.'));
				}
				params.options.a = authorized = auth.authorizeMany(hosts);
			} else {
				params.options.a = authorized = false;
			}
			handler(params);
		});

		// TODO: this should probably be moved to reportgrid-query.js
		// check RG token
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			var api : (Dynamic -> Void) -> (String -> Void) -> Void = untyped __js__("ReportGrid.token");
			if(params.options.a || null == api)
				handler(params);
			else
			{
				api(function(result) {
					params.options.a = (result.expires <= 0 || result.expires >= Date.now().getTime()) && result.permissions.read;
					handler(params);
				}, function(err) {
					handler(params);
				});
			}
		});

		// ensure data
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			if (null == params.data)
			{
				var src : Array<Dynamic> = [];
				params.data = [{ src : src }];
				if(null != datapoints)
				{
					src.push({ data : datapoints });
				}
			}
			handler(params);
		});

		// ensure axes
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			var axes : Array<Dynamic> = params.axes,
				hasdependent = false;
			if(null == axes)
				axes = [];
			params.axes = axes = axes.map(function(v : Dynamic, _) return Std.is(v, String) ? { type : v } : v);
			for (i in 0...axes.length)
			{
				var variable = axes[i].variable;
				if(null == variable)
					axes[i].variable = !hasdependent && i == axes.length - 1 ? "dependent" : "independent";
				else if("dependent" == variable)
					hasdependent = true;
			}
			handler(params);
		});


		// ensure labels
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			if (null == params.options.label)
			{
				switch(params.options.visualization)
				{
					case "linechart", "barchart", "streamgraph":
						var type = params.axes[0].type;
						params.options.label = {
							datapointover : function(dp, stats) {
								return
									(null != params.options.segmenton
										? Properties.formatValue(params.options.segmenton, dp) + ", "
										: "")
									+
									Properties.formatValue(type, dp)
									+ ": " +
									Properties.formatValue(stats.type, dp)
								;
							}
						};
					case "scattergraph", "heatgrid":
						var type = params.axes[0].type;
						params.options.label = {
							datapointover : function(dp, stats) {
								return
									Properties.formatValue(type, dp)
									+ ": " +
									Properties.formatValue(stats.type, dp)
								;
							}
						};
					case "geo":
						var type = params.axes[0].type,
							maps : Array<Dynamic> = params.options.map;
						maps[maps.length-1].label = {
							datapointover : function(dp, stats) {
								var v = Properties.formatValue(type, dp);
								if(null == v)
									return null;
								return
									v
									+ ": " +
									Properties.formatValue(stats.type, dp)
								;
							}
						};
					case "piechart":
						params.options.label = {
							datapoint : function(dp, stats) {
								var v = DataPoints.value(dp, stats.type);
								return
									stats.tot != 0.0
									? Floats.format(Math.round(1000 * v / stats.tot)/10, "P:1")
									: RGStrings.humanize(v)
								;
							},

							datapointover : function(dp, stats) {
								return
									Properties.humanize(stats.type) + ": " +
									Properties.formatValue(stats.type, dp)
								;
							}
						};
					case "leaderboard":
						var type = params.axes[0].type;
						params.options.label = {
							datapointover : function(dp, stats) {
								var v = DataPoints.value(dp, stats.type);
								return
									stats.tot != 0.0
									? Floats.format(Math.round(1000 * v / stats.tot)/10, "P:1")
									: RGStrings.humanize(v)
								;
							},

							datapoint : function(dp, stats) {
								return
									Properties.formatValue(type, dp)
									 + ": " +
									Properties.formatValue(stats.type, dp)
								;
							}
						};
					case "sankey":
						var axes : Array<Dynamic> = params.axes,
							type = axes[axes.length - 1].type;
						params.options.label = {
							datapointover : function(dp, stats) {
								var v = DataPoints.value(dp, type);
								return
									Properties.humanize(type) + ": " +
									Properties.formatValue(type, dp)
									+ "\n" + (
										stats.tot != 0.0
										? Floats.format(Math.round(1000 * v / stats.tot)/10, "P:1")
										: RGStrings.humanize(v)
									)
								;
							},

							node : function(dp, stats) {
								return dp.id;
							},

							datapoint : function(dp, stats) {
								return
									Properties.formatValue(type, dp)
									+ "\n"
									+ Properties.humanize(type)
								;
							},

							edge : function(dp : Dynamic, stats)
							{
								return Floats.format(100 * dp.edgeweight / dp.nodeweight, "D:0")+"%";
							},

							edgeover : function(dp : Dynamic, stats)
							{
								return Floats.format(dp.edgeweight, "D:0") + "\n" + Floats.format(100 * dp.edgeweight / dp.nodeweight, "D:0")+"%";
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