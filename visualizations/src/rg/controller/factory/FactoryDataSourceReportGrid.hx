/**
 * ...
 * @author Franco Ponticelli
 */

package rg.factory;
import rg.info.InfoDataSourceReportGrid;
import rg.data.IDataSource;
import rg.data.source.DataSourceArray;
import rg.data.source.DataSourceReportGrid;
import rg.data.source.DataSourceReportGridGraph;
import rg.data.source.rgquery.IExecutorReportGrid;
import rg.data.source.rgquery.QueryParser;
import thx.error.Error;
import rg.data.DataPoint;
import rg.data.source.rgquery.QueryAst;

class FactoryDataSourceReportGrid extends FactoryDataSource<InfoDataSourceReportGrid>
{
	var parser : QueryParser;
	var executor : IExecutorReportGrid;
	public function new(cache : Hash<IDataSource>, executor : IExecutorReportGrid)
	{
		super(cache);
		this.parser = new QueryParser();
		this.executor = executor;
	}

	override public function create(info : InfoDataSourceReportGrid) : IDataSource
	{
		if (null != info.path && null != info.event && null != info.identifier && null != info.parent)
		{
			return createFromGraph(info.path, info.event, info.identifier, info.parent, info.where, info.start, info.end);
		}
		if (null != info.path && null != info.event)
		{
			return createFromQuery(info.path, info.event, info.query, info.statistic, info.tag, info.location, info.groupBy, info.timeZone, info.start, info.end);
		}
		return super.create(info);
	}

	function createFromQuery(path : String, event : String, query : Null<String>, statistic : QOperation, tag : Null<String>, location : Null<String>, groupby : Null<String>, timeZone : Null<String>, start : Null<Float>, end : Null<Float>)
	{
		if (null == query)
			query = "";
		return new DataSourceReportGrid(executor, path, event, parser.parse(query), statistic, tag, location, groupby, timeZone, start, end);
	}

	function createFromGraph(path : String, event : String, idproperty : String, parentproperty : String, whereConditions : Null<Array<{ property : String, value : Dynamic }>>, start : Null<Float>, end : Null<Float>)
	{
		return new DataSourceReportGridGraph(executor, path, event, idproperty, parentproperty, whereConditions, start, end);
	}
}