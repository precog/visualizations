/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller;
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
//					case "funnelchart":

					case "linechart", "barchart", "streamgraph":
						var axes : Array<Dynamic> = params.axes,
							type = axes[axes.length - 1].type;
						params.options.label = {
							datapointover : function(dp, stats) {
								return
									Properties.humanize(type) + ": " +
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
									Properties.humanize(type) + ": " +
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
									Properties.humanize(type) + ": " +
									RGStrings.humanize(DataPoints.value(dp, type))
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
									RGStrings.humanize(DataPoints.value(dp, type))
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
									RGStrings.humanize(DataPoints.value(dp, type))
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