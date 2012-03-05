/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.factory.FactoryAxis;
using rg.info.Info;

@:keep class InfoVisualizationOption
{
	public var variables : Array<InfoVariable>;
	public var options : Dynamic;
	public function new() {}

	public static function filters() : Array<FieldFilter>
	{
		return [{
			field : "axes",
			validator : function(v) return Std.is(v, Array) || Reflect.isObject(v),
			filter : function(v : Dynamic) : Array<{ value : Dynamic, field : String }>
			{
				return [{
					field : "variables",
					value : Std.is(v, Array)
						? Arrays.map(v, function(v : Dynamic, i) return new InfoVariable().feed(v))
						: [new InfoVariable().feed(v)]
				}];
			}
		}, {
			field : "options",
			validator : function(v) return Reflect.isObject(v),
			filter : null
		}];
	}
}