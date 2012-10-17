/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

import thx.error.Error;

using rg.info.filter.FilterDescription;

@:keep class InfoDataSource
{
	public var loader : (Array<Dynamic> -> Void) -> Void;

	public function new()
	{
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"data".toDataFunctionFromArray(["loader"]),
			"datapoints".toDataFunctionFromArray(["loader"]), // alias for "data"
			"load".toLoaderFunction(["loader"])
		];
	}
}