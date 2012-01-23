package rg.app.query;

import rg.data.reportgrid.IExecutorReportGrid;
import rg.controller.info.InfoDataSourceReportGrid;
import rg.controller.info.InfoCallback;
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
		var datasources = new FactoryDataSourceReportGrid(executor).create(new InfoDataSourceReportGrid().feed(options)),
			len = datasources.length,
			dps = [],
			count = 0;
		function complete(dp) {
			count++;
			dps = dps.concat(dp);
			if(count == len)
			{
				handler(dps);
				new InfoCallback().feed(options).handler(dps);
			}
		}
		for(datasource in datasources)
		{
			datasource.onLoad.add(complete);
			datasource.load();
		}
	}
}