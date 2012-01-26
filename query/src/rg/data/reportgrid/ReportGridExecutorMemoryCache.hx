package rg.data.reportgrid;

import rg.data.reportgrid.IExecutorReportGrid;

class ReportGridExecutorMemoryCache implements IExecutorReportGrid
{
	public var timeout : Int;
	var executor : IExecutorReportGrid;
	var cache : Hash<Dynamic>;
	var queue : Hash<Array<Dynamic -> Void>>;
	public function new(executor : IExecutorReportGrid)
	{
		this.executor = executor;
		cache = new Hash();
		queue = new Hash();
		timeout = 60;
	}

	public function children(path : String, options : { }, success : Array<String> -> Void, ?error : String -> Void) : Void
	{
		var id = id("children", path, options),
			val = getCache(id);
		if(null != val)
			success(val);
		var q = getQueue(id);
		if(null != q)
			q.push(success);
		else
			executor.children(path, options, cacheSuccess(id, success), error);
	}

	public function propertyCount(path : String, options : { property : String }, success : Int -> Void, ?error : String -> Void) : Void
	{
		var id = id("propertyCount", path, options),
			val = getCache(id);
		if(null != val)
			success(val);
		var q = getQueue(id);
		if(null != q)
			q.push(success);
		else
			executor.propertyCount(path, options, cacheSuccess(id, success), error);
	}

	public function propertySeries(path : String, options : { }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void
	{
		var id = id("propertySeries", path, options),
			val = getCache(id);
		if(null != val)
			success(val);
		var q = getQueue(id);
		if(null != q)
			q.push(success);
		else
			executor.propertySeries(path, options, cacheSuccess(id, success), error);
	}

	public function propertyMeans(path : String, options : { }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void
	{
		var id = id("propertyMeans", path, options),
			val = getCache(id);
		if(null != val)
			success(val);
		var q = getQueue(id);
		if(null != q)
			q.push(success);
		else
			executor.propertyMeans(path, options, cacheSuccess(id, success), error);
	}

	public function propertyStandardDeviations(path : String, options : { }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void
	{
		var id = id("propertyStandardDeviations", path, options),
			val = getCache(id);
		if(null != val)
			success(val);
		var q = getQueue(id);
		if(null != q)
			q.push(success);
		else
			executor.propertyStandardDeviations(path, options, cacheSuccess(id, success), error);
	}

	public function propertyValues(path : String, options : { }, success : Array<Dynamic> -> Void, ?error : String -> Void) : Void
	{
		var id = id("propertyValues", path, options),
			val = getCache(id);
		if(null != val)
			success(val);
		var q = getQueue(id);
		if(null != q)
			q.push(success);
		else
			executor.propertyValues(path, options, cacheSuccess(id, success), error);
	}

	public function propertyValueCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void) : Void
	{
		var id = id("propertyValueCount", path, options),
			val = getCache(id);
		if(null != val)
			success(val);
		var q = getQueue(id);
		if(null != q)
			q.push(success);
		else
			executor.propertyValueCount(path, options, cacheSuccess(id, success), error);
	}

	public function propertyValueSeries(path : String, options : { property : String, value : Dynamic }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void
	{
		var id = id("propertyValueSeries", path, options),
			val = getCache(id);
		if(null != val)
			success(val);
		var q = getQueue(id);
		if(null != q)
			q.push(success);
		else
			executor.propertyValueSeries(path, options, cacheSuccess(id, success), error);
	}

	public function searchCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void) : Void
	{
		var id = id("searchCount", path, options),
			val = getCache(id);
		if(null != val)
			success(val);
		var q = getQueue(id);
		if(null != q)
			q.push(success);
		else
			executor.searchCount(path, options, cacheSuccess(id, success), error);
	}

	public function searchSeries(path : String, options : { }, success : TimeSeriesType -> Void, ?error : String -> Void) : Void
	{
		var id = id("searchSeries", path, options),
			val = getCache(id);
		if(null != val)
			success(val);
		var q = getQueue(id);
		if(null != q)
			q.push(success);
		else
			executor.searchSeries(path, options, cacheSuccess(id, success), error);
	}

	public function intersect(path : String, options : { }, success : Dynamic<Dynamic> -> Void, ?error : String -> Void) : Void
	{
		var id = id("intersect", path, options),
			val = getCache(id);
		if(null != val)
			success(val);
		var q = getQueue(id);
		if(null != q)
			q.push(success);
		else
			executor.intersect(path, options, cacheSuccess(id, success), error);
	}

	public function histogram(path : String, options : { property : String, ?limit : Int, ?order : String }, success : Int -> Void, ?error : String -> Void) : Void
	{
		var id = id("histogram", path, options),
			val = getCache(id);
		if(null != val)
			success(val);
		var q = getQueue(id);
		if(null != q)
			q.push(success);
		else
			executor.histogram(path, options, cacheSuccess(id, success), error);
	}

	function cacheSuccess(id : String, success : Dynamic)
	{
		queue.set(id, []);
		return function(r : Dynamic)
		{
			if(timeout >= 0)
				cache.set(id, r);
			if(timeout > 0)
			{
				haxe.Timer.delay(function() {
					cache.remove(id);
				}, timeout * 1000);
			}
			success(r);
			var q = queue.get(id);
			if(null != q)
				for(item in q)
					item(r);
			queue.remove(id);
		}
	}

	function getCache(id : String)
	{
		return cache.get(id);
	}

	function getQueue(id : String)
	{
		if(timeout < 0)
			return null;
		return queue.get(id);
	}

	function id(method : String, path : String, options : Dynamic)
	{
		var s = method + ":" + path + ":" + thx.json.Json.encode(options);
		return haxe.Md5.encode(s);
	}
}