/**
 * ...
 * @author Franco Ponticelli
 */

package rg;
import rg.controller.App;
import rg.data.source.rgquery.IExecutorReportGrid;
import thx.js.Dom;
import thx.error.Error;
 
class JSBridge 
{
	static function main() 
	{
		// retrieve ReportGrid core
		var o : Dynamic = untyped __js__("window.ReportGrid");
		if (null == o)
			throw new Error("unable to initialize the ReportGrid visualization system, be sure to have loaded already the 'reportgrid-core.js' script");
		
		// init app
		var app = new App(o);	
		
		// define bridge function
		o.viz = function(el : Dynamic, options : Dynamic, ?type : String)
			return app.visualization(select(el), chartopt(options, type));
		
		// define public visualization constrcutors
		o.lineChart = function(el, options) return o.viz(el, options, "linechart");
		o.pieChart = function(el, options) return o.viz(el, options, "piechart");
		o.pivotTable = function(el, options) return o.viz(el, options, "pivottable");
		o.leaderBoard = function(el, options) return o.viz(el, options, "leaderboard");
		
		// utility functions
		o.format = Dynamics.format;
		o.compare = Dynamics.compare;
		o.dump = Dynamics.string;
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
	static function chartopt(o : Dynamic, ?viz : String)
	{
		o = opt(o);
		o.options = opt(o.options);
		if(null != viz)
			o.options.visualization =  viz;
		return o;
	}
}