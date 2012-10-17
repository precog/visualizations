/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
using rg.info.filter.FilterDescription;

@:keep class InfoSegment
{
	public var on : String;
	public var transform : Null<Array<Dynamic> -> Array<Dynamic>>;
	public var scale : Null<Array<Dynamic> -> Array<Dynamic>>;
	public var values : Array<String>;
	public function new()
	{
		values = [];
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"on".toStr(),
			"transform".toFunction(),
			"scale".toFunction(),
			"values".toArray()
		];
	}
}