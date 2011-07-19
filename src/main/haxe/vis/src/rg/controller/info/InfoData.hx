/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

class InfoData extends Info
{
	public var name : Null<String>;
	public var transform : Null<Dynamic>;
	public var sources : Array<InfoDataSource>;
	
	public function new(?o : {})
	{
		sources = [];
		super(o);
	}
	
	override function filters() : Array<FieldFilter>
	{
		return [{
			field : "name",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "transform",
			validator : function(v) return null == v || Reflect.isFunction(v),
			filter : null
		}, {
			field : "src",
			validator : function(v) return Std.is(v, Array) && Arrays.all(v, function(v) return Types.isAnonymous(v)),
			filter : function(v) return [{ field : "sources", value : Arrays.map(v, function(v,i) return new InfoDataSource(v)) }]
		}];
	}
}