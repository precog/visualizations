/**
 * ...
 * @author Franco Ponticelli
 */

package rg;
import rg.controller.App;
import rg.data.source.rgquery.IExecutorReportGrid;
import rg.data.source.rgquery.ITrackReportGrid;
import rg.data.source.rgquery.ReportGridExecutorMemoryCache;
import rg.util.Periodicity;
import rg.util.Properties;
import rg.util.RGStrings;
import thx.date.DateParser;
import thx.js.Dom;
import thx.error.Error;
import thx.math.Random;
import rg.controller.MVPOptions;
//import thx.svg.Symbol;
import rg.view.svg.util.SymbolCache;

class JSBridge
{
	static function log(msg : String)
	{
		var c : String -> Void = untyped __js__("(window.console && window.console.warn) || alert");
		c(msg);
	}
	static function main()
	{
		// retrieve ReportGrid core
		var r : Dynamic = untyped __js__("window.ReportGrid"),
			t : ITrackReportGrid =
#if release
				new rg.track.ReportGridExecutor();
#elseif debug
				new rg.track.DebugExecutor();
#else
				null;
#end
		if (null == r)
			log(new Error("unable to initialize the ReportGrid visualization system, be sure to have loaded already the 'reportgrid-core.js' script").toString());

		// init app
		var executor = new ReportGridExecutorMemoryCache(r),
			app = new App(executor, t);

		// define bridge function
		r.viz = function(el : Dynamic, options : Dynamic, type : String)
		{
			var copt = chartopt(options, type);
//			trace(Dynamics.string(copt));

			MVPOptions.complete(r, copt, function(opt : Dynamic) {
//				trace(Dynamics.string(opt));
				try {
					app.visualization(select(el), opt);
				} catch (e : Error) {
#if release
					log(e.toString());
#else
					var msg = "ERROR AT " + e.toStringError();
#if debug // stack trace is available
					msg += "\n\n  " + rg.util.RGStacks.exceptionStack().join("\n  ");
#end
					log(msg);
#end
				} catch (e : Dynamic) {
					log(Std.string(e));
				}
			});
		}

		// define public visualization constrcutors
		r.parseQueryParameters = rg.util.Urls.parseQueryParameters;
		r.findScript           = rg.util.Js.findScript;
		r.barChart             = function(el, options) return r.viz(el, options, "barchart");
		r.funnelChart          = function(el, options) return r.viz(el, options, "funnelchart");
		r.geo                  = function(el, options) return r.viz(el, options, "geo");
		r.heatGrid             = function(el, options) return r.viz(el, options, "heatgrid");
		r.leaderBoard          = function(el, options) return r.viz(el, options, "leaderboard");
		r.lineChart            = function(el, options) return r.viz(el, options, "linechart");
		r.pieChart             = function(el, options) return r.viz(el, options, "piechart");
		r.pivotTable           = function(el, options) return r.viz(el, options, "pivottable");
		r.sankey               = function(el, options) return r.viz(el, options, "sankey");
		r.scatterGraph         = function(el, options) return r.viz(el, options, "scattergraph");
		r.streamGraph          = function(el, options) return r.viz(el, options, "streamgraph");

		// utility functions
		r.format  = Dynamics.format;
		r.compare = Dynamics.compare;
		r.dump    = Dynamics.string;
		r.symbol  = SymbolCache.cache.get;
		r.date    = {
			range : function(a : Dynamic, b : Dynamic, p : String) {
				if (Std.is(a, String))
					a = DateParser.parse(a);
				if (null == a)
					a = Periodicity.defaultRange(p)[0];
				if (Std.is(a, Date))
					a = a.getTime();

				if (Std.is(b, String))
					b = DateParser.parse(b);
				if (null == b)
					b = Periodicity.defaultRange(p)[1];
				if (Std.is(b, Date))
					b = b.getTime();
				return Periodicity.range(a, b, p);
			},
			parse : DateParser.parse,
			snap : Dates.snap
		};
		r.humanize = function(v : Dynamic)
		{
			if (Std.is(v, String) && Properties.isTime(v))
				return Properties.periodicity(v);
			return RGStrings.humanize(v);
		}
		var rand = new Random(666);
		r.math = { random : function() return rand.float() }

		r.info = null != r.info ? r.info : { };
		r.info.viz = {
			version : thx.util.MacroVersion.fullVersion()
		};
		r.cache = {
			setTime : function(t) {
				executor.timeout = t;
			}
		};
	}

	// make sure a thx.js.Selection is passed
	static function select(el : Dynamic)
	{
		var s = if (Std.is(el, String)) Dom.select(el) else Dom.selectNode(el);
		if (s.empty())
			throw new Error("invalid container '{0}'", el);
		return s;
	}

	static inline function opt(ob : Dynamic) return null == ob ? { } : Objects.clone(ob)
	static function chartopt(ob : Dynamic, viz : String)
	{
		ob = opt(ob);
		ob.options = opt(ob.options);
		ob.options.visualization =  null != viz ? viz : ob.options.visualization;
		return ob;
	}
}