package rg.data.reportgrid;

import rg.data.reportgrid.IExecutorReportGrid;
import rg.storage.IStorage;
using Iterators;
using Arrays;

class ReportGridExecutorCache implements IExecutorReportGrid
{
	static var DATE_PREFIX = "D:";
	static var VALUE_PREFIX = "V:";
	public var timeout(default, null) : Int;
	var executor : IExecutorReportGrid;
	var storage : IStorage;
	var queue : Hash<Array<Dynamic -> Void>>;
	public function new(executor : IExecutorReportGrid, storage : IStorage, timeout : Int)
	{
		this.executor = executor;
		this.storage = storage;
		queue = new Hash();
		this.timeout = timeout;
		cleanOld();
	}

	public function children(path : String, options : { ?type : String, ?property : String}, success : Array<String> -> Void, ?error : String -> Void) : Void
	{
		execute("children", path, options, success, error);
	}

	public function propertyCount(path : String, options : { property : String }, success : Int -> Void, ?error : String -> Void) : Void
	{
		execute("propertyCount", path, options, success, error);
	}

	public function propertySeries(path : String, options : { property : String }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void
	{
		execute("propertySeries", path, options, success, error);
	}

	public function propertyMeans(path : String, options : { property : String, periodicity : String }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void
	{
		execute("propertyMeans", path, options, success, error);
	}

	public function propertyStandardDeviations(path : String, options : { property : String, periodicity : String }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void
	{
		execute("propertyStandardDeviations", path, options, success, error);
	}

	public function propertyValues(path : String, options : { property : String }, success : Array<Dynamic> -> Void, ?error : String -> Void) : Void
	{
		execute("propertyValues", path, options, success, error);
	}

	public function propertyValueCount(path : String, options : { property : String, value : Dynamic }, success : Int -> Void, ?error : String -> Void) : Void
	{
		execute("propertyValueCount", path, options, success, error);
	}

	public function propertyValueSeries(path : String, options : { property : String, value : Dynamic }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void
	{
		execute("propertyValueSeries", path, options, success, error);
	}

	public function searchCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void) : Void
	{
		execute("searchCount", path, options, success, error);
	}

	public function searchSeries(path : String, options : { }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void
	{
		execute("searchSeries", path, options, success, error);
	}

	public function intersect(path : String, options : { }, success : Dynamic<Dynamic> -> Void, ?error : String -> Void) : Void
	{
		execute("intersect", path, options, success, error);
	}

	public function histogram(path : String, options : { property : String, ?top : Int, ?bottom : Int }, success : Int -> Void, ?error : String -> Void) : Void
	{
		execute("histogram", path, options, success, error);
	}

	public function propertiesHistogram(path : String, options : { property : String, ?top : Int, ?bottom : Int }, success : Int -> Void, ?error : String -> Void) : Void
	{
		execute("propertiesHistogram", path, options, success, error);
	}

	public function setCacheTimeout(t : Int)
	{
		timeout = t;
	}

	function execute(name : String, path : String, options : Dynamic, success : Dynamic -> Void, ?error : String -> Void)
	{
		normalizePeriod(options);
		var id = uidquery(name, path, options),
			val = cacheGet(id);
		if(null != val)
		{
//			trace("from cache: " + name);
			success(val);
			return;
		}
		var q = getQueue(id);
		if(null != q)
		{
//			trace("queues: " + name);
			q.push(success);
		}
		else
		{
//			trace("live query: " + name);
			Reflect.field(executor, name)(path, options, storageSuccess(id, success), error);
		}
	}

	function normalizePeriod(options : { ?periodicity : String, ?start : Float, ?end : Float })
	{
		var periodicity = options.periodicity;
		if(null == periodicity && options.start != null && options.end != null)
			periodicity = rg.util.Periodicity.defaultPeriodicity(options.end-options.start);
		if(null == periodicity)
			return;
		if(null != options.start)
			options.start = Dates.snap(options.start, periodicity, -1);
		if(null != options.end)
			options.end = Dates.snap(options.end, periodicity, -1);
	}

	function storageSuccess(id : String, success : Dynamic)
	{
		queue.set(id, []);
		return function(r : Dynamic)
		{
			if(timeout > 0)
			{
				cacheSet(id, r);
				delayedCleanup(id);
			}
			success(r);
			var q = queue.get(id);
			if(null != q)
				for(item in q)
					item(r);
			queue.remove(id);
		}
	}

	function clearValueIfOld(id : String)
	{
		var idd = idDate(id);
		var v = storage.get(idd);
		if(null == v)
			return;
		if(v < Date.now().getTime() - timeout * 1000)
		{
			storage.remove(idd);
			storage.remove(idValue(id));
//			trace("cleared " + id);
		}
	}

	function delayedCleanup(id : String)
	{
		haxe.Timer.delay(function() {
//			trace("delayed cleanup");
			cacheRemove(id);
		}, timeout * 1000);
	}

	function cacheSet(id : String, value : Dynamic)
	{
		storage.set(idDate(id), Date.now().getTime());
		storage.set(idValue(id), value);
	}

	function cacheGet(id : String)
	{
		clearValueIfOld(id);
		var v = storage.get(idValue(id));
		if(null != v) delayedCleanup(id);
		return v;
	}

	function cacheRemove(id : String)
	{
		storage.remove(idDate(id));
		storage.remove(idValue(id));
//		trace("removed from cache " + id);
	}

	function ids()
	{
		var len = VALUE_PREFIX.length;
		return storage.keys().filter(function(cid) {
			return cid.substr(0, len) == VALUE_PREFIX;
		}).map(function(cid, _) {
			return cid.substr(len);
		});
	}

	function cleanOld()
	{
//		trace("trying cleanup");
		for(id in ids())
		{
			clearValueIfOld(id);
		}
	}

	function getQueue(id : String)
	{
		if(timeout < 0)
			return null;
		return queue.get(id);
	}


	inline function idDate(id : String) return DATE_PREFIX + id
	inline function idValue(id : String) return VALUE_PREFIX + id

	function uidquery(method : String, path : String, options : Dynamic)
	{
		var s = method + ":" + path + ":" + thx.json.Json.encode(options);
		return haxe.Md5.encode(s);
	}
}