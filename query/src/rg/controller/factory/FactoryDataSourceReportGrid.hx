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
	var executor : IExecutorReportGrid;
	public function new(executor : IExecutorReportGrid)
	{
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
				results.push(createFromQuery(info.path, event, info.properties, info.where, info.statistic, info.tag, info.location, info.groupBy, info.timeZone, info.periodicity, info.start, info.end, info.limit, info.descending));
			return results;
		}
		return throw new Error("not enough information have been passed for the query to work");
	}

	function createFromQuery(path : String, event : String, properties : Null<Array<String>>, where : Null<Array<{ property : String, value : Dynamic }>>, statistic : QOperation, tag : Null<String>, location : Null<String>, groupby : Null<String>, timeZone : Null<String>, periodicity : Null<String>, start : Null<Float>, end : Null<Float>, limit : Int, descending : Bool) : IDataSource
	{
		return new DataSourceReportGrid(executor, path, event, properties, where, statistic, tag, location, groupby, timeZone, periodicity, start, end, limit, descending);
	}

	function createFromGraph(path : String, event : String, idproperty : String, parentproperty : String, whereConditions : Null<Array<{ property : String, value : Dynamic }>>, start : Null<Float>, end : Null<Float>) : IDataSource
	{
		return new DataSourceReportGridGraph(executor, path, event, idproperty, parentproperty, whereConditions, start, end);
	}
}