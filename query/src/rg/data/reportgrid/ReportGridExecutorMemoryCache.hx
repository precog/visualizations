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

	function execute(name : String, path : String, options : {}, success : Dynamic -> Void, ?error : String -> Void)
	{
		var id = id(name, path, options),
			val = getCache(id);
		if(null != val)
			success(val);
		var q = getQueue(id);
		if(null != q)
			q.push(success);
		else
			Reflect.field(executor, name)(path, options, cacheSuccess(id, success), error);
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