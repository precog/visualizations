/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoDataContext;
import rg.data.DataContext;
import rg.data.DataProcessor;
import rg.data.IDataSource;
import rg.data.source.rgquery.IExecutorReportGrid;
import rg.data.Sources;
import thx.error.Error;

class FactoryDataContext 
{
	var factoryDataSource : FactoryDataSource;
	public function new(factoryDataSource : FactoryDataSource)
	{ 
		this.factoryDataSource = factoryDataSource;
	}
	
	public function create(info : InfoDataContext) : DataContext
	{
		if (info.sources.length == 0)
			throw new Error("the data object does not contain valid data sources information");
		
		var sources = [];
		for (src in info.sources)
			sources.push(factoryDataSource.create(src));
		var processor = new DataProcessor(new Sources(sources));
		return new DataContext(info.name, processor, info.transform);
	}
}