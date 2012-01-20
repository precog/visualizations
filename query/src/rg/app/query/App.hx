package rg.app.query;

import rg.data.reportgrid.IExecutorReportGrid;
import rg.controller.info.InfoDataSourceReportGrid;
import rg.controller.factory.FactoryDataSourceReportGrid;
using rg.controller.info.Info;

class App
{
	var executor : IExecutorReportGrid;
	public function new(executor : IExecutorReportGrid)
	{
		this.executor = executor;
	}

	public function query(options : Dynamic, handler : Dynamic -> Void)
	{
		var info       = new InfoDataSourceReportGrid().feed(options);
		var datasource = new FactoryDataSourceReportGrid(executor).create(info);
		datasource.onLoad.add(handler);
		datasource.load();
	}
}