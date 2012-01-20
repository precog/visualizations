package rg.app.query;

import rg.data.source.rgquery.IExecutorReportGrid;

class App 
{
	var executor : IExecutorReportGrid;
	public function new(executor : IExecutorReportGrid)
	{
		this.executor = executor;
	}

	public function query(options : Dynamic, handler : Dynamic -> Void)
	{
		handler([{
			count : 93,
			gender : "males"
		}, {
			count : 107,
			gender : "females"
		}]);
	}
}