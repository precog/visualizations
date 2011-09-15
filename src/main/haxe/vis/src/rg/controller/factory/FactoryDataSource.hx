/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoDataSource;
import rg.data.IDataSource;
import rg.data.source.DataSourceArray;
import rg.data.source.DataSourceReportGrid;
import rg.data.source.rgquery.IExecutorReportGrid;
import rg.data.source.rgquery.QueryParser;
import thx.error.Error;
import rg.data.DataPoint;
/*
	public var query : Null<String>;
	public var path : Null<String>;
	public var event : Null<String>;
	public var namedData : Null<String>;
	public var data : Null<Array<Dynamic>>;
*/
class FactoryDataSource 
{
	var cache : Hash<IDataSource>;
	var parser : QueryParser;
	var executor : IExecutorReportGrid;
	public function new(cache : Hash<IDataSource>, executor : IExecutorReportGrid)
	{
		this.cache = cache;
		this.parser = new QueryParser();
		this.executor = executor;
	}
	
	public function create(info : InfoDataSource) : IDataSource
	{
		if (null != info.namedData)
		{
			var data = cache.get(info.namedData);
			if (null == data)
				throw new Error("the data source named '{0}' cannot be found in the current context", info.name);
			return data;
		}
		if (null != info.data)
		{
			return createFromData(info.data);
		} 
		if (null != info.path && null != info.event)
		{
			return createFromQuery(info.path, info.event, info.query, info.groupBy, info.timeZone, info.start, info.end);
		}
		throw new Error("to create a query you need to reference by name an existing data source or provide  at least the data and the name or the event and the path parameters");
	}
	
	function createFromData(data : Array<DataPoint>)
	{
		return new DataSourceArray(data);
	}
	
	function createFromQuery(path : String, event : String, query : Null<String>, groupby : Null<String>, timeZone : Null<String>, start : Null<Float>, end : Null<Float>)
	{
		if (null == query)
			query = "";
		return new DataSourceReportGrid(executor, path, event, parser.parse(query), groupby, timeZone, start, end);
	}
}