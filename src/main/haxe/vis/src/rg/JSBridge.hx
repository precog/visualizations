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
		var o : Dynamic = untyped __js__("window.ReportGrid");
		if (null == o)
			log(new Error("unable to initialize the ReportGrid visualization system, be sure to have loaded already the 'reportgrid-core.js' script").toString());
		
		// init app
		var app = new App(o);	
		
		// define bridge function
		o.viz = function(el : Dynamic, options : Dynamic, type : String)
		{
			try {
				return app.visualization(select(el), chartopt(options, type));
			} catch (e : Dynamic) {
				log(Std.string(e));
				return null;
			}
		}
		
		// define public visualization constrcutors
		o.lineChart    = function(el, options) return o.viz(el, options, "linechart");
		o.pieChart     = function(el, options) return o.viz(el, options, "piechart");
		o.pivotTable   = function(el, options) return o.viz(el, options, "pivottable");
		o.leaderBoard  = function(el, options) return o.viz(el, options, "leaderboard");
		o.barChart     = function(el, options) return o.viz(el, options, "barchart");
		o.funnelChart  = function(el, options) return o.viz(el, options, "funnelchart");
		o.streamGraph  = function(el, options) return o.viz(el, options, "streamgraph");
		o.scatterGraph = function(el, options) return o.viz(el, options, "scattergraph");
		o.heatGrid     = function(el, options) return o.viz(el, options, "heatgrid");
		
		// utility functions
		o.format  = Dynamics.format;
		o.compare = Dynamics.compare;
		o.dump    = Dynamics.string;
		o.symbol  = SymbolCache.cache;
		o.date = { 
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
		o.humanize = function(v : Dynamic)
		{
			if (Std.is(v, String) && Properties.isTime(v))
				return Properties.periodicity(v);
			return RGStrings.humanize(v);
		}
		o.math = {
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
		o.options.visualization =  viz;
		return o;
	}
}