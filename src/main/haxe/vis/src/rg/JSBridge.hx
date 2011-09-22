/**
 * ...
 * @author Franco Ponticelli
 */

package rg;
import rg.controller.App;
import rg.data.source.rgquery.IExecutorReportGrid;
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
		var console : String -> Void = untyped __js__("(window.console && window.console.warn) || alert");
		console(msg);
	}
	static function main() 
	{
		// retrieve ReportGrid core
		var r : Dynamic = untyped __js__("window.ReportGrid");
		if (null == r)
			log(new Error("unable to initialize the ReportGrid visualization system, be sure to have loaded already the 'reportgrid-core.js' script").toString());
		
		// init app
		var app = new App(r);	
		
		// define bridge function
		r.viz = function(el : Dynamic, options : Dynamic, type : String)
		{
			var o = chartopt(options, type);
//			trace(Dynamics.string(o));
			function execute(opt : Dynamic)
			{
//				trace(Dynamics.string(opt));
				try {
					app.visualization(select(el), opt);
				} catch (e : Error) {
#if release
					log(e.toString);
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
			}
			MVPOptions.complete(r, o, execute);
		}
		
		// define public visualization constrcutors
		r.lineChart    = function(el, options) return r.viz(el, options, "linechart");
		r.pieChart     = function(el, options) return r.viz(el, options, "piechart");
		r.pivotTable   = function(el, options) return r.viz(el, options, "pivottable");
		r.leaderBoard  = function(el, options) return r.viz(el, options, "leaderboard");
		r.barChart     = function(el, options) return r.viz(el, options, "barchart");
		r.funnelChart  = function(el, options) return r.viz(el, options, "funnelchart");
		r.streamGraph  = function(el, options) return r.viz(el, options, "streamgraph");
		r.scatterGraph = function(el, options) return r.viz(el, options, "scattergraph");
		r.heatGrid     = function(el, options) return r.viz(el, options, "heatgrid");
		
		// utility functions
		r.format  = Dynamics.format;
		r.compare = Dynamics.compare;
		r.dump    = Dynamics.string;
		r.symbol  = SymbolCache.cache;
		r.date = { 
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
			parse : DateParser.parse
		};
		r.humanize = function(v : Dynamic)
		{
			if (Std.is(v, String) && Properties.isTime(v))
				return Properties.periodicity(v);
			return RGStrings.humanize(v);
		}
		r.math = {
			random : new Random(666).float
		}
	}
	
	// make sure a thx.js.Selection is passed
	static function select(el : Dynamic)
	{
		var s = if (Std.is(el, String)) Dom.select(el) else Dom.selectNode(el);
		if (s.empty())
			throw new Error("invalid container '{0}'", el);
		return s;
	}
	
	static inline function opt(o : Dynamic) return null == o ? { } : o
	static function chartopt(o : Dynamic, viz : String)
	{
		o = opt(o);
		o.options = opt(o.options);
		o.options.visualization =  null != viz ? viz : o.options.visualization;
		return o;
	}
}