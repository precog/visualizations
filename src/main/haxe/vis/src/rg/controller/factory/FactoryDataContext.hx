/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoDataContext;
import rg.data.DataContext;
import rg.data.DataProcessor;
import rg.data.Sources;
import thx.error.Error;
import rg.data.DataPoint;

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
		if (null != info.transform)
		{
			processor.transform = function(dps : Array<Array<DataPoint>>)
			{
				var res : Dynamic = untyped info.transform.apply(__this__, dps);
				if (null == res)
					return [[]];
				if (!Std.is(res, Array))
					res = [res];
				if (!Std.is(res[0], Array))
					res = [res];
				return res;
			}
		}
		
		if (null != info.scale)
		{
			processor.scale = function(dps : Array<Array<DataPoint>>)
			{
				var res : Dynamic = untyped info.scale.apply(__this__, dps);
				if (null == res)
					return [[]];
				if (!Std.is(res, Array))
					res = [res];
				if (!Std.is(res[0], Array))
					res = [res];
				return res;
			}
		}
		return new DataContext(info.name, processor);
	}
}