/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoDataSourceReportGrid;
import rg.data.reportgrid.IDataSource;
import rg.data.reportgrid.DataSourceReportGrid;
import rg.data.reportgrid.DataSourceReportGridGraph;
import rg.data.reportgrid.IExecutorReportGrid;
import rg.data.reportgrid.QueryParser;
import thx.error.Error;
import rg.data.DataPoint;
import rg.data.reportgrid.QueryAst;

class FactoryDataSourceReportGrid
{
	var parser : QueryParser;
	var executor : IExecutorReportGrid;
	public function new(executor : IExecutorReportGrid)
	{
		this.parser = new QueryParser();
		this.executor = executor;
	}

	public function create(info : InfoDataSourceReportGrid) : Array<IDataSource>
	{
		if (null != info.path && info.events.length > 0 && null != info.identifier && null != info.parent)
		{
			var results = [];
			for(event in info.events)
				results.push(createFromGraph(info.path, event, info.identifier, info.parent, info.where, info.start, info.end));
			return results;
		}
		if (null != info.path && info.events.length > 0)
		{
			var results = [];
			for(event in info.events)
				results.push(createFromQuery(info.path, event, info.query, info.statistic, info.tag, info.location, info.groupBy, info.timeZone, info.start, info.end));
			return results;
		}
		return throw new Error("not enough information have been passed for the query to work");
	}

	function createFromQuery(path : String, event : String, query : Null<String>, statistic : QOperation, tag : Null<String>, location : Null<String>, groupby : Null<String>, timeZone : Null<String>, start : Null<Float>, end : Null<Float>) : IDataSource
	{
		if (null == query)
			query = "";
		return new DataSourceReportGrid(executor, path, event, parser.parse(query), statistic, tag, location, groupby, timeZone, start, end);
	}

	function createFromGraph(path : String, event : String, idproperty : String, parentproperty : String, whereConditions : Null<Array<{ property : String, value : Dynamic }>>, start : Null<Float>, end : Null<Float>) : IDataSource
	{
		return new DataSourceReportGridGraph(executor, path, event, idproperty, parentproperty, whereConditions, start, end);
	}
}