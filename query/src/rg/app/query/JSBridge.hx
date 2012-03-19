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
	static function createQuery(executor : IExecutorReportGrid)
	{
		var inst = ReportGridQuery.create(executor);
		var query = {};
		for(field in Type.getInstanceFields(Type.getClass(inst)))
		{
			if(field.substr(0,1) == '_' || !Reflect.isFunction(Reflect.field(inst, field)))
				continue;
			Reflect.setField(query, field, function() {
				var ob = ReportGridQuery.create(executor),
					f  = Reflect.field(ob, field);
				return Reflect.callMethod(ob, f, untyped __js__('arguments'));
			});
		}
		return query;
	}

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

		var r : Dynamic = untyped __js__("(!ReportGrid) ? (ReportGrid = {}) : ReportGrid"),
			timeout = 120,
			executor : IExecutorReportGrid = new ReportGridExecutorCache(r, storage, timeout);
		r.query = createQuery(executor);
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
					r.query = createQuery(executor);
				}
			},
			enable : function() {
				if(null == executor || !Std.is(executor, ReportGridExecutorCache))
				{
					r.cache.executor = executor = new ReportGridExecutorCache(r, storage, timeout);
					r.query = createQuery(executor);
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