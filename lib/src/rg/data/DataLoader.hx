package rg.data;

import hxevents.Dispatcher;
import thx.error.NullArgument;

class DataLoader
{
	var loader : (Array<Dynamic> -> Void) -> Void;
	public function new(loader : (Array<Dynamic> -> Void) -> Void)
	{
		NullArgument.throwIfNull(loader);
		this.loader = loader;
		onLoad = new Dispatcher();
	}

	public var onLoad(default, null) : Dispatcher<Array<Dynamic>>;
	public function load()
	{
		loader(function(datapoints) {
			onLoad.dispatch(datapoints);
		});
	}
}