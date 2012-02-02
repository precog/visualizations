package rg.app.query;

import rg.data.DataPoint;
import rg.data.reportgrid.ReportGridExecutorCache;
import rg.data.reportgrid.IExecutorReportGrid;
import rg.storage.IStorage;
import rg.storage.MemoryStorage;
import rg.storage.BrowserStorage;
import rg.query.ReportGridQuery;
import thx.math.Random;
import thx.date.DateParser;
import rg.util.Periodicity;

class JSBridge
{
	static function main()
	{
#if !release
		if(haxe.Firebug.detect()) haxe.Firebug.redirectTraces();
#end
		var storage : IStorage;
		if(BrowserStorage.hasSessionStorage())
			storage = BrowserStorage.sessionStorage()
		else
			storage = new MemoryStorage();

		var r : Dynamic = untyped __js__("(typeof ReportGrid == 'undefined') ? (ReportGrid = {}) : ReportGrid"),
			timeout = 120,
			executor : IExecutorReportGrid = new ReportGridExecutorCache(r, storage, timeout);
		r.query = ReportGridQuery.create(executor);
		r.date  = {
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
		r.info = null != r.info ? r.info : { };
		r.info.query = {
			version : thx.util.MacroVersion.fullVersion()
		};

		var rand = new Random(666);
		r.math = {
			setRandomSeed : function(s) rand = new Random(s),
			random : function() return rand.float()
		}
		r.cache = {
			executor : executor,
			disable : function() {
				if(null == executor || Std.is(executor, ReportGridExecutorCache))
				{
					r.cache.executor = executor = r;
					r.query = ReportGridQuery.create(executor);
				}
			},
			enable : function() {
				if(null == executor || !Std.is(executor, ReportGridExecutorCache))
				{
					r.cache.executor = executor = new ReportGridExecutorCache(r, storage, timeout);
					r.query = ReportGridQuery.create(executor);
				}
			},
			setTimeout : function(t : Int) {
				executor = null;
				timeout = t;
				r.cache.enable();
			},
			memoryStorage : function() {
				executor = null;
				storage = new MemoryStorage();
				r.cache.enable();
			},
			sessionStorage : function() {
				executor = null;
				if(BrowserStorage.hasSessionStorage())
					storage = BrowserStorage.sessionStorage()
				else
					storage = new MemoryStorage();
				r.cache.enable();
			},
			localStorage : function() {
				executor = null;
				if(BrowserStorage.hasLocalStorage())
					storage = BrowserStorage.localStorage()
				else if(BrowserStorage.hasSessionStorage())
					storage = BrowserStorage.sessionStorage()
				else
					storage = new MemoryStorage();
				r.cache.enable();
			}
		};
	}

	static inline function opt(ob : Dynamic) return null == ob ? { } : Objects.clone(ob)
}