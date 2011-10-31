/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

using rg.controller.info.Info;
import rg.view.html.widget.DownloaderPosition;
import rg.view.html.widget.DownloaderPositions;

class InfoDownload 
{
	public var handler : (String -> String -> (Void -> Void) -> Void) -> Void;
	public var service : String;
	public var background : Null<String>;
	public var position : Null<DownloaderPosition>;
	public var formats : Array<String>;
	
	public function new() 
	{
#if release
		service = "http://devtest01.reportgrid.com:20000/";
#else
		service = "http://rgrender/";
#end
		formats = ['png', 'jpg'];
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
		}, {
			field : "formats",
			validator : function(v) return Std.is(v, Array),
			filter : null
		}, {
			field : "position",
			validator : function(v) return Std.is(v, String),
			filter : function(v) 
			{
				return [ {
					field : "position",
					value : DownloaderPositions.parse(v)
				}];
			}
		}];
	}
}