/**
 * ...
 * @author Franco Ponticelli
 */

package rg.app.charts;
import rg.app.charts.App;
import rg.util.Periodicity;
import rg.util.Properties;
import rg.util.RGStrings;
import thx.date.DateParser;
import dhx.Dom;
import thx.error.Error;
import thx.math.Random;
import rg.app.charts.MVPOptions;
//import thx.svg.Symbol;
import rg.svg.util.SymbolCache;
import thx.util.MacroVersion;

class JSBridge
{
	static function log(msg : String)
	{
		var c : String -> Void = untyped __js__("(window.console && window.console.warn) || alert");
		c(msg);
	}

	// Returns the version of Internet Explorer or a -1
	// (indicating the use of another browser).
	static function getInternetExplorerVersion()
	{
		var rv = -1.0; // Return value assumes failure.
		if (js.Lib.window.navigator.appName == 'Microsoft Internet Explorer')
		{
			var ua = js.Lib.window.navigator.userAgent;
			var re  = ~/MSIE ([0-9]{1,}[\.0-9]{0,})/;
			if (re.match(ua) != null)
				rv = Std.parseFloat(re.matched(1));
		}
		return rv;
	}

	static function main()
	{
		// check for IE8 or older and return
//		var msiev = getInternetExplorerVersion();
//		if(msiev >= 0 && msiev < 9)
//			return;

		var r : Dynamic = untyped __js__("(typeof ReportGrid == 'undefined') ? (window['ReportGrid'] = {}) : ReportGrid");

		// init app
		var globalNotifier = new hxevents.Notifier();
		var globalReady = false;

		globalNotifier.addOnce(function() {
			globalReady = true;
		});

		r.charts = {
			ready : function(handler : Void -> Void) {
				if(globalReady)
					handler();
				else
					globalNotifier.add(handler);
			}
		};

		var app = new App(globalNotifier);



		// define bridge function
		r.chart = function(el : Dynamic, options : Dynamic, type : String)
		{
			var copt = chartopt(options, type);
			copt.options.a = false; // authorized
			MVPOptions.complete(copt, function(opt : Dynamic) {
#if release
				try {
#end
					app.visualization(select(el), opt);
#if release
				} catch (e : Error) {
					log(e.toString());
				} catch (e : Dynamic) {
					log(Std.string(e));
				}
#end
			});
		}

		// define public visualization constrcutors
//		register("barChart", function(el, options) return r.chart(el, options, "barchart"));
//		JsExport.property(r, "barChart", function(el, options) return r.chart(el, options, "barchart"));
		r.barChart     = function(el, options) return r.chart(el, options, "barchart");
		r.funnelChart  = function(el, options) return r.chart(el, options, "funnelchart");
		r.geo          = function(el, options) return r.chart(el, options, "geo");
		r.heatGrid     = function(el, options) return r.chart(el, options, "heatgrid");
		r.leaderBoard  = function(el, options) return r.chart(el, options, "leaderboard");
		r.lineChart    = function(el, options) return r.chart(el, options, "linechart");
		r.pieChart     = function(el, options) return r.chart(el, options, "piechart");
		r.pivotTable   = function(el, options) return r.chart(el, options, "pivottable");
		r.sankey       = function(el, options) return r.chart(el, options, "sankey");
		r.scatterGraph = function(el, options) return r.chart(el, options, "scattergraph");
		r.streamGraph  = function(el, options) return r.chart(el, options, "streamgraph");

		// utility functions
		r.parseQueryParameters = rg.util.Urls.parseQueryParameters;
		r.findScript           = rg.util.Js.findScript;
		r.format               = Dynamics.format;
		r.compare              = Dynamics.compare;
		r.dump                 = Dynamics.string;
		var scache             = SymbolCache.cache;
		r.symbol               = function(type, size) return scache.get(type, null == size ? 100 : size);
		r.date                 = {
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
			formatPeriodicity : function(date, periodicity)
			{
				var d : Float = Std.is(cast date, Date) ? date.getTime() : (Std.is(cast date, Float) ? cast date : thx.date.DateParser.parse(cast date).getTime() );
				return Periodicity.format(periodicity, d);
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
		r.math = {
			setRandomSeed : function(s) rand = new Random(s),
			random : function() return rand.float()
		}

		r.query = null != r.query ? r.query : createQuery(); // rg.query.Query.create();

		r.info = null != r.info ? r.info : { };
		r.info.charts = {
			version : MacroVersion.next()
		};
		r.getTooltip = function() {
			return rg.html.widget.Tooltip.instance;
		};

//		untyped JsExport.property(rg.util.ChainedExecutor.prototype, "execute", rg.util.ChainedExecutor.prototype.execute);
	}

	static function createQuery()
	{
		var inst = rg.query.Query.create(); //ReportGridQuery.create(executor);
		var query = {};
		for(field in Type.getInstanceFields(Type.getClass(inst)))
		{
			if(field.substr(0,1) == '_' || !Reflect.isFunction(Reflect.field(inst, field)))
				continue;
			Reflect.setField(query, field, function() {
				var ob = rg.query.Query.create(),
					f  = Reflect.field(ob, field);
				return Reflect.callMethod(ob, f, untyped __js__('arguments'));
			});
		}
		return query;
	}
/*
	static function register(name : String, value : Dynamic)
	{
		Reflect.setField(untyped __js__("window['ReportGrid']"), name, value);
	}
*/
	// make sure a dhx.Selection is passed
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
/*
class JsExport
{
	public static function path(path : String, obj : Dynamic, ?anchor : Dynamic)
	{
		var parts = path.split("."),
			cur   = null == anchor ? js.Lib.window : anchor,
			part;

		while(null != (part = parts.shift()))
		{
			if(cur[part])
			{
				cur = cur[part];
			} else {
				cur = cur[part] = {};
			}
			if(parts.length == 0)
				cur[part] = obj;
		}
	}

	public static function property(obj : Dynamic, name : String, symbol : Dynamic)
	{
		untyped obj[name] = symbol;
	}
}
*/