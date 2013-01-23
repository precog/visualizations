/**
 * ...
 * @author Franco Ponticelli
 */

package rg.app.charts;
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
import rg.html.widget.Logo;
using Arrays;

class MVPOptions
{
	public dynamic static function a1(params : Dynamic, handler : Dynamic -> Void)
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
				host = js.Browser.window.location.hostname;
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
			authorized = auth.authorizeMany(hosts);
		} else {
			authorized = Logo.pageIsBranded();
		}
		a1 = function(params : Dynamic, handler : Dynamic -> Void)
		{
			params.options.a = authorized;
			handler(params);
		}
		a1(params, handler);
	}

	public dynamic static function a2(params : Dynamic, handler : Dynamic -> Void)
	{
		var changeAndToggle = function(auth : Null<Bool>)
		{
			if(null == auth)
			{
				a2 = function(params : Dynamic, handler : Dynamic -> Void)
				{
					handler(params);
				}
			} else {
				a2 = function(params : Dynamic, handler : Dynamic -> Void)
				{
					params.options.a = auth;
					handler(params);
				}
			}
			a2(params, handler);
		}
		var api : (Dynamic -> Void) -> (String -> Void) -> Void = untyped __js__("ReportGrid.token");
		if(params.options.a || null == api)
		{
			changeAndToggle(null);
		} else
		{
			api(function(result) {
				changeAndToggle((result.expires <= 0 || result.expires >= Date.now().getTime()) && result.permissions.read);
			}, function(err) {
				changeAndToggle(null);
			});
		}
	}

	public static function complete(parameters : Dynamic, handler : Dynamic -> Void)
	{
		var chain = new ChainedExecutor(handler);

		if (null == parameters.options)
			parameters.options = { };
		var options : Dynamic = parameters.options;
		// capture defaults

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

		// TODO test with multiple charts in one page
		// TODO move to a function that is called only once for many viz
		// check authorization
		chain.addAction(a1);

		// TODO: this should probably be moved to reportgrid-query.js
		// check RG token
		chain.addAction(a2);

		// ensure axes
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			var axes : Array<Dynamic> = params.axes,
				hasdependent = false;
			if(null == axes)
				axes = [];
			params.axes = axes = axes.map(function(v : Dynamic) return Std.is(v, String) ? { type : v } : v);
			for (i in 0...axes.length)
			{
				var variable = axes[i].variable;
				if(null == variable)
					axes[i].variable = !hasdependent && i == axes.length - 1 ? "dependent" : "independent";
				else if("dependent" == variable)
					hasdependent = true;
			}
			for(axis in axes)
			{
				if(axis.variable == "dependent")
				{

				} else {
					switch(params.options.visualization)
					{
						case "barchart", "pivottable":
							if(null == axis.scalemode)
								axis.scalemode = "fit";
					}
				}
			}
			handler(params);
		});


		// ensure labels
		chain.addAction(function(params : Dynamic, handler : Dynamic -> Void)
		{
			if (null == params.options.label)
			{
				params.options.label = {};
			}
			switch(params.options.visualization)
			{
				case "linechart", "barchart", "streamgraph":
					var type = params.axes[0].type;
					if(null == params.options.label.datapointover)
						params.options.label.datapointover = function(dp, stats) {
							return
								(null != params.options.segmenton
									? Properties.formatValue(params.options.segmenton, dp) + ", "
									: "")
								+
								Properties.formatValue(type, dp)
								+ ": " +
								Properties.formatValue(stats.type, dp)
							;
						};
				case "scattergraph", "heatgrid":
					var type = params.axes[0].type;
					if(null == params.options.label.datapointover)
						params.options.label.datapointover = function(dp, stats) {
							return
								Properties.formatValue(type, dp)
								+ ": " +
								Properties.formatValue(stats.type, dp)
							;
						};
				case "geo":
					var type = params.axes[0].type,
						maps : Array<Dynamic> = params.options.map;
					if(null == maps[maps.length-1].label)
						maps[maps.length-1].label = {};
					if(null == maps[maps.length-1].label.datapointover)
						maps[maps.length-1].label.datapointover = function(dp, stats) {
							var v = Properties.formatValue(type, dp);
							if(null == v)
								return null;
							return
								v
								+ ": " +
								Properties.formatValue(stats.type, dp)
							;
						};
				case "piechart":
					if(null == params.options.label.datapoint)
						params.options.label.datapoint = function(dp, stats) {
							var v = DataPoints.value(dp, stats.type);
							return
								params.axes.length > 1
								? Properties.formatValue(params.axes[0].type, dp)
								: (stats.tot != 0.0
									? Floats.format(Math.round(1000 * v / stats.tot)/10, "P:1")
									: RGStrings.humanize(v))
							;
						};

					if(null == params.options.label.datapointover)
						params.options.label.datapointover = function(dp, stats) {
							var v = DataPoints.value(dp, stats.type);
							return
								Properties.humanize(stats.type) + ": " +
								RGStrings.humanize(v) + (
									params.axes.length > 1 && stats.tot != 0.0
									? " ("+Floats.format(Math.round(1000 * v / stats.tot)/10, "P:1")+")"
									: "")
							;
						};
				case "funnelchart":
					if(null == params.options.label.datapointover)
						params.options.label.datapointover = function(dp, stats) {
							var v = DataPoints.value(dp, stats.type);
							return
								Properties.humanize(stats.type) + ": " +
								RGStrings.humanize(v) + (
									params.axes.length > 1 && stats.tot != 0.0
									? " ("+Floats.format(Math.round(1000 * v / stats.tot)/10, "P:1")+")"
									: "")
							;
						};
				case "sankey":
					var axes : Array<Dynamic> = params.axes,
						type = axes[axes.length - 1].type;

					if(null == params.options.label.datapointover)
						params.options.label.datapointover = function(dp, stats) {
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
						};
					if(null == params.options.label.node)
						params.options.label.node = function(dp, stats) {
							return null != dp ? dp.id : "";
						};
					if(null == params.options.label.datapoint)
						params.options.label.datapoint = function(dp, stats) {
							return
								Properties.formatValue(type, dp)
								+ "\n"
								+ Properties.humanize(type)
							;
						};
					if(null == params.options.label.edge)
						params.options.label.edge = function(dp : Dynamic, stats)
						{
							return Floats.format(100 * dp.edgeweight / dp.nodeweight, "D:0")+"%";
						};
					if(null == params.options.label.edgeover)
						params.options.label.edgeover = function(dp : Dynamic, stats)
						{
							return Floats.format(dp.edgeweight, "D:0") + "\n" + Floats.format(100 * dp.edgeweight / dp.nodeweight, "D:0")+"%";
						};
			}
			handler(params);
		});

		chain.execute(parameters);
	}
}