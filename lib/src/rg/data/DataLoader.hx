package rg.data;

import hxevents.Dispatcher;
import thx.error.NullArgument;

class DataLoader
{
	var loader : (Array<DataPoint> -> Void) -> Void;
	public function new(loader : (Array<DataPoint> -> Void) -> Void)
	{
		NullArgument.throwIfNull(loader);
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