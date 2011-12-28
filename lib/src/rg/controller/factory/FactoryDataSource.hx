/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoDataSource;
import rg.data.IDataSource;
import rg.data.source.DataSourceArray;
import thx.error.Error;
import rg.data.DataPoint;

class FactoryDataSource<T : InfoDataSource>
{
	var cache : Hash<IDataSource>;
	public function new(cache : Hash<IDataSource>)
	{
		this.cache = cache;
	}

	public function create(info : T) : IDataSource
	{
		if (null != info.namedData)
		{
			var data = cache.get(info.namedData);
			if (null == data)
				throw new Error("the data source named '{0}' cannot be found in the current context", info.namedData);
			return data;
		}
		if (null != info.data)
		{
			return createFromData(info.data);
		}
		throw new Error("the arguments object doesn't contain any reference to data");
	}

	function createFromData(data : Array<DataPoint>)
	{
		return new DataSourceArray(data);
	}
}