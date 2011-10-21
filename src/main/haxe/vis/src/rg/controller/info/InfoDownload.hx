/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

using rg.controller.info.Info;

class InfoDownload 
{
	public var handler : (String -> String -> Void) -> Void;
	public var service : String;
	public var background : Null<String>;
	
	public function new() 
	{
		service = "http://devtest01.reportgrid.com:20000/";
	}
	
	public static function filters()
	{
		return [{
			field : "handler",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}, {
			field : "service",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "background",
			validator : function(v) return Std.is(v, String),
			filter : null
		}];
	}
}