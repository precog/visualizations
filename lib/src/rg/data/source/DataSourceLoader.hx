package rg.data.source;

import hxevents.Dispatcher;
import rg.data.IDataSource;

class DataSourceLoader implements IDataSource
{
	var loader : (Array<DataPoint> -> Void) -> Void;
	public function new(loader : (Array<DataPoint> -> Void) -> Void)
	{
		this.loader = loader;
		onLoad = new Dispatcher();
	}

	public var onLoad(default, null) : Dispatcher<Array<DataPoint>>;
	public function load()
	{
		loader(function(datapoints) {
			onLoad.dispatch(datapoints);
		});
	}
}