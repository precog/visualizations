/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
using rg.controller.info.Info;

class InfoDataContext
{
	public var name : Null<String>;
	public var transform : Null<Dynamic>;
	public var sources : Array<InfoDataSource>;
	
	public function new()
	{
		sources = [];
	}
	
	public static function filters() : Array<FieldFilter>
	{
		return [{
			field : "name",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "transform",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}, {
			field : "src",
			validator : function(v) return (Std.is(v, Array) && Arrays.all(v, function(v) return Types.isAnonymous(v))) || Types.isAnonymous(v),
			filter : function(v)
			{
				return [{ 
					field : "sources",
					value : Std.is(v, Array)
						? Arrays.map(v, function(v, i) return new InfoDataSource().feed(v))
						: [new InfoDataSource().feed(v)]
				}];
			}
		}];
	}
}